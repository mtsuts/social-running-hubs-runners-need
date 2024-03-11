const ARROW_DOWN = `<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7075 4.01476L8.7643 10.9579C8.56966 11.1526 8.31715 11.2551 8.06201 11.2657C8.03132 11.2665 8.00064 11.2665 7.96907 11.2657C7.71393 11.2551 7.4623 11.1526 7.26765 10.9579L0.323616 4.01476C-0.0867132 3.60355 -0.0867132 2.93721 0.323616 2.52688L1.8115 1.039C2.22271 0.627789 2.88905 0.627789 3.29938 1.039L8.01554 5.75515L12.7317 1.039C13.1429 0.627789 13.8093 0.627789 14.2196 1.039L15.7075 2.52688C16.1187 2.93721 16.1187 3.60355 15.7075 4.01476Z" fill="currentColor"/>
</svg>`
const LOCATION_PIN = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.95487 0.526367C3.39294 0.526367 0.5 3.41328 0.5 6.98124C0.5 11.8751 6.95487 17.1065 6.95487 17.1065C6.95487 17.1065 13.4158 12.3211 13.4158 6.98124C13.4158 3.41328 10.5228 0.526367 6.95487 0.526367ZM6.95487 10.2057C5.17692 10.2057 3.73045 8.76522 3.73045 6.98124C3.73045 5.19726 5.17692 3.75079 6.95487 3.75079C8.73283 3.75079 10.1853 5.19726 10.1853 6.98124C10.1853 8.76522 8.73885 10.2057 6.95487 10.2057Z" fill="#D8504A"/>
</svg>`

const config = {
	sport_events: {
		order: 1,
		icon: `<svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M29.4297 23.236L29.4225 23.21L27.0811 18.1007L22.852 15.015C22.7638 14.9485 22.7003 14.8487 22.6858 14.7375L22.534 13.613L22.6482 13.7011L26.5258 13.5494C26.5735 13.5451 26.6227 13.5422 26.666 13.5306C26.8293 13.4974 26.9768 13.4121 27.0909 13.2863C27.2383 13.1274 27.3164 12.9207 27.3048 12.7024L27.2499 11.2817C27.2311 10.8337 26.8539 10.4824 26.4029 10.5012L23.5571 10.6125L21.8256 9.12098L21.7404 8.65415C21.6002 7.84767 21.3443 7.25219 20.9671 6.82584C20.5306 6.33732 19.9453 6.10463 19.2284 6.13353C18.6994 6.15521 18.2586 6.34743 17.8337 6.53243C17.7889 6.55121 17.7456 6.57 17.7007 6.59168C17.2166 6.8027 16.7281 7.02096 16.2583 7.23486L13.2795 8.58188C12.8719 8.76688 12.7202 9.1152 12.5988 9.39991C12.5771 9.45483 12.554 9.50397 12.528 9.55601L11.3255 12.1012C10.8673 12.0723 10.045 11.9046 9.46395 11.7832C8.03164 11.4913 6.55164 11.1878 5.42725 11.4176L5.84494 13.4714C5.82326 13.467 5.79724 13.4641 5.77412 13.4641C4.34181 13.3341 2.88493 14.0148 1.43809 15.4847L1.36004 15.5656C1.06375 15.8691 0.727006 16.2088 0.487061 16.2507L0.838272 18.4418C1.80086 18.2857 2.43678 17.6425 2.94698 17.1208L3.02069 17.0427C3.97891 16.0701 4.84179 15.6075 5.58179 15.674C6.14112 15.7261 6.72502 16.0065 7.34362 16.3071C7.58065 16.4213 7.82492 16.5398 8.07641 16.6511C9.37141 17.2176 10.4554 17.5688 11.4917 17.7567C12.528 17.949 13.5816 17.9706 14.5442 17.8203C15.6542 17.6498 16.6428 17.2581 17.4753 16.6626C17.6314 16.5513 17.7745 16.4372 17.9118 16.3259L15.7958 18.7265L11.152 20.2687C10.6259 20.4421 10.3383 20.9942 10.4929 21.5232L10.8109 22.6188C10.8889 22.8818 11.0624 23.0957 11.3023 23.2287C11.5162 23.3472 11.7648 23.3804 12.0018 23.3327C12.0278 23.3255 12.0538 23.3212 12.0798 23.3139L16.942 21.8672L21.5596 18.3377L24.2161 20.2325L26.452 24.213C26.6182 24.6567 27.088 24.9082 27.5476 24.8128C27.5808 24.8055 27.614 24.7983 27.6473 24.7868L28.8093 24.4052C29.2935 24.2433 29.5667 23.7317 29.4293 23.2359L29.4297 23.236ZM23.3147 11.3194L26.4337 11.198C26.5002 11.1937 26.5551 11.2457 26.5595 11.3122L26.6144 12.7329C26.6144 12.7777 26.5956 12.8066 26.5812 12.8182C26.5696 12.8327 26.5407 12.8558 26.4959 12.8558L22.8739 12.996L22.3969 12.6217L22.2828 11.7603L22.0197 10.1993L23.3147 11.3194ZM11.8995 12.5248L13.1656 9.85386C13.1945 9.7946 13.2205 9.73535 13.2437 9.68042C13.3549 9.4246 13.4171 9.29163 13.5732 9.22225L16.552 7.87523C17.0217 7.66422 17.5059 7.44163 17.9843 7.23495C18.0291 7.21616 18.0725 7.19448 18.1173 7.17569C18.5162 7.00225 18.8616 6.85049 19.2605 6.83459C19.882 6.80857 20.7448 6.98635 21.0628 8.78431L21.1669 9.36532L21.7334 12.876L21.7927 13.3269L21.6886 13.3125C20.6596 13.1492 19.3833 12.9468 18.1664 13.4715L17.4611 10.1053L19.2331 9.39855L18.9743 8.75105L14.7193 10.445L13.9605 12.0463C13.9461 12.0536 13.9316 12.0579 13.9201 12.0608C13.9345 12.0565 13.949 12.0536 13.9605 12.0492L13.4012 13.2301C13.3636 13.3081 13.2711 13.3413 13.1945 13.3038L11.9732 12.7271C11.9212 12.7054 11.9024 12.6606 11.8923 12.6389C11.8807 12.6172 11.8778 12.5768 11.8995 12.5248ZM17.0506 11.5218C16.3555 11.3744 15.6227 11.4004 14.9448 11.6027L15.2339 10.9928L16.8064 10.367L17.0506 11.5218ZM16.698 14.4486C16.5173 14.596 16.3497 14.7405 16.1806 14.859C15.1183 15.6207 13.553 15.8809 11.8923 15.573C11.0266 15.414 10.0943 15.1105 8.96118 14.6148C8.75016 14.5223 8.53627 14.4182 8.30935 14.3084C7.72834 14.0266 7.08517 13.7129 6.36252 13.5539C7.09531 13.5612 8.14603 13.7765 9.02334 13.9572C9.74454 14.1046 10.4253 14.2419 11.0034 14.2983C11.1147 14.3098 11.2766 14.3243 11.4659 14.3243C11.8764 14.3243 12.4126 14.2534 12.8158 13.9022L12.8939 13.9398C13.0341 14.0063 13.183 14.0323 13.3304 14.0179C13.5269 14.1653 13.7784 14.2665 14.0892 14.2665C14.2742 14.2665 14.478 14.2289 14.6991 14.1479C14.9318 14.0627 15.1659 13.9369 15.3581 13.8372C15.4174 13.804 15.4983 13.7635 15.5388 13.7447C15.9941 13.5973 16.5014 13.619 16.9408 13.804L17.3324 12.8645L17.5319 13.8112C17.224 14.0121 16.9509 14.2375 16.698 14.4486ZM16.6214 21.2388L11.885 22.6408C11.7997 22.6668 11.7145 22.6552 11.6364 22.6148C11.5584 22.5743 11.5035 22.5035 11.4803 22.4225L11.1624 21.327C11.1147 21.1564 11.2072 20.983 11.3734 20.9281L16.1978 19.3267L18.8023 16.371L20.9702 17.9175L16.6214 21.2388ZM28.5902 23.7435L27.4281 24.1251C27.2908 24.1699 27.1434 24.0962 27.0986 23.9588L27.087 23.9299L24.7456 19.756L21.7452 17.6169L18.9297 15.6079C18.9181 15.6007 18.908 15.5891 18.8964 15.5819C18.9412 15.5559 18.9846 15.5342 19.0265 15.5154C19.6552 15.2336 20.4776 15.3637 21.3433 15.501L21.4691 15.5198L21.8015 13.3966L21.9937 14.8318C22.0342 15.1281 22.1975 15.4013 22.4374 15.579L26.5189 18.5578L28.7606 23.4459C28.7909 23.5731 28.7159 23.703 28.5902 23.7435Z" fill="#00AFCA"/>
		<path d="M18.989 5.95444C20.5022 5.62924 21.4677 4.13766 21.1454 2.62444C20.8202 1.11121 19.3286 0.145734 17.8154 0.468041C16.3021 0.793237 15.3367 2.28481 15.659 3.79804C15.9842 5.30982 17.4801 6.27963 18.989 5.95444ZM17.9599 1.1474C19.0959 0.903138 20.2204 1.63158 20.4646 2.76759C20.7089 3.9036 19.9804 5.02807 18.8444 5.27231C17.7084 5.51656 16.584 4.78812 16.3397 3.65211C16.0955 2.5161 16.8239 1.39163 17.9599 1.1474Z" fill="#00AFCA"/>
		</svg>
		`,
		rankField: 'Sports Events and Races Rank',
		fieldTeam: 'Sports Events',
		numberField: 'Sports Events and Races',
	},
	running_clubs: {
		order: 2,
		icon: `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.63608 11.9563L3.29887 14.4003C3.28297 14.4205 3.26129 14.4653 3.23961 14.5159C3.23961 14.5174 3.23672 14.5159 3.23094 14.513L3.16012 14.4827L3.15289 14.4841C3.1818 14.5506 3.1948 14.6229 3.19336 14.6937L3.35524 18.3503C3.35813 18.4501 3.41016 18.5093 3.47086 18.531C3.50555 18.544 3.54168 18.5469 3.57926 18.5454C3.61539 18.544 3.65152 18.5368 3.68332 18.5194C3.74258 18.492 3.78738 18.4298 3.78449 18.3301L3.63418 14.9596H3.63274C3.62407 14.7761 3.71801 14.6099 3.86399 14.5174L5.75447 13.1342L6.04642 13.5331L5.75157 13.1313C5.97415 12.9694 6.28489 13.0171 6.44532 13.2383C6.52337 13.3423 6.55227 13.4695 6.53782 13.588L6.35427 19.0326H6.35571C6.35571 19.0832 6.3615 19.1323 6.37161 19.1757C6.38318 19.2205 6.39907 19.2638 6.42075 19.3072C6.47856 19.4243 6.48724 19.5543 6.45255 19.67L5.87587 22.5259L5.39024 22.4276L5.87875 22.5259C5.83828 22.7225 5.68797 22.8699 5.50298 22.9133L1.31162 24.3094C1.29428 24.3166 1.27549 24.3239 1.2567 24.3297C1.20611 24.3499 1.16709 24.3875 1.14252 24.4323C1.11939 24.4771 1.11361 24.532 1.12807 24.584C1.12951 24.5913 1.13385 24.5985 1.13529 24.6043C1.15553 24.6548 1.19311 24.6939 1.23791 24.7184C1.28416 24.7416 1.34197 24.7473 1.39978 24.73C1.41713 24.7242 1.43447 24.7184 1.45181 24.7156L6.30066 23.3512V23.3497C6.31512 23.3468 6.32812 23.3425 6.34258 23.3411C6.37437 23.3295 6.40328 23.3136 6.42785 23.2905C6.45098 23.2673 6.47121 23.2384 6.48277 23.2038L6.48566 23.1893L7.10715 20.3478L7.59278 20.4519L7.10715 20.3449C7.1245 20.2654 7.15918 20.1946 7.20833 20.1354C7.28204 20.0327 7.37309 19.9446 7.48438 19.8824C7.64481 19.7943 7.82548 19.7654 8.03217 19.8188C8.10299 19.8391 8.16514 19.8709 8.21861 19.9142L11.0399 21.8726L10.758 22.2802L11.0413 21.8726C11.1512 21.9478 11.222 22.062 11.2451 22.1848L12.5675 26.9227H12.569C12.5719 26.9342 12.5748 26.9458 12.5777 26.9574C12.5936 27.0094 12.6268 27.0513 12.6702 27.0788C12.7164 27.1077 12.7742 27.1192 12.832 27.1062L12.8465 27.1033C12.8985 27.0874 12.9404 27.0542 12.9679 27.0108C12.9968 26.9646 13.0084 26.9068 12.9954 26.849L11.8218 21.8107C11.8203 21.7991 11.816 21.789 11.8145 21.7789C11.8059 21.763 11.7827 21.7211 11.7538 21.6705C11.7235 21.6502 11.696 21.6286 11.6686 21.6011L8.60739 19.0516C8.59439 19.0429 8.58427 19.0357 8.5756 19.0313C8.56403 19.0256 8.55392 19.0227 8.5438 19.0183L8.54958 19.0024L8.54814 19.001L8.54235 19.0183C8.33712 18.9576 8.19837 18.7741 8.18825 18.5703L7.78066 13.8946C7.75754 13.6214 7.95988 13.3801 8.23162 13.357C8.38771 13.3439 8.52935 13.4018 8.63052 13.5044L10.2319 15.1058C10.2406 15.1144 10.2493 15.1231 10.2579 15.1332L10.2868 15.1621C10.3042 15.1708 10.3461 15.1853 10.3938 15.1997C10.4805 15.2257 10.5065 15.2503 10.5166 15.2489V15.2474C10.5239 15.246 10.5325 15.2445 10.5398 15.2416L14.1906 14.5117C14.2904 14.4915 14.3424 14.4337 14.3525 14.3701C14.3583 14.3383 14.3583 14.2993 14.3496 14.2602C14.3424 14.2198 14.3279 14.1865 14.3091 14.1576C14.273 14.1027 14.2051 14.0695 14.1054 14.0883L10.797 14.7502C10.6236 14.7849 10.4559 14.7242 10.3417 14.6071L7.67227 11.9478C7.52196 11.7975 7.3702 11.7295 7.22568 11.7252C7.04213 11.7223 6.83844 11.8088 6.63608 11.9563ZM2.6904 13.6184L6.05074 11.1585C6.42363 10.8853 6.83122 10.7277 7.24892 10.7379C7.64781 10.7466 8.03516 10.9041 8.37771 11.2466L10.8651 13.734L13.9133 13.1256C14.4755 13.0128 14.9019 13.2571 15.1432 13.63C15.2328 13.7673 15.295 13.9205 15.3253 14.078C15.3557 14.2341 15.3571 14.3989 15.3282 14.5608C15.2473 14.9973 14.9467 15.3861 14.3859 15.4988L10.7235 16.2301V16.2287C10.6136 16.2489 10.3463 16.2272 10.1222 16.1622C9.96613 16.1174 9.8057 16.0524 9.68574 15.9627C9.65972 15.9468 9.6366 15.9266 9.61491 15.9035L9.61636 15.902L9.55855 15.8442C9.54988 15.8356 9.5412 15.8283 9.53109 15.8182L8.88936 15.1765L9.15674 18.229L9.16397 18.2348C9.1842 18.2478 9.20155 18.2608 9.22034 18.2752L9.21889 18.2767L12.2309 20.7857C12.3162 20.8204 12.3913 20.8797 12.4622 20.9577C12.507 21.0083 12.5518 21.0748 12.5937 21.1456C12.6544 21.2497 12.718 21.3884 12.7556 21.4939C12.77 21.5243 12.7816 21.5575 12.7874 21.5922L13.961 26.6305C14.0361 26.9557 13.974 27.2794 13.8092 27.5425C13.6517 27.7954 13.4016 27.9905 13.0938 28.0715C13.0721 28.0787 13.049 28.0845 13.0229 28.0874C12.7108 28.151 12.3986 28.0874 12.1442 27.9284C11.8913 27.7708 11.6962 27.5208 11.6152 27.2129C11.6094 27.1956 11.6065 27.1783 11.6022 27.1609L10.3289 22.5966L7.98748 20.9706L7.45417 23.4103C7.45272 23.4248 7.44839 23.4378 7.4455 23.4523H7.44405C7.38624 23.6719 7.27061 23.8627 7.11741 24.0101C6.96999 24.1532 6.78643 24.2573 6.58986 24.3108C6.58408 24.3122 6.57686 24.3137 6.56963 24.3165L6.56385 24.318L1.72203 25.6809C1.70902 25.6838 1.6989 25.6881 1.6859 25.6925C1.37949 25.7864 1.06152 25.7503 0.791236 25.6144C0.523852 25.4786 0.305611 25.2459 0.197201 24.9438C0.189974 24.9265 0.184193 24.9091 0.179857 24.8918C0.0859103 24.5854 0.122045 24.2674 0.257905 23.9971C0.393765 23.7283 0.627905 23.5086 0.931416 23.4031C0.938642 23.4002 0.945869 23.3973 0.954541 23.3944H0.955986V23.3959L4.96235 22.0604L5.461 19.5918C5.43932 19.5325 5.42053 19.4704 5.40607 19.4082C5.37717 19.2897 5.36271 19.164 5.36271 19.0397V19.0238H5.36416L5.51592 14.5405L4.63428 15.1865L4.77158 18.2939C4.7976 18.8663 4.49119 19.2493 4.08938 19.43C3.9434 19.4964 3.78297 19.5326 3.61966 19.5398C3.45923 19.547 3.29447 19.5239 3.1427 19.4704C2.725 19.3245 2.38823 18.9675 2.36366 18.398L2.1989 14.7038L2.22925 14.7023C2.21769 14.5246 2.24948 14.3092 2.32897 14.1242C2.39835 13.9667 2.49519 13.8034 2.61804 13.6834C2.63972 13.6559 2.66294 13.6357 2.6904 13.6184ZM3.18469 14.4711C3.17601 14.474 3.16734 14.4783 3.15867 14.4827L3.22949 14.513C3.22082 14.5058 3.20492 14.4913 3.18469 14.4711ZM1.11065 23.8599L1.09764 23.8237L1.10487 23.8469L1.11065 23.8599Z" fill="#00AFCA"/>
		<path d="M7.73756 6.53906C8.31569 6.53906 8.8389 6.7732 9.219 7.15334C9.59766 7.53199 9.83328 8.05666 9.83328 8.63478C9.83328 9.21291 9.59914 9.73612 9.219 10.1162C8.84035 10.4949 8.31569 10.7305 7.73756 10.7305C7.15944 10.7305 6.63622 10.4964 6.25612 10.1162C5.87746 9.73757 5.64185 9.21291 5.64185 8.63478C5.64185 8.05666 5.87599 7.53344 6.25612 7.15334C6.63622 6.77468 7.15944 6.53906 7.73756 6.53906ZM8.51804 7.85719C8.31859 7.65774 8.04252 7.53344 7.73901 7.53344C7.43549 7.53344 7.15944 7.65629 6.95997 7.85719C6.76052 8.05809 6.63622 8.33271 6.63622 8.63622C6.63622 8.93974 6.75907 9.21579 6.95997 9.41526C7.15942 9.61471 7.43549 9.73901 7.73901 9.73901C8.04252 9.73901 8.31857 9.61616 8.51804 9.41526C8.71749 9.21581 8.84179 8.93973 8.84179 8.63622C8.84179 8.33126 8.71749 8.05521 8.51804 7.85719Z" fill="#00AFCA"/>
		<path d="M19.3941 5.54488L16.0569 7.98892C16.041 8.00915 16.0193 8.05396 15.9977 8.10454C15.9977 8.10599 15.9948 8.10454 15.989 8.10165L15.9182 8.0713L15.9109 8.07275C15.9399 8.13923 15.9529 8.2115 15.9514 8.28232L16.1133 11.939C16.1162 12.0387 16.1682 12.0979 16.2289 12.1196C16.2636 12.1326 16.2997 12.1355 16.3373 12.1341C16.3734 12.1326 16.4096 12.1254 16.4414 12.1081C16.5006 12.0806 16.5454 12.0184 16.5426 11.9187L16.3922 8.54824H16.3908C16.3821 8.36469 16.4761 8.19848 16.622 8.10598L18.5125 6.72281L18.8045 7.12171L18.5096 6.71992C18.7322 6.55805 19.043 6.60575 19.2034 6.82688C19.2814 6.93094 19.3103 7.05813 19.2959 7.17664L19.1123 12.6212H19.1138C19.1138 12.6718 19.1196 12.7209 19.1297 12.7643C19.1412 12.8091 19.1571 12.8524 19.1788 12.8958C19.2366 13.0129 19.2453 13.1429 19.2106 13.2586L18.6339 16.1145L18.1483 16.0163L18.6368 16.1145C18.5963 16.3111 18.446 16.4585 18.261 16.5019L14.0697 17.898C14.0523 17.9053 14.0335 17.9125 14.0148 17.9183C13.9642 17.9385 13.9251 17.9761 13.9006 18.0209C13.8775 18.0657 13.8717 18.1206 13.8861 18.1727C13.8876 18.1799 13.8919 18.1871 13.8934 18.1929C13.9136 18.2435 13.9512 18.2825 13.996 18.3071C14.0422 18.3302 14.1 18.336 14.1578 18.3186C14.1752 18.3128 14.1925 18.3071 14.2099 18.3042L19.0587 16.9398V16.9384C19.0732 16.9355 19.0862 16.9311 19.1006 16.9297C19.1324 16.9181 19.1613 16.9022 19.1859 16.8791C19.209 16.856 19.2293 16.8271 19.2408 16.7924L19.2437 16.7779L19.8652 13.9364L20.3508 14.0405L19.8652 13.9393C19.8826 13.8598 19.9172 13.789 19.9664 13.7312C20.0401 13.6286 20.1312 13.5404 20.2439 13.4783C20.4043 13.3901 20.585 13.3612 20.7917 13.4147C20.8625 13.4349 20.9246 13.4667 20.9781 13.5101L23.7994 15.4685L23.5175 15.8761L23.8008 15.4685C23.9107 15.5436 23.9815 15.6578 24.0046 15.7807L25.3271 20.5185H25.3285C25.3314 20.5301 25.3343 20.5416 25.3372 20.5532C25.3531 20.6052 25.3863 20.6471 25.4297 20.6746C25.4759 20.7035 25.5337 20.7151 25.5915 20.7021L25.606 20.6992C25.658 20.6833 25.6999 20.65 25.7274 20.6067C25.7563 20.5604 25.7679 20.5026 25.7549 20.4448L24.5813 15.4065C24.5798 15.3949 24.5755 15.3848 24.574 15.3747C24.5654 15.3588 24.5422 15.3169 24.5133 15.2663C24.483 15.2461 24.4555 15.2244 24.4281 15.1969L21.3669 12.6474C21.3539 12.6387 21.3438 12.6315 21.3351 12.6272C21.3235 12.6214 21.3134 12.6185 21.3033 12.6142L21.3091 12.5983L21.3076 12.5968L21.3019 12.6142C21.0966 12.5535 20.9579 12.3699 20.9478 12.1661L20.5387 7.49045C20.5156 7.21728 20.7179 6.97593 20.9897 6.9528C21.1458 6.93979 21.2874 6.99761 21.3886 7.10022L22.99 8.70162C22.9986 8.71029 23.0073 8.71897 23.016 8.72908L23.0449 8.75799C23.0622 8.76666 23.1042 8.78111 23.1519 8.79557C23.2386 8.82158 23.2646 8.84615 23.2747 8.84471V8.84326C23.2819 8.84181 23.2906 8.84037 23.2978 8.83748L26.9487 8.10758C27.0484 8.08735 27.1004 8.02953 27.1106 7.96594C27.1163 7.93414 27.1163 7.89512 27.1077 7.85609C27.1004 7.81562 27.086 7.78238 27.0672 7.75348C27.0311 7.69856 26.9631 7.66531 26.8634 7.6841L23.5551 8.34607C23.3817 8.38076 23.214 8.32006 23.0998 8.20298L20.4318 5.53495C20.2815 5.38464 20.1297 5.31671 19.9852 5.31237C19.8016 5.30948 19.5994 5.39601 19.3941 5.54488ZM15.4485 7.207L18.8088 4.74709C19.1817 4.47393 19.5893 4.31637 20.007 4.32651C20.4059 4.33518 20.7932 4.49272 21.1358 4.83526L23.6232 7.31974L26.6713 6.71127C27.2336 6.59854 27.6599 6.8428 27.9013 7.21569C27.9909 7.353 28.0531 7.5062 28.0834 7.66373C28.1138 7.81982 28.1152 7.98459 28.0863 8.14646C28.0054 8.58295 27.7047 8.97175 27.1439 9.08449L23.4815 9.81583V9.81439C23.3717 9.83462 23.1043 9.81294 22.8803 9.7479C22.7242 9.7031 22.5638 9.63805 22.4438 9.54845C22.4178 9.53255 22.3947 9.51231 22.373 9.48919L22.3744 9.48774L22.3166 9.42993C22.3079 9.42126 22.2993 9.41403 22.2891 9.40391L21.6474 8.76219L21.9148 11.8147L21.922 11.8205C21.9423 11.8335 21.9596 11.8465 21.9784 11.8609L21.9769 11.8624L24.989 14.3714C25.0742 14.4061 25.1494 14.4654 25.2202 14.5434C25.265 14.594 25.3098 14.6605 25.3517 14.7313C25.4124 14.8354 25.476 14.9741 25.5136 15.0796C25.5281 15.11 25.5396 15.1432 25.5454 15.1779L26.719 20.2162C26.7942 20.5414 26.732 20.8651 26.5673 21.1282C26.4097 21.3811 26.1597 21.5762 25.8518 21.6572C25.8301 21.6644 25.807 21.6702 25.781 21.6731C25.4688 21.7367 25.1566 21.6731 24.9023 21.5141C24.6493 21.3565 24.4542 21.1065 24.3733 20.7986C24.3675 20.7813 24.3646 20.764 24.3603 20.7466L23.0869 16.1823L20.7455 14.5563L20.2122 16.996C20.2108 17.0105 20.2064 17.0235 20.2036 17.0379H20.2021C20.1443 17.2576 20.0287 17.4484 19.8755 17.5958C19.728 17.7389 19.5445 17.843 19.3479 17.8965C19.3421 17.8979 19.3349 17.8993 19.3277 17.9022L19.3219 17.9037L14.4801 19.2666C14.4671 19.2695 14.457 19.2738 14.444 19.2782C14.1375 19.3721 13.8196 19.336 13.5493 19.2001C13.2819 19.0643 13.0637 18.8316 12.9553 18.5295C12.948 18.5122 12.9422 18.4948 12.9379 18.4775C12.844 18.1711 12.8801 17.8531 13.016 17.5828C13.1518 17.314 13.386 17.0943 13.6895 16.9888C13.6967 16.9859 13.7039 16.983 13.7126 16.9801H13.714V16.9816L17.7204 15.6461L18.2191 13.1775C18.1974 13.1182 18.1786 13.0561 18.1641 12.9939C18.1352 12.8754 18.1208 12.7497 18.1208 12.6254V12.6095H18.1222L18.274 8.12618L17.3923 8.77224L17.5296 11.8796C17.5557 12.452 17.2493 12.835 16.8474 13.0157C16.7015 13.0821 16.541 13.1183 16.3777 13.1255C16.2173 13.1327 16.0525 13.1096 15.9008 13.0561C15.4831 12.9102 15.1463 12.5531 15.1217 11.9837L14.957 8.28949L14.9873 8.28804C14.9757 8.11027 15.0075 7.89492 15.087 7.70992C15.1564 7.55238 15.2532 7.38906 15.3761 7.2691C15.3992 7.24453 15.4239 7.22434 15.4485 7.207ZM15.9457 8.05974C15.937 8.06263 15.9283 8.06696 15.9197 8.0713L15.9905 8.10165C15.9804 8.09442 15.963 8.07997 15.9457 8.05974ZM13.8716 17.4485L13.8586 17.4124L13.8659 17.4355L13.8716 17.4485Z" fill="#00AFCA"/>
		<path d="M20.4981 0.127716C21.0762 0.127716 21.5994 0.361856 21.9795 0.74199C22.3582 1.12065 22.5938 1.64531 22.5938 2.22343C22.5938 2.80156 22.3596 3.32477 21.9795 3.70488C21.6008 4.08353 21.0762 4.31915 20.4981 4.31915C19.9199 4.31915 19.3967 4.08501 19.0166 3.70488C18.638 3.32622 18.4023 2.80156 18.4023 2.22343C18.4023 1.64531 18.6365 1.12209 19.0166 0.74199C19.3967 0.363332 19.9199 0.127716 20.4981 0.127716ZM21.2771 1.4444C21.0776 1.24495 20.8016 1.12065 20.4981 1.12065C20.1945 1.12065 19.9185 1.2435 19.719 1.4444C19.5196 1.64385 19.3953 1.91992 19.3953 2.22343C19.3953 2.52695 19.5181 2.803 19.719 3.00247C19.9185 3.20192 20.1945 3.32622 20.4981 3.32622C20.8016 3.32622 21.0776 3.20337 21.2771 3.00247C21.4765 2.80302 21.6008 2.52694 21.6008 2.22343C21.5994 1.91992 21.478 1.64386 21.2771 1.4444Z" fill="#00AFCA"/>
		</svg>
		`,
		rankField: 'Running Clubs in the UK Rank',
		fieldTeam: 'Running Clubs',
		numberField: 'Running Clubs in the UK',
	},
	running_routes: {
		order: 3,
		icon: `<svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M14.7325 22.0897H14.6973L6.51479 21.9999C6.32046 21.997 6.13394 21.9169 5.99917 21.7753C5.8644 21.6347 5.79116 21.4452 5.79799 21.2499C5.79213 21.0546 5.86928 20.8671 6.00795 20.7304C6.1476 20.5946 6.33803 20.5224 6.53238 20.5321L14.7121 20.6298H14.7356C16.3381 20.6269 17.6408 19.3329 17.6526 17.7303V16.8074C17.6614 15.2 16.3703 13.8874 14.7628 13.8699L6.28032 13.8025C4.99224 13.7928 3.76182 13.2723 2.85832 12.3553C1.95402 11.4383 1.45207 10.2 1.46282 8.91202C1.47551 7.63272 1.99212 6.40902 2.90129 5.50777C3.80949 4.60542 5.03704 4.0986 6.31729 4.0947H14.0498C14.4355 4.11716 14.7373 4.43747 14.7373 4.8242C14.7373 5.20995 14.4355 5.53025 14.0498 5.55272H6.31729C4.45304 5.55663 2.93829 7.05857 2.91779 8.92272C2.90998 9.8241 3.26154 10.6913 3.89337 11.3338C4.52617 11.9764 5.38849 12.3407 6.28984 12.3475L14.7723 12.413V12.412C15.9325 12.4227 17.0419 12.8934 17.8563 13.7206C18.6698 14.5477 19.1229 15.6639 19.1151 16.8251V17.7479V17.747C19.1054 18.9032 18.6386 20.0077 17.8183 20.8212C16.997 21.6347 15.8878 22.0907 14.7325 22.0897Z" fill="#00AFCA"/>
		<path d="M19.4179 1.95225L20.6376 0.909271L16.5576 0.910248C16.3799 0.910248 16.21 0.98056 16.085 1.10654C15.959 1.23252 15.8896 1.40244 15.8896 1.58016V5.21991C15.8896 5.71991 17.3623 5.71991 17.3623 5.21991V3.00019H20.6378L19.4179 1.95225Z" fill="#00AFCA"/>
		<path d="M5.3174 15.7627C4.1836 14.6289 2.34565 14.6289 1.2129 15.7627C0.0790988 16.8965 0.0790988 18.7345 1.2129 19.8672L3.26562 21.92L5.31835 19.8672H5.31737C6.45017 18.7334 6.4502 16.8965 5.3174 15.7627ZM3.26467 19.3252C2.59572 19.3262 1.99122 18.9239 1.7344 18.3047C1.47757 17.6866 1.61819 16.9747 2.09182 16.501C2.56447 16.0264 3.2764 15.8848 3.89552 16.1407C4.5137 16.3965 4.91797 17.0001 4.91797 17.67C4.91797 18.5831 4.17777 19.3233 3.26467 19.3252Z" fill="#00AFCA"/>
		</svg>
		`,
		rankField: 'number of Routes in Each City Rank',
		fieldTeam: 'Running Routes',
		numberField: 'number of Routes in Each City',
	},

	running_forum: {
		order: 4,
		icon: `<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M22.9167 4.48502C22.8828 4.47654 22.8622 4.47654 22.7218 4.47654L21.5471 4.47533H20.9138V2.90354C20.9138 2.89506 20.9041 2.88295 20.9029 2.86963C20.892 2.68072 20.8412 2.50151 20.7758 2.32713C20.4948 1.58121 19.8664 1.05805 19.1434 0.88247C19.0199 0.852197 18.8964 0.827978 18.7693 0.821924C18.7523 0.820713 18.7341 0.825557 18.7208 0.809814H2.37546C2.36093 0.825557 2.34276 0.820713 2.32581 0.821924C2.0594 0.837666 1.80752 0.901845 1.56535 1.00599C1.0398 1.23364 0.638973 1.59815 0.373768 2.10673C0.255097 2.33318 0.177597 2.57415 0.14248 2.82724C0.136426 2.86841 0.132793 2.91079 0.127949 2.95317C0.124316 2.98345 0.11584 3.01372 0.100098 3.03673V18.2001C0.100098 18.2037 0.11584 18.2049 0.118262 18.2098C0.124316 18.2207 0.126739 18.2328 0.130371 18.2449C0.150957 18.3127 0.184863 18.3732 0.238145 18.4205C0.338654 18.5101 0.454904 18.5488 0.590523 18.5173C0.652281 18.5028 0.706773 18.475 0.757631 18.4362C0.888414 18.3369 1.01919 18.2364 1.14997 18.1371C2.37785 17.1986 3.60576 16.2601 4.8337 15.3217L4.81917 16.6464C4.81311 17.1611 5.01049 17.6479 5.37258 18.0136C5.73587 18.3805 6.21903 18.5827 6.73366 18.5827L19.7041 18.5839L24.2716 22.1089C24.3406 22.1622 24.4242 22.1901 24.5102 22.1901C24.5683 22.1901 24.6276 22.1768 24.6821 22.1501C24.8153 22.0847 24.9001 21.9491 24.9001 21.8002V6.83305C24.9001 5.66813 24.0671 4.6824 22.9167 4.48502ZM0.965942 17.2955C0.9502 17.3076 0.933246 17.3185 0.917504 17.3294C0.909027 17.3354 0.896918 17.3269 0.895707 17.3173C0.894496 17.31 0.894496 17.3027 0.894496 17.2955V17.2434V3.18551C0.894496 2.95785 0.938088 2.73989 1.03254 2.53281C1.17664 2.21918 1.40188 1.97939 1.69976 1.80747C1.88503 1.69969 2.08484 1.63431 2.29675 1.60403C2.38031 1.59192 2.46507 1.58708 2.54984 1.58708C5.21392 1.58829 7.87905 1.58829 10.5432 1.58829H18.5365C18.7182 1.58829 18.8938 1.61372 19.0657 1.67063C19.5658 1.8329 19.9993 2.2543 20.118 2.86097C20.1386 2.96874 20.1483 3.07773 20.1483 3.18793V11.6596C20.1483 11.949 20.1495 12.2384 20.1483 12.5266C20.1446 13.1127 19.8431 13.6238 19.3939 13.912C19.2025 14.0355 18.9942 14.113 18.769 14.1457C18.6927 14.1566 18.6152 14.1614 18.5377 14.1614C15.9778 14.1602 13.4178 14.1602 10.8581 14.1602H5.29516C5.25762 14.1602 5.22008 14.1614 5.18254 14.1614C5.10262 14.1626 5.03118 14.1905 4.967 14.2353C4.93309 14.2595 4.89918 14.2862 4.86649 14.3116C3.75607 15.1605 2.64562 16.0093 1.53523 16.8582C1.34632 17.0059 1.15603 17.1501 0.965942 17.2955ZM24.1214 21.0083L20.0756 17.8866C20.0078 17.8334 19.9242 17.8055 19.837 17.8055H6.7324C6.42724 17.8055 6.14024 17.6856 5.92469 17.4677C5.70915 17.2497 5.5929 16.9615 5.59653 16.6563L5.61469 14.9925C5.61469 14.9743 5.61348 14.9574 5.61106 14.9392H18.556C18.6868 14.9392 18.8152 14.9283 18.9423 14.9065C19.1821 14.8666 19.411 14.7915 19.6265 14.6777C20.1932 14.3761 20.5807 13.9196 20.795 13.3166C20.8532 13.1543 20.8931 12.9884 20.9028 12.814C20.904 12.8055 20.9125 12.7971 20.9125 12.7874V5.25407H21.5458C22.046 5.25407 22.6587 5.25528 22.8004 5.25528C23.5669 5.39575 24.1227 6.05449 24.1227 6.83436L24.1203 21.0085L24.1214 21.0083Z" fill="#00AFCA"/>
		<path d="M17.3864 11.0787C17.4567 11.0085 17.5003 10.914 17.5003 10.8075C17.5003 10.5919 17.3259 10.4224 17.1103 10.4224L3.86869 10.4212C3.76092 10.4212 3.66404 10.4611 3.59381 10.5314C3.52358 10.6016 3.47998 10.6961 3.47998 10.8026C3.47998 11.0182 3.65436 11.1998 3.8699 11.1998H17.1115C17.2181 11.1998 17.315 11.1489 17.3864 11.0787Z" fill="#00AFCA"/>
		<path d="M3.86841 8.19417H17.1101C17.2178 8.19417 17.3147 8.14331 17.3849 8.07308C17.4552 8.00284 17.4988 7.90839 17.4988 7.80183C17.4988 7.58628 17.3244 7.41674 17.1089 7.41674L3.86845 7.41432C3.76067 7.41432 3.6638 7.45428 3.59357 7.52452C3.52333 7.59475 3.47974 7.6892 3.47974 7.79577C3.47974 8.01131 3.65408 8.19417 3.86841 8.19417Z" fill="#00AFCA"/>
		<path d="M3.86841 5.18748H17.1101C17.2178 5.18748 17.3147 5.13662 17.3849 5.06639C17.4552 4.99615 17.4988 4.9017 17.4988 4.79514C17.4988 4.57959 17.3244 4.41005 17.1089 4.41005L3.86845 4.40884C3.76067 4.40884 3.6638 4.44881 3.59357 4.51904C3.52333 4.58927 3.47974 4.68373 3.47974 4.79029C3.47974 5.00463 3.65408 5.18748 3.86841 5.18748Z" fill="#00AFCA"/>
		</svg>
		`,
		rankField: 'Post about City in Running Forum Rank',
		fieldTeam: 'Running Forum Posts',
		numberField: 'Post about City in Running Forum',

	},
	instagram_hashtags: {
		order: 5,
		icon: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M13.8716 0.860001H5.12929C3.99656 0.861055 2.91235 1.31141 2.11177 2.11191C1.31128 2.91241 0.860916 3.99664 0.859863 5.12943V13.8707C0.860918 15.0034 1.31128 16.0876 2.11177 16.8882C2.91227 17.6887 3.99651 18.1391 5.12929 18.1401H13.8716C15.0033 18.1391 16.0886 17.6887 16.8881 16.8882C17.6886 16.0877 18.1389 15.0035 18.14 13.8707V5.12943C18.1389 3.9967 17.6886 2.91249 16.8881 2.11191C16.0886 1.31141 15.0033 0.861054 13.8716 0.860001ZM16.4999 13.8708C16.4978 15.322 15.3218 16.498 13.8716 16.5001H5.12929C3.67804 16.498 2.50206 15.322 2.49995 13.8708V5.12951C2.50206 3.67826 3.67804 2.50228 5.12929 2.50017H13.8716C15.3218 2.50228 16.4978 3.67826 16.4999 5.12951V13.8708Z" fill="#00AFCA"/>
		<path d="M9.49998 5.38574C8.40837 5.38574 7.36212 5.81923 6.59019 6.59019C5.8192 7.36222 5.38574 8.40847 5.38574 9.49998C5.38574 10.5915 5.81923 11.6378 6.59124 12.4098C7.36222 13.1808 8.40953 13.6142 9.49995 13.6142C10.5916 13.6142 11.6378 13.1807 12.4097 12.4098C13.1818 11.6377 13.6152 10.5915 13.6152 9.49998C13.6142 8.40942 13.1796 7.36317 12.4087 6.59126C11.6366 5.82028 10.5904 5.3868 9.49998 5.38574ZM9.49998 11.9743C8.49909 11.9743 7.59626 11.3721 7.2134 10.4471C6.83054 9.52217 7.04254 8.45799 7.75024 7.75029C8.45794 7.04259 9.52212 6.83062 10.4471 7.21345C11.372 7.59631 11.9753 8.49911 11.9753 9.50003C11.9732 10.8669 10.8669 11.9733 9.49998 11.9743Z" fill="#00AFCA"/>
		<path d="M13.7832 4.11783C13.3392 4.11783 12.9384 4.38572 12.7686 4.79599C12.5988 5.20625 12.6926 5.67875 13.0069 5.99306C13.3212 6.30737 13.7927 6.40122 14.204 6.23142C14.6143 6.06161 14.8822 5.66083 14.8822 5.21681C14.8822 4.61037 14.3896 4.11888 13.7832 4.11783Z" fill="#00AFCA"/>
		</svg>
		`,
		rankField: 'Instagram Hashtags Rank',
		fieldTeam: 'Instagram Hashtags',
		numberField: 'Instagram Hashtags',
	},
	overall: {
		order: 5,
		icon: `<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3.45313 0.000773036C3.19533 0.0265425 2.99903 0.255375 3 0.528533V1.05629H0.500004C0.484379 1.05526 0.468754 1.05526 0.453129 1.05629C0.195329 1.08206 -0.000971384 1.31089 3.61614e-06 1.58405V3.03539C3.61614e-06 4.92068 1.2959 6.49882 3 6.81204V6.86152C3 9.59716 4.9746 11.8475 7.5 12.1143V15.8334H4C3.17773 15.8334 2.5 16.5488 2.5 17.4167V18.4722C2.5 18.764 2.72364 19 3 19H13C13.2764 19 13.5 18.764 13.5 18.4722V17.4167C13.5 16.5488 12.8223 15.8334 12 15.8334H8.5V12.1143C11.0255 11.8473 13 9.59714 13 6.86152V6.81204C14.7041 6.49869 16 4.91952 16 3.03539V1.58405C16 1.29233 15.7764 1.05629 15.5 1.05629H13V0.528533C13 0.236814 12.7764 0.000773036 12.5 0.000773036H3.5C3.48438 -0.000257679 3.46875 -0.000257679 3.45313 0.000773036ZM4 1.05629H12V6.86165C12 9.20976 10.2246 11.0837 8 11.0837C5.7754 11.0837 4 9.20976 4 6.86165V1.05629ZM1 2.11181H3V5.7238C1.84765 5.43208 1 4.35287 1 3.03539V2.11181ZM13 2.11181H15V3.03539C15 4.35171 14.1524 5.43918 13 5.73198V2.11181ZM4 16.8891H12C12.2861 16.8891 12.5 17.1148 12.5 17.4169V17.9446H3.5V17.4169C3.5 17.1148 3.71387 16.8891 4 16.8891Z" fill="#00AFCA"/>
		</svg>`,
		rankField: 'overall rank',
		fieldTeam: 'Overall rank',
		numberField: '',
	},
}

