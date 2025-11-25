export type Language = 'en' | 'gu' | 'hi';

export interface Translations {
  // Header
  greeting: {
    morning: string;
    afternoon: string;
    evening: string;
  };
  appName: string;

  // Balance Display
  toReceive: string;
  toPay: string;
  netReceivable: string;
  netPayable: string;
  net: string;

  // Quick Actions
  quickActions: string;
  addEntry: string;
  viewAll: string;

  // Transactions
  recentTransactions: string;
  searchPlaceholder: string;
  noTransactions: string;
  noResults: string;
  edit: string;
  delete: string;
  today: string;
  yesterday: string;
  worker: string;
  supplier: string;

  // Transaction Form
  addTransaction: string;
  editTransaction: string;
  personName: string;
  personNamePlaceholder: string;
  amount: string;
  amountPlaceholder: string;
  transactionType: string;
  moneyIn: string;
  moneyOut: string;
  personType: string;
  note: string;
  notePlaceholder: string;
  additionalNotes: string;
  additionalNotesPlaceholder: string;
  cancel: string;
  save: string;

  // Tab Bar
  home: string;
  sites: string;
  suppliers: string;
  history: string;
  settings: string;

  // History View
  allTransactions: string;
  filterBy: string;
  all: string;
  workers: string;
  suppliersTab: string;

  // Suppliers View
  suppliersTitle: string;
  suppliersDescription: string;
  totalSuppliers: string;
  totalAmount: string;
  viewTransactions: string;
  transactions: string;

  // Sites View
  sitesTitle: string;
  sitesDescription: string;
  totalSites: string;
  budget: string;
  spent: string;
  remaining: string;
  deleteSite: string;
  deleteSiteConfirm: string;

  // Settings
  settingsTitle: string;
  settingsDescription: string;
  profile: string;
  language: string;
  theme: string;
  lightMode: string;
  darkMode: string;
  light: string;
  dark: string;
  about: string;
  appInformation: string;
  logout: string;
  signOut: string;
  version: string;
  developer: string;
  releaseDate: string;
  platform: string;
  build: string;
  aboutDescription: string;

  // About Page
  aboutTitle: string;
  backToSettings: string;

  // Dialogs
  deleteConfirm: string;
  areYouSure: string;
  logoutConfirm: string;
  logoutSuccess: string;
  yes: string;
  no: string;

  // Languages
  english: string;
  gujarati: string;
  hindi: string;

  // Months
  months: {
    jan: string;
    feb: string;
    mar: string;
    apr: string;
    may: string;
    jun: string;
    jul: string;
    aug: string;
    sep: string;
    oct: string;
    nov: string;
    dec: string;
  };

  // Auth
  signIn: string;
  signUp: string;
  email: string;
  emailPlaceholder: string;
  password: string;
  passwordPlaceholder: string;
  confirmPassword: string;
  confirmPasswordPlaceholder: string;
  name: string;
  namePlaceholder: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  welcome: string;
  welcomeBack: string;
  createAccount: string;
  signInToContinue: string;
  signUpToStart: string;
  passwordsDontMatch: string;
  signingIn: string;
  signingUp: string;
  invalidCredentials: string;
  forgotPassword: string;
  resetPassword: string;
  sendResetLink: string;
  backToLogin: string;
  resetLinkSent: string;
  resetLinkDescription: string;
  checkYourEmail: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Header
    greeting: {
      morning: 'Morning',
      afternoon: 'Afternoon',
      evening: 'Evening',
    },
    appName: 'Smart Ledger',

    // Balance Display
    toReceive: 'To Receive',
    toPay: 'To Pay',
    netReceivable: 'receivable',
    netPayable: 'payable',
    net: 'Net',

    // Quick Actions
    quickActions: 'Quick Actions',
    addEntry: 'Add Entry',
    viewAll: 'View All',

    // Transactions
    recentTransactions: 'Recent Transactions',
    searchPlaceholder: 'Search person or site...',
    noTransactions: 'No transactions yet',
    noResults: 'No results found',
    edit: 'Edit',
    delete: 'Delete',
    today: 'Today',
    yesterday: 'Yesterday',
    worker: 'Worker',
    supplier: 'Supplier',

