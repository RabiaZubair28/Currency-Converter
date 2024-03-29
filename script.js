const from = document.querySelector('.From')
const to = document.querySelector('.To')
const givenAmount = document.querySelector('.givenAmount')
const convertedAmount = document.querySelector('.convertedAmount')

const countries = [ 
    { name:'Australia Dollar', code:'AUD'},
    { name:'Euro code:' ,code:'EUR'},
    { name:'Japan Yen'	,code:'JPY'},
    { name:'Switzerland Franccode',code:'CHF'},
    { name:'USA Dollar'	,code:'USD'},
    { name:'Afghanistan Afghani'	,code:'AFN'},
    { name:'Albania Lek'	,code:'ALL'},
    { name:'Algeria Dinar'	,code:'DZD'},
    { name:'Angola Kwanza'	,code:'AOA'},
    { name:'Argentina Peso'	,code:'ARS'},
    { name:'Armenia Dram'	,code:'AMD'},
    { name:'Aruba Florin'	,code:'AWG'},
    { name:'Australia Dollar'	,code:'AUD'},
    { name:'Austria Schilling'	,code:'ATS (EURO)'},
    { name:'Belgium Franc'	,code:'BEF (EURO)'},
    { name:'Azerbaijan New Manat',	code:'AZN'},
    { name:'Bahamas Dollar'	,code:'BSD'},
    { name:'Bahrain Dinar'	,code:'BHD'},
    { name:'Bangladesh Taka'	,code:'BDT'},
    { name:'Barbados Dollar'	,code:'BBD'},
    { name:'Belarus Ruble'	,code:'BYR'},
    { name:'Belize Dollar'	,code:'BZD'},
    { name:'Bermuda Dollar'	,code:'BMD'},
    { name:'Bhutan Ngultrum',	code:'BTN'},
    { name:'Bolivia Boliviano',	code:'BOB'},
    { name:'Bosnia Mark',	code:'BAM'},
    { name:'Botswana Pula',	code:'BWP'},
    { name:'Brazil Real',	code:'BRL'},
    { name:'Great Britain Pound',	code:'GBP'},
    { name:'Brunei Dollar'	,code:'BND'},
    { name:'Bulgaria Lev'	,code:'BGN'},
    { name:'Burundi Franc'	,code:'BIF'},
    { name:'CFA Franc BCEAO',	code:'XOF'},
    { name:'CFA Franc BEAC'	,code:'XAF'},
    { name:'CFP Franc'	,code:'XPF'},
    { name:'Cambodia Riel',	code:'KHR'},
    { name:'anada Dollar'	,code:'CAD'},
    { name:'Cape Verde Escudo',	code:'CVE'},
    { name:'Cayman Islands Dollar',	code:'KYD'},
    { name:'Chili Peso'	,code:'CLP'},
    { name:'China Yuan/Renminbi',	code:'	CNY'},
    { name:'Colombia Peso'	,code:'	COP'},
    { name:'Comoros Franc'	,code:'	KMF'},
    { name:'Congo Franc'	,code:'	CDF'},
    { name:'Costa Rica Colon'	,code:'	CRC'},
    { name:'Croatia Kuna'	,code:'	HRK'},
    { name:'Cuba Convertible Peso'	,code:'	CUC'},
    { name:'Cuba Peso'	,code:'	CUP'},
    { name:'Cyprus Pound'	,code:'	CYP (EURO)'},
    { name:'Czech Koruna',	code:'	CZK'},
    { name:'Denmark Krone'	,code:'	DKK'},
    { name:'Djibouti Franc'	,code:'	DJF'},
    { name:'Dominican Republich Peso',	code:'	DOP'},
    { name:'East Caribbean Dollar'	,code:'	XCD'},
    { name:'Egypt Pound'	,code:'	EGP'},
    { name:'El Salvador Colon'	,code:'	SVC'},
    { name:'Estonia Kroon'	,code:'	EEK (EURO)'},
    { name:'Ethiopia Birr',	code:'	ETB'},
    { name:'Euro'	,code:'	EUR'},
    { name:'Falkland Islands Pound'	,code:'	FKP'},
    { name:'Finland Markka',	code:'	FIM (EURO)'},
    { name:'Fiji Dollar'	,code:'	FJD'},
    { name:'Gambia Dalasi'	,code:'	GMD'},
    { name:'Georgia Lari'	,code:'	GEL'},
    { name:'Germany Mark'	,code:'	DMK (EURO)'},
    { name:'Ghana New Cedi'	,code:'	GHS'},
    { name:'Gibraltar Pound'	,code:'	GIP'},
    { name:'Greece Drachma'	,code:'	GRD (EURO)'},
    { name:'Guatemala Quetzal'	,code:'	GTQ'},
    { name:'Guinea Franc',	code:'	GNF'},
    { name:'Guyana Dollar'	,code:'	GYD'},
    { name:'Haiti Gourde'	,code:'	HTG'},
    { name:'Honduras Lempira'	,code:'	HNL'},
    { name:'Hong Kong Dollar'	,code:'	HKD'},
    { name:'Hungary Forint'	,code:'	HUF'},
    { name:'Iceland Krona',	code:'	ISK'},
    { name:'India Rupee'	,code:'INR'},
    { name:'Indonesia Rupiah'	,code:'	IDR'},
    { name:'Iran Rial'	,code:'	IRR'},
    { name:'Iraq Dinar',	code:'	IQD'},
    { name:'Ireland Pound'	,code:'	IED (EURO)'},
    { name:'Israel New Shekel',	code:'	ILS'},
    { name:'Italy Lira',	code:'	ITL (EURO)'},
    { name:'Jamaica Dollar'	,code:'	JMD'},
    { name:'Japan Yen'	,code:'	JPY'},
    { name:'Jordan Dinar'	,code:'	JOD'},
    { name:'Kazakhstan Tenge'	,code:'	KZT'},
    { name:'Kenya Shilling',	code:'	KES'},
    { name:'Kuwait Dinar'	,code:'	KWD'},
    { name:'Kyrgyzstan Som'	,code:'	KGS'},
    { name:'Laos Kip'	,code:'	LAK'},
    { name:'Latvia Lats'	,code:'	LVL (EURO)'},
    { name:'Lebanon Pound',	code:'	LBP'},
    { name:'Lesotho Loti',code:'	LSL'},
    { name:'Liberia Dollar'	,code:'	LRD'},
    { name:'Libya Dinar'	,code:'	LYD'},
    { name:'Lithuania Litas'	,code:'	LTL (EURO)'},
    { name:'Luxembourg Franc'	,code:'	LUF (EURO)'},
    { name:'Macau Pataca',	code:'	MOP'},
    { name:'Macedonia Denarv'	,code:'	MKD'},
    { name:'Malagasy Ariaryv'	,code:'	MGA'},
    { name:'Malawi Kwacha'	,code:'	MWK'},
    { name:'Malaysia Ringgit',	code:'	MYR'},
    { name:'Maldives Rufiyaa'	,code:'	MVR'},
    { name:'Malta Lira'	,code:'	MTL (EURO)'},
    { name:'Mauritania Ouguiya',	code:'	MRO'},
    { name:'Mauritius Rupee',	code:'	MUR'},
    { name:'Mexico Peso'	,code:'	MXN'},
    { name:'Moldova Leu'	,code:'	MDL'},
    { name:'Mongolia Tugrik'	,code:'	MNT'},
    { name:'Morocco Dirham',	code:'	MAD'},
    { name:'Mozambique New Metical'	,code:'	MZN'},
    { name:'Myanmar Kyat'	,code:'	MMK'},
    { name:'NL Antilles Guilder'	,code:'	ANG'},
    { name:'Namibia Dollar'	,code:'	NAD'},
    { name:'Nepal Rupee'	,code:'	NPR'},
    { name:'Netherlands Guilder'	,code:'	NLG (EURO)'},
    { name:'New Zealand Dollar'	,code:'	NZD'},
    { name:'Nicaragua Cordoba Oro'	,code:'	NIO'},
    { name:'Nigeria Naira'	,code:'	NGN'},
    { name:'North Korea Won'	,code:'	KPW'},
    { name:'Norway Kroner'	,code:'	NOK'},
    { name:'Oman Rial'	,code:'	OMR'},
    { name:'Pakistan Rupee'	,code:'	PKR'},
    { name:'Panama Balboa'	,code:'	PAB'},
    { name:'Papua New Guinea Kina'	,code:'	PGK'},
    { name:'Paraguay Guarani'	,code:'	PYG'},
    { name:'Peru Nuevo Sol'	,code:'	PEN'},
    { name:'Philippines Peso'	,code:'	PHP'},
    { name:'Poland Zloty'	,code:'	PLN'},
    { name:'Portugal Escudo'	,code:'	PTE (EURO)'},
    { name:'Qatar Rial',	code:'	QAR'},
    { name:'Romania New Lei'	,code:'	RON'},
    { name:'Russia Rouble'	,code:'	RUB'},
    { name:'Rwanda Franc'	,code:'	RWF'},
    { name:'Samoa Tala'	,code:'	WST'},
    { name:'Sao Tome/Principe Dobra'	,code:'	STD'},
    { name:'Saudi Arabia Riyal'	,code:'	SAR'},
    { name:'Serbia Dinar'	,code:'	RSD'},
    { name:'Seychelles Rupee'	,code:'	SCR'},
    { name:'Sierra Leone'	,code:'	SLL'},
    { name:'Singapore Dollar'	,code:'	SGD'},
    { name:'Slovakia Koruna'	,code:'	SKK (EURO)'},
    { name:'Slovenia Tolar',	code:'	SIT (EURO)'},
    { name:'Solomon Islands Dollar'	,code:'	SBD'},
    { name:'Somali Shilling	'	,code:'SOS'},
    { name:'South Africa Rand'	,code:'	ZAR'},
    { name:'South Korea Won'	,code:'	KRW'},
    { name:'Spain Peseta'	,code:'	ESP (EURO)'},
    { name:'Sri Lanka Rupee'	,code:'	LKR'},
    { name:'St Helena Pound	'	,code:'SHP'},
    { name:'Sudan Pound'	,code:'	SDG'},
    { name:'Suriname Dollar'	,code:'	SRD'},
    { name:'Swaziland Lilangeni'	,code:'	SZL'},
    { name:'Sweden Krona'	,code:'	SEK'},
    { name:'Switzerland Franc'	,code:'	CHF'},
    { name:'Syria Pound'	,code:'	SYP'},
    { name:'Taiwan Dollar'	,code:'	TWD'},
    { name:'Tanzania Shilling'	,code:'	TZS'},
    { name:'Thailand Baht'	,code:'	THB'},
    { name:"Tonga Pa'anga"	,code:'	TOP'},
    { name:'Trinidad/Tobago Dollar',	code:'	TTD'},
    { name:'Tunisia Dinar'	,code:'	TND'},
    { name:'Turkish New Lira'	,code:'	TRY'},
    { name:'Turkmenistan Manat'	,code:'	TMM'},
    { name:'USA Dollar'	,code:'	USD'},
    { name:'Uganda Shilling'	,code:'	UGX'},
    { name:'Ukraine Hryvnia'	,code:'	UAH'},
    { name:'Uruguay Peso',	code:'	UYU'},
    { name:'United Arab Emirates Dirham	'	,code:'AED'},
    { name:'Vanuatu Vatu	'	,code:'VUV'},
    { name:'Venezuela Bolivar',	code:'	VEB'},
    { name:'Vietnam Dong	',	code:'VND'},
    { name:'Yemen Rial	',	code:'YER'},
    { name:'Zambia Kwacha	'	,code:'ZMK'},
    { name:'Zimbabwe Dollar'	,code:'	ZWD'},
]


for(let i=0; i<countries.length; i++)
{
    const option = document.createElement('option');
    option.textContent = `${countries[i].code}`;
    from.appendChild(option);
}
for(let i=0; i<countries.length; i++)
{
    const option = document.createElement('option');
    option.textContent = `${countries[i].code}`;
    to.appendChild(option);
}

const convert = async () => {

    const fromAmount = parseFloat(givenAmount.value);
    const fromCurrency = from.value;
    const toCurrency = to.value;

    console.log(fromCurrency)
    console.log(toCurrency)
    console.log(fromAmount);

    const response = await fetch(`https://v6.exchangerate-api.com/v6/14fee86c202aa5aea32dc59b/latest/${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.conversion_rates[toCurrency];

    console.log(exchangeRate)
    const toAmount = exchangeRate * fromAmount;
    convertedAmount.value = toAmount;


};

