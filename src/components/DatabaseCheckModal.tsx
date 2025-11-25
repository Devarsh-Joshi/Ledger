import { motion } from 'motion/react';
import { CheckCircle2, XCircle, Loader2, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';

interface DatabaseCheckModalProps {
  onClose: () => void;
  userId: string;
  theme: 'light' | 'dark';
}

interface CheckResult {
  name: string;
  status: 'checking' | 'success' | 'error' | 'warning';
  message: string;
}

export function DatabaseCheckModal({ onClose, userId, theme }: DatabaseCheckModalProps) {
  const [checks, setChecks] = useState<CheckResult[]>([
    { name: 'Transactions Table', status: 'checking', message: 'Checking...' },
    { name: 'Sites Table', status: 'checking', message: 'Checking...' },
    { name: 'User Preferences Table', status: 'checking', message: 'Checking...' },
    { name: 'Row Level Security', status: 'checking', message: 'Checking...' },
  ]);
  const [overallStatus, setOverallStatus] = useState<'checking' | 'success' | 'error'>('checking');

  useEffect(() => {
    checkDatabase();
  }, []);

  const checkDatabase = async () => {
    const supabase = createClient();
    const newChecks: CheckResult[] = [...checks];

    // Check transactions table
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('id')
        .limit(1);

      if (error) {
        if (error.code === 'PGRST205' || error.code === 'PGRST204') {
          newChecks[0] = { name: 'Transactions Table', status: 'error', message: '❌ Table not found' };
        } else if (error.code === '42501') {
          newChecks[0] = { name: 'Transactions Table', status: 'warning', message: '⚠️ Permission issue (check RLS)' };
        } else {
          newChecks[0] = { name: 'Transactions Table', status: 'error', message: `❌ Error: ${error.message}` };
        }
      } else {
        newChecks[0] = { name: 'Transactions Table', status: 'success', message: '✅ Table exists and accessible' };
      }
    } catch (err) {
      newChecks[0] = { name: 'Transactions Table', status: 'error', message: '❌ Connection error' };
    }

    setChecks([...newChecks]);

    // Check sites table
    try {
      const { data, error } = await supabase
        .from('sites')
        .select('id')
        .limit(1);

      if (error) {
        if (error.code === 'PGRST205' || error.code === 'PGRST204') {
          newChecks[1] = { name: 'Sites Table', status: 'error', message: '❌ Table not found' };
        } else if (error.code === '42501') {
          newChecks[1] = { name: 'Sites Table', status: 'warning', message: '⚠️ Permission issue (check RLS)' };
        } else {
          newChecks[1] = { name: 'Sites Table', status: 'error', message: `❌ Error: ${error.message}` };
        }
      } else {
        newChecks[1] = { name: 'Sites Table', status: 'success', message: '✅ Table exists and accessible' };
      }
    } catch (err) {
      newChecks[1] = { name: 'Sites Table', status: 'error', message: '❌ Connection error' };
    }

    setChecks([...newChecks]);

    // Check user_preferences table
    try {
      const { data, error } = await supabase
        .from('user_preferences')
        .select('user_id')
        .limit(1);

      if (error) {
        if (error.code === 'PGRST205' || error.code === 'PGRST204') {
          newChecks[2] = { name: 'User Preferences Table', status: 'error', message: '❌ Table not found' };
        } else if (error.code === '42501') {
          newChecks[2] = { name: 'User Preferences Table', status: 'warning', message: '⚠️ Permission issue (check RLS)' };
        } else {
          newChecks[2] = { name: 'User Preferences Table', status: 'error', message: `❌ Error: ${error.message}` };
        }
      } else {
        newChecks[2] = { name: 'User Preferences Table', status: 'success', message: '✅ Table exists and accessible' };
      }
    } catch (err) {
      newChecks[2] = { name: 'User Preferences Table', status: 'error', message: '❌ Connection error' };
    }

    setChecks([...newChecks]);

    // Check Row Level Security (try to insert a test record)
    try {
      const { error } = await supabase
        .from('transactions')
        .select('id')
        .eq('user_id', userId)
        .limit(1);

      if (error) {
        if (error.code === 'PGRST205' || error.code === 'PGRST204') {
          newChecks[3] = { name: 'Row Level Security', status: 'error', message: '❌ Cannot check (tables missing)' };
        } else {
          newChecks[3] = { name: 'Row Level Security', status: 'warning', message: '⚠️ RLS may not be configured' };
        }
      } else {
        newChecks[3] = { name: 'Row Level Security', status: 'success', message: '✅ RLS working correctly' };
      }
    } catch (err) {
      newChecks[3] = { name: 'Row Level Security', status: 'warning', message: '⚠️ Could not verify' };
    }

    setChecks([...newChecks]);

    // Determine overall status
    const hasError = newChecks.some(c => c.status === 'error');
    const hasWarning = newChecks.some(c => c.status === 'warning');

    if (hasError) {
      setOverallStatus('error');
    } else if (hasWarning) {
      setOverallStatus('error');
    } else {
      setOverallStatus('success');
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`relative w-full max-w-md rounded-2xl shadow-2xl ${
          isDark ? 'bg-gray-900' : 'bg-white'
        } p-6 max-h-[80vh] overflow-y-auto`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          {overallStatus === 'checking' && (
            <Loader2 className={`w-8 h-8 animate-spin ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          )}
          {overallStatus === 'success' && (
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          )}
          {overallStatus === 'error' && (
            <XCircle className="w-8 h-8 text-red-500" />
          )}
          
          <div>
            <h2 className={`text-xl ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {overallStatus === 'checking' && 'Checking Database...'}
              {overallStatus === 'success' && '✅ Database Setup Complete!'}
              {overallStatus === 'error' && '❌ Database Setup Incomplete'}
            </h2>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {overallStatus === 'checking' && 'Please wait while we verify your setup'}
              {overallStatus === 'success' && 'All tables are configured correctly'}
              {overallStatus === 'error' && 'Some tables are missing or misconfigured'}
            </p>
          </div>
        </div>

        {/* Checks */}
        <div className="space-y-3">
          {checks.map((check, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border ${
                check.status === 'checking'
                  ? isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                  : check.status === 'success'
                  ? isDark ? 'bg-green-900/20 border-green-800' : 'bg-green-50 border-green-200'
                  : check.status === 'warning'
                  ? isDark ? 'bg-yellow-900/20 border-yellow-800' : 'bg-yellow-50 border-yellow-200'
                  : isDark ? 'bg-red-900/20 border-red-800' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {check.status === 'checking' && (
                  <Loader2 className={`w-5 h-5 animate-spin ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                )}
                {check.status === 'success' && (
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                )}
                {check.status === 'warning' && (
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                )}
                {check.status === 'error' && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                
                <div className="flex-1">
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {check.name}
                  </p>
                  <p className={`text-sm ${
                    check.status === 'success'
                      ? 'text-green-600 dark:text-green-400'
                      : check.status === 'warning'
                      ? 'text-yellow-600 dark:text-yellow-400'
                      : check.status === 'error'
                      ? 'text-red-600 dark:text-red-400'
                      : isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {check.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {overallStatus === 'success' ? (
            <button
              onClick={onClose}
              className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                isDark
                  ? 'bg-green-600 hover:bg-green-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
            >
              🎉 Great! Continue Using App
            </button>
          ) : overallStatus === 'error' ? (
            <>
              <button
                onClick={checkDatabase}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                🔄 Check Again
              </button>
              <button
                onClick={onClose}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
              >
                Close
              </button>
            </>
          ) : (
            <button
              disabled
              className={`flex-1 py-3 px-4 rounded-xl font-medium ${
                isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-200 text-gray-500'
              }`}
            >
              Checking...
            </button>
          )}
        </div>

        {/* Help Text */}
        {overallStatus === 'error' && (
          <div className={`mt-4 p-4 rounded-xl ${isDark ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
            <p className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-800'}`}>
              💡 <strong>Need help?</strong> Make sure you copied and ran the entire SQL script in Supabase SQL Editor. Then click "Check Again".
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