//----------- PROTOTYPE FUNCTIONS  ----------------------
d3.selection.prototype.patternify = function (params) {
	var container = this
	var selector = params.selector
	var elementTag = params.tag
	var data = params.data || [selector]

	// Pattern in action
	var selection = container.selectAll('.' + selector).data(data, (d, i) => {
		if (typeof d === 'object') {
			if (d.id) {
				return d.id
			}
		}
		return i
	})
	selection.exit().remove()
	selection = selection.enter().append(elementTag).merge(selection)
	selection.attr('class', selector)
	return selection
}

const globals = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			globals.Android() ||
			globals.BlackBerry() ||
			globals.iOS() ||
			globals.Opera() ||
			globals.Windows()
		)
	},
	get isMobile() {
		return window.innerWidth <= 576
	},
	get device() {
		return window.innerWidth <= 576 ? 'mobile' : 'desktop'
	},
}

function ordinal_suffix_of(i) {
	var j = i % 10,
		k = i % 100
	if (j == 1 && k != 11) {
		return i + 'st'
	}
	if (j == 2 && k != 12) {
		return i + 'nd'
	}
	if (j == 3 && k != 13) {
		return i + 'rd'
	}
	return i + 'th'
}

function parseNumber(str) {
	return parseInt(
		String(str)
			.trim()
			.replaceAll('%', '')
			.replaceAll(',', '')
			.replaceAll('$', '')
	)
}

