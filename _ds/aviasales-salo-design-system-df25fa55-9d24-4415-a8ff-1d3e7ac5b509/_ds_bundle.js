/* @ds-bundle: {"format":3,"namespace":"AviasalesSaloDesignSystem_df25fa","components":[],"sourceHashes":{"ui_kits/aviasales-app/app.jsx":"f094cf2fdc11","ui_kits/aviasales-app/data.jsx":"1652b9f963c9","ui_kits/aviasales-app/icons.jsx":"f79fb50f7a59","ui_kits/aviasales-app/ios-frame.jsx":"be3343be4b51","ui_kits/aviasales-app/screens.jsx":"86f816c549a0","ui_kits/aviasales-web/app.jsx":"22e3795afe18","ui_kits/aviasales-web/components.jsx":"f15994f46254","ui_kits/aviasales-web/data.jsx":"1652b9f963c9","ui_kits/aviasales-web/icons.jsx":"f79fb50f7a59","ui_kits/aviasales-web/screens.jsx":"a87b4d77d47a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AviasalesSaloDesignSystem_df25fa = window.AviasalesSaloDesignSystem_df25fa || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/aviasales-app/app.jsx
try { (() => {
/* Aviasales iOS app — controller. Renders screens inside the device frame. */

function AviaApp() {
  const [tab, setTab] = React.useState('search');
  const [sub, setSub] = React.useState('home'); // home | results | detail
  const [ticket, setTicket] = React.useState(null);
  let content,
    showTabs = true;
  if (tab === 'search') {
    if (sub === 'detail' && ticket) {
      content = /*#__PURE__*/React.createElement(DetailScreen, {
        t: ticket,
        onBack: () => setSub('results')
      });
      showTabs = false;
    } else if (sub === 'results') content = /*#__PURE__*/React.createElement(ResultsScreen, {
      onBack: () => setSub('home'),
      onOpen: t => {
        setTicket(t);
        setSub('detail');
      }
    });else content = /*#__PURE__*/React.createElement(SearchScreen, {
      onSearch: () => setSub('results')
    });
  } else if (tab === 'profile') {
    content = /*#__PURE__*/React.createElement(ProfileScreen, null);
  } else if (tab === 'heart') {
    content = /*#__PURE__*/React.createElement(SimpleScreen, {
      icon: "heart_outline",
      title: "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",
      text: "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u0431\u0438\u043B\u0435\u0442\u044B \u0438 \u0441\u043B\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435\u043C \u0446\u0435\u043D\u044B \u2014 \u043C\u044B \u043F\u0440\u0438\u0448\u043B\u0451\u043C \u043F\u0443\u0448, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u0434\u0435\u0448\u0435\u0432\u0435\u0435\u0442."
    });
  } else {
    content = /*#__PURE__*/React.createElement(SimpleScreen, {
      icon: "order",
      title: "\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u0437\u0430\u043A\u0430\u0437\u043E\u0432",
      text: "\u041A\u0443\u043F\u043B\u0435\u043D\u043D\u044B\u0435 \u0431\u0438\u043B\u0435\u0442\u044B \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C. \u041C\u043E\u0436\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C."
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "aviasales-app"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, content), showTabs && /*#__PURE__*/React.createElement(TabBar, {
    tab: tab,
    onTab: k => {
      setTab(k);
      setSub('home');
    }
  }));
}
function Stage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 56,
      padding: 48,
      flexWrap: 'wrap',
      background: 'radial-gradient(120% 120% at 50% 0%, #eaf2ff 0%, #f2f4f5 60%)'
    }
  }, /*#__PURE__*/React.createElement(IOSDevice, null, /*#__PURE__*/React.createElement(AviaApp, null)));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Stage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-app/data.jsx
