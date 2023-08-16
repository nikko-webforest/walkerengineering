import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Walker Engineering Group';

  commonCurrency: any = {
    USD: {
      symbol: '$',
      name: 'US Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'USD',
      name_plural: 'US dollars',
    },
    CAD: {
      symbol: 'CA$',
      name: 'Canadian Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'CAD',
      name_plural: 'Canadian dollars',
    },
    EUR: {
      symbol: '€',
      name: 'Euro',
      symbol_native: '€',
      decimal_digits: 2,
      rounding: 0,
      code: 'EUR',
      name_plural: 'euros',
    },
    AED: {
      symbol: 'AED',
      name: 'United Arab Emirates Dirham',
      symbol_native: 'د.إ.‏',
      decimal_digits: 2,
      rounding: 0,
      code: 'AED',
      name_plural: 'UAE dirhams',
    },
    AFN: {
      symbol: 'Af',
      name: 'Afghan Afghani',
      symbol_native: '؋',
      decimal_digits: 0,
      rounding: 0,
      code: 'AFN',
      name_plural: 'Afghan Afghanis',
    },
    ALL: {
      symbol: 'ALL',
      name: 'Albanian Lek',
      symbol_native: 'Lek',
      decimal_digits: 0,
      rounding: 0,
      code: 'ALL',
      name_plural: 'Albanian lekë',
    },
    AMD: {
      symbol: 'AMD',
      name: 'Armenian Dram',
      symbol_native: 'դր.',
      decimal_digits: 0,
      rounding: 0,
      code: 'AMD',
      name_plural: 'Armenian drams',
    },
    ARS: {
      symbol: 'AR$',
      name: 'Argentine Peso',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'ARS',
      name_plural: 'Argentine pesos',
    },
    AUD: {
      symbol: 'AU$',
      name: 'Australian Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'AUD',
      name_plural: 'Australian dollars',
    },
    AZN: {
      symbol: 'man.',
      name: 'Azerbaijani Manat',
      symbol_native: 'ман.',
      decimal_digits: 2,
      rounding: 0,
      code: 'AZN',
      name_plural: 'Azerbaijani manats',
    },
    BAM: {
      symbol: 'KM',
      name: 'Bosnia-Herzegovina Convertible Mark',
      symbol_native: 'KM',
      decimal_digits: 2,
      rounding: 0,
      code: 'BAM',
      name_plural: 'Bosnia-Herzegovina convertible marks',
    },
    BDT: {
      symbol: 'Tk',
      name: 'Bangladeshi Taka',
      symbol_native: '৳',
      decimal_digits: 2,
      rounding: 0,
      code: 'BDT',
      name_plural: 'Bangladeshi takas',
    },
    BGN: {
      symbol: 'BGN',
      name: 'Bulgarian Lev',
      symbol_native: 'лв.',
      decimal_digits: 2,
      rounding: 0,
      code: 'BGN',
      name_plural: 'Bulgarian leva',
    },
    BHD: {
      symbol: 'BD',
      name: 'Bahraini Dinar',
      symbol_native: 'د.ب.‏',
      decimal_digits: 3,
      rounding: 0,
      code: 'BHD',
      name_plural: 'Bahraini dinars',
    },
    BIF: {
      symbol: 'FBu',
      name: 'Burundian Franc',
      symbol_native: 'FBu',
      decimal_digits: 0,
      rounding: 0,
      code: 'BIF',
      name_plural: 'Burundian francs',
    },
    BND: {
      symbol: 'BN$',
      name: 'Brunei Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'BND',
      name_plural: 'Brunei dollars',
    },
    BOB: {
      symbol: 'Bs',
      name: 'Bolivian Boliviano',
      symbol_native: 'Bs',
      decimal_digits: 2,
      rounding: 0,
      code: 'BOB',
      name_plural: 'Bolivian bolivianos',
    },
    BRL: {
      symbol: 'R$',
      name: 'Brazilian Real',
      symbol_native: 'R$',
      decimal_digits: 2,
      rounding: 0,
      code: 'BRL',
      name_plural: 'Brazilian reals',
    },
    BWP: {
      symbol: 'BWP',
      name: 'Botswanan Pula',
      symbol_native: 'P',
      decimal_digits: 2,
      rounding: 0,
      code: 'BWP',
      name_plural: 'Botswanan pulas',
    },
    BYN: {
      symbol: 'Br',
      name: 'Belarusian Ruble',
      symbol_native: 'руб.',
      decimal_digits: 2,
      rounding: 0,
      code: 'BYN',
      name_plural: 'Belarusian rubles',
    },
    BZD: {
      symbol: 'BZ$',
      name: 'Belize Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'BZD',
      name_plural: 'Belize dollars',
    },
    CDF: {
      symbol: 'CDF',
      name: 'Congolese Franc',
      symbol_native: 'FrCD',
      decimal_digits: 2,
      rounding: 0,
      code: 'CDF',
      name_plural: 'Congolese francs',
    },
    CHF: {
      symbol: 'CHF',
      name: 'Swiss Franc',
      symbol_native: 'CHF',
      decimal_digits: 2,
      rounding: 0.05,
      code: 'CHF',
      name_plural: 'Swiss francs',
    },
    CLP: {
      symbol: 'CL$',
      name: 'Chilean Peso',
      symbol_native: '$',
      decimal_digits: 0,
      rounding: 0,
      code: 'CLP',
      name_plural: 'Chilean pesos',
    },
    CNY: {
      symbol: 'CN¥',
      name: 'Chinese Yuan',
      symbol_native: 'CN¥',
      decimal_digits: 2,
      rounding: 0,
      code: 'CNY',
      name_plural: 'Chinese yuan',
    },
    COP: {
      symbol: 'CO$',
      name: 'Colombian Peso',
      symbol_native: '$',
      decimal_digits: 0,
      rounding: 0,
      code: 'COP',
      name_plural: 'Colombian pesos',
    },
    CRC: {
      symbol: '₡',
      name: 'Costa Rican Colón',
      symbol_native: '₡',
      decimal_digits: 0,
      rounding: 0,
      code: 'CRC',
      name_plural: 'Costa Rican colóns',
    },
    CVE: {
      symbol: 'CV$',
      name: 'Cape Verdean Escudo',
      symbol_native: 'CV$',
      decimal_digits: 2,
      rounding: 0,
      code: 'CVE',
      name_plural: 'Cape Verdean escudos',
    },
    CZK: {
      symbol: 'Kč',
      name: 'Czech Republic Koruna',
      symbol_native: 'Kč',
      decimal_digits: 2,
      rounding: 0,
      code: 'CZK',
      name_plural: 'Czech Republic korunas',
    },
    DJF: {
      symbol: 'Fdj',
      name: 'Djiboutian Franc',
      symbol_native: 'Fdj',
      decimal_digits: 0,
      rounding: 0,
      code: 'DJF',
      name_plural: 'Djiboutian francs',
    },
    DKK: {
      symbol: 'Dkr',
      name: 'Danish Krone',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'DKK',
      name_plural: 'Danish kroner',
    },
    DOP: {
      symbol: 'RD$',
      name: 'Dominican Peso',
      symbol_native: 'RD$',
      decimal_digits: 2,
      rounding: 0,
      code: 'DOP',
      name_plural: 'Dominican pesos',
    },
    DZD: {
      symbol: 'DA',
      name: 'Algerian Dinar',
      symbol_native: 'د.ج.‏',
      decimal_digits: 2,
      rounding: 0,
      code: 'DZD',
      name_plural: 'Algerian dinars',
    },
    EEK: {
      symbol: 'Ekr',
      name: 'Estonian Kroon',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'EEK',
      name_plural: 'Estonian kroons',
    },
    EGP: {
      symbol: 'EGP',
      name: 'Egyptian Pound',
      symbol_native: 'ج.م.‏',
      decimal_digits: 2,
      rounding: 0,
      code: 'EGP',
      name_plural: 'Egyptian pounds',
    },
    ERN: {
      symbol: 'Nfk',
      name: 'Eritrean Nakfa',
      symbol_native: 'Nfk',
      decimal_digits: 2,
      rounding: 0,
      code: 'ERN',
      name_plural: 'Eritrean nakfas',
    },
    ETB: {
      symbol: 'Br',
      name: 'Ethiopian Birr',
      symbol_native: 'Br',
      decimal_digits: 2,
      rounding: 0,
      code: 'ETB',
      name_plural: 'Ethiopian birrs',
    },
    GBP: {
      symbol: '£',
      name: 'British Pound Sterling',
      symbol_native: '£',
      decimal_digits: 2,
      rounding: 0,
      code: 'GBP',
      name_plural: 'British pounds sterling',
    },
    GEL: {
      symbol: 'GEL',
      name: 'Georgian Lari',
      symbol_native: 'GEL',
      decimal_digits: 2,
      rounding: 0,
      code: 'GEL',
      name_plural: 'Georgian laris',
    },
    GHS: {
      symbol: 'GH₵',
      name: 'Ghanaian Cedi',
      symbol_native: 'GH₵',
      decimal_digits: 2,
      rounding: 0,
      code: 'GHS',
      name_plural: 'Ghanaian cedis',
    },
    GNF: {
      symbol: 'FG',
      name: 'Guinean Franc',
      symbol_native: 'FG',
      decimal_digits: 0,
      rounding: 0,
      code: 'GNF',
      name_plural: 'Guinean francs',
    },
    GTQ: {
      symbol: 'GTQ',
      name: 'Guatemalan Quetzal',
      symbol_native: 'Q',
      decimal_digits: 2,
      rounding: 0,
      code: 'GTQ',
      name_plural: 'Guatemalan quetzals',
    },
    HKD: {
      symbol: 'HK$',
      name: 'Hong Kong Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'HKD',
      name_plural: 'Hong Kong dollars',
    },
    HNL: {
      symbol: 'HNL',
      name: 'Honduran Lempira',
      symbol_native: 'L',
      decimal_digits: 2,
      rounding: 0,
      code: 'HNL',
      name_plural: 'Honduran lempiras',
    },
    HRK: {
      symbol: 'kn',
      name: 'Croatian Kuna',
      symbol_native: 'kn',
      decimal_digits: 2,
      rounding: 0,
      code: 'HRK',
      name_plural: 'Croatian kunas',
    },
    HUF: {
      symbol: 'Ft',
      name: 'Hungarian Forint',
      symbol_native: 'Ft',
      decimal_digits: 0,
      rounding: 0,
      code: 'HUF',
      name_plural: 'Hungarian forints',
    },
    IDR: {
      symbol: 'Rp',
      name: 'Indonesian Rupiah',
      symbol_native: 'Rp',
      decimal_digits: 0,
      rounding: 0,
      code: 'IDR',
      name_plural: 'Indonesian rupiahs',
    },
    ILS: {
      symbol: '₪',
      name: 'Israeli New Sheqel',
      symbol_native: '₪',
      decimal_digits: 2,
      rounding: 0,
      code: 'ILS',
      name_plural: 'Israeli new sheqels',
    },
    INR: {
      symbol: 'Rs',
      name: 'Indian Rupee',
      symbol_native: 'টকা',
      decimal_digits: 2,
      rounding: 0,
      code: 'INR',
      name_plural: 'Indian rupees',
    },
    IQD: {
      symbol: 'IQD',
      name: 'Iraqi Dinar',
      symbol_native: 'د.ع.‏',
      decimal_digits: 0,
      rounding: 0,
      code: 'IQD',
      name_plural: 'Iraqi dinars',
    },
    IRR: {
      symbol: 'IRR',
      name: 'Iranian Rial',
      symbol_native: '﷼',
      decimal_digits: 0,
      rounding: 0,
      code: 'IRR',
      name_plural: 'Iranian rials',
    },
    ISK: {
      symbol: 'Ikr',
      name: 'Icelandic Króna',
      symbol_native: 'kr',
      decimal_digits: 0,
      rounding: 0,
      code: 'ISK',
      name_plural: 'Icelandic krónur',
    },
    JMD: {
      symbol: 'J$',
      name: 'Jamaican Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'JMD',
      name_plural: 'Jamaican dollars',
    },
    JOD: {
      symbol: 'JD',
      name: 'Jordanian Dinar',
      symbol_native: 'د.أ.‏',
      decimal_digits: 3,
      rounding: 0,
      code: 'JOD',
      name_plural: 'Jordanian dinars',
    },
    JPY: {
      symbol: '¥',
      name: 'Japanese Yen',
      symbol_native: '￥',
      decimal_digits: 0,
      rounding: 0,
      code: 'JPY',
      name_plural: 'Japanese yen',
    },
    KES: {
      symbol: 'Ksh',
      name: 'Kenyan Shilling',
      symbol_native: 'Ksh',
      decimal_digits: 2,
      rounding: 0,
      code: 'KES',
      name_plural: 'Kenyan shillings',
    },
    KHR: {
      symbol: 'KHR',
      name: 'Cambodian Riel',
      symbol_native: '៛',
      decimal_digits: 2,
      rounding: 0,
      code: 'KHR',
      name_plural: 'Cambodian riels',
    },
    KMF: {
      symbol: 'CF',
      name: 'Comorian Franc',
      symbol_native: 'FC',
      decimal_digits: 0,
      rounding: 0,
      code: 'KMF',
      name_plural: 'Comorian francs',
    },
    KRW: {
      symbol: '₩',
      name: 'South Korean Won',
      symbol_native: '₩',
      decimal_digits: 0,
      rounding: 0,
      code: 'KRW',
      name_plural: 'South Korean won',
    },
    KWD: {
      symbol: 'KD',
      name: 'Kuwaiti Dinar',
      symbol_native: 'د.ك.‏',
      decimal_digits: 3,
      rounding: 0,
      code: 'KWD',
      name_plural: 'Kuwaiti dinars',
    },
    KZT: {
      symbol: 'KZT',
      name: 'Kazakhstani Tenge',
      symbol_native: 'тңг.',
      decimal_digits: 2,
      rounding: 0,
      code: 'KZT',
      name_plural: 'Kazakhstani tenges',
    },
    LBP: {
      symbol: 'L.L.',
      name: 'Lebanese Pound',
      symbol_native: 'ل.ل.‏',
      decimal_digits: 0,
      rounding: 0,
      code: 'LBP',
      name_plural: 'Lebanese pounds',
    },
    LKR: {
      symbol: 'SLRs',
      name: 'Sri Lankan Rupee',
      symbol_native: 'SL Re',
      decimal_digits: 2,
      rounding: 0,
      code: 'LKR',
      name_plural: 'Sri Lankan rupees',
    },
    LTL: {
      symbol: 'Lt',
      name: 'Lithuanian Litas',
      symbol_native: 'Lt',
      decimal_digits: 2,
      rounding: 0,
      code: 'LTL',
      name_plural: 'Lithuanian litai',
    },
    LVL: {
      symbol: 'Ls',
      name: 'Latvian Lats',
      symbol_native: 'Ls',
      decimal_digits: 2,
      rounding: 0,
      code: 'LVL',
      name_plural: 'Latvian lati',
    },
    LYD: {
      symbol: 'LD',
      name: 'Libyan Dinar',
      symbol_native: 'د.ل.‏',
      decimal_digits: 3,
      rounding: 0,
      code: 'LYD',
      name_plural: 'Libyan dinars',
    },
    MAD: {
      symbol: 'MAD',
      name: 'Moroccan Dirham',
      symbol_native: 'د.م.‏',
      decimal_digits: 2,
      rounding: 0,
      code: 'MAD',
      name_plural: 'Moroccan dirhams',
    },
    MDL: {
      symbol: 'MDL',
      name: 'Moldovan Leu',
      symbol_native: 'MDL',
      decimal_digits: 2,
      rounding: 0,
      code: 'MDL',
      name_plural: 'Moldovan lei',
    },
    MGA: {
      symbol: 'MGA',
      name: 'Malagasy Ariary',
      symbol_native: 'MGA',
      decimal_digits: 0,
      rounding: 0,
      code: 'MGA',
      name_plural: 'Malagasy Ariaries',
    },
    MKD: {
      symbol: 'MKD',
      name: 'Macedonian Denar',
      symbol_native: 'MKD',
      decimal_digits: 2,
      rounding: 0,
      code: 'MKD',
      name_plural: 'Macedonian denari',
    },
    MMK: {
      symbol: 'MMK',
      name: 'Myanma Kyat',
      symbol_native: 'K',
      decimal_digits: 0,
      rounding: 0,
      code: 'MMK',
      name_plural: 'Myanma kyats',
    },
    MOP: {
      symbol: 'MOP$',
      name: 'Macanese Pataca',
      symbol_native: 'MOP$',
      decimal_digits: 2,
      rounding: 0,
      code: 'MOP',
      name_plural: 'Macanese patacas',
    },
    MUR: {
      symbol: 'MURs',
      name: 'Mauritian Rupee',
      symbol_native: 'MURs',
      decimal_digits: 0,
      rounding: 0,
      code: 'MUR',
      name_plural: 'Mauritian rupees',
    },
    MXN: {
      symbol: 'MX$',
      name: 'Mexican Peso',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'MXN',
      name_plural: 'Mexican pesos',
    },
    MYR: {
      symbol: 'RM',
      name: 'Malaysian Ringgit',
      symbol_native: 'RM',
      decimal_digits: 2,
      rounding: 0,
      code: 'MYR',
      name_plural: 'Malaysian ringgits',
    },
    MZN: {
      symbol: 'MTn',
      name: 'Mozambican Metical',
      symbol_native: 'MTn',
      decimal_digits: 2,
      rounding: 0,
      code: 'MZN',
      name_plural: 'Mozambican meticals',
    },
    NAD: {
      symbol: 'N$',
      name: 'Namibian Dollar',
      symbol_native: 'N$',
      decimal_digits: 2,
      rounding: 0,
      code: 'NAD',
      name_plural: 'Namibian dollars',
    },
    NGN: {
      symbol: '₦',
      name: 'Nigerian Naira',
      symbol_native: '₦',
      decimal_digits: 2,
      rounding: 0,
      code: 'NGN',
      name_plural: 'Nigerian nairas',
    },
    NIO: {
      symbol: 'C$',
      name: 'Nicaraguan Córdoba',
      symbol_native: 'C$',
      decimal_digits: 2,
      rounding: 0,
      code: 'NIO',
      name_plural: 'Nicaraguan córdobas',
    },
    NOK: {
      symbol: 'Nkr',
      name: 'Norwegian Krone',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'NOK',
      name_plural: 'Norwegian kroner',
    },
    NPR: {
      symbol: 'NPRs',
      name: 'Nepalese Rupee',
      symbol_native: 'नेरू',
      decimal_digits: 2,
      rounding: 0,
      code: 'NPR',
      name_plural: 'Nepalese rupees',
    },
    NZD: {
      symbol: 'NZ$',
      name: 'New Zealand Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'NZD',
      name_plural: 'New Zealand dollars',
    },
    OMR: {
      symbol: 'OMR',
      name: 'Omani Rial',
      symbol_native: 'ر.ع.‏',
      decimal_digits: 3,
      rounding: 0,
      code: 'OMR',
      name_plural: 'Omani rials',
    },
    PAB: {
      symbol: 'B/.',
      name: 'Panamanian Balboa',
      symbol_native: 'B/.',
      decimal_digits: 2,
      rounding: 0,
      code: 'PAB',
      name_plural: 'Panamanian balboas',
    },
    PEN: {
      symbol: 'S/.',
      name: 'Peruvian Nuevo Sol',
      symbol_native: 'S/.',
      decimal_digits: 2,
      rounding: 0,
      code: 'PEN',
      name_plural: 'Peruvian nuevos soles',
    },
    PHP: {
      symbol: '₱',
      name: 'Philippine Peso',
      symbol_native: '₱',
      decimal_digits: 2,
      rounding: 0,
      code: 'PHP',
      name_plural: 'Philippine pesos',
    },
    PKR: {
      symbol: 'PKRs',
      name: 'Pakistani Rupee',
      symbol_native: '₨',
      decimal_digits: 0,
      rounding: 0,
      code: 'PKR',
      name_plural: 'Pakistani rupees',
    },
    PLN: {
      symbol: 'zł',
      name: 'Polish Zloty',
      symbol_native: 'zł',
      decimal_digits: 2,
      rounding: 0,
      code: 'PLN',
      name_plural: 'Polish zlotys',
    },
    PYG: {
      symbol: '₲',
      name: 'Paraguayan Guarani',
      symbol_native: '₲',
      decimal_digits: 0,
      rounding: 0,
      code: 'PYG',
      name_plural: 'Paraguayan guaranis',
    },
    QAR: {
      symbol: 'QR',
      name: 'Qatari Rial',
      symbol_native: 'ر.ق.‏',
      decimal_digits: 2,
      rounding: 0,
      code: 'QAR',
      name_plural: 'Qatari rials',
    },
    RON: {
      symbol: 'RON',
      name: 'Romanian Leu',
      symbol_native: 'RON',
      decimal_digits: 2,
      rounding: 0,
      code: 'RON',
      name_plural: 'Romanian lei',
    },
    RSD: {
      symbol: 'din.',
      name: 'Serbian Dinar',
      symbol_native: 'дин.',
      decimal_digits: 0,
      rounding: 0,
      code: 'RSD',
      name_plural: 'Serbian dinars',
    },
    RUB: {
      symbol: 'RUB',
      name: 'Russian Ruble',
      symbol_native: '₽.',
      decimal_digits: 2,
      rounding: 0,
      code: 'RUB',
      name_plural: 'Russian rubles',
    },
    RWF: {
      symbol: 'RWF',
      name: 'Rwandan Franc',
      symbol_native: 'FR',
      decimal_digits: 0,
      rounding: 0,
      code: 'RWF',
      name_plural: 'Rwandan francs',
    },
    SAR: {
      symbol: 'SR',
      name: 'Saudi Riyal',
      symbol_native: 'ر.س.‏',
      decimal_digits: 2,
      rounding: 0,
      code: 'SAR',
      name_plural: 'Saudi riyals',
    },
    SDG: {
      symbol: 'SDG',
      name: 'Sudanese Pound',
      symbol_native: 'SDG',
      decimal_digits: 2,
      rounding: 0,
      code: 'SDG',
      name_plural: 'Sudanese pounds',
    },
    SEK: {
      symbol: 'Skr',
      name: 'Swedish Krona',
      symbol_native: 'kr',
      decimal_digits: 2,
      rounding: 0,
      code: 'SEK',
      name_plural: 'Swedish kronor',
    },
    SGD: {
      symbol: 'S$',
      name: 'Singapore Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'SGD',
      name_plural: 'Singapore dollars',
    },
    SOS: {
      symbol: 'Ssh',
      name: 'Somali Shilling',
      symbol_native: 'Ssh',
      decimal_digits: 0,
      rounding: 0,
      code: 'SOS',
      name_plural: 'Somali shillings',
    },
    SYP: {
      symbol: 'SY£',
      name: 'Syrian Pound',
      symbol_native: 'ل.س.‏',
      decimal_digits: 0,
      rounding: 0,
      code: 'SYP',
      name_plural: 'Syrian pounds',
    },
    THB: {
      symbol: '฿',
      name: 'Thai Baht',
      symbol_native: '฿',
      decimal_digits: 2,
      rounding: 0,
      code: 'THB',
      name_plural: 'Thai baht',
    },
    TND: {
      symbol: 'DT',
      name: 'Tunisian Dinar',
      symbol_native: 'د.ت.‏',
      decimal_digits: 3,
      rounding: 0,
      code: 'TND',
      name_plural: 'Tunisian dinars',
    },
    TOP: {
      symbol: 'T$',
      name: 'Tongan Paʻanga',
      symbol_native: 'T$',
      decimal_digits: 2,
      rounding: 0,
      code: 'TOP',
      name_plural: 'Tongan paʻanga',
    },
    TRY: {
      symbol: 'TL',
      name: 'Turkish Lira',
      symbol_native: 'TL',
      decimal_digits: 2,
      rounding: 0,
      code: 'TRY',
      name_plural: 'Turkish Lira',
    },
    TTD: {
      symbol: 'TT$',
      name: 'Trinidad and Tobago Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'TTD',
      name_plural: 'Trinidad and Tobago dollars',
    },
    TWD: {
      symbol: 'NT$',
      name: 'New Taiwan Dollar',
      symbol_native: 'NT$',
      decimal_digits: 2,
      rounding: 0,
      code: 'TWD',
      name_plural: 'New Taiwan dollars',
    },
    TZS: {
      symbol: 'TSh',
      name: 'Tanzanian Shilling',
      symbol_native: 'TSh',
      decimal_digits: 0,
      rounding: 0,
      code: 'TZS',
      name_plural: 'Tanzanian shillings',
    },
    UAH: {
      symbol: '₴',
      name: 'Ukrainian Hryvnia',
      symbol_native: '₴',
      decimal_digits: 2,
      rounding: 0,
      code: 'UAH',
      name_plural: 'Ukrainian hryvnias',
    },
    UGX: {
      symbol: 'USh',
      name: 'Ugandan Shilling',
      symbol_native: 'USh',
      decimal_digits: 0,
      rounding: 0,
      code: 'UGX',
      name_plural: 'Ugandan shillings',
    },
    UYU: {
      symbol: '$U',
      name: 'Uruguayan Peso',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'UYU',
      name_plural: 'Uruguayan pesos',
    },
    UZS: {
      symbol: 'UZS',
      name: 'Uzbekistan Som',
      symbol_native: 'UZS',
      decimal_digits: 0,
      rounding: 0,
      code: 'UZS',
      name_plural: 'Uzbekistan som',
    },
    VEF: {
      symbol: 'Bs.F.',
      name: 'Venezuelan Bolívar',
      symbol_native: 'Bs.F.',
      decimal_digits: 2,
      rounding: 0,
      code: 'VEF',
      name_plural: 'Venezuelan bolívars',
    },
    VND: {
      symbol: '₫',
      name: 'Vietnamese Dong',
      symbol_native: '₫',
      decimal_digits: 0,
      rounding: 0,
      code: 'VND',
      name_plural: 'Vietnamese dong',
    },
    XAF: {
      symbol: 'FCFA',
      name: 'CFA Franc BEAC',
      symbol_native: 'FCFA',
      decimal_digits: 0,
      rounding: 0,
      code: 'XAF',
      name_plural: 'CFA francs BEAC',
    },
    XOF: {
      symbol: 'CFA',
      name: 'CFA Franc BCEAO',
      symbol_native: 'CFA',
      decimal_digits: 0,
      rounding: 0,
      code: 'XOF',
      name_plural: 'CFA francs BCEAO',
    },
    YER: {
      symbol: 'YR',
      name: 'Yemeni Rial',
      symbol_native: 'ر.ي.‏',
      decimal_digits: 0,
      rounding: 0,
      code: 'YER',
      name_plural: 'Yemeni rials',
    },
    ZAR: {
      symbol: 'R',
      name: 'South African Rand',
      symbol_native: 'R',
      decimal_digits: 2,
      rounding: 0,
      code: 'ZAR',
      name_plural: 'South African rand',
    },
    ZMK: {
      symbol: 'ZK',
      name: 'Zambian Kwacha',
      symbol_native: 'ZK',
      decimal_digits: 0,
      rounding: 0,
      code: 'ZMK',
      name_plural: 'Zambian kwachas',
    },
    ZWL: {
      symbol: 'ZWL$',
      name: 'Zimbabwean Dollar',
      symbol_native: 'ZWL$',
      decimal_digits: 0,
      rounding: 0,
      code: 'ZWL',
      name_plural: 'Zimbabwean Dollar',
    },
  };

  getCurrencySymbol(currencyCode: any) {
    // console.log('currencyCode = '+currencyCode);
    // console.log(this.commonCurrency[currencyCode].symbol);
    return this.commonCurrency[currencyCode].symbol;
  }

  @Input() type: any = 'header';
  @Input() headerlogos: any = `{
    "title": "Walker Engineering Enterprises",
    "url": "https://google.com"
  }`;
  @Input() headernav1: any = `[
    {
      "id": 378,
      "post_title": "By Vendor",
      "title": "By Vendor",
      "description": "",
      "url": "",
      "attr_title": "",
      "child": [
        {
          "id": 379,
          "post_title": "Airsep",
          "title": "Airsep",
          "description": "",
          "url": "",
          "attr_title": "",
          "child": [
            {
              "id": 381,
              "post_title": "Agricultural",
              "title": "Agricultural",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/agricultural",
              "attr_title": ""
            },
            {
              "id": 382,
              "post_title": "Industrial",
              "title": "Industrial",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/industrial",
              "attr_title": ""
            },
            {
              "id": 383,
              "post_title": "Marine",
              "title": "Marine",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/marine",
              "attr_title": ""
            },
            {
              "id": 384,
              "post_title": "Military",
              "title": "Military",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/military",
              "attr_title": ""
            }
          ]
        },
        {
          "id": 380,
          "post_title": "Performance",
          "title": "Performance",
          "description": "",
          "url": "",
          "attr_title": "",
          "child": [
            {
              "id": 385,
              "post_title": "Big Trucks and Commercial Vehicles",
              "title": "Big Trucks and Commercial Vehicles",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/big-trucks-and-commercial-vehicles",
              "attr_title": ""
            },
            {
              "id": 386,
              "post_title": "Harley Davidson",
              "title": "Harley Davidson",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/harley-davidson",
              "attr_title": ""
            },
            {
              "id": 387,
              "post_title": "Off Road",
              "title": "Off Road",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/off-road",
              "attr_title": ""
            },
            {
              "id": 388,
              "post_title": "Pick-Up Trucks",
              "title": "Pick-Up Trucks",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/pick-up-trucks",
              "attr_title": ""
            },
            {
              "id": 389,
              "post_title": "Racing",
              "title": "Racing",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/racing",
              "attr_title": ""
            },
            {
              "id": 390,
              "post_title": "RV",
              "title": "RV",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/collections\/rv",
              "attr_title": ""
            }
          ]
        }
      ]
    },
    {
      "id": 391,
      "post_title": "Applications",
      "title": "Applications",
      "description": "",
      "url": "",
      "attr_title": "",
      "child": [
        {
          "id": 392,
          "post_title": "Airsep",
          "title": "Airsep",
          "description": "",
          "url": "",
          "attr_title": "",
          "child": [
            {
              "id": 395,
              "post_title": "Caterpillar",
              "title": "Caterpillar",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=Caterpillar",
              "attr_title": ""
            },
            {
              "id": 396,
              "post_title": "Cummins",
              "title": "Cummins",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=Cummins",
              "attr_title": ""
            },
            {
              "id": 397,
              "post_title": "Daewoo",
              "title": "Daewoo",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=Daewoo",
              "attr_title": ""
            },
            {
              "id": 398,
              "post_title": "Daytona Marine (MACK)",
              "title": "Daytona Marine (MACK)",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=Daytona%20Marine%20(mack)",
              "attr_title": ""
            },
            {
              "id": 399,
              "post_title": "Detroit Diesel",
              "title": "Detroit Diesel",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=Detroit%20Diesel",
              "attr_title": ""
            },
            {
              "id": 400,
              "post_title": "Deutz",
              "title": "Deutz",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=Deutz",
              "attr_title": ""
            },
            {
              "id": 401,
              "post_title": "Isotta Fraschini",
              "title": "Isotta Fraschini",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=isotta-fraschini",
              "attr_title": ""
            },
            {
              "id": 402,
              "post_title": "Isuzu",
              "title": "Isuzu",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=isuzu",
              "attr_title": ""
            },
            {
              "id": 403,
              "post_title": "John Deere",
              "title": "John Deere",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=john-deere",
              "attr_title": ""
            },
            {
              "id": 404,
              "post_title": "Komatsu",
              "title": "Komatsu",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=komatsu",
              "attr_title": ""
            },
            {
              "id": 405,
              "post_title": "Lugger",
              "title": "Lugger",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=lugger",
              "attr_title": ""
            },
            {
              "id": 406,
              "post_title": "Man",
              "title": "Man",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=man",
              "attr_title": ""
            },
            {
              "id": 407,
              "post_title": "Mecruiser",
              "title": "Mecruiser",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=mercruiser",
              "attr_title": ""
            },
            {
              "id": 408,
              "post_title": "Merlin",
              "title": "Merlin",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=merlin",
              "attr_title": ""
            },
            {
              "id": 409,
              "post_title": "Mitsubishi",
              "title": "Mitsubishi",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=mitsubishi",
              "attr_title": ""
            },
            {
              "id": 410,
              "post_title": "MTU",
              "title": "MTU",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=mtu",
              "attr_title": ""
            },
            {
              "id": 411,
              "post_title": "Navistar",
              "title": "Navistar",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=navistar",
              "attr_title": ""
            },
            {
              "id": 412,
              "post_title": "Northern Lights",
              "title": "Northern Lights",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=norther-lights",
              "attr_title": ""
            },
            {
              "id": 413,
              "post_title": "Perkins",
              "title": "Perkins",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=perkins",
              "attr_title": ""
            },
            {
              "id": 414,
              "post_title": "Scania",
              "title": "Scania",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/airsep?tags=scania",
              "attr_title": ""
            }
          ]
        },
        {
          "id": 393,
          "post_title": "Performance",
          "title": "Performance",
          "description": "",
          "url": "",
          "attr_title": "",
          "child": [
            {
              "id": 415,
              "post_title": "Polaris",
              "title": "Polaris",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=polaris",
              "attr_title": ""
            },
            {
              "id": 416,
              "post_title": "Can-Am",
              "title": "Can-Am",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=can-am",
              "attr_title": ""
            },
            {
              "id": 417,
              "post_title": "Ford Powerstroke 6.7L",
              "title": "Ford Powerstroke 6.7L",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=ford-powerstroke%206.7L",
              "attr_title": ""
            },
            {
              "id": 418,
              "post_title": "Danzio Performance Engines",
              "title": "Danzio Performance Engines",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=danzio-performance-engines",
              "attr_title": ""
            },
            {
              "id": 419,
              "post_title": "Herbst Chassis",
              "title": "Herbst Chassis",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=herbst-chassis",
              "attr_title": ""
            },
            {
              "id": 420,
              "post_title": "Geiser Bros. Chassis",
              "title": "Geiser Bros. Chassis",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=geiser-bros-chassis",
              "attr_title": ""
            },
            {
              "id": 421,
              "post_title": "Funco",
              "title": "Funco",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=funco",
              "attr_title": ""
            },
            {
              "id": 422,
              "post_title": "Universal Fit Off Road Filters",
              "title": "Universal Fit Off Road Filters",
              "description": "",
              "url": "https:\/\/walkerengineering.co\/pages\/performance?tags=universal-fit-off-road-filters",
              "attr_title": ""
            }
          ]
        }
      ]
    },
    {
      "id": 372,
      "post_title": "",
      "title": "News",
      "description": "",
      "url": "http:\/\/walkerengineeringenterprise.local\/news-2\/",
      "attr_title": "",
      "child": []
    },
    {
      "id": 374,
      "post_title": "Media",
      "title": "Media",
      "description": "",
      "url": "http:\/\/walkerengineeringenterprise.local\/medias-2\/",
      "attr_title": "",
      "child": []
    },
    {
      "id": 394,
      "post_title": "Support",
      "title": "Support",
      "description": "",
      "url": "https:\/\/walkerengineering.co\/",
      "attr_title": "",
      "child": [
        {
          "id": 375,
          "post_title": "All Resources",
          "title": "All Resources",
          "description": "",
          "url": "http:\/\/walkerengineeringenterprise.local\/resources-2\/",
          "attr_title": "",
          "child": []
        },
        {
          "id": 376,
          "post_title": "",
          "title": "Technical Information",
          "description": "",
          "url": "http:\/\/walkerengineeringenterprise.local\/technical-information-2\/",
          "attr_title": "",
          "child": []
        },
        {
          "id": 377,
          "post_title": "",
          "title": "Troubleshooting",
          "description": "",
          "url": "http:\/\/walkerengineeringenterprise.local\/troubleshooting-2\/",
          "attr_title": "",
          "child": []
        }
      ]
    },
    {
      "id": 373,
      "post_title": "",
      "title": "Dealers",
      "description": "",
      "url": "http:\/\/walkerengineeringenterprise.local\/dealers-2\/",
      "attr_title": "",
      "child": []
    }
  ]`;
  @Input() headernav2: any = `[
    {
      "name": "Shop AIRSEP",
      "url": "https://walkerengineering.co/pages/airsep",
      "newTab": false
    },
    {
      "name": "Shop PERFORMANCE",
      "url": "https://walkerengineering.co/pages/performance",
      "newTab": false
    }
  ]`;
  @Input() footermenu1: any = `[
    {
      "title": "Airsep",
      "items": [
        {
          "name": "Agricultural",
          "url": "{{ shop.url }}/collections/agricultural",
          "newTab": false
        },
        {
          "name": "Industrial",
          "url": "{{ shop.url }}/collections/industrial",
          "newTab": false
        },
        {
          "name": "Marine",
          "url": "{{ shop.url }}/collections/marine",
          "newTab": false
        },
        {
          "name": "Military",
          "url": "{{ shop.url }}/collections/military",
          "newTab": false
        }
      ]
    },
    {
      "title": "Performance",
      "items": [
        {
          "name": "Big Trucks and Commercial Vehicles",
          "url": "{{ shop.url }}/collections/big-trucks-and-commercial-vehicles",
          "newTab": false
        },
        {
          "name": "Harley Davidson",
          "url": "{{ shop.url }}/collections/harley-davidson",
          "newTab": false
        },
        {
          "name": "Off Road",
          "url": "{{ shop.url }}/collections/off-road",
          "newTab": false
        },
        {
          "name": "Pick-Up Trucks",
          "url": "{{ shop.url }}/collections/pick-up-trucks",
          "newTab": false
        },
        {
          "name": "Racing",
          "url": "{{ shop.url }}/collections/racing",
          "newTab": false
        },
        {
          "name": "RV",
          "url": "{{ shop.url }}/collections/rv",
          "newTab": false
        }
      ]
    },
    {
      "title": "Support",
      "items": [
        {
          "name": "FAQ",
          "url": "{{ shop.url }}/pages/faq",
          "newTab": false
        },
        {
          "name": "Resources",
          "url": "{{ subdomain }}/resources",
          "newTab": false
        },
        {
          "name": "Technical Information",
          "url": "{{ subdomain }}/technical-information",
          "newTab": false
        },
        {
          "name": "Troubleshooting",
          "url": "{{ subdomain }}/troubleshooting",
          "newTab": false
        }
      ]
    },
    {
      "title": "Information",
      "items": [
        {
          "name": "About Us",
          "url": "{{ subdomain }}/about-us",
          "newTab": false
        },
        {
          "name": "Quality IS09001",
          "url": "{{ subdomain }}/quality-is09001",
          "newTab": false
        },
        {
          "name": "News",
          "url": "{{ subdomain }}",
          "newTab": false
        },
        {
          "name": "Videos",
          "url": "{{ subdomain }}/media/identify-your-walker-airsep-air-filter-for-easy-ordering",
          "newTab": false
        }
      ]
    }
  ]`;
  @Input() contactdetails: any = `[
    {
      "title": "Address",
      "label": "Walker Engineering 9255 San Fernando Rd. Sun Valley, CA 91352",
      "url": "https://goo.gl/maps/mmjRv4sDBt4wBGpE7?coh=178572&entry=tt",
      "newTab": true
    },
    {
      "title": "Phone",
      "label": "1-818-252-7788",
      "url": "tel:1-818-252-7788",
      "newTab": false
    },
    {
      "title": "Fax",
      "label": "1-818-252-7788",
      "url": "tel:1-818-252-7788",
      "newTab": false
    },
    {
      "title": "Email",
      "label": "",
      "url": "/",
      "newTab": false
    }
  ]`;
  @Input() socialmedialist: any = `[
    {
      "platform": "facebook",
      "url": "https://www.facebook.com/",
      "newTab": false
    },
    {
      "platform": "twitter",
      "url": "https://twitter.com/",
      "newTab": false
    }
  ]`;
  @Input() policylist: any = `[
    {
      "name": "Privacy Policy",
      "url": "https://cdn.shopify.com/s/files/1/0752/6635/9613/files/Walker_Privacy_Policy_V2.pdf?v=1688745095",
      "newTab": true
    },
    {
      "name": "Cookie Policy",
      "url": "https://walkerengineering.co/pages/cookie-policy",
      "newTab": true
    },
    {
      "name": "Terms and Condition",
      "url": "https://cdn.shopify.com/s/files/1/0752/6635/9613/files/Walker_Terms_of_Use_V2.pdf?v=1688745095",
      "newTab": true
    }
  ]`;
  @Input() copyrightyear: any = '2023';
  @Input() showcart: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
}
