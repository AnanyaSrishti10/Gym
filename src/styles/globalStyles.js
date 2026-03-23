export const makeStyle = (dark) => `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  :root{
    --bg:${dark?"#080808":"#f4f4f0"};
    --surface:${dark?"#101010":"#ffffff"};
    --surface2:${dark?"#181818":"#f0f0eb"};
    --border:${dark?"#222":"#e0e0d8"};
    --accent:#e8ff47;--accent2:#ff4757;--accent3:#47b8ff;--accent4:#bf7bff;
    --text:${dark?"#f0f0f0":"#111"};--muted:${dark?"#555":"#888"};
    --font-display:'Bebas Neue',sans-serif;--font-body:'DM Sans',sans-serif;--r:18px;
  }
  html{scroll-behavior:smooth;}
  body{background:var(--bg);color:var(--text);font-family:var(--font-body);overflow-x:hidden;transition:background .3s,color .3s;}
  .app{min-height:100vh;display:flex;flex-direction:column;}
  input,textarea,select{color-scheme:${dark?"dark":"light"};}

  /* NAV */
  .nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:11px 28px;background:${dark?"rgba(8,8,8,.93)":"rgba(244,244,240,.96)"};backdrop-filter:blur(24px);border-bottom:1px solid var(--border);}
  .nav-logo{font-family:var(--font-display);font-size:26px;letter-spacing:4px;color:var(--accent);cursor:pointer;user-select:none;}
  .nav-links{display:flex;gap:2px;flex-wrap:wrap;}
  .nav-btn{background:none;border:none;color:var(--muted);font-family:var(--font-body);font-size:11px;font-weight:600;padding:7px 10px;border-radius:6px;cursor:pointer;transition:all .2s;letter-spacing:.7px;text-transform:uppercase;}
  .nav-btn:hover{color:var(--text);background:var(--surface2);}
  .nav-btn.active{color:var(--accent);background:rgba(232,255,71,.1);}
  .nav-right{display:flex;align-items:center;gap:8px;}
  .theme-btn{background:var(--surface2);border:1px solid var(--border);border-radius:8px;width:34px;height:34px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;transition:all .2s;}
  .theme-btn:hover{border-color:var(--accent);}
  .nav-cta{background:var(--accent);color:#000;font-family:var(--font-body);font-size:11px;font-weight:800;padding:8px 18px;border-radius:8px;border:none;cursor:pointer;transition:all .2s;letter-spacing:.7px;text-transform:uppercase;}
  .nav-cta:hover{background:#d4eb2e;transform:translateY(-1px);box-shadow:0 5px 18px rgba(232,255,71,.35);}

  /* SHARED */
  .page{padding-top:62px;flex:1;}
  .section{padding:80px 56px;position:relative;}
  .section-header{text-align:center;margin-bottom:56px;}
  .section-tag{display:inline-block;font-size:10px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--accent);margin-bottom:12px;padding:5px 14px;background:rgba(232,255,71,.08);border:1px solid rgba(232,255,71,.15);border-radius:20px;}
  .section-title{font-family:var(--font-display);font-size:clamp(40px,5vw,72px);line-height:.95;letter-spacing:1.5px;}
  .section-title span{color:var(--accent);}
  .section-sub{font-size:15px;color:var(--muted);margin-top:12px;max-width:520px;margin-left:auto;margin-right:auto;line-height:1.7;}
  .divider{height:1px;background:linear-gradient(90deg,transparent,var(--border) 20%,var(--border) 80%,transparent);margin:0 56px;}
  .btn-primary{background:var(--accent);color:#000;font-family:var(--font-body);font-size:13px;font-weight:800;padding:13px 30px;border-radius:10px;border:none;cursor:pointer;transition:all .25s;}
  .btn-primary:hover{background:#d4eb2e;transform:translateY(-2px);box-shadow:0 10px 30px rgba(232,255,71,.3);}
  .btn-outline{background:none;color:var(--text);font-family:var(--font-body);font-size:13px;font-weight:600;padding:13px 30px;border-radius:10px;border:1px solid var(--border);cursor:pointer;transition:all .25s;}
  .btn-outline:hover{border-color:var(--accent);color:var(--accent);}
  .card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:24px;}
  .fi,.fta,.fsel{background:var(--surface2);border:1px solid var(--border);border-radius:10px;color:var(--text);font-family:var(--font-body);font-size:14px;padding:11px 14px;transition:border-color .2s;outline:none;width:100%;}
  .fi:focus,.fta:focus,.fsel:focus{border-color:var(--accent);}
  .fi::placeholder,.fta::placeholder{color:var(--muted);}
  .fta{resize:none;}
  .fl{font-size:11px;font-weight:700;color:var(--muted);letter-spacing:1.2px;text-transform:uppercase;display:block;margin-bottom:6px;}
  .fg{margin-bottom:16px;}

  /* ANIMATIONS */
  @keyframes fadeUp{from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);}}
  @keyframes spin{to{transform:rotate(360deg);}}
  @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-12px);}}
  @keyframes pulse-ring{0%,100%{transform:scale(1);opacity:.4;}50%{transform:scale(1.06);opacity:.85;}}
  @keyframes ticker{from{transform:translateX(0);}to{transform:translateX(-50%);}}
  @keyframes glow-p{0%,100%{box-shadow:0 0 40px rgba(232,255,71,.1);}50%{box-shadow:0 0 80px rgba(232,255,71,.2);}}
  @keyframes chat-pop{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
  @keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}
  @keyframes slideUp{from{opacity:0;transform:translateY(30px) scale(.95);}to{opacity:1;transform:translateY(0) scale(1);}}
  @keyframes fab-idle{0%,100%{box-shadow:0 6px 30px rgba(232,255,71,.5),0 0 0 0 rgba(232,255,71,.4);}50%{box-shadow:0 8px 36px rgba(232,255,71,.65),0 0 0 10px rgba(232,255,71,0);}}
  .fade-in{animation:fadeUp .55s ease forwards;}

  /* CHATBOT ROOT */
  .chatbot-root{position:fixed;bottom:0;left:0;right:0;z-index:999;display:flex;flex-direction:column;align-items:center;pointer-events:none;}
  .chatbot-root>*{pointer-events:all;}

  /* HERO */
  .hero{min-height:calc(100vh - 62px);display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:50px;padding:70px 56px;position:relative;overflow:hidden;}
  .blob{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;}
  .b1{width:550px;height:550px;background:radial-gradient(circle,rgba(232,255,71,.1),transparent 70%);top:-180px;right:-80px;}
  .b2{width:460px;height:460px;background:radial-gradient(circle,rgba(71,184,255,.07),transparent 70%);bottom:-80px;left:60px;}
  .b3{width:280px;height:280px;background:radial-gradient(circle,rgba(191,123,255,.08),transparent 70%);top:50%;left:44%;}
  .hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(232,255,71,.08);border:1px solid rgba(232,255,71,.2);padding:6px 14px;border-radius:22px;margin-bottom:24px;font-size:11px;font-weight:800;color:var(--accent);letter-spacing:2px;text-transform:uppercase;}
  .hero-title{font-family:var(--font-display);font-size:clamp(56px,7vw,108px);line-height:.88;letter-spacing:2px;margin-bottom:22px;}
  .hero-title span{color:var(--accent);}
  .hero-title .outline{-webkit-text-stroke:2px var(--text);color:transparent;}
  .hero-sub{font-size:16px;color:var(--muted);line-height:1.75;max-width:440px;margin-bottom:36px;}
  .hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
  .hero-stats{display:flex;gap:40px;margin-top:50px;}
  .h-sv{font-family:var(--font-display);font-size:44px;color:var(--accent);line-height:1;}
  .h-sl{font-size:11px;color:var(--muted);margin-top:3px;letter-spacing:1.5px;text-transform:uppercase;}
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;}
  .orb-wrap{position:relative;width:400px;height:400px;animation:float 6s ease-in-out infinite;}
  .orb-ring{position:absolute;border-radius:50%;border:1px solid rgba(232,255,71,.1);animation:pulse-ring 3s ease-in-out infinite;}
  .orb-ring.r1{inset:-26px;}.orb-ring.r2{inset:-54px;animation-delay:.5s;border-color:rgba(71,184,255,.07);}
  .orb-ring.r3{inset:-86px;animation-delay:1s;border-color:rgba(191,123,255,.05);}
  .orb{width:100%;height:100%;border-radius:50%;background:radial-gradient(circle at 33% 33%,#282818 0%,#111 50%,#060606 100%);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;animation:glow-p 4s ease-in-out infinite;}
  .orb::before{content:'';position:absolute;inset:-4px;border-radius:50%;background:conic-gradient(var(--accent) 0deg 90deg,transparent 90deg 190deg,var(--accent3) 190deg 250deg,transparent 250deg 360deg);z-index:-1;animation:spin 10s linear infinite;}
  .orb::after{content:'';position:absolute;top:10%;left:14%;width:28%;height:18%;background:radial-gradient(ellipse,rgba(255,255,255,.12),transparent 70%);border-radius:50%;transform:rotate(-30deg);}
  .orb-inner{display:flex;flex-direction:column;align-items:center;gap:10px;z-index:1;position:relative;}
  .orb-emoji{font-size:76px;filter:drop-shadow(0 0 22px rgba(232,255,71,.5));}
  .orb-text{font-family:var(--font-display);font-size:18px;color:var(--accent);letter-spacing:4px;}
  .fc{position:absolute;background:${dark?"rgba(12,12,12,.93)":"rgba(255,255,255,.96)"};backdrop-filter:blur(14px);border:1px solid var(--border);border-radius:12px;padding:12px 16px;}
  .fc.fc1{top:30px;right:-32px;}.fc.fc2{bottom:50px;left:-40px;}.fc.fc3{top:50%;right:-48px;transform:translateY(-50%);}
  .fc-val{font-family:var(--font-display);font-size:26px;color:var(--accent);line-height:1;}
  .fc-label{font-size:10px;color:var(--muted);margin-top:2px;letter-spacing:1px;text-transform:uppercase;}

  /* TICKER */
  .ticker-wrap{overflow:hidden;background:var(--accent);padding:11px 0;}
  .ticker{display:flex;white-space:nowrap;animation:ticker 22s linear infinite;}
  .ticker-item{font-family:var(--font-display);font-size:17px;color:#000;letter-spacing:2px;padding:0 28px;}

  /* SHOWCASE */
  .showcase-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}
  .sc-card{border-radius:22px;overflow:hidden;position:relative;cursor:pointer;transition:transform .4s;aspect-ratio:3/4;border:1px solid var(--border);}
  .sc-card:hover{transform:translateY(-8px) scale(1.02);}
  .sc-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;}
  .sc-content{position:relative;z-index:2;text-align:center;padding:20px;}
  .sc-emoji{font-size:88px;filter:drop-shadow(0 20px 40px rgba(0,0,0,.6));margin-bottom:14px;display:block;}
  .sc-title{font-family:var(--font-display);font-size:38px;margin-bottom:6px;}
  .sc-sub{font-size:12px;color:rgba(255,255,255,.55);}
  .sc-label{position:absolute;bottom:18px;left:50%;transform:translateX(-50%);background:rgba(8,8,8,.88);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:8px 20px;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;white-space:nowrap;}

  /* FEATURES */
  .features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
  .feat-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:30px 26px;transition:all .35s;cursor:pointer;position:relative;overflow:hidden;}
  .feat-card::before{content:'';position:absolute;inset:0;opacity:0;transition:opacity .35s;background:radial-gradient(circle at 30% 30%,rgba(232,255,71,.07),transparent 70%);}
  .feat-card:hover{border-color:rgba(232,255,71,.4);transform:translateY(-5px);box-shadow:0 18px 50px rgba(0,0,0,.18);}
  .feat-card:hover::before{opacity:1;}
  .feat-icon-wrap{width:52px;height:52px;border-radius:12px;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:18px;}
  .feat-title{font-family:var(--font-display);font-size:26px;margin-bottom:8px;}
  .feat-desc{font-size:13px;color:var(--muted);line-height:1.6;}
  .feat-arrow{margin-top:16px;font-size:18px;color:var(--accent);opacity:0;transform:translateX(-6px);transition:all .3s;}
  .feat-card:hover .feat-arrow{opacity:1;transform:translateX(0);}

  /* ABOUT */
  .about-layout{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;}
  .about-3d{width:360px;height:360px;border-radius:28px;position:relative;overflow:hidden;background:linear-gradient(135deg,#141414 0%,#080808 100%);border:1px solid var(--border);box-shadow:18px 18px 50px rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;animation:float 5s ease-in-out infinite;}
  .about-3d::before{content:'';position:absolute;top:-60%;left:-60%;width:200%;height:200%;background:conic-gradient(from 180deg,rgba(232,255,71,.07) 0deg,transparent 60deg,rgba(71,184,255,.05) 180deg,transparent 240deg,rgba(191,123,255,.07) 300deg,transparent 360deg);animation:spin 15s linear infinite;}
  .about-3d-content{position:relative;z-index:1;text-align:center;}
  .about-ftag{position:absolute;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:9px 14px;font-size:11px;font-weight:700;}
  .about-ftag.t1{top:-8px;right:-20px;color:var(--accent);}
  .about-ftag.t2{bottom:8px;left:-28px;color:var(--accent3);}
  .about-title{font-family:var(--font-display);font-size:clamp(36px,4.5vw,64px);line-height:.95;margin-bottom:20px;}
  .about-title span{color:var(--accent);}
  .about-li{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--muted);margin-bottom:12px;}
  .a-check{width:26px;height:26px;border-radius:7px;background:rgba(232,255,71,.1);border:1px solid rgba(232,255,71,.2);display:flex;align-items:center;justify-content:center;color:var(--accent);font-size:12px;flex-shrink:0;}
  .team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:60px;}
  .team-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:24px 18px;text-align:center;transition:all .3s;}
  .team-card:hover{border-color:rgba(232,255,71,.3);transform:translateY(-4px);}
  .team-av{width:64px;height:64px;border-radius:50%;margin:0 auto 14px;display:flex;align-items:center;justify-content:center;font-size:30px;border:2px solid rgba(232,255,71,.2);background:var(--surface2);}

  /* TESTIMONIALS */
  .test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .test-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px;transition:all .3s;position:relative;overflow:hidden;}
  .test-card::before{content:'"';position:absolute;top:-8px;right:16px;font-family:var(--font-display);font-size:110px;color:rgba(232,255,71,.05);line-height:1;pointer-events:none;}
  .test-card:hover{border-color:rgba(232,255,71,.25);transform:translateY(-3px);}

  /* PRICING */
  .pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:center;}
  .price-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:32px 28px;position:relative;overflow:hidden;transition:all .3s;}
  .price-card.featured{border-color:var(--accent);background:${dark?"linear-gradient(160deg,rgba(232,255,71,.06),var(--surface) 50%)":"linear-gradient(160deg,rgba(232,255,71,.06),#fff 50%)"};transform:scale(1.04);}
  .price-popular{position:absolute;top:18px;right:18px;background:var(--accent);color:#000;font-size:9px;font-weight:900;padding:3px 10px;border-radius:18px;letter-spacing:1.5px;text-transform:uppercase;}

  /* CONTACT */
  .contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:start;}
  .contact-title{font-family:var(--font-display);font-size:clamp(36px,4vw,64px);line-height:.95;margin-bottom:18px;}
  .contact-title span{color:var(--accent);}
  .contact-form{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:36px;}
  .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
  .form-success{background:rgba(232,255,71,.1);border:1px solid rgba(232,255,71,.3);border-radius:9px;padding:11px 16px;margin-bottom:18px;color:var(--accent);font-size:13px;font-weight:700;}

  /* FOOTER */
  .footer{background:var(--surface);border-top:1px solid var(--border);padding:56px 56px 28px;}
  .footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:44px;margin-bottom:44px;}
  .footer-logo{font-family:var(--font-display);font-size:34px;color:var(--accent);letter-spacing:3px;margin-bottom:12px;}
  .footer-col-title{font-family:var(--font-display);font-size:18px;margin-bottom:16px;}
  .footer-link{display:block;font-size:13px;color:var(--muted);margin-bottom:9px;cursor:pointer;transition:color .2s;}
  .footer-link:hover{color:var(--accent);}
  .footer-bottom{border-top:1px solid var(--border);padding-top:22px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
  .soc-btn{width:36px;height:36px;border-radius:7px;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;transition:all .2s;}
  .soc-btn:hover{background:var(--accent);border-color:var(--accent);}

  /* WORKOUT */
  .filter-btn{background:var(--surface);border:1px solid var(--border);color:var(--muted);font-family:var(--font-body);font-size:12px;font-weight:600;padding:7px 18px;border-radius:18px;cursor:pointer;transition:all .2s;}
  .filter-btn:hover,.filter-btn.active{background:var(--accent);color:#000;border-color:var(--accent);}
  .wcard{background:var(--surface);border:1px solid var(--border);border-radius:16px;overflow:hidden;cursor:pointer;transition:all .3s;}
  .wcard:hover{transform:translateY(-4px);border-color:var(--accent);box-shadow:0 14px 44px rgba(0,0,0,.18);}
  .wcard-badge{position:absolute;top:10px;right:10px;background:rgba(8,8,8,.82);backdrop-filter:blur(8px);border:1px solid var(--border);border-radius:18px;font-size:10px;font-weight:700;padding:3px 10px;text-transform:uppercase;letter-spacing:.8px;}
  .wcard-badge.hard{color:var(--accent2);border-color:var(--accent2);}
  .wcard-badge.medium{color:var(--accent);border-color:var(--accent);}
  .wcard-badge.easy{color:var(--accent3);border-color:var(--accent3);}

  /* NUTRITION */
  .nut-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
  .macro-bar{height:7px;background:var(--border);border-radius:4px;overflow:hidden;margin-top:14px;}
  .macro-fill{height:100%;border-radius:4px;}

  /* PROGRESS */
  .prog-overview{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-bottom:36px;}
  .stat-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:22px;transition:all .2s;}
  .stat-card:hover{border-color:var(--accent);transform:translateY(-2px);}
  .chart-cont{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:32px;margin-bottom:24px;}
  .bar-chart{display:flex;align-items:flex-end;gap:10px;height:140px;}
  .bar-wrap{flex:1;display:flex;flex-direction:column;align-items:center;gap:7px;height:100%;}
  .bar{width:100%;border-radius:5px 5px 0 0;background:linear-gradient(180deg,var(--accent) 0%,rgba(232,255,71,.25) 100%);cursor:pointer;transition:filter .2s;}
  .bar:hover{filter:brightness(1.15);}

  /* SCHEDULE */
  .day-card{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;cursor:pointer;transition:all .2s;}
  .day-card:hover,.day-card.active{border-color:var(--accent);background:rgba(232,255,71,.06);}
  .sched-item{display:flex;align-items:center;gap:18px;background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:18px 22px;transition:all .2s;cursor:pointer;margin-bottom:12px;}
  .sched-item:hover{border-color:var(--accent);transform:translateX(4px);}
  .s-done{background:rgba(76,175,80,.14);color:#4caf50;}
  .s-upcoming{background:rgba(232,255,71,.1);color:var(--accent);}
  .s-missed{background:rgba(255,71,87,.1);color:var(--accent2);}

  /* CHALLENGES */
  .challenge-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}
  .challenge-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:26px;transition:all .3s;position:relative;overflow:hidden;}
  .challenge-card:hover{transform:translateY(-4px);border-color:var(--accent);}
  .challenge-prog{height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin:12px 0 6px;}
  .challenge-fill{height:100%;border-radius:3px;background:var(--accent);}

  /* METRICS */
  .metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:32px;}
  .bmi-meter{position:relative;height:18px;border-radius:9px;overflow:hidden;margin:20px 0;background:linear-gradient(90deg,#47b8ff 0%,#4caf50 25%,#e8ff47 55%,#ff9f43 75%,#ff4757 100%);}
  .bmi-needle{position:absolute;top:-4px;width:4px;height:26px;background:#fff;border-radius:2px;transform:translateX(-50%);transition:left .8s;box-shadow:0 0 8px rgba(0,0,0,.5);}

  /* CALCULATOR */
  .calc-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;}
  .calc-result{background:linear-gradient(135deg,rgba(232,255,71,.08),transparent);border:1px solid rgba(232,255,71,.2);border-radius:var(--r);padding:28px;text-align:center;}

  /* MUSIC */
  .music-progress{height:5px;background:var(--border);border-radius:3px;overflow:hidden;margin-bottom:8px;cursor:pointer;}
  .music-prog-fill{height:100%;background:var(--accent);border-radius:3px;transition:width .5s;}
  .music-controls{display:flex;align-items:center;justify-content:center;gap:20px;}
  .m-btn{background:none;border:none;color:var(--muted);font-size:20px;cursor:pointer;transition:all .2s;padding:8px;}
  .m-btn:hover{color:var(--accent);transform:scale(1.1);}
  .m-play{background:var(--accent);color:#000;border:none;border-radius:50%;width:52px;height:52px;font-size:22px;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;}
  .m-play:hover{background:#d4eb2e;transform:scale(1.05);}
  .vol-slider{flex:1;-webkit-appearance:none;appearance:none;height:4px;background:var(--border);border-radius:2px;outline:none;cursor:pointer;}
  .vol-slider::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;border-radius:50%;background:var(--accent);cursor:pointer;}
  .playlist-item{display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);cursor:pointer;transition:color .2s;}
  .playlist-item:last-child{border-bottom:none;}
  .playlist-item:hover,.playlist-item.active{color:var(--accent);}

  /* MODAL */
  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);backdrop-filter:blur(10px);z-index:300;display:flex;align-items:center;justify-content:center;padding:20px;}
  .modal{background:var(--surface);border:1px solid var(--border);border-radius:22px;padding:40px;max-width:480px;width:100%;position:relative;max-height:90vh;overflow-y:auto;}
  .modal-close{position:absolute;top:18px;right:18px;background:var(--surface2);border:1px solid var(--border);border-radius:7px;color:var(--text);width:34px;height:34px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;}
  .ex-item{display:flex;align-items:center;justify-content:space-between;background:var(--surface2);border-radius:10px;padding:12px 16px;margin-bottom:8px;}
  .ex-check{width:28px;height:28px;border-radius:50%;border:2px solid var(--border);background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;transition:all .2s;flex-shrink:0;}
  .ex-check.done{background:var(--accent);border-color:var(--accent);color:#000;font-weight:900;}

  /* CHATBOT */
  .chatbot-fab{position:relative;bottom:auto;left:auto;transform:none;z-index:1;margin:0 0 32px 0;width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#e8ff47,#c8df20);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:28px;box-shadow:0 6px 30px rgba(232,255,71,.5),0 2px 8px rgba(0,0,0,.4);transition:background .3s,box-shadow .3s;animation:fab-idle 3s ease-in-out infinite;}
  .chatbot-fab:hover{box-shadow:0 12px 44px rgba(232,255,71,.75);}
  .chatbot-fab.open{animation:none;background:linear-gradient(135deg,#ff4757,#cc2233);box-shadow:0 6px 30px rgba(255,71,87,.5);}
  .chatbot-panel{position:relative;bottom:auto;left:auto;transform:none;z-index:1;margin-bottom:8px;width:400px;background:${dark?"#0d0d0d":"#ffffff"};border:1px solid ${dark?"rgba(232,255,71,.15)":"#e0e0d8"};border-radius:24px;box-shadow:0 32px 80px rgba(0,0,0,.5);display:flex;flex-direction:column;overflow:hidden;animation:slideUp .35s cubic-bezier(.34,1.56,.64,1) forwards;}
  .chatbot-header{padding:0;background:${dark?"linear-gradient(135deg,#151508,#0d0d0d)":"linear-gradient(135deg,#f0f0e8,#fff)"};border-bottom:1px solid var(--border);flex-shrink:0;}
  .chatbot-header-top{padding:16px 18px 12px;display:flex;align-items:center;gap:14px;}
  .bot-avatar-wrap{position:relative;flex-shrink:0;}
  .bot-avatar{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#e8ff47,#b8cf10);display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 0 0 3px rgba(232,255,71,.2);}
  .bot-online-ring{position:absolute;bottom:1px;right:1px;width:11px;height:11px;border-radius:50%;background:#4caf50;border:2px solid ${dark?"#0d0d0d":"#fff"};}
  .bot-name{font-family:var(--font-display);font-size:20px;color:var(--accent);letter-spacing:1.5px;line-height:1;}
  .bot-tagline{font-size:11px;color:var(--muted);margin-top:2px;}
  .bot-status{font-size:11px;color:#4caf50;display:flex;align-items:center;gap:5px;margin-top:3px;}
  .bot-dot{width:6px;height:6px;border-radius:50%;background:#4caf50;animation:blink 1.5s infinite;}
  .chatbot-header-actions{display:flex;gap:6px;flex-shrink:0;}
  .hdr-btn{background:var(--surface2);border:1px solid var(--border);border-radius:8px;width:32px;height:32px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .2s;color:var(--muted);}
  .hdr-btn:hover{border-color:var(--accent);color:var(--accent);}
  .chatbot-moods{display:flex;gap:6px;padding:0 18px 14px;overflow-x:auto;}
  .chatbot-moods::-webkit-scrollbar{display:none;}
  .mood-chip{background:var(--surface2);border:1px solid var(--border);border-radius:20px;padding:5px 12px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;transition:all .2s;flex-shrink:0;}
  .mood-chip:hover,.mood-chip.active{background:var(--accent);color:#000;border-color:var(--accent);}
  .chatbot-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;background:${dark?"#080808":"#f6f6f2"};}
  .chatbot-msgs::-webkit-scrollbar{width:3px;}
  .chatbot-msgs::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px;}
  .msg-row{display:flex;gap:10px;align-items:flex-end;}
  .msg-row.user{flex-direction:row-reverse;}
  .msg-avatar{width:28px;height:28px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:14px;}
  .msg-avatar.ai-av{background:linear-gradient(135deg,#e8ff47,#b8cf10);}
  .msg-avatar.user-av{background:linear-gradient(135deg,#47b8ff,#2080cc);}
  .msg-col{display:flex;flex-direction:column;gap:3px;max-width:78%;}
  .msg-row.user .msg-col{align-items:flex-end;}
  .chat-bubble{padding:11px 15px;border-radius:16px;font-size:13px;line-height:1.6;animation:chat-pop .25s ease;word-break:break-word;}
  .chat-bubble.ai{background:${dark?"#1a1a1a":"#ffffff"};border:1px solid var(--border);border-bottom-left-radius:4px;}
  .chat-bubble.user{background:linear-gradient(135deg,#e8ff47,#d4eb20);color:#000;border-bottom-right-radius:4px;font-weight:600;}
  .msg-time{font-size:10px;color:var(--muted);padding:0 4px;}
  .typing-row{display:flex;gap:5px;background:${dark?"#1a1a1a":"#fff"};border:1px solid var(--border);border-radius:16px;border-bottom-left-radius:4px;padding:12px 16px;}
  .typing-dot{width:7px;height:7px;border-radius:50%;background:var(--muted);animation:blink 1.2s ease infinite;}
  .typing-dot:nth-child(2){animation-delay:.2s;}
  .typing-dot:nth-child(3){animation-delay:.4s;}
  .chatbot-chips{display:flex;flex-wrap:nowrap;gap:6px;padding:10px 14px;overflow-x:auto;border-top:1px solid var(--border);background:${dark?"#0d0d0d":"#fff"};flex-shrink:0;}
  .chatbot-chips::-webkit-scrollbar{display:none;}
  .bot-chip{background:var(--surface2);border:1px solid var(--border);border-radius:20px;padding:6px 13px;font-size:11px;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;color:var(--text);}
  .bot-chip:hover{border-color:var(--accent);color:var(--accent);background:rgba(232,255,71,.06);}
  .chatbot-input-row{display:flex;gap:8px;padding:14px 16px;border-top:1px solid var(--border);background:${dark?"#0d0d0d":"#fff"};flex-shrink:0;}
  .chatbot-input{flex:1;background:${dark?"#1a1a1a":"#f4f4f0"};border:1px solid var(--border);border-radius:12px;color:var(--text);font-family:var(--font-body);font-size:13px;padding:10px 14px;outline:none;transition:border-color .2s;}
  .chatbot-input:focus{border-color:var(--accent);}
  .chatbot-input::placeholder{color:var(--muted);}
  .chatbot-send{background:linear-gradient(135deg,#e8ff47,#d0e820);color:#000;border:none;border-radius:12px;padding:10px 16px;font-weight:900;cursor:pointer;font-size:16px;transition:all .2s;flex-shrink:0;}
  .chatbot-send:hover{transform:scale(1.05);box-shadow:0 4px 16px rgba(232,255,71,.4);}
  .chat-unread{position:absolute;top:-3px;right:-3px;width:20px;height:20px;border-radius:50%;background:var(--accent2);color:#fff;font-size:10px;font-weight:900;display:flex;align-items:center;justify-content:center;border:2px solid ${dark?"#080808":"#f4f4f0"};animation:pulse-ring .8s ease-in-out infinite;}

  /* MOBILE NAV */
  .mobile-nav{display:none;position:fixed;bottom:0;left:0;right:0;z-index:201;background:${dark?"rgba(8,8,8,.97)":"rgba(255,255,255,.97)"};backdrop-filter:blur(20px);border-top:1px solid var(--border);padding:8px 4px;padding-bottom:calc(8px + env(safe-area-inset-bottom));}
  .mobile-nav-inner{display:flex;justify-content:space-around;align-items:center;}
  .mob-btn{display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:none;cursor:pointer;padding:6px 10px;border-radius:10px;transition:all .2s;color:var(--muted);font-family:var(--font-body);font-size:9px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;min-width:52px;}
  .mob-btn .mob-icon{font-size:20px;line-height:1;transition:transform .2s;}
  .mob-btn:hover,.mob-btn.active{color:var(--accent);}
  .mob-btn.active .mob-icon{transform:scale(1.15);}
  .mob-drawer{position:fixed;bottom:0;left:0;right:0;z-index:202;background:${dark?"#0d0d0d":"#fff"};border-top:1px solid var(--border);border-radius:20px 20px 0 0;padding:16px 20px;padding-bottom:calc(16px + env(safe-area-inset-bottom));animation:slideUp .3s cubic-bezier(.34,1.56,.64,1) forwards;}
  .mob-drawer-handle{width:36px;height:4px;border-radius:2px;background:var(--border);margin:0 auto 16px;}
  .mob-drawer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;}
  .mob-drawer-item{display:flex;flex-direction:column;align-items:center;gap:6px;background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px 8px;cursor:pointer;transition:all .2s;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);}
  .mob-drawer-item:hover,.mob-drawer-item.active{border-color:var(--accent);color:var(--accent);background:rgba(232,255,71,.06);}
  .mob-drawer-item span:first-child{font-size:24px;}
  .mob-overlay{position:fixed;inset:0;z-index:201;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);}

  /* RESPONSIVE */
  @media(max-width:1024px){
    .section{padding:60px 32px;}.divider{margin:0 32px;}
    .hero{padding:50px 32px;gap:32px;}.orb-wrap{width:320px;height:320px;}
    .fc.fc1{right:-10px;top:10px;}.fc.fc2{left:-10px;bottom:20px;}.fc.fc3{display:none;}
    .features-grid{grid-template-columns:repeat(2,1fr);}
    .about-layout{gap:40px;}.about-3d{width:300px;height:300px;}
    .team-grid{grid-template-columns:repeat(2,1fr);}
    .test-grid{grid-template-columns:repeat(2,1fr);}
    .price-card.featured{transform:scale(1.02);}
    .footer-grid{grid-template-columns:1fr 1fr;gap:28px;}
    .prog-overview{grid-template-columns:repeat(2,1fr);}
    .challenge-grid{grid-template-columns:repeat(2,1fr);}
    .chatbot-panel{width:360px;}
  }
  @media(max-width:768px){
    .nav-links,.nav-cta{display:none;}.nav{padding:10px 16px;}
    .mobile-nav{display:block;}.page{padding-top:62px;padding-bottom:80px;}
    .section{padding:44px 16px;}.divider{margin:0 16px;}.section-header{margin-bottom:36px;}
    .hero{grid-template-columns:1fr;min-height:auto;padding:40px 16px 32px;gap:36px;text-align:center;}
    .hero-visual{order:-1;}.hero-btns{justify-content:center;}.hero-stats{justify-content:center;gap:24px;}
    .orb-wrap{width:240px;height:240px;}.orb-ring.r2,.orb-ring.r3{display:none;}
    .fc.fc1,.fc.fc2,.fc.fc3{display:none;}.orb-emoji{font-size:52px;}
    .showcase-grid{grid-template-columns:1fr;gap:14px;}.sc-card{aspect-ratio:4/3;}
    .features-grid{grid-template-columns:1fr 1fr;gap:12px;}
    .about-layout{grid-template-columns:1fr;gap:32px;}.about-3d{width:260px;height:260px;}
    .team-grid{grid-template-columns:repeat(2,1fr);gap:12px;}
    .test-grid{grid-template-columns:1fr;gap:14px;}
    .pricing-grid{grid-template-columns:1fr;gap:14px;}.price-card.featured{transform:scale(1);}
    .contact-layout{grid-template-columns:1fr;gap:28px;}
    .footer{padding:40px 16px 20px;}.footer-grid{grid-template-columns:1fr 1fr;gap:20px;}
    .prog-overview{grid-template-columns:repeat(2,1fr);gap:12px;}
    .nut-grid{grid-template-columns:1fr;gap:14px;}
    .challenge-grid{grid-template-columns:1fr;gap:14px;}
    .metrics-grid{grid-template-columns:1fr 1fr;gap:12px;}
    .calc-grid{grid-template-columns:1fr;gap:16px;}.form-row{grid-template-columns:1fr!important;}
    .chatbot-panel{width:calc(100vw - 24px);}
  }
  @media(max-width:480px){
    .features-grid{grid-template-columns:1fr;}
    .footer-grid{grid-template-columns:1fr;gap:24px;}
    .prog-overview{grid-template-columns:1fr 1fr;}
    .metrics-grid{grid-template-columns:1fr;}
    .hero{padding:32px 14px 24px;}.section{padding:36px 14px;}
    .orb-wrap{width:200px;height:200px;}
    .chatbot-panel{width:calc(100vw - 16px);}
  }
`;