try { (() => {
/* Mock data for the Aviasales web kit. */

const AIRLINES = {
  TK: {
    name: 'Turkish Airlines',
    color: '#e8112d'
  },
  SU: {
    name: 'Аэрофлот',
    color: '#00226b'
  },
  S7: {
    name: 'S7 Airlines',
    color: '#7ac143'
  },
  EK: {
    name: 'Emirates',
    color: '#d71921'
  },
  PC: {
    name: 'Pegasus',
    color: '#003c71'
  }
};
const TICKETS = [{
  id: 1,
  al: 'TK',
  cabin: 'Эконом',
  price: '18 450',
  tags: [['green', '−15% дешевле обычного'], ['fog', 'Багаж включён']],
  out: {
    dep: '14:30',
    from: 'SVO',
    to: 'IST',
    arr: '18:10',
    dur: '2 ч 40 мин',
    stops: 'прямой',
    warn: false
  },
  back: {
    dep: '21:05',
    from: 'IST',
    to: 'SVO',
    arr: '00:55',
    dur: '2 ч 50 мин',
    stops: 'прямой',
    warn: false
  }
}, {
  id: 2,
  al: 'PC',
  cabin: 'Эконом',
  price: '12 980',
  tags: [['orange', 'Горящая цена']],
  out: {
    dep: '06:15',
    from: 'SVO',
    to: 'IST',
    arr: '12:40',
    dur: '5 ч 25 мин',
    stops: '1 пересадка',
    mid: 'AYT 1 ч 30 мин',
    warn: false
  },
  back: {
    dep: '19:30',
    from: 'IST',
    to: 'SVO',
    arr: '03:10',
    dur: '6 ч 40 мин',
    stops: '1 пересадка',
    mid: 'AYT 2 ч 05 мин',
    warn: false
  }
}, {
  id: 3,
  al: 'SU',
  cabin: 'Эконом',
  price: '21 300',
  tags: [['fog', 'Возврат билета']],
  out: {
    dep: '09:50',
    from: 'SVO',
    to: 'IST',
    arr: '13:25',
    dur: '2 ч 35 мин',
    stops: 'прямой',
    warn: false
  },
  back: {
    dep: '15:40',
    from: 'IST',
    to: 'SVO',
    arr: '19:35',
    dur: '2 ч 55 мин',
    stops: 'прямой',
    warn: false
  }
}, {
  id: 4,
  al: 'S7',
  cabin: 'Эконом',
  price: '14 120',
  tags: [['green', '−8% дешевле обычного']],
  out: {
    dep: '23:10',
    from: 'SVO',
    to: 'IST',
    arr: '08:05',
    dur: '7 ч 55 мин',
    stops: '1 пересадка',
    mid: 'TBS 4 ч 20 мин',
    warn: true
  },
  back: {
    dep: '11:25',
    from: 'IST',
    to: 'SVO',
    arr: '16:10',
    dur: '3 ч 45 мин',
    stops: '1 пересадка',
    mid: 'GYD 1 ч 10 мин',
    warn: false
  }
}, {
  id: 5,
  al: 'EK',
  cabin: 'Бизнес',
  price: '64 700',
  tags: [['fog', '2 места багажа'], ['fog', 'Lounge']],
  out: {
    dep: '12:00',
    from: 'SVO',
    to: 'IST',
    arr: '15:35',
    dur: '2 ч 35 мин',
    stops: 'прямой',
    warn: false
  },
  back: {
    dep: '17:20',
    from: 'IST',
    to: 'SVO',
    arr: '21:15',
    dur: '2 ч 55 мин',
    stops: 'прямой',
    warn: false
  }
}];
const DIRECTIONS = [{
  city: 'Стамбул',
  country: 'Турция',
  price: '12 980',
  img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80'
}, {
  city: 'Дубай',
  country: 'ОАЭ',
  price: '23 400',
  img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80'
}, {
  city: 'Ереван',
  country: 'Армения',
  price: '9 750',
  img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=600&q=80'
}, {
  city: 'Тбилиси',
  country: 'Грузия',
  price: '8 200',
  img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80'
}];
Object.assign(window, {
  AIRLINES,
  TICKETS,
  DIRECTIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-app/icons.jsx
try { (() => {
/* Icon — fetches an SVG from the design-system asset folder and inlines it,
   forcing currentColor so it can be tinted via CSS `color`. */
const _iconCache = {};
const COLORED = new Set(['aviasales_colored', 'google_colored', 'allowed_colored', 'warning_colored', 'restricted_colored']);
function Icon({
  name,
  size = 24,
  className = '',
  style = {}
}) {
  const [html, setHtml] = React.useState(_iconCache[`${size}/${name}`] || '');
  React.useEffect(() => {
    let alive = true;
    const key = `${size}/${name}`;
    if (_iconCache[key]) {
      setHtml(_iconCache[key]);
      return;
    }
    fetch(`../../assets/icons/${size}/${name}.svg`).then(r => r.ok ? r.text() : Promise.reject()).then(t => {
      // normalise size + recolor to currentColor (unless intrinsically colored)
      let svg = t.replace(/<svg/, `<svg width="${size}" height="${size}"`);
      if (!COLORED.has(name)) {
        svg = svg.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"').replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');
      }
      _iconCache[key] = svg;
      if (alive) setHtml(svg);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    className: `icon ${className}`,
    style: style,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-app/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-app/screens.jsx
try { (() => {
/* Aviasales iOS app — screens. Tokens via app-kit.css. */

function Shape({
  name,
  className
}) {
  const [h, setH] = React.useState('');
  React.useEffect(() => {
    fetch(`../../assets/visual_language/shapes/${name}.svg`).then(r => r.text()).then(t => setH(t.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"'))).catch(() => {});
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: h
    }
  });
}
function AppLogo() {
  const [word, setWord] = React.useState('');
  React.useEffect(() => {
    fetch('../../assets/logo/text-aviasales.svg').then(r => r.text()).then(t => setWord(t.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"'))).catch(() => {});
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/sign-white.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "word",
    dangerouslySetInnerHTML: {
      __html: word
    }
  }));
}
function SearchScreen({
  onSearch
}) {
  const [trip, setTrip] = React.useState('rt');
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-hero"
  }, /*#__PURE__*/React.createElement(Shape, {
    name: "shape-3",
    className: "shape"
  }), /*#__PURE__*/React.createElement("div", {
    className: "toprow"
  }, /*#__PURE__*/React.createElement(AppLogo, null), /*#__PURE__*/React.createElement("button", {
    className: "gpill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 24
  }))), /*#__PURE__*/React.createElement("h1", null, "\u041D\u0430\u0439\u0434\u0451\u043C \u0434\u0435\u0448\u0451\u0432\u044B\u0439 \u0431\u0438\u043B\u0435\u0442"), /*#__PURE__*/React.createElement("div", {
    className: "app-segwrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-seg"
  }, /*#__PURE__*/React.createElement("button", {
    className: trip === 'rt' ? 'on' : '',
    onClick: () => setTrip('rt')
  }, "\u0422\u0443\u0434\u0430-\u043E\u0431\u0440\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("button", {
    className: trip === 'ow' ? 'on' : '',
    onClick: () => setTrip('ow')
  }, "\u0412 \u043E\u0434\u043D\u0443")))), /*#__PURE__*/React.createElement("div", {
    className: "search-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-2col",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-field"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "airplane",
    size: 24,
    className: "ic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u041E\u0442\u043A\u0443\u0434\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "\u041C\u043E\u0441\u043A\u0432\u0430"))), /*#__PURE__*/React.createElement("div", {
    className: "sc-field"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "marker",
    size: 24,
    className: "ic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u041A\u0443\u0434\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "\u0421\u0442\u0430\u043C\u0431\u0443\u043B"))), /*#__PURE__*/React.createElement("button", {
    className: "sc-swap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "swap",
    size: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sc-2col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sc-field"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    size: 24,
    className: "ic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u0422\u0443\u0434\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "23 \u043D\u043E\u044F\u0431"))), /*#__PURE__*/React.createElement("div", {
    className: "sc-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u041E\u0431\u0440\u0430\u0442\u043D\u043E"), trip === 'rt' ? /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "30 \u043D\u043E\u044F\u0431") : /*#__PURE__*/React.createElement("div", {
    className: "val ph"
  }, "+ \u043E\u0431\u0440\u0430\u0442\u043D\u043E")))), /*#__PURE__*/React.createElement("div", {
    className: "sc-field"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "passenger",
    size: 24,
    className: "ic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u044B \u0438 \u043A\u043B\u0430\u0441\u0441"), /*#__PURE__*/React.createElement("div", {
    className: "val"
  }, "1 \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440, \u044D\u043A\u043E\u043D\u043E\u043C")))), /*#__PURE__*/React.createElement("div", {
    className: "sc-find"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 24
  }), " \u041D\u0430\u0439\u0442\u0438 \u0431\u0438\u043B\u0435\u0442\u044B")), /*#__PURE__*/React.createElement("div", {
    className: "app-section"
  }, /*#__PURE__*/React.createElement("h2", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F")), /*#__PURE__*/React.createElement("div", {
    className: "dir-scroll"
  }, DIRECTIONS.map(d => /*#__PURE__*/React.createElement("div", {
    className: "dir-mini",
    key: d.city,
    style: {
      backgroundImage: `url(${d.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    onClick: onSearch
  }, /*#__PURE__*/React.createElement("div", {
    className: "city"
  }, d.city), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, "\u043E\u0442 ", /*#__PURE__*/React.createElement("b", null, d.price, " \u20BD"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }));
}
function MLeg({
  leg
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mt-leg"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, leg.dep), /*#__PURE__*/React.createElement("div", {
    className: "c"
  }, leg.from)), /*#__PURE__*/React.createElement("div", {
    className: "path"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dur"
  }, leg.dur), /*#__PURE__*/React.createElement("div", {
    className: "ln"
  }, leg.stops !== 'прямой' && /*#__PURE__*/React.createElement("span", {
    className: "stop"
  })), /*#__PURE__*/React.createElement("div", {
    className: `x ${leg.warn ? 'warn' : ''}`
  }, leg.stops)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, leg.arr), /*#__PURE__*/React.createElement("div", {
    className: "c"
  }, leg.to)));
}
function ResultsScreen({
  onBack,
  onOpen
}) {
  const [sort, setSort] = React.useState('cheap');
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const id = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(id);
  }, []);
  const sorted = sort === 'cheap' ? [...TICKETS].sort((a, b) => parseInt(a.price.replace(/\s/g, '')) - parseInt(b.price.replace(/\s/g, ''))) : TICKETS;
  return /*#__PURE__*/React.createElement("div", {
    className: "aviasales-app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left",
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rt"
  }, "\u041C\u043E\u0441\u043A\u0432\u0430 \u2192 \u0421\u0442\u0430\u043C\u0431\u0443\u043B"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "23\u201330 \u043D\u043E\u044F\u0431 \xB7 1 \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440"))), /*#__PURE__*/React.createElement("div", {
    className: "res-sort"
  }, [['cheap', 'Дешевле'], ['fast', 'Быстрее'], ['best', 'Удобнее']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `res-chip ${sort === k ? 'on' : ''}`,
    onClick: () => setSort(k)
  }, l)), /*#__PURE__*/React.createElement("button", {
    className: "res-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "filters",
    size: 16
  }), " \u0424\u0438\u043B\u044C\u0442\u0440\u044B")), loading && /*#__PURE__*/React.createElement("div", {
    className: "shimmer-bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, loading && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--text_secondary)',
      fontSize: 13,
      padding: '14px 0 0'
    }
  }, "\u0418\u0449\u0435\u043C \u043F\u043E 100+ \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u2026"), /*#__PURE__*/React.createElement("div", {
    className: "res-list",
    style: {
      opacity: loading ? 0.5 : 1,
      transition: 'opacity .2s'
    }
  }, sorted.map(t => {
    const al = AIRLINES[t.al];
    return /*#__PURE__*/React.createElement("div", {
      className: "mt",
      key: t.id,
      onClick: () => onOpen(t)
    }, /*#__PURE__*/React.createElement("div", {
      className: "mt-head"
    }, /*#__PURE__*/React.createElement("div", {
      className: "logo",
      style: {
        background: al.color
      }
    }, t.al), /*#__PURE__*/React.createElement("div", {
      className: "al"
    }, al.name, " \xB7 ", t.cabin), /*#__PURE__*/React.createElement("div", {
      className: "price"
    }, t.price, " \u20BD")), /*#__PURE__*/React.createElement(MLeg, {
      leg: t.out
    }), /*#__PURE__*/React.createElement(MLeg, {
      leg: t.back
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-tags"
    }, t.tags.map(([c, l], i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: `tagm ${c}`
    }, l))));
  }))));
}
function DetailScreen({
  t,
  onBack
}) {
  const al = AIRLINES[t.al];
  const seg = (leg, date) => /*#__PURE__*/React.createElement("div", {
    className: "det-seg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ah"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: {
      background: al.color
    }
  }, t.al), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, al.name), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, date, " \xB7 ", leg.dur))), /*#__PURE__*/React.createElement("div", {
    className: "det-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, leg.dep, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text_secondary)',
      fontWeight: 400
    }
  }, leg.from)), /*#__PURE__*/React.createElement("div", {
    className: "where"
  }, "\u0412\u044B\u043B\u0435\u0442 \xB7 ", leg.from === 'SVO' ? 'Шереметьево' : 'Аэропорт ' + leg.from), leg.mid && /*#__PURE__*/React.createElement("div", {
    className: "det-mid"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "transfer",
    size: 16
  }), " \u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 ", leg.mid), /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, leg.arr, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text_secondary)',
      fontWeight: 400
    }
  }, leg.to)), /*#__PURE__*/React.createElement("div", {
    className: "where"
  }, "\u041F\u0440\u0438\u043B\u0451\u0442 \xB7 ", leg.to === 'IST' ? 'Istanbul Airport' : 'Аэропорт ' + leg.to))));
  return /*#__PURE__*/React.createElement("div", {
    className: "det"
  }, /*#__PURE__*/React.createElement("div", {
    className: "det-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_left",
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "rt"
  }, "\u041C\u043E\u0441\u043A\u0432\u0430 \u2192 \u0421\u0442\u0430\u043C\u0431\u0443\u043B")), /*#__PURE__*/React.createElement("div", {
    className: "det-body"
  }, seg(t.out, '23 нояб, пт'), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--ink_150)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 18
    }
  }), seg(t.back, '30 нояб, пт'), /*#__PURE__*/React.createElement("div", {
    className: "det-info"
  }, t.tags.map(([c, l], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `tagm ${c}`
  }, l)), /*#__PURE__*/React.createElement("span", {
    className: "tagm fog"
  }, "\u0411\u0430\u0433\u0430\u0436 23 \u043A\u0433"))), /*#__PURE__*/React.createElement("div", {
    className: "det-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "from"
  }, "\u0437\u0430 1 \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, t.price, " \u20BD")), /*#__PURE__*/React.createElement("button", {
    className: "cta"
  }, "\u041A \u043F\u043E\u043A\u0443\u043F\u043A\u0435 ", /*#__PURE__*/React.createElement(Icon, {
    name: "launch",
    size: 24
  }))));
}
function SimpleScreen({
  icon,
  title,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "aviasales-app",
    style: {
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: 32,
      color: 'var(--text_secondary)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--icon_default)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-brand)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--text_primary)',
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      maxWidth: 240
    }
  }, text)));
}
function ProfileScreen() {
  return /*#__PURE__*/React.createElement("div", {
    className: "aviasales-app"
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prof-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "av"
  }, "\u041F\u0421"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nm"
  }, "\u041F\u0451\u0442\u0440 \u0421\u043C\u0438\u0440\u043D\u043E\u0432"), /*#__PURE__*/React.createElement("div", {
    className: "em"
  }, "petya@example.com"))), /*#__PURE__*/React.createElement("div", {
    className: "loyalty"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "\u041A\u044D\u0448\u0431\u044D\u043A-\u0431\u0430\u043B\u0430\u043D\u0441"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "3 240 \u20BD")), /*#__PURE__*/React.createElement("div", {
    className: "prof-card"
  }, [['order', 'Мои заказы'], ['heart', 'Избранное'], ['card', 'Способы оплаты'], ['passenger', 'Пассажиры']].map(([ic, t], i) => /*#__PURE__*/React.createElement("div", {
    className: "prow",
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    className: "ic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 24,
    className: "ch"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "prof-card"
  }, [['bell', 'Уведомления'], ['settings', 'Настройки'], ['help', 'Помощь']].map(([ic, t], i) => /*#__PURE__*/React.createElement("div", {
    className: "prow",
    key: i
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    className: "ic"
  }), /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, t), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron_right",
    size: 24,
    className: "ch"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  })));
}
function TabBar({
  tab,
  onTab
}) {
  const tabs = [['search', 'search', 'Поиск'], ['heart', 'heart', 'Избранное'], ['order', 'order', 'Заказы'], ['profile', 'profile', 'Профиль']];
  return /*#__PURE__*/React.createElement("div", {
    className: "tabbar"
  }, tabs.map(([k, ic, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `tab ${tab === k ? 'on' : ''}`,
    onClick: () => onTab(k)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, l))));
}
Object.assign(window, {
  SearchScreen,
  ResultsScreen,
  DetailScreen,
  ProfileScreen,
  SimpleScreen,
  TabBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-web/app.jsx
try { (() => {
/* App — routes between the search landing and the results view; opens ticket detail. */

function App() {
  const [screen, setScreen] = React.useState('search'); // 'search' | 'results'
  const [loading, setLoading] = React.useState(false);
  const [sort, setSort] = React.useState('cheap');
  const [detail, setDetail] = React.useState(null);
  const goResults = () => {
    setScreen('results');
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => setLoading(false), 1400);
  };
  if (screen === 'search') {
    return /*#__PURE__*/React.createElement("div", {
      className: "app search-bg"
    }, /*#__PURE__*/React.createElement(Header, {
      variant: "brand"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero"
    }, /*#__PURE__*/React.createElement(Shape, {
      name: "shape-3",
      className: "shape s1"
    }), /*#__PURE__*/React.createElement(Shape, {
      name: "shape-5",
      className: "shape s2"
    }), /*#__PURE__*/React.createElement("div", {
      className: "section",
      style: {
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement("h1", {
      className: "htitle"
    }, "\u041D\u0430\u0439\u0434\u0451\u043C \u0441\u0430\u043C\u044B\u0439 \u0434\u0435\u0448\u0451\u0432\u044B\u0439 \u0431\u0438\u043B\u0435\u0442")), /*#__PURE__*/React.createElement("div", {
      className: "section"
    }, /*#__PURE__*/React.createElement(SearchWidget, {
      onSearch: goResults
    }))), /*#__PURE__*/React.createElement("div", {
      className: "dir-wrap"
    }, /*#__PURE__*/React.createElement(Directions, {
      onPick: goResults
    })), /*#__PURE__*/React.createElement(Footer, null));
  }
  const tickets = sort === 'cheap' ? [...TICKETS].sort((a, b) => parseInt(a.price.replace(/\s/g, '')) - parseInt(b.price.replace(/\s/g, ''))) : sort === 'fast' ? [...TICKETS].sort((a, b) => a.out.stops.localeCompare(b.out.stops)) : TICKETS;
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(Header, {
    variant: "brand"
  }), /*#__PURE__*/React.createElement("div", {
    className: "results-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "results-search"
  }, /*#__PURE__*/React.createElement(MiniSearch, {
    onSearch: goResults
  }))), /*#__PURE__*/React.createElement("div", {
    className: "results-body"
  }, /*#__PURE__*/React.createElement(FilterSidebar, null), /*#__PURE__*/React.createElement("div", null, loading && /*#__PURE__*/React.createElement("div", {
    className: "shimmer-bar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--text_secondary)'
    }
  }, loading ? 'Ищем по 100+ авиакомпаниям…' : `${tickets.length} билетов · Москва → Стамбул · 23–30 нояб`), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setScreen('search');
    },
    style: {
      fontSize: 14,
      color: 'var(--text_link)',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u0438\u0441\u043A")), /*#__PURE__*/React.createElement(SortTabs, {
    value: sort,
    onChange: setSort
  }), /*#__PURE__*/React.createElement("div", {
    className: "tickets",
    style: {
      opacity: loading ? 0.5 : 1,
      transition: 'opacity .2s'
    }
  }, tickets.map(t => /*#__PURE__*/React.createElement(TicketCard, {
    key: t.id,
    t: t,
    onOpen: setDetail
  }))))), /*#__PURE__*/React.createElement(Footer, null), detail && /*#__PURE__*/React.createElement(DetailSheet, {
    t: detail,
    onClose: () => setDetail(null)
  }));
}
function Shape({
  name,
  className
}) {
  const [html, setHtml] = React.useState('');
  React.useEffect(() => {
    fetch(`../../assets/visual_language/shapes/${name}.svg`).then(r => r.text()).then(t => {
      setHtml(t.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"'));
    }).catch(() => {});
  }, [name]);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-web/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-web/components.jsx
try { (() => {
/* Shared chrome + search widgets for the Aviasales web kit. */

function Logo({
  white
}) {
  const [word, setWord] = React.useState('');
  React.useEffect(() => {
    let alive = true;
    fetch('../../assets/logo/text-aviasales.svg').then(r => r.text()).then(t => {
      const svg = t.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"');
      if (alive) setWord(svg);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "brand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sign",
    src: `../../assets/logo/${white ? 'sign-white' : 'sign-color'}.svg`,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    className: "word",
    style: {
      color: white ? '#fff' : 'var(--ink_800)',
      display: 'inline-flex'
    },
    dangerouslySetInnerHTML: {
      __html: word
    }
  }));
}
function Header({
  variant = 'brand'
}) {
  const onBrand = variant === 'brand';
  return /*#__PURE__*/React.createElement("header", {
    className: `hdr ${onBrand ? 'on-brand' : 'on-white'}`
  }, /*#__PURE__*/React.createElement(Logo, {
    white: onBrand
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "active",
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tickets",
    size: 24
  }), " \u0410\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442\u044B"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hotels",
    size: 24
  }), " \u041E\u0442\u0435\u043B\u0438"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "auto",
    size: 24
  }), " \u0410\u0440\u0435\u043D\u0434\u0430 \u0430\u0432\u0442\u043E"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "guides",
    size: 24
  }), " \u041A\u0443\u0434\u0430 \u043F\u043E\u043B\u0435\u0442\u0435\u0442\u044C")), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pill"
  }, "RUB \u20BD"), /*#__PURE__*/React.createElement("div", {
    className: "pill"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "profile",
    size: 24
  }), " \u0412\u043E\u0439\u0442\u0438")));
}
function SegTrip({
  value,
  onChange
}) {
  const opts = [['rt', 'Туда-обратно'], ['ow', 'В одну сторону'], ['mx', 'Сложный маршрут']];
  return /*#__PURE__*/React.createElement("div", {
    className: "sw-seg"
  }, opts.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: value === k ? 'on' : '',
    onClick: () => onChange(k)
  }, l)));
}
function Field({
  lab,
  val,
  sub,
  ph,
  focus,
  onClick,
  flex
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `sw-field ${focus ? 'focus' : ''}`,
    style: flex ? {
      flex
    } : undefined,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "lab"
  }, lab), /*#__PURE__*/React.createElement("div", {
    className: `val ${ph ? 'ph' : ''}`
  }, val), sub && /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, sub));
}
function SearchWidget({
  onSearch
}) {
  const [trip, setTrip] = React.useState('rt');
  const [focus, setFocus] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "search-widget"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-tabs"
  }, /*#__PURE__*/React.createElement(SegTrip, {
    value: trip,
    onChange: setTrip
  }), /*#__PURE__*/React.createElement("div", {
    className: "sw-extra"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chk"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "passenger",
    size: 24
  }), " 1 \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440, \u044D\u043A\u043E\u043D\u043E\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "chk"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16
  }), " \u0422\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u044F\u043C\u044B\u0435"))), /*#__PURE__*/React.createElement("div", {
    className: "sw-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sw-places"
  }, /*#__PURE__*/React.createElement(Field, {
    lab: "\u041E\u0442\u043A\u0443\u0434\u0430",
    val: "\u041C\u043E\u0441\u043A\u0432\u0430",
    sub: "MOW \xB7 \u0432\u0441\u0435 \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u044B",
    focus: focus === 'from',
    onClick: () => setFocus('from')
  }), /*#__PURE__*/React.createElement("button", {
    className: "sw-swap",
    title: "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "swap",
    size: 20
  })), /*#__PURE__*/React.createElement(Field, {
    lab: "\u041A\u0443\u0434\u0430",
    val: "\u0421\u0442\u0430\u043C\u0431\u0443\u043B",
    sub: "IST \xB7 \u0410\u044D\u0440\u043E\u043F\u043E\u0440\u0442",
    focus: focus === 'to',
    onClick: () => setFocus('to')
  })), /*#__PURE__*/React.createElement("div", {
    className: "sw-dates"
  }, /*#__PURE__*/React.createElement(Field, {
    lab: "\u0422\u0443\u0434\u0430",
    val: "23 \u043D\u043E\u044F\u0431",
    sub: "\u043F\u0442",
    focus: focus === 'd1',
    onClick: () => setFocus('d1')
  }), trip === 'rt' ? /*#__PURE__*/React.createElement(Field, {
    lab: "\u041E\u0431\u0440\u0430\u0442\u043D\u043E",
    val: "30 \u043D\u043E\u044F\u0431",
    sub: "\u043F\u0442",
    focus: focus === 'd2',
    onClick: () => setFocus('d2')
  }) : /*#__PURE__*/React.createElement(Field, {
    lab: "\u041E\u0431\u0440\u0430\u0442\u043D\u043E",
    val: "+ \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439",
    ph: true,
    focus: focus === 'd2',
    onClick: () => setFocus('d2')
  })), /*#__PURE__*/React.createElement(Field, {
    lab: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u044B",
    val: "1, \u044D\u043A\u043E\u043D\u043E\u043C",
    flex: "1.1",
    focus: focus === 'pax',
    onClick: () => setFocus('pax')
  }), /*#__PURE__*/React.createElement("div", {
    className: "sw-find"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 24
  }), " \u041D\u0430\u0439\u0442\u0438 \u0431\u0438\u043B\u0435\u0442\u044B"))));
}
function MiniSearch({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mini-search"
  }, /*#__PURE__*/React.createElement(Field, {
    lab: "\u041E\u0442\u043A\u0443\u0434\u0430",
    val: "\u041C\u043E\u0441\u043A\u0432\u0430",
    flex: "1.4"
  }), /*#__PURE__*/React.createElement(Field, {
    lab: "\u041A\u0443\u0434\u0430",
    val: "\u0421\u0442\u0430\u043C\u0431\u0443\u043B",
    flex: "1.4"
  }), /*#__PURE__*/React.createElement(Field, {
    lab: "\u0422\u0443\u0434\u0430",
    val: "23 \u043D\u043E\u044F\u0431",
    flex: "1"
  }), /*#__PURE__*/React.createElement(Field, {
    lab: "\u041E\u0431\u0440\u0430\u0442\u043D\u043E",
    val: "30 \u043D\u043E\u044F\u0431",
    flex: "1"
  }), /*#__PURE__*/React.createElement(Field, {
    lab: "\u041F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u044B",
    val: "1, \u044D\u043A\u043E\u043D\u043E\u043C",
    flex: "1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "sw-find"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 24
  }), " \u041D\u0430\u0439\u0442\u0438")));
}
function Footer() {
  const cols = [['Аэрофлот', ['Дешёвые авиабилеты', 'Календарь низких цен', 'Субсидированные билеты', 'Карта низких цен']], ['Компания', ['О нас', 'Вакансии', 'Реклама', 'Партнёрская программа']], ['Помощь', ['Как купить билет', 'Возврат и обмен', 'Багаж', 'Поддержка']]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "inner"
  }, cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    className: "col",
    key: h
  }, /*#__PURE__*/React.createElement("h5", null, h), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      marginLeft: 'auto',
      maxWidth: 240
    }
  }, /*#__PURE__*/React.createElement("h5", null, "Aviasales"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: '19px',
      margin: 0
    }
  }, "\u041C\u0435\u0442\u0430\u043F\u043E\u0438\u0441\u043A \u0430\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442\u043E\u0432 \u2014 \u0441\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u0435\u043C \u0446\u0435\u043D\u044B 700+ \u0430\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432. \u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u2014 \u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0445 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432."))));
}
Object.assign(window, {
  Logo,
  Header,
  SearchWidget,
  MiniSearch,
  Field,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-web/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-web/data.jsx
try { (() => {
/* Mock data for the Aviasales web kit. */

const AIRLINES = {
  TK: {
    name: 'Turkish Airlines',
    color: '#e8112d'
  },
  SU: {
    name: 'Аэрофлот',
    color: '#00226b'
  },
  S7: {
    name: 'S7 Airlines',
    color: '#7ac143'
  },
  EK: {
    name: 'Emirates',
    color: '#d71921'
  },
  PC: {
    name: 'Pegasus',
    color: '#003c71'
  }
};
const TICKETS = [{
  id: 1,
  al: 'TK',
  cabin: 'Эконом',
  price: '18 450',
  tags: [['green', '−15% дешевле обычного'], ['fog', 'Багаж включён']],
  out: {
    dep: '14:30',
    from: 'SVO',
    to: 'IST',
    arr: '18:10',
    dur: '2 ч 40 мин',
    stops: 'прямой',
    warn: false
  },
  back: {
    dep: '21:05',
    from: 'IST',
    to: 'SVO',
    arr: '00:55',
    dur: '2 ч 50 мин',
    stops: 'прямой',
    warn: false
  }
}, {
  id: 2,
  al: 'PC',
  cabin: 'Эконом',
  price: '12 980',
  tags: [['orange', 'Горящая цена']],
  out: {
    dep: '06:15',
    from: 'SVO',
    to: 'IST',
    arr: '12:40',
    dur: '5 ч 25 мин',
    stops: '1 пересадка',
    mid: 'AYT 1 ч 30 мин',
    warn: false
  },
  back: {
    dep: '19:30',
    from: 'IST',
    to: 'SVO',
    arr: '03:10',
    dur: '6 ч 40 мин',
    stops: '1 пересадка',
    mid: 'AYT 2 ч 05 мин',
    warn: false
  }
}, {
  id: 3,
  al: 'SU',
  cabin: 'Эконом',
  price: '21 300',
  tags: [['fog', 'Возврат билета']],
  out: {
    dep: '09:50',
    from: 'SVO',
    to: 'IST',
    arr: '13:25',
    dur: '2 ч 35 мин',
    stops: 'прямой',
    warn: false
  },
  back: {
    dep: '15:40',
    from: 'IST',
    to: 'SVO',
    arr: '19:35',
    dur: '2 ч 55 мин',
    stops: 'прямой',
    warn: false
  }
}, {
  id: 4,
  al: 'S7',
  cabin: 'Эконом',
  price: '14 120',
  tags: [['green', '−8% дешевле обычного']],
  out: {
    dep: '23:10',
    from: 'SVO',
    to: 'IST',
    arr: '08:05',
    dur: '7 ч 55 мин',
    stops: '1 пересадка',
    mid: 'TBS 4 ч 20 мин',
    warn: true
  },
  back: {
    dep: '11:25',
    from: 'IST',
    to: 'SVO',
    arr: '16:10',
    dur: '3 ч 45 мин',
    stops: '1 пересадка',
    mid: 'GYD 1 ч 10 мин',
    warn: false
  }
}, {
  id: 5,
  al: 'EK',
  cabin: 'Бизнес',
  price: '64 700',
  tags: [['fog', '2 места багажа'], ['fog', 'Lounge']],
  out: {
    dep: '12:00',
    from: 'SVO',
    to: 'IST',
    arr: '15:35',
    dur: '2 ч 35 мин',
    stops: 'прямой',
    warn: false
  },
  back: {
    dep: '17:20',
    from: 'IST',
    to: 'SVO',
    arr: '21:15',
    dur: '2 ч 55 мин',
    stops: 'прямой',
    warn: false
  }
}];
const DIRECTIONS = [{
  city: 'Стамбул',
  country: 'Турция',
  price: '12 980',
  img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80'
}, {
  city: 'Дубай',
  country: 'ОАЭ',
  price: '23 400',
  img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80'
}, {
  city: 'Ереван',
  country: 'Армения',
  price: '9 750',
  img: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=600&q=80'
}, {
  city: 'Тбилиси',
  country: 'Грузия',
  price: '8 200',
  img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80'
}];
Object.assign(window, {
  AIRLINES,
  TICKETS,
  DIRECTIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-web/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-web/icons.jsx
try { (() => {
/* Icon — fetches an SVG from the design-system asset folder and inlines it,
   forcing currentColor so it can be tinted via CSS `color`. */
const _iconCache = {};
const COLORED = new Set(['aviasales_colored', 'google_colored', 'allowed_colored', 'warning_colored', 'restricted_colored']);
function Icon({
  name,
  size = 24,
  className = '',
  style = {}
}) {
  const [html, setHtml] = React.useState(_iconCache[`${size}/${name}`] || '');
  React.useEffect(() => {
    let alive = true;
    const key = `${size}/${name}`;
    if (_iconCache[key]) {
      setHtml(_iconCache[key]);
      return;
    }
    fetch(`../../assets/icons/${size}/${name}.svg`).then(r => r.ok ? r.text() : Promise.reject()).then(t => {
      // normalise size + recolor to currentColor (unless intrinsically colored)
      let svg = t.replace(/<svg/, `<svg width="${size}" height="${size}"`);
      if (!COLORED.has(name)) {
        svg = svg.replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"').replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');
      }
      _iconCache[key] = svg;
      if (alive) setHtml(svg);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    className: `icon ${className}`,
    style: style,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-web/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/aviasales-web/screens.jsx
try { (() => {
/* Screen-level pieces: ticket card, filters, sort, directions, detail sheet, screens. */

function Leg({
  leg
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "leg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, leg.dep), /*#__PURE__*/React.createElement("div", {
    className: "c"
  }, leg.from)), /*#__PURE__*/React.createElement("div", {
    className: "path"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dur"
  }, leg.dur), /*#__PURE__*/React.createElement("div", {
    className: "ln"
  }, leg.stops !== 'прямой' && /*#__PURE__*/React.createElement("span", {
    className: "stop",
    style: {
      left: '50%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: `xfer ${leg.warn ? 'warn' : ''}`
  }, leg.stops, leg.mid ? ` · ${leg.mid}` : '')), /*#__PURE__*/React.createElement("div", {
    className: "pt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, leg.arr), /*#__PURE__*/React.createElement("div", {
    className: "c"
  }, leg.to)));
}
function TicketCard({
  t,
  onOpen
}) {
  const al = AIRLINES[t.al];
  return /*#__PURE__*/React.createElement("div", {
    className: "ticket"
  }, /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticket-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: {
      background: al.color
    }
  }, t.al), /*#__PURE__*/React.createElement("div", {
    className: "al"
  }, al.name, " \xB7 ", t.cabin), /*#__PURE__*/React.createElement("div", {
    className: "tags"
  }, t.tags.map(([c, l], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `tag ${c}`
  }, l)))), /*#__PURE__*/React.createElement(Leg, {
    leg: t.out
  }), /*#__PURE__*/React.createElement(Leg, {
    leg: t.back
  })), /*#__PURE__*/React.createElement("div", {
    className: "buy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "from"
  }, "\u0437\u0430 1 \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, t.price, "\xA0\u20BD"), /*#__PURE__*/React.createElement("button", {
    className: "cta",
    onClick: () => onOpen(t)
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "\u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u0430")));
}
function SortTabs({
  value,
  onChange
}) {
  const tabs = [['cheap', 'Дешевле', '12 980 ₽'], ['fast', 'Быстрее', '18 450 ₽'], ['best', 'Удобнее', '14 120 ₽']];
  return /*#__PURE__*/React.createElement("div", {
    className: "sort-tabs"
  }, tabs.map(([k, label, price]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: `sort-tab ${value === k ? 'on' : ''}`,
    onClick: () => onChange(k)
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pr"
  }, price)))));
}
function Check({
  label,
  on,
  price,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fopt",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: `cb ${on ? 'on' : ''}`
  }), /*#__PURE__*/React.createElement("span", null, label), price && /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, price));
}
function FilterSidebar() {
  const [stops, setStops] = React.useState({
    0: true,
    1: true,
    2: false
  });
  const [bag, setBag] = React.useState(true);
  const [chips, setChips] = React.useState({
    refund: false,
    night: false
  });
  return /*#__PURE__*/React.createElement("aside", {
    className: "filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "filter-block"
  }, /*#__PURE__*/React.createElement("h4", null, "\u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438"), /*#__PURE__*/React.createElement(Check, {
    label: "\u0411\u0435\u0437 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A",
    on: stops[0],
    price: "\u043E\u0442 18 450 \u20BD",
    onClick: () => setStops(s => ({
      ...s,
      0: !s[0]
    }))
  }), /*#__PURE__*/React.createElement(Check, {
    label: "1 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430",
    on: stops[1],
    price: "\u043E\u0442 12 980 \u20BD",
    onClick: () => setStops(s => ({
      ...s,
      1: !s[1]
    }))
  }), /*#__PURE__*/React.createElement(Check, {
    label: "2 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0438",
    on: stops[2],
    price: "\u043E\u0442 11 200 \u20BD",
    onClick: () => setStops(s => ({
      ...s,
      2: !s[2]
    }))
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-block"
  }, /*#__PURE__*/React.createElement("h4", null, "\u0411\u0430\u0433\u0430\u0436"), /*#__PURE__*/React.createElement(Check, {
    label: "\u0422\u043E\u043B\u044C\u043A\u043E \u0441 \u0431\u0430\u0433\u0430\u0436\u043E\u043C",
    on: bag,
    onClick: () => setBag(b => !b)
  })), /*#__PURE__*/React.createElement("div", {
    className: "filter-block"
  }, /*#__PURE__*/React.createElement("h4", null, "\u0423\u0434\u043E\u0431\u0441\u0442\u0432\u043E"), /*#__PURE__*/React.createElement("div", {
    className: "fchip-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: `fchip ${chips.refund ? 'on' : ''}`,
    onClick: () => setChips(c => ({
      ...c,
      refund: !c.refund
    }))
  }, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442"), /*#__PURE__*/React.createElement("span", {
    className: `fchip ${chips.night ? 'on' : ''}`,
    onClick: () => setChips(c => ({
      ...c,
      night: !c.night
    }))
  }, "\u0411\u0435\u0437 \u043D\u043E\u0447\u043D\u044B\u0445 \u043F\u0435\u0440\u0435\u0441\u0430\u0434\u043E\u043A"))), /*#__PURE__*/React.createElement("div", {
    className: "filter-block"
  }, /*#__PURE__*/React.createElement("h4", null, "\u0410\u0432\u0438\u0430\u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"), ['Turkish Airlines', 'Аэрофлот', 'S7 Airlines', 'Pegasus'].map(a => /*#__PURE__*/React.createElement(Check, {
    key: a,
    label: a,
    on: true,
    onClick: () => {}
  }))));
}
function Directions({
  onPick
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dir-head"
  }, /*#__PURE__*/React.createElement("h2", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "\u0412\u0441\u0435 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "dir-grid"
  }, DIRECTIONS.map(d => /*#__PURE__*/React.createElement("div", {
    className: "dir-card",
    key: d.city,
    style: {
      backgroundImage: `url(${d.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    onClick: onPick
  }, /*#__PURE__*/React.createElement("div", {
    className: "city"
  }, d.city), /*#__PURE__*/React.createElement("div", {
    className: "country"
  }, d.country), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, "\u043E\u0442 ", /*#__PURE__*/React.createElement("b", null, d.price, " \u20BD"))))));
}
function DetailSheet({
  t,
  onClose
}) {
  const al = AIRLINES[t.al];
  const seg = (leg, dateLabel) => /*#__PURE__*/React.createElement("div", {
    className: "seg-detail"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo",
    style: {
      background: al.color,
      width: 28,
      height: 28,
      borderRadius: 7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 800,
      fontSize: 11
    }
  }, t.al), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, al.name), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text_secondary)',
      fontSize: 13
    }
  }, "\xB7 ", dateLabel, " \xB7 ", leg.dur)), /*#__PURE__*/React.createElement("div", {
    className: "seg-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", {
    className: "bar"
  }), /*#__PURE__*/React.createElement("div", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, leg.dep, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text_secondary)',
      fontWeight: 400
    }
  }, leg.from)), /*#__PURE__*/React.createElement("div", {
    className: "where"
  }, "\u0412\u044B\u043B\u0435\u0442 \xB7 ", leg.from === 'SVO' ? 'Шереметьево' : 'Аэропорт ' + leg.from), leg.mid && /*#__PURE__*/React.createElement("div", {
    className: "seg-mid"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "transfer",
    size: 16
  }), " \u041F\u0435\u0440\u0435\u0441\u0430\u0434\u043A\u0430 ", leg.mid), /*#__PURE__*/React.createElement("div", {
    className: "when"
  }, leg.arr, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text_secondary)',
      fontWeight: 400
    }
  }, leg.to)), /*#__PURE__*/React.createElement("div", {
    className: "where"
  }, "\u041F\u0440\u0438\u043B\u0451\u0442 \xB7 ", leg.to === 'IST' ? 'Istanbul Airport' : 'Аэропорт ' + leg.to))));
  return /*#__PURE__*/React.createElement("div", {
    className: "overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet-head"
  }, /*#__PURE__*/React.createElement("h3", null, "\u041C\u043E\u0441\u043A\u0432\u0430 \u2192 \u0421\u0442\u0430\u043C\u0431\u0443\u043B"), /*#__PURE__*/React.createElement("button", {
    className: "close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cross",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-body"
  }, seg(t.out, '23 нояб, пт'), seg(t.back, '30 нояб, пт'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      paddingTop: 16
    }
  }, t.tags.map(([c, l], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: `tag ${c}`
  }, l)), /*#__PURE__*/React.createElement("span", {
    className: "tag fog"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "baggage",
    size: 16,
    style: {
      marginRight: 4
    }
  }), "\u0411\u0430\u0433\u0430\u0436 23 \u043A\u0433"))), /*#__PURE__*/React.createElement("div", {
    className: "sheet-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text_secondary)'
    }
  }, "\u0437\u0430 1 \u043F\u0430\u0441\u0441\u0430\u0436\u0438\u0440\u0430"), /*#__PURE__*/React.createElement("div", {
    className: "price"
  }, t.price, "\xA0\u20BD")), /*#__PURE__*/React.createElement("button", {
    className: "cta"
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u043A\u0443\u043F\u043A\u0435 ", /*#__PURE__*/React.createElement(Icon, {
    name: "launch",
    size: 24
  })))));
}
Object.assign(window, {
  TicketCard,
  SortTabs,
  FilterSidebar,
  Directions,
  DetailSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/aviasales-web/screens.jsx", error: String((e && e.message) || e) }); }

})();