function formatThousand(num) {
	if (typeof num === 'number') {
		return d3.format(',')(num)
	}

	return num
}

function formatSi(num) {
	if (typeof num === 'number') {
		return d3.format('s')(num)
	}

	return num
}

function formatNumber(v) {
	const num = parseNumber(v)

	// if (num > 1000000) {
	//   return Math.round(num / 1000000) + "M";
	// }

	return Math.round(num / 1000) + 'K'
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}

function getRandomId() {
	return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

function initDropdown({ list, id, cb, placeholder, ...rest }) {
	const select = document.querySelector(id)
	const options = list.slice()

	const choice = new Choices(select, {
		choices: [
			...(placeholder
				? [{ selected: true, disabled: true, value: '', label: placeholder }]
				: []),
			...options,
		],
		position: 'bottom',
		shouldSort: false,
		itemSelectText: '',
		placeholder: false,
		searchResultLimit: options.length,
		searchEnabled: false,
		...rest,
	})

	select.addEventListener(
		'change',
		function (event) {
			const value = event.detail.value
			cb(value)
		},
		false
	)

	return choice
}

function getRankValue(rank, isSame) {
	return (isSame ? '=' : '') + (rank < 10 ? '0' + rank : rank)
}

const isVisible = function (ele, container) {
	const eleTop = ele.offsetTop
	const eleBottom = eleTop + ele.clientHeight

	const containerTop = container.scrollTop
	const containerBottom = containerTop + container.clientHeight

	// The element is fully visible in the container
	return (
		eleTop >= containerTop && eleBottom <= containerBottom
		// ||
		// // Some part of the element is visible in the container
		// (eleTop < containerTop && containerTop < eleBottom) ||
		// (eleTop < containerBottom && containerBottom < eleBottom)
	)
}

function isDescendant(parent, child) {
	var node = child.parentNode
	while (node != null) {
		if (node == parent) {
			return true
		}
		node = node.parentNode
	}
	return false
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// And swap it with the current element.
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}

function updateCssVar(varName, value) {
	const root = document.documentElement
	root.style.setProperty(varName, value)
}

function sanitize(str) {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, '')
	return str.trim().split(' ').join('')
}

function loadSvg(url) {
	const xhr = new XMLHttpRequest()

	xhr.open('GET', url, true)

	xhr.overrideMimeType('text/plain')

	return new Promise((res, rej) => {
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					res(xhr.responseText)
				} else {
					rej(new Error('Error'))
				}
			}
		}

		xhr.send()
	})
}

function initTooltip(node, content, options) {
	let tip = node._tippy

	if (tip) {
		tip.destroy()
	}

	if (content) {
		return tippy(node, {
			content,
			allowHTML: true,
			maxWidth: 350,
			arrow: true,
			theme: 'light',
			animation: 'scale',
			duration: 0,
			trigger: 'mouseenter click',
			popperOptions: {
				modifiers: [
					{
						name: 'computeStyles',
						options: {
							gpuAcceleration: false, // true by default
						},
					},
				],
			},
			...(options || {}),
		})
	}

	return null
}