    // Transaction Form
    addTransaction: 'Add Transaction',
    editTransaction: 'Edit Transaction',
    personName: 'Person Name',
    personNamePlaceholder: 'Enter name (e.g., Ramesh/Site A)',
    amount: 'Amount',
    amountPlaceholder: 'Enter amount',
    transactionType: 'Transaction Type',
    moneyIn: 'Money In',
    moneyOut: 'Money Out',
    personType: 'Person Type',
    note: 'Note',
    notePlaceholder: 'Enter note',
    additionalNotes: 'Additional Notes',
    additionalNotesPlaceholder: 'Optional additional notes',
    cancel: 'Cancel',
    save: 'Save',

    // Tab Bar
    home: 'Home',
    sites: 'Sites',
    suppliers: 'Suppliers',
    history: 'History',
    settings: 'Settings',

    // History View
    allTransactions: 'All Transactions',
    filterBy: 'Filter by',
    all: 'All',
    workers: 'Workers',
    suppliersTab: 'Suppliers',

    // Suppliers View
    suppliersTitle: 'Suppliers',
    suppliersDescription: 'Track all supplier transactions',
    totalSuppliers: 'Total Suppliers',
    totalAmount: 'Total Amount',
    viewTransactions: 'View Transactions',
    transactions: 'transactions',

    // Sites View
    sitesTitle: 'Sites',
    sitesDescription: 'Manage your construction sites',
    totalSites: 'Total Sites',
    budget: 'Budget',
    spent: 'Spent',
    remaining: 'Remaining',
    deleteSite: 'Delete Site',
    deleteSiteConfirm: 'Are you sure you want to delete this site? This will not delete associated transactions.',

    // Settings
    settingsTitle: 'Settings',
    settingsDescription: 'Manage your app preferences',
    profile: 'Profile',
    language: 'Language',
    theme: 'Theme',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
    light: 'Light',
    dark: 'Dark',
    about: 'About',
    appInformation: 'App information',
    logout: 'Logout',
    signOut: 'Sign out of your account',
    version: 'Version',
    developer: 'Developer',
    releaseDate: 'Release Date',
    platform: 'Platform',
    build: 'Build',
    aboutDescription: 'Smart Ledger helps contractors manage their finances efficiently. Track workers, suppliers, and multiple construction sites all in one place.',

    // About Page
    aboutTitle: 'About Smart Ledger',
    backToSettings: 'Back to Settings',

    // Dialogs
    deleteConfirm: 'Are you sure you want to delete this transaction?',
    areYouSure: 'Are you sure?',
    logoutConfirm: 'Are you sure you want to logout?',
    logoutSuccess: 'Logged out successfully!',
    yes: 'Yes',
    no: 'No',

    // Languages
    english: 'English',
    gujarati: 'Gujarati',
    hindi: 'Hindi',

    // Months
    months: {
      jan: 'Jan',
      feb: 'Feb',
      mar: 'Mar',
      apr: 'Apr',
      may: 'May',
      jun: 'Jun',
      jul: 'Jul',
      aug: 'Aug',
      sep: 'Sep',
      oct: 'Oct',
      nov: 'Nov',
      dec: 'Dec',
    },

    // Auth
    signIn: 'Sign In',
    signUp: 'Sign Up',
    email: 'Email',
    emailPlaceholder: 'Enter your email',
    password: 'Password',
    passwordPlaceholder: 'Enter your password',
    confirmPassword: 'Confirm Password',
    confirmPasswordPlaceholder: 'Re-enter your password',
    name: 'Name',
    namePlaceholder: 'Enter your name',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: "Don't have an account?",
    welcome: 'Welcome',
    welcomeBack: 'Welcome back!',
    createAccount: 'Create Account',
    signInToContinue: 'Sign in to continue',
    signUpToStart: 'Sign up to start',
    passwordsDontMatch: 'Passwords do not match',
    signingIn: 'Signing in...',
    signingUp: 'Signing up...',
    invalidCredentials: 'Invalid credentials',
    forgotPassword: 'Forgot Password?',
    resetPassword: 'Reset Password',
    sendResetLink: 'Send Reset Link',
    backToLogin: 'Back to Login',
    resetLinkSent: 'Reset Link Sent',
    resetLinkDescription: 'We have sent a password reset link to your email. Please check your email to reset your password.',
    checkYourEmail: 'Check your email',
  },

  gu: {
    // Header
    greeting: {
      morning: 'સવાર',
      afternoon: 'બપોર',
      evening: 'સાંજ',
    },
    appName: 'સ્માર્ટ ખાતાવહી',

    // Balance Display
    toReceive: 'મેળવવાનું',
    toPay: 'ચૂકવવાનું',
    netReceivable: 'મેળવવાનું',
    netPayable: 'ચૂકવવાનું',
    net: 'કુલ',

    // Quick Actions
    quickActions: 'ઝડપી ક્રિયાઓ',
    addEntry: 'નવો રેકોર્ડ',
    viewAll: 'બધું જુઓ',

    // Transactions
    recentTransactions: 'તાજેતરના વ્યવહારો',
    searchPlaceholder: 'વ્યક્તિ અથવા સાઇટ શોધો...',
    noTransactions: 'હજુ સુધી કોઈ વ્યવહાર નથી',
    noResults: 'કોઈ પરિણામ મળ્યું નથી',
    edit: 'સુધારો',
    delete: 'કાઢી નાખો',
    today: 'આજે',
    yesterday: 'ગઈકાલે',
    worker: 'કામદાર',
    supplier: 'સપ્લાયર',

    // Transaction Form
    addTransaction: 'નવો વ્યવહાર ઉમેરો',
    editTransaction: 'વ્યવહાર સુધારો',
    personName: 'વ્યક્તિનું નામ',
    personNamePlaceholder: 'નામ દાખલ કરો (જેમ કે, રમેશ/સાઇટ A)',
    amount: 'રકમ',
    amountPlaceholder: 'રકમ દાખલ કરો',
    transactionType: 'વ્યવહારનો પ્રકાર',
    moneyIn: 'આવક',
    moneyOut: 'ખર્ચ',
    personType: 'વ્યક્તિનો પ્રકાર',
    note: 'નોંધ',
    notePlaceholder: 'નોંધ દાખલ કરો',
    additionalNotes: 'વધારાની નોંધો',
    additionalNotesPlaceholder: 'વૈકલ્પિક વધારાની નોંધો',
    cancel: 'રદ કરો',
    save: 'સાચવો',

    // Tab Bar
    home: 'હોમ',
    sites: 'સાઇટ્સ',
    suppliers: 'સપ્લાયર્સ',
    history: 'ઇતિહાસ',
    settings: 'સેટિંગ્સ',

    // History View
    allTransactions: 'તમામ વ્યવહારો',
    filterBy: 'ગાળો',
    all: 'બધા',
    workers: 'કામદારો',
    suppliersTab: 'સપ્લાયર્સ',

    // Suppliers View
    suppliersTitle: 'સપ્લાયર્સ',
    suppliersDescription: 'તમામ સપ્લાયર વ્યવહારો ટ્રેક કરો',
    totalSuppliers: 'કુલ સપ્લાયર્સ',
    totalAmount: 'કુલ રકમ',
    viewTransactions: 'વ્યવહારો જુઓ',
    transactions: 'વ્યવહારો',

    // Sites View
    sitesTitle: 'સાઇટ્સ',
    sitesDescription: 'તમારી બાંધકામ સાઇટ્સનું સંચાલન કરો',
    totalSites: 'કુલ સાઇટ્સ',
    budget: 'બજેટ',
    spent: 'ખર્ચ્યું',
    remaining: 'બાકી',
    deleteSite: 'સાઇટ કાઢી નાખો',
    deleteSiteConfirm: 'શું તમે ખરેખર આ સાઇટ કાઢી નાખવા માંગો છો? આ સંબંધિત વ્યવહારોને કાઢી નાખશે નહીં.',

    // Settings
    settingsTitle: 'સેટિંગ્સ',
    settingsDescription: 'તમારી એપ પસંદગીઓનું સંચાલન કરો',
    profile: 'પ્રોફાઇલ',
    language: 'ભાષા',
    theme: 'થીમ',
    lightMode: 'લાઇટ મોડ',
    darkMode: 'ડાર્ક મોડ',
    light: 'લાઇટ',
    dark: 'ડાર્ક',
    about: 'વિશે',
    appInformation: 'એપ માહિતી',
    logout: 'લૉગઆઉટ',
    signOut: 'તમારા એકાઉન્ટમાંથી સાઇન આઉટ કરો',
    version: 'આવૃત્તિ',
    developer: 'ડેવલપર',
    releaseDate: 'રિલીઝ તારીખ',
    platform: 'પ્લેટફોર્મ',
    build: 'બિલ્ડ',
    aboutDescription: 'સ્માર્ટ ખાતાવહી કોન્ટ્રાક્ટરોને તેમના નાણાંને કાર્યક્ષમ રીતે સંચાલિત કરવામાં મદદ કરે છે. કામદારો, સપ્લાયર્સ અને બહુવિધ બાંધકામ સાઇટ્સને એક જ જગ્યાએ ટ્રેક કરો.',

    // About Page
    aboutTitle: 'સ્માર્ટ ખાતાવહી વિશે',
    backToSettings: 'સેટિંગ્સ પર પાછા',

    // Dialogs
    deleteConfirm: 'શું તમે ખરેખર આ વ્યવહાર કાઢી નાખવા માંગો છો?',
    areYouSure: 'શું તમે ચોક્કસ છો?',
    logoutConfirm: 'શું તમે ખરેખર લૉગઆઉટ કરવા માંગો છો?',
    logoutSuccess: 'સફળતાપૂર્વક લૉગઆઉટ થયા!',
    yes: 'હા',
    no: 'ના',

    // Languages
    english: 'English',
    gujarati: 'ગુજરાતી',
    hindi: 'हिंदी',

    // Months
    months: {
      jan: 'જાન્યુ',
      feb: 'ફેબ્રુ',
      mar: 'માર્ચ',
      apr: 'એપ્રિલ',
      may: 'મે',
      jun: 'જૂન',
      jul: 'જુલાઈ',
      aug: 'ઓગસ્ટ',
      sep: 'સપ્ટે',
      oct: 'ઓક્ટો',
      nov: 'નવે',
      dec: 'ડિસે',
    },

    // Auth
    signIn: 'સાઇન ઇન',
    signUp: 'સાઇન અપ',
    email: 'ઈમેલ',
    emailPlaceholder: 'તમારું ઈમેલ દાખલ કરો',
    password: 'પાસવર્ડ',
    passwordPlaceholder: 'તમારું પાસવર્ડ દાખલ કરો',
    confirmPassword: 'પાસવર્ડ પુનરાવર દાખલ કરો',
    confirmPasswordPlaceholder: 'તમારું પાસવર્ડ પુનરાવર દાખલ કરો',
    name: 'નામ',
    namePlaceholder: 'તમારું નામ દાખલ કરો',
    alreadyHaveAccount: 'પહેલેથી એક ખાતા છે?',
    dontHaveAccount: 'ખાતા નથી?',
    welcome: 'સ્વાગત',
    welcomeBack: 'ફરી સ્વાગત!',
    createAccount: 'ખાતા બનાવો',
    signInToContinue: 'અગાઉ જાવવા માંગો તેની વિશે સાઇન ઇન કરો',
    signUpToStart: 'શરૂ કરવા માંગો તેની વિશે સાઇન અપ કરો',
    passwordsDontMatch: 'પાસવર્ડો માત્રે નથી',
    signingIn: 'સાઇન ઇન કરી રહ્યો છો...',
    signingUp: 'સાઇન અપ કરી રહ્યો છો...',
    invalidCredentials: 'અસામાન્ય ક્રેડિશનલ્સ',
    forgotPassword: 'પાસવર્ડ મુંજી ગયો?',
    resetPassword: 'પાસવર્ડ રીસેટ કરો',
    sendResetLink: 'રીસેટ લિંક ભेजો',
    backToLogin: 'લૉગઇન પર વાપસ',
    resetLinkSent: 'રીસેટ લિંક ભेज્યો',
    resetLinkDescription: 'આપની ઈમેલ પર એક પાસવર્ડ રીસેટ લિંક ભेज્યો છે. પાસવર્ડ રીસેટ કરવા માંગો તેની વિશે આપની ઈમેલ જુઓ.',
    checkYourEmail: 'આપની ઈમેલ જુઓ',
  },

  hi: {
    // Header
    greeting: {
      morning: 'सुबह',
      afternoon: 'दोपहर',
      evening: 'शाम',
    },
    appName: 'स्मार्ट खाता बही',

    // Balance Display
    toReceive: 'प्राप्त करना',
    toPay: 'भुगतान करना',
    netReceivable: 'प्राप्य',
    netPayable: 'देय',
    net: 'कुल',

    // Quick Actions
    quickActions: 'त्वरित क्रियाएं',
    addEntry: 'नया रिकॉर्ड',
    viewAll: 'सभी देखें',

    // Transactions
    recentTransactions: 'हाल के लेनदेन',
    searchPlaceholder: 'व्यक्ति या साइट खोजें...',
    noTransactions: 'अभी तक कोई लेनदेन नहीं',
    noResults: 'कोई परिणाम नहीं मिला',
    edit: 'संपादित करें',
    delete: 'हटाएं',
    today: 'आज',
    yesterday: 'कल',
    worker: 'कामगार',
    supplier: 'आपूर्तिकर्ता',

    // Transaction Form
    addTransaction: 'नया लेनदेन जोड़ें',
    editTransaction: 'लेनदेन संपादित करें',
    personName: 'व्यक्ति का नाम',
    personNamePlaceholder: 'नाम दर्ज करें (जैसे, रमेश/साइट A)',
    amount: 'राशि',
    amountPlaceholder: 'राशि दर्ज करें',
    transactionType: 'लेनदेन प्रकार',
    moneyIn: 'आय',
    moneyOut: 'व्यय',
    personType: 'व्यक्ति प्रकार',
    note: 'नोट',
    notePlaceholder: 'नोट दर्ज करें',
    additionalNotes: 'अतिरिक्त नोट्स',
    additionalNotesPlaceholder: 'वैकल्पिक अतिरिक्त नोट्स',
    cancel: 'रद्द करें',
    save: 'सहेजें',

    // Tab Bar
    home: 'होम',
    sites: 'साइट्स',
    suppliers: 'आपूर्तिकर्ता',
    history: 'इतिहास',
    settings: 'सेटिंग्स',

    // History View
    allTransactions: 'सभी लेनदेन',
    filterBy: 'फ़िल्टर करें',
    all: 'सभी',
    workers: 'कामगार',
    suppliersTab: 'आपूर्तिकर्ता',

    // Suppliers View
    suppliersTitle: 'आपूर्तिकर्ता',
    suppliersDescription: 'सभी आपूर्तिकर्ता लेनदेन ट्रैक करें',
    totalSuppliers: 'कुल आपूर्तिकर्ता',
    totalAmount: 'कुल राशि',
    viewTransactions: 'लेनदेन देखें',
    transactions: 'लेनदेन',

    // Sites View
    sitesTitle: 'साइट्स',
    sitesDescription: 'अपनी निर्माण साइटों का प्रबंधन करें',
    totalSites: 'कुल साइट्स',
    budget: 'बजट',
    spent: 'खर्च',
    remaining: 'शेष',
    deleteSite: 'साइट हटाएं',
    deleteSiteConfirm: 'क्या आप वाकई इस साइट को हटाना चाहते हैं? यह संबंधित लेनदेन को नहीं हटाएगा।',

    // Settings
    settingsTitle: 'सेटिंग्स',
    settingsDescription: 'अपनी ऐप प्राथमिकताओं का प्रबंधन करें',
    profile: 'प्रोफ़ाइल',
    language: 'भाषा',
    theme: 'थीम',
    lightMode: 'लाइट मोड',
    darkMode: 'डार्क मोड',
    light: 'लाइट',
    dark: 'डार्क',
    about: 'के बारे में',
    appInformation: 'ऐप जानकारी',
    logout: 'लॉगआउट',
    signOut: 'अपने खाते से साइन आउट करें',
    version: 'संस्करण',
    developer: 'डेवलपर',
    releaseDate: 'रिलीज़ तिथि',
    platform: 'प्लेटफ़ॉर्म',
    build: 'बिल्ड',
    aboutDescription: 'स्मार्ट खाता बही ठेकेदारों को उनके वित्त को कुशलतापूर्वक प्रबंधित करने में मदद करती है। कामगारों, आपूर्तिकर्ताओं और कई निर्माण साइटों को एक ही स्थान पर ट्रैक करें।',

    // About Page
    aboutTitle: 'स्मार्ट खाता बही के बारे में',
    backToSettings: 'सेटिंग्स पर वापस',

    // Dialogs
    deleteConfirm: 'क्या आप वाकई इस लेनदेन को हटाना चाहते हैं?',
    areYouSure: 'क्या आपको यकीन है?',
    logoutConfirm: 'क्या आप वाकई लॉगआउट करना चाहते हैं?',
    logoutSuccess: 'सफलतापूर्वक लॉगआउट हो गया!',
    yes: 'हाँ',
    no: 'नहीं',

    // Languages
    english: 'English',
    gujarati: 'ગુજરાતી',
    hindi: 'हिंदी',

    // Months
    months: {
      jan: 'जन',
      feb: 'फर',
      mar: 'मार्च',
      apr: 'अप्रैल',
      may: 'मई',
      jun: 'जून',
      jul: 'जुला',
      aug: 'अग',
      sep: 'सित',
      oct: 'अक्तू',
      nov: 'नव',
      dec: 'दिस',
    },

    // Auth
    signIn: 'साइन इन',
    signUp: 'साइन अप',
    email: 'ईमेल',
    emailPlaceholder: 'अपना ईमेल दर्ज करें',
    password: 'पासवर्ड',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
    confirmPassword: 'पासवर्ड पुनरावर दर्ज करें',
    confirmPasswordPlaceholder: 'अपना पासवर्ड पुनरावर दर्ज करें',
    name: 'नाम',
    namePlaceholder: 'अपना नाम दर्ज करें',
    alreadyHaveAccount: 'पहले से ही एक खाता है?',
    dontHaveAccount: 'खाता नहीं है?',
    welcome: 'स्वागत',
    welcomeBack: 'फिर से स्वागत!',
    createAccount: 'खाता बनाएं',
    signInToContinue: 'अग्रसर होने के लिए साइन इन करें',
    signUpToStart: 'शुरू करने के लिए साइन अप करें',
    passwordsDontMatch: 'पासवर्ड मेल नहीं खाते हैं',
    signingIn: 'साइन इन कर रहा हूँ...',
    signingUp: 'साइन अप कर रहा हूँ...',
    invalidCredentials: 'अवैध क्रेडेंशियल्स',
    forgotPassword: 'पासवर्ड भूल गए?',
    resetPassword: 'पासवर्ड रीसेट करें',
    sendResetLink: 'रीसेट लिंक भेजें',
    backToLogin: 'लॉगइन पर वापस',
    resetLinkSent: 'रीसेट लिंक भेजा गया',
    resetLinkDescription: 'आपकी ईमेल पर एक पासवर्ड रीसेट लिंक भेजा गया है। पासवर्ड रीसेट करने के लिए आपकी ईमेल जाँचें।',
    checkYourEmail: 'आपकी ईमेल जाँचें',
  },
};

export function getTranslation(language: Language): Translations {
  return translations[language];
}