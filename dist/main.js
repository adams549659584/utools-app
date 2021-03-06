(() => {
  'use strict';
  var e = {
    n: t => {
      var i = t && t.__esModule ? () => t.default : () => t;
      return e.d(i, { a: i }), i;
    },
    d: (t, i) => {
      for (var n in i) e.o(i, n) && !e.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: i[n] });
    },
    o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  };
  const t = require('electron'),
    i = require('electron-settings');
  var n = e.n(i);
  const s = require('electron-is');
  var o = e.n(s),
    r = {};
  const a = require('path');
  var c = e.n(a);
  const l = require('fs');
  var h = e.n(l);
  const d = require('crypto');
  var u = e.n(d);
  function p(e, i, n) {
    if (!global.isOnLine) return;
    const s = t.net.request({ method: 'POST', url: e });
    s.on('response', e => {
      const t = [];
      e.on('data', e => {
        t.push(e);
      }),
        e.on('end', () => {
          let e = null;
          try {
            e = JSON.parse(Buffer.concat(t).toString());
          } catch (e) {}
          e && 'function' == typeof n && n(e);
        });
    }),
      s.setHeader('content-type', 'application/x-www-form-urlencoded'),
      s.end(i, 'utf-8');
  }
  const w = require('asar');
  var g = e.n(w);
  const m = require('zlib');
  var f = e.n(m);
  function y() {
    return Math.floor(65536 * (1 + Math.random()))
      .toString(16)
      .substring(1);
  }
  function b() {
    const e = y() + y() + y() + y() + y() + y() + y() + y();
    return u()
      .createHash('md5')
      .update(e + Date.now())
      .digest('hex');
  }
  function C(e) {
    return e.startsWith('Double')
      ? 'darwin' === process.platform
        ? e.replace('Meta', 'Command').replace('Alt', 'Option')
        : e.replace('Control', 'Ctrl')
      : e.includes('Meta+')
      ? 'darwin' === process.platform
        ? e.replace('Meta+', 'Command+')
        : e.replace('Meta+', 'Super+')
      : e;
  }
  const v = require('original-fs');
  var W = e.n(v);
  const S = require('semver');
  var x = e.n(S),
    P = {
      yi:
        "$$$h$i$p$q%)%*%+%V%y&=&`&d&i'1'4'j'l(0(T(^(t)M*H+I/2/6/I0^1%2>3v4<4i4x5A5V5v7h8X9=9W9d:<:U;J=g?^@gAfAzB:C_DDDFFfGCGKGSH5HSIbJ>L>M/M5M_MlMzOBONOYPOPPPcQHR/S$S5THUbUgUrVXV_W1W2WXX`YCYmYsYvYwZBZrZsZtZu[7[;]4]B]w^;^Y^y_X___la+c*cBcScvdhdie/e`fsg`hoiTkemamin;nAnVn[oWo]pEpfqWqerJrXt;t?tpuIuPvRvbvuw1y)yCykyw,$v&6'x(;(O)h)p*K+.+D+S+`+d/u0T0c0e1j1m282[2j4^5S6H8&8h9e;9<6>2>8>[?R?V?]?o@8@?@OC+C1CzDVEoF*H=I`K)K2KSK[KnL;LZM1M8MKMoO<P7Q4QaRYV8VuWhXEXzYPZ'[l]D_=_X`5a*fDg(g]g`haiak1k6k?kUkakcl5l>lwmsmyo6q%qernsMsZsqt%thu/u0vKxfxr,%L'9(/(3(p)K*/*v+6+;+@+X.:/F/J/R0Y1n1o1u2N2Y363=3b4G566a7D7E7`7e7v8A9$:Q;);1;2;K;^;q<?<@<Q<y=t=v>=>]>k?/?s@YB=BVEwFHG)GHH5HDHcHpHzIBIcJ+JPJhL(LAM'N1N9N=NZO$O&OJORPMQ/T>TcUzVnX/Y<Y[[f^Y_sbSbobpc@cMd2e+eBfJfogliYj'jXmUmVn=qDrDs8s9sCsxt*t8tItatfuluqutw9wEwYy*y6",
      ding: "$%&A8*<eHtOLU9Vk]8hryU,9yEHJPJRKVObRkTUToUslxmPpLssxv,'K)s.P6i;eLyN_QVRVU_VpWwXl`]bLc7cme1f_wuwx",
      zheng: "$%%['m1rD3D7E^InLJSGT)T0WS[C[P[s[w[x^.aVb`e[fjgIhlhri?ksmnnNqV,*Q/&<O=7A7CRD%L5N)P.P`Q$^7^j_cc3e8m5oF,$_7N97:`</<RCOKSL[PDRPU+WDX*`Gk^qi",
      kao: "$&QETyfrmfvm,1c=>BHlE,'QQ6Wc`Rk1mbn$pE",
      qiao:
        "$&%$)()Q+<.W/*3d4y=F=Y?*?`FCFMFdGEMPSFSOTyUZVMW;WfWz_J`sb_kDl.l?nLwK,%j&t'1'5'i)7+U+V+^8N>S?y@'BTM_PcQrSzT&U5UWUxV(V/Zd[G_Dg7gViqkol;vGvXx>,&L(D8X:p<]=IAvAwBnC/DHDIDVL'LOLSNlSMSNTaUBUkXx]E^Za0a6aGa[aqbhc]jdk0k2",
      yu:
        "$&$4%M%Z%a%c'+'E(/)C)a)f*(*y.:.q/W0H5g7q8?9&<%<t=C=U?fANASAvD+DWDrE$HdHfINITJrK*K1K3L*L.L]M1N/O9P1P7PhR5SLTAT]TjUHUwY%Y&['[d]Z_L`Ba$a%a8bHcOdMe(e)eCgMgzh7iBn.nonyoBofpdt%vjw?xnxoy'z(,$G$V$m)4)P)`)g)h)u*6*M*e+n/[2k40424=4c4l5[7<7S8M9D9H9P;m<%>:>c?Z@+@>A3AYCSCUDRECEQESG)G1GRGoHtK.L=LoLxM(MmO4OEQ8RTSCT0T@V+V<VBW6WyX7X8XUYLYaZ;ZQ[.[5])^e`/`xa<aPaub/c<e]h3jWkCkSkhmnmonLpgrHrKrPrQs;s>t+t.unv(y)y*y6,$T%5%K&K&v')'r(c(r)a)y+z.4.Y/k1r2c373x5a648G8]9E9W:9;?<[<o=/>1>VCRECF3FfG/H:H@HAI^IiIrJOJoK*KCL3M)N+NqOmPhQTR[S?UhWBZT[J]A]r]t^C^n_(_._/_xbZbsd$e9egfAffg$gShriFiljVjnl2l3l=lLl]lfmlnLn`oPp.q^r/r1r4r]tBtZtituuTv$vFy(y3yG",
      qi:
        "$'$2%0%f%p%r')'8)b*I.<.b0T1N3:8n919D9X:6;Z;p<><A<B<M=J>G?B?ZB1DJF(GtHEHOIfK:KOR0R8RFRISqTkWLYn]B]^^n`/a0aKbFbGbQbtcVd<e?hQhdilk*manAndneoHo^qSr+sUt@u)uavNvPwJwcx;xVx]x^y$y0,%Q&)(G(V)n*%*&*U.Z.^.j/F/p0+1+1^3j3u5@5A6q7X:3</=jClE<ERG8G<H@IsJWK&KjO2OhRlS.TOTdTjU0UVUbUdV>VhVnVoWLWxYBYh[R[T`b`da+bBcae3e4e6e<eHeNeli*iGj4lHnOoVqls`t3t@tLvZxSx^xhyy,&q'e'o(&(Z*?*B*H+N+x+y/9/Y0^0o2j3c3g6S7&909V;n=cAAAiB8CHEWHBHGJkKmLnNuRWTiUKXZZp][^)_QbXcwhahbi7j:j;kglAlNn/o3pbq)s.s6s>vLv[x]xc",
      shang: "$($0'N.=<4CID9F8PxPy_*a1b9dgq(,&G*v+>/V5j7E7t?hWfeci/,%b/]3U6D6Z:@?P@6@nR5TjVBa;l<",
      xia: "$)$1%6(w)c+_5^788Q9b;o?zB+ClGbGfSCS`Y2[icMhPnHqfuhxL,<N=4>LC0COC[FNGhK_KkM/Q;QXSyT2U$UGW=]H^DfPj/k_rhs0t2,&w)u**.m/M9?=TA8FkGiJ$S>SnTJU$Z)Z2]J]n_edNhum'npsnwF",
      han:
        "$*&_'o.B0M23246i6o8j;=;G<yAOCaJyMBP0R3T/TS]A_Sbsc4e*gtkml>mkowoxq5q6r?wyyv,*I/;/I/h2Q2b3&3W7u99:q=e=n?bA=BkCeFgJ3NZPd]@^Bj?l2n=wEx3,%])z*e+Y.2.3/D:V=W=^F@JnK1M=NsQ<QXQlYsZu[.^rarb3bQc+c:cod6gFgUhMm)qOsuxP",
      wan:
        "$+$_*52I3>6366;OD4E@G<GjGkIQKKKcO>OMREWGZEZe]V`=`>e^gdh&h7hgq8qCqGqZtFtNx*y>,&<+g/?3V5y8j9U;f=QEdFzG>K;N]O>PtQnTf]0_&c>d^dge7e>h:i<l+o[o_pGt$wDwRwgxiy(,%f'7*D.E/v=g>m?v@*CBF6F9QNQ_R0RtT9b[ct",
      mo:
        "$+$o0q4$>B?1@:@BB3EvFNIeMEMVN(N=P<PzVzW0XCcWcyf3k?kNkOlxmNp[sbuH,&`'/*m*n*p000?0I7s:e@dCDD^MVNRP:P[P^QZQdS@UcVYXbbmd(d6fsgmltoOq:uWw.wQ,%8(<(h+B/y022p:>:?=9>I>N>O>P>_PeTZY0]:`mf=fWg3i>j^jxlVllm%vwvxw>w?",
      zhang: "$.&G&U&f.C0+F+M6U<VwWEWnWxZ6Z7ZK[2b&e%h_r<t8,&^3J3S8081D_HIL]MFMNQ`V'[ca_bEnZp),%S0/?_@DJ=LQU)YbYj^6a;eui=oLvX",
      san: "$/&N'H)W+s6h7S7T7U7V7WG?WFYyn=,.;.<.E8tBObKbhbnbog<,TaU8Z$fDg9km",
      ji:
        "$2$T$h%;%r&:&;'5'8(L*w+H.f0T0]0_1k212?2E2y3@3F3t4r6?6Y6d7]7p8;8G:C:s;j;y=8=s>w@(B4BLC/DHE*EBECFcHEI(I=J4JBLxNjOuOwPoQZR$RBTTTUU.UjVWWLX<XsYWZgZh[8[^]:]Q^?`(`@aOc5cVcrdAdDeNgJhaick*kYkwl?lLlcmanAohoiojr2r3rKsTsUsqtdthx0xk,$<$Q$[%[%v&l'I'a()(3(K([)/+5+_/W/e1<1X2D3d4V5L7U7Z8U9k9s:5;3=jB:BhEKHbI&JvK:KAL*LdM:N$N0NFNSQSRmUjUwW?WpX$XnYBYSYbYhYoYuYxZ*Z=]2]6^+^p_E`<`@a)c1c6cHcPdHe%e6eOelfyg1gQgch9h<hlhzi%iGjhjljrjslglpn$oPq(r8s[tJtRu%u[usvZyi,$a%1%Y&>&y'4'e't(e)0)=)B)q.S/A0A3<4N4Y5C5D5g606?6S6o7(8I9/9>:f;$;d;h;s<F=U?^?j@lAVAiBWBrBtC3C8CsD+DYDsE2FUG*GdHxKHPgQ)RZS5U0UPV+V?]3^5^H^a^y_+_G`%`/a&a^b<e0fKf`idjOkQl@lWl`lelhm4n4nWo<oEoFotp0pLp^qLrUsEsqt$t3tgu/upv<x_xaxbxcxdym",
      bu: "$3's4^6B6E8d:.;<CwCzD.DpKFSNVjXnY7^0_Weyh%h'h>q?uw,*S*V*WIj^[_w`rvt,%R1p3>8fC$FwI5KkKyN3O:OpRrW*WJeceqmuqHrYtw",
      fou: '$38eID,+/<_cGiuixiz,_2q_',
      mian: "$5+G0)0t4W4c=/K)KDLBN;O2a.tEx[,(F(b/7024`5H9JA[OwP>PkR>R@REbPd^eMekf$i3iCpor;t'wRy@,.X`T`U`Xmgvevfvpvuwdwe",
      gai: '$6%4([5=5>C5J5S2]9dFk7mhq.t<,$i&%&&6/7dI*JxOHWFdBdQtGv>ya,$r80<S>)?7?>@dKDOUW)]B^)',
      chou: "$7$8&E)i+</F8Z@'KgN*WCX(^8`8`tcZf7i'j4t^t`vaxNyD,(D+:@[B$B_BbK$K6KIMMN^O[QOR7YJ^S__a(ccd4e0i6r7r:x','`3Q84;P;R<XBuC.DXJ0MAMFMoMwNA^o_$_*lYmF",
      zhuan: "$9'J.9.T.d3Z7R<[@_DnEwM?NoPaPg_4l2,7l;zGdH:IyS8UQUT[t_L`)`1`Za/fnlSpPq<,$'0B4V9Y:k?m?v@yE]FpG>LMcId=fFg:oJ",
      qie: "$:'h2=5b6y=vHOIiWK^I_U`_a:aig.s;vNyB,1z3dD>KNNES.YQZ)ZY[L]O_+_Qa?mitiuR,+DANBOCGKFSGXqn6",
      ju:
        "$:$e%>'K)9)h)t*V*e.q0U1p3I3j5&5D7x9k<hD5DLFpJ*K7KGKqP>QJQOQqQsRVR_SoV.VNVPYq]0]v^(^4`YaQc;cseSfLfRfZg?g]h@i(i^l]ljpMuFukw:x@yEyFyN,$p%('B'v):)G*Y./.70L0b102$3]3z4o5c9h<Z=?=r>'BABGC*C;F+G*L)P5R5R`SBXk[/[8^?`gasbAg>jGlbmHmSpDrSsCu1uBw8wq,$E$O%M(s)d*f+v/i2I3a517a94;x>*>^ANAgBJBOBSBsC:C@C`D9DTE3EDF&G8JSK/L%N;OxQqR.UvW.XRXnZF]`^ia>aIdXdvgvgyhHifixm6mBr)rds(sAsaxBxExryA",
      pi:
        "$;&r'='i/+3Q3k5t8`8e<R?o?p@&@KAyBfD2FgIDLaM+QKRfT3UIX>^P_Hc)eGezf1iHlYoMs=tjtk,$s+r+s4.8L9g:4<9>=C)C5CkGGJ'KJKMKuLLMqNuQ/S4UAV:V;WXXYX_YU]A`*cKhBjLj_jbjqkdl]nPp$p0pIq)t:tl,*;*l*m.7/G/j192b3J9(;.>B>D>ZGrK5KnO/OLOlP=PsQ*R9RCT*W`Zy[s]0]c^@`)a<gzkBlqm*m;pAqcrrtbtmx)",
      shi:
        "$<$=%:%?%]%^&>&S'g(U(d061'4M4q5S6%617$809H9S:L<Y=w>_?E?_D$DDELG=H/HlIvJRMpOPOQOVO[OeP2PDQBQWQXS7S;TITJU/ViVoW=YzZ%Z&[h]C]^^Z^^`rd]fhfyiQoCp&p)pbpcpuuLv3v9v?vv,$Z$h%A(7+0.U1G2?5V5_5z6G6T6c9N9R:)<j=*?&CICPCXDSGtK$L?OuP*P?PvRXRjSxTxVaVbVvXq[O]e^H_=```ucxlHrZr^wYyx,$8$:$t)t*..[.o/^4E4z535P6*6H7y8%8Q9I9K:0:o<4<C<E=?=p>w@QEyGNH9I*IGIsJ?JTKAMXN9NINNNPNQO&OcOuOvOzP.P[Q>SHWZe+e.eLehelf^fkg]h+iumDnNnso'o(pWpmqPq]sju2x=x?",
      qiu:
        "$>$F&E)G7K82;T@yBlEsLKTEVUVV^s_=drjGspwi,$_'D+'.2/4/E0d2M4m5f5g5h>qAvBgEFFjHDNzOLXIXJZ$_SbbcBdbevn%stsxw3y%,%D(i)o)r*^+Q.k/%051.3:696O6k6l?G@fApI8I;J&K3LzMoNaO+Q@aDaEbNm0msngnhoCpxsLuhxOyZy[y^",
      bing: "$?$L&J&P(K*0*z.%0S151:CLP*QYQfX4X5Xo^Leuhwk&pPpmtnuRvYv_xKxW,%r(I/'<bG%L3PHWRXGYIZ`[`dEu8,*r8?K6OhPZR&]1`B`ya<aVeSeofwmW",
      ye:
        "$@%1&&&/*j/'1@848R:S=7>i?@D(DwF^FkGoPcSMUeUff.fxgzh)hiiqiulXl^lklmlnq2qlrNrOrbs's)uJuKyo,$P$S*9+11L3T7o8p9]=B=a>g?t@vAAADGkHKIELfNjR%R.V5[+eslyp=yG,189l=*K*K<LcNTO0QnSSSdStUrWk`W`ZbKclerf;g2iZs0tk",
      cong: "$A&L5@7uA4A;KENu[U[V[X[a]W^K_k_wa?aqbKr:u*xY,$J&C&k&v)K4%7a7j8>8F8g;I>+?NA$G@H;H?QfTP`%gWmOmTmXm_tdu_yp,%A%x'm0(8s:;?Z?[RSSQTbTuhkiBjL",
      dong: '$B(n*a.S161E1W464d5%:0C.D:FKJ1K=MyRtS4T.T:[]_1c8d;g5iopktSvExr,.h.t1i3Y5d=.@/CLSs]E_CdIo.o:pHuAwkyb,&j.F96Ht__h9mEn9s=sbu9x%',
      si:
        "$C%i'e'g'k(x)b)o+L+]/[031c7@7H86:3>'?&?O@zJ&K2LRNgPXVYYG^7^qa@klo5tMu?v0x;,$8%K*j/N0_0v1.1W1k3:96:Y@)AxU=VgWjWsX%X?[e]Sc.c/dTeuh1iJj^l^l_mqmu,&k'$)T+M.(/6040R5Q>JNyOiOnPNPhQ9QaSXU;XudZdwe+e2eBeJfmh1hUhyivn=tGuDxHyp",
      cheng:
        "$D%'%()3*p.c1J1R92CqCxD7DgEGEPJdO_SZXp[P_c`[bPb`cid2eMeqgVhSigjak0kgkhksq=q^suu6v7xixyyG,'?'@'C't(//&1'1P2^2u466=9*9.:jA9AeF[F`G6K=OMPgQkR9TNXcXoY5Y[Z@Zq[B^Fdaf7j3otvz,+'0T308_<HA4A6IHKWMLQySzU9U^UuWiWn[z`Ic'fMhSi(j5n&",
      diu: '$E$H,,Q3WxdK',
      liang: '$G$J&*)O)l*4*L0G1S;6;d<P=BF@_ihmq]whyI,&O3_5sb8b;breWp.sfwN,.C3T9<<tC)F2FAFRGXG_NUS$`EhLlKlP',
      you:
        "$I&2'B(%(<(h+>/]0w6I7Z7^819P:a;B@6AII5JMNnOWQ*Q.SASUX:X;Xm]U^8^=^H_gbLcei@mgoEs?uivjwkwu,$H&/(c)@/o0'0W0p2U525p7L:VAaAbB$BpC8DDDEE0E9JGJJKfL=VwW[X]g+grk%k@lsm6nFtfwBwFwJw_,&S*_*c+j.j798V<`>GF5F]HuI6IZIuK0KxLmLxMGNOOqQ4WRWhgglzm9p1p;v:wCx>",
      yan:
        "$K%G)k*r+(.E/o04053C3H5x6j6s757?7E7F:S;C;N<`=@=G?P@$@C@R@oCrE(EdF;G+G9H3HBI7IIJHJNK+K0M=MeMkN4NENSOgR`T4TQTaTbUPV2V<V=V>V@YaYr[%[&_?a;cKc_dOdmeOhqi%iCiZn?pHq+qYr/r`rnryxFy&yzz$,$2&m'T($(U)))W*3+1+Q/z0^1h3m4G5(515i64717g87;P;V;j;l<<<==9=U=d=l=o>6>7>`?H?w@3@rAuCbCrCuF@FiGBJ+OBPZS6S<SrT=TKTmV`[6^O`&`jdyfjjRkBo3p>qxsjsmsntMw@xJxe,%W)g+m._1W3]3z5H6'6e6g6h7@8;9e;N;a;c=4=M=n=o>'@'@5A%E7E?InKVL*LPLoM+MWM^N<NBNKWWYqZOZQZR[+[K[P]p^*^[cEcJc`d>e[fVhchfi2iUi_j6l5lIlZnfqIqOqgr=sVsztRv7v^wGwJwQwRwSwVw]xFxKxqy2yO",
      sang: '$M=D=njKw7w8,%tUC,4:T+cOdC',
      gun: '$N`5x`,7*7PPsSpUSeRf1i0,%(%[1y2T3Y:JFKG]m:mopY',
      jiu: '$O$l$m%/%5*1.m3[565M5U5q7;9y<mHyQ;Y.Y9Y:b0gki@iiijjyn)onsrtHuxv8w;,&Y)O+A/1/U<$AiEPK]Y`ZLc0c4cZh2rFrOrTrYxn,A=M*Yd[Fb7b8kfl0n@qGtTu.uzvNy$',
      ge:
        '$P%Y&`(A(D*93T5F8B8F8c9.:E;%;A=x>6>KAuE`ZW`xd(d5dJe0g2j)jjltmzvw,%W(a*:6m6yAvBlD@DuK[OHSo]c^bc=h7n(o9q$qgr?s.ueyY,$r*(+*+>2s356G9h9wF[G%PYStT$TDX(Y3Z9Z:[C^.`[a$aUaoayd.fthgjgl4mSm^p6qyrIuK',
      ya:
        "$Q%m%o%q'L*%1>4(6q6r6x6z8T9(:h;X<LA_AkArCOD/D_FzJLJ[KpNyR>SxSyXJXVf6f;gBhji_tuwFyMyz,.p.s3Q7V8[AdBtD&D>E[FqIEKMKkLDLqPyS3TrUGY9[+]:m>t`,&d*J1d585:7/;yEEG9HQK*O0REUTWg^`qhr2s*u4u;xiy<",
      pan: '$R1B2Z7nBXLjW^fFfTjUm.uV,%U0:181J5o6f8V:a<;AIASJkK(K*OJOVOnOoOxPIUJUva1fIm/nBnqqNxs,$V0>2X557]BNCuD1QwT(VbZ]aTbarp',
      zhong: "$S&q'('A*t1*2Y=:E3ETGTI:I?L?Q:We[:]$]N]XnouX,*`/j0g<0>JC&LvO7P]VsXKYXZ2^1aDcyenhZnYp^rzv7,%s*I*Q+t/V/p1P2'2*2+9OCWD?NSOSQISaURW1Xyr.x:",
      jie:
        "$U&I&v*M*P*w+V+l/)2]2^2s494J6O6P8c:s;y<?<w=V=z@(DuE4HxI8J$KWL<LFLYLtNWOiPoQPQTR@RKT6T`TtUkUlUvV$X+XL[f_Nd4dLe0fihIhxi0i4iljSlSlqlvo@p7tDtRw$w:wCyB,$6$R$]$^%6(4+l1K1z5W6w8R>vBMCFEZGPGaJcJdKNKXKhL<N(NLQ5S0TrV3XwYW[p_FcHd2d>hfkElgp+sytGwSx:,%G't*U+=+P+k.Z0w1&1G1b2%2.2I2n2q354=6I6M6w8.8`8p:E;i<F<YAVBiC7I$PAS^ShYg[y^&`ua&bld)eEj[lmmHpDsQsW",
      feng: "$V&x*$+)/.191o1s1w1y;mCgE2E6GXHGIPPUP`SQSRTDk'u9wb,$9(&0A0F2i4q5Q6(8$;E<>=W>.>N?TBDD4FyKrLzOpS>U2_Ne$ffi[s8w7yO,)6+]175<9b<)=k?h@vILLfLuQ]TKToXI`+`<dJdodqgTqMqQqkvr",
      guan: "$W*:0Q1(6COJ`)`*`bb+i:k2o%y8,&J)b+g1>3M3l8C;NA'GAHlIBL^M7MjOWRJRRRSV]WN[$^@_%eFhHj0j:rcwD,$(5F5n6$6&>r@MDNFNJ<R^TTV[Z4Z8ZnZs^uewg*o)oep)q+qBu'v+",
      kuang: "$W/U1?4I5[5d6C:gB/G)H:Ri]h^bcccdePp'prrkw*,0`1x@kByC%P4PTRBRvSbSgVLZB^(^Td+d8gqh;,8D8O<A<b?*@TEPEZEaEhHIJtK>LiPOQfVArjw1",
      chuan: "$X'J.9.i3X=2AVE8VAVCrAynz%,*0.a/>D;ENGbZU_Kq<rfrlrts/vB,?ICUFXIoNnVvs_",
      chan:
        '$Y%z.d/5/f0`2c393Y3y6;<c=H?/@S@dG7KxMfNxT;U6U=U>V/WpX$YE]=ckcqi8j(jwkHkQmGo@p%xFxa,)E+u2F5t7M8x8y9a:d;<;^>_?sD`J8J9T+UUWWX&`7ePf8gEg[gvgyi_kRscte,$+&D.O/l0.0J0]3I4k5R6+8U9*:X;I;T<s=1DcH=LlLpN*QUQ^TnVWX0Y`ZIZx[RaacbdFfXg1jM',
      lin: "$Z%U.v111f1g7J8[<7G5SmUSYSYT_%_Q`AcCcJfHkro:q[rGtz,'3'l(?3n9&9I;8=v@.DkGEHVJ$KFLbMvMxR)TRUr^qb0bFe)g=l9qDr2xM,&8(P?5@`DFD^DhDyG$G7GmJJK=L_U5ZK]*^=_]iLo^q<vJvY",
      zhuo:
        "$[*Z3D3h697h<2<3?UB(F2IZK<[6fSgph$l1lHlenZo1o4o7o8o;qIw2xDxSy1y7yQ,%h(x/=2@2T3b3y9l:E;D<(<X=O>5@'BjG4GJP_THWmZ1ZGZx['_na5aOgYisjVm7uOyU,%$'v0v1I9)9;:L<kAkM$QgUjUmYYrvtAyy",
      zhu:
        "$]$b%N'U'r'z(f4&474=>A>x@pBuF_GFNTO3OFPkQiQwTNWPf:f>nKnZo>rzsesfsht_v)v1ve,%s&e'O(x)')+)Z+P121d4i8s97:$;&;b<P<f=5>W>u@;@KA/D8FFKsLrP;QtRPSMSfUdW/W;Y$Zb[]]%]&]/]J^)^I_>_O_r`$`Iclcod3hMjFk2l%s'tItqu5v)v9w+yU,%=&M(N*o+5.r0j131H2u4&7M7p8C9c<I<g>2>v@LBIB]DSEoHkI:IUK@P0PuR'V(VjWuX6]keAg[gwhAizmPnToGrBtcv@vBwk",
      ba: "$^&F'Y0I7c8)8f;3;7BSC^G;H=IWRRS'VZZ3dueEeXekfNgssjv%,)^;a<TABBeEJKgN?NKRi]4apjLjbk'l[nctOuUx/,*45A7l=xB7BAErNfO2WA`(`idRlElam/m8p5p7p>x7",
      dan:
        "$`&4'>'q.k/=2F5'5k6;6>9i;N<D<E<n=H?0?;@HI3L3VuZOZTZ_`F`aa4bec0eZf?i6kykzlVomuu,+4+E.u0&1C4/9d?sC<EgIWJ(KOL$LtMdMuO/P$RjRzX'Zu_0`PcTg[m(m)m1mgnap7qYq[xb,%0*z+l2(4)4Z6A6x8S<L?Y@%@tE%L$LaM0Mc_ub`esfIgehEk=r(w;wTw[",
      wei:
        "$a&7'I'T'x*[*x+&+W.e/c6Q6W6j7q9^;l;r<q=;=N@vA<A>AWAtFAG/J(JWJjL/LGLTPHPhQHQbS9S@T1TBTcU$UCUqV3VvWIWUY0[n[q`Q`w`zb:c6h6hNiIizktl3nqqosaw)xHyqyr,$X)J0G1R1r2N3B4w5%5E6.6L8K8W9':F:Q:y<J<i=+>X>f>o?`@NA<BPB`D&D3D:EiG1G^IAJfL=LnMkMnQPR6SmT%TwUBUKe;f%f'f?h>i2jfn^pes?t=tjuMvlwrxayeygyr,$3%H%m&='1'^(E)8.8.B.b.f/d1f1i4K5^5t82939m;H;Q<n=+C5DfDjEHFqH[IaJ)LZMZS1SCT^Z_[3]v]w^1^S_o`*ajapaxb)b0b4bkd[evf/fPjSjTjUlQm5mNmXn^n_pFpuq8",
      jing:
        "$c%h&(&.)U*L.?/80@1J1R2d3$424@4OBIBKBOF'I6K[K^KjOCVFWoZ@ZI[F[S`<bwc2lQnFoRoSqMqTrEr_wWxI,'c+$+)/^/_1H2:3'4695:uCgD[HBH^HdL7LGPzXRY3ZS[a[b[j[n[y]$^kafb=bHd.dve/hbmGnVo1obp:u]v@vDw<whyM,0Z8h;&BxHrI?QiTpYF[t`E`H`K`L`Nbec.d(iXnBpkrfs7s:vPvZxC",
      li:
        "$d(b)R)])m+c/a/j1^2K2`353]4%4'4?5/6m6p7(767A7D7f7h8M9@;);P;v=K@=@D@c@fBREUG4JcK5KrM:NQO'R(R]S=SDSTV%Y]_d_h_n`'acdadse&jXm)m8mTm[n_r0rPrisot0t?u3uPv=vHvQvUx:xJxUxl,&D(@(k(v)*)R)]*c*f0C0R0S2c2g386M7f9Q:U:t;W@c@nB7B8BQBWCZCdF;FmFtH*HAI/I2I;IOKcKoLPMsN+NqORO`PxQ%S%SNS]SaUzVPVQVVVcX*X0X9X[ZH[M[s]N^=_l_xaJaqb%b>bXc&e+fhglh*i`jdp's9tku%ugvNvmw)w/x0,$@$D%2&<(2(L)<*g+&+:+e.+/'0)0V0f1)1+15313C4C6b7Z:=;J=e>SA<BTDaG4G5GKHbIPJcJgKiLwN.N:NRNVP;PoQvR$R;T$TzV=X@Y3^P^Q^R_&_9`4`=iij4kWl4mxn'nFonoxp*pSpVq@qFqvs/t%u)uPvQvVw4wM",
      pie: '$fMMk]k^rF,.[8LQpu2,5OU?',
      fu:
        "$g%H&V'9'?(1)N)Z)^)r+C+`121v2R3Q5J959<9s:$;;?(BvC:C]G`H'I1I5IrJgKQKiL;MoNaO%OEP(PbRaS*VfW'WWWqXZZ+Z9[A[l^>^EcfdxeDeheif<fDgqh>l+nQo+oOsCtquGu]uzv%vzwZy2ygyp,$x.f171[2e3L6v9=<S=J>(A@EXEsFoHvJAJLJ`JgJnM[OKS&SKVzW$WbWvY'Y+YT[P]T]_^9^[^t`Rb:bZc_chcsdGdpduf&fUgghTh^iXjBjPk^n>npovpBpCplq8s6skt;tEtauIuNv'v<vowOx$y+yK,%D&f)[*S*V*h+1+`+d.c.g.u1x2P2S2h3j3w4T4t5>5@6j7T9R;f>+>g?X?n@=@j@xA>B0BMCaF:F`FbGWGcJuK[K^LJM6NcNhO9P6P:S3SD[_[`]2alb2bvdMdRgKh)iwkJl6m2m@manmp=pyqEqJqXqsrtsSvdvgvlvswbwc",
      nai: '$j(J*fHFHuI^N3O+Ygj[k>v(,.]59KUlQlRoCp;svxk,/L44HyNiRsww',
      wu:
        "$k$s%g%t&t'7)0)K*d.r/M/s3O4/4h596.6c8r8s9&939F;V<<=uAwBTDtE]FXHeISJiK*K.L&MOPBQUR2R?SbT[TwVQXOYKZ/]P]R]r_<_e_f_u`Sbyd*e(e)e2gijkmsoBogp1qBt%t't.v&x9,'0*;*T+f/K/L/S031a252f4m6O8S='=k>%?5?EAtB4EWF^F_GyHOJ&LTR(RpTcW8Zf[;_BadqRrit>tVurw%,&i(W+c/B0O8F8b8c:l<Z<^B*DZHSIFK.K]LBNrQRQcQdT0W:X9[e]H^0_@_D_a_n`chijEmrnyr8rZrls`tCuNuWukxAxQxR",
      tuo:
        "$n&Y(+(X)=9n:2<*<cB_E0IOLNMQReUXXx[7e$e/fMfOfPgOh/l3t6t?uOulyl,$;%i':'L.(.A/C0N0O0P3XC1SESFTq_.a:ctoroxw2xm,(V2?2[7'7d;oB;BDM;P$QaW][g].]/e3fagWgXgkh/h0i$iPi[imj$lcm.mdnqqtrXuCwpwtx9",
      zhe: "$n%O6n;4<N<u>A@<CtMF_PbCeFegjSkPq@qAt6ugxb,&Z*l2O4'P_RqS5UNaUallGm?yU,%j)w+J+b/^/w/x2`4D5/7r:A:P;C;M=DA7CYF8F?FtGVGlHWICJDQBS]XUgXmnt5uv",
      ma: '$o%Y+g8U;^=i>b>cI2LlMLN]XCf3k?tK,%<6JBNBoDOEUH&LaLbQ:RxU6VjWtj`xM,&2*0/P/y/zJ:TEYlgRh3ikj*klo&t.vvvx',
      me: '$o@0@:@NXC,:O,vwvx',
      yao:
        "$o$w&w)%*2+:+w.l5E8D:B=+=]C<E'H)I@J0L%L`O@Q1Q7R<SETLU]U_X8[p]&^H^gaLf%iyj@jrkUl?qyrgtUtyv6,$*%*%5&@*o+W6:79<s=)?@@^AEC7DHDnFMGwH4KbMANVP/R;URVlZTZ[Z_ZhZkZl[1[2]s_?c:g+glh8lBnNpcrJsTu;vjynz%,%$'V(;)(2D5;5X707b:6:7;S==EuGLJ/J;JVJePySsW7X'ZZ]r`rcZd^dyeTeihho/o`q.q`r*syt7umxNy%",
      zhi:
        "$r%Q(Z)j*/*R*k+E+]/Z1u2m3N3x456T7$8&8p9X:AB6B7B^BxDBDEF*F2GTIbJ@JxM]P6S;TIV[VrW)W.WrXaXcY6Zo[Q[`[w[x]E]]^dbCbNc[cbdBe5eHeIevfMg'g+g@h'i5jBj[k)k>kCkElulvm+m^o*o_ooq&qXtMu)uAurv:vCvuw4x$xOyKyd,$<%B&+&s(d(r*P*[+0.U/3/W/X080Y1$1_2+3w4K6t707A7c8J8i:Z<G?^B<CaD$HMI0IKK$KRKzL'LALBLQLwOgPNR[S+VOVnVpVxW'W>WUWgXEXQXTXhXqXvYCYDYeYtZi^EcOc`dYd]dxf5fqg:hJhYjXkgm.m:mJmfn<nlnxoHqAqOr=r>rArBt8t?tYuYx?,(8)7*B+G+s/e072/222U2V3`4v5Y6=6U6]7:8J<4=l=m>>>t?]?w@F@[B4BLBhCNCQD.D`DbE>EtF0GGGPHbKGKiMINePlQ>Q`V;WmXf[r]M^L^U^dg]gdh6i)i8iEjBnIqUqxr<s_t;uEw`wl",
      zha: "$t+A3U3g6v8P9v::;5<z=?=MHQOd^%dqf'f=g9iwjik9sdumusutv5v?,$&%:&[4r6F8r<%<g>gAZJJL2O&O+PFSA^uc[celnu@,*`*j6V7c98:^:n<6EEN%S:WtZ.[:_KeCmAmip<pOxVxY",
      hu:
        '$u%%%A%e*+1;5]5f9g9w;o<+=0=Z=^>W>d@9A5BwGHGIGLJGKbLWMGMHPARlVtWsZ*Z=]l^2^3^r`Ld1dQdSdTdXdYdZd`dkeUesjZk8nvp:pDs*ttvs,$A$B&0&2*?/n0)0H0w2H4@4B5P7>7J7K:?;+<o=Z>z?[C2D0G7GmIJIKI^V6W.]=_<`6aobTd9dwfHfZo%qRt2t6tVuFxRyj,%n&.)O)P)X)`/$/N1e6Y6^:R;9<$>6E_GILNMkRvS;SZ^T^k_CbJc*f$kdltnKnrovq>qVrksNs]sesrtouRudv)',
      fa: "$v':(G.$1C7dBqCCFHImS>ZXvk,'+0U0t2B;MF6GLL&N@NBQLS?]W^'jDjZjcv1,&^'pMrN7S%Z;[Bk@kD",
      le: "$w%X&@4a89>e]5ds,$d&@/+0oAiEISU]'`Gmzsr,[abAe]fto9ozq1",
      yue: "$w0&0(0/2L:l;@<F?XIFN9R:RjUx_7_K_md)e&eVhEm)s$s%s>tevH,$d&@'&(v11;;@yE`R<RhVfX2_?_^`yaCaNb.b?c:h8qq,)%*<*=8i8k<cATAzB6B9D[EIO7P<VVW7WLZGZH[GkPttu%wLy_yn",
      lao: "$w(B.^4A4B4m:T;2;c>$>uJ;MDSeUQ^`bpbqh0k_s[vn,&@'Y2m3?8e91=3AmCMFULVMaSvUlZX`[b3dCholClDlelqvPy;,+I0EE6E<FxMDN0Q(ULWdX7cUk3m`",
      yin:
        "$x'<(c0w1Z6V8^8q;n=)?H?q@8@xA(AKB1C6CBC`DhE1GwJQKfKoOxQCSaT+T=UyY?Y_Z)a2afb7babbcPo*s:vqwg,'n(C(R)?)p*3+?+Q.k1I1Q1`494L5T5i6[7+:;:<=&BuC]CoFHHJM0MXMeN4SpTaU_W^Xt[(]rakdLf2fjo(teuiv/vfvq,$7&%&)(v*A/q0I2w7$7*739&9];VADAfF7LLMMOAOOP_Q0WrX4Z`[h[w]_]j]q^(^:^K_X_g_q`j`zb=bHe<e@fihBj+mQtExjxyy@yF",
      ping: '$y)_191x2(9YBaE:J`QYQfRsW3WDWZX1XobIb[u>,(.0x2(3$4(>/EqIaIlJOSQSt[q_9`:j&mNnnsluGvMx`,%C(b*a+<7h<2EzFMKtPZbtgTm1p8',
      pang: '$z6w=tGXM&Q2X]Xk[9[ooG,/k056i<>PIU?_jlmnBnqo4q4s3,/55fB3I._7`&nzq/yLyN',
      guai: '%&7bH(^D_$fJuBv4,^djU,',
      sheng: "%'%(+13K3R4l6+99AnFSGBJdTXc(nsp9q=q>s1u/yG,%L'^*t+R134`555a9J>@B&C.F(G0J5J;JNOMOtP8[V]Gf>g/gOi1mDmanwuJ,&@:t?)?kP*SA[l]L]hs5x<",
      hao: "%*)6+k/^859e:w>)?'?C?y@*G%I%^j_Tp<pXqEr(r.r7rWyA,+w.12`3r6o7.9>:6;Q;`DTDYDcNQNYNcNeNhNlXM[U`zlYmCuo,$f'+'/'Q'n)b*K0s9?;;>0>OK`LET:Y:c[dDnx",
      mie: "%.8>:?;8NtX)chjM,(n6l:e;p=/P:VI`0`L,%d'80z1T5OV<p$qr",
      nie: "%.<]>1?M@7@`@o@rB2O.O/S*U*UhV;VngvhMhoiOjokFmKn6uM,&5)33%5wL4_ea'c%c)m0mer6r<uDwt,(m1/;ZByC9C;CtDpQBR+RRTAV.V^VgY4Y7Zh]U]xcjd@xz",
      xi:
        "%2)D)[+m.]0L1i5s626K6g8w9V:;:C;Q<)=6=T?+?A@O@lF3FwGhHXK/LbMaMdQMQ^QaQnQxToUGUmV&V+VsW?[H[[[r]H]S]m^F^R^_^n_5_O_[`3`Na]a_bcbdd1dQdSdTe0e?eFk7pFq<qNqQrIrqtMtsu@vPw_y]yy,%O%u&g'(']'o)m)r)z*D*G.l/B1]1b2V3h4b6P6q7Y7p8[8^9C=I=[=c=z>2>[?4?6?:?K?l?m?n@F@sB0B6BJBVB^CXDpEuFrI%I?M6N`OnPmQqRLRtSuT^UHUqV&W]WzY(YQZN[:b&bqc1cgdoeTfRfkgKgQh*hXhwk1kHkiklkmnRnSp<q;rMrNs4w'x7yFyw,$F$[$m%B&m'*)l.)/7/90'0@1?1U2d3_5*595[5_616`6d6f8P9Z:%:K:]<e=Y=Z>.>5>[A/A3AQAcCmD)DvJsKFKMKYKgL<LtN5NVNzO(OTPFPGPpRbTBU%UDVZVxWvX`Z@Zv[M^3^9^J^O^z_3_r`.dde^f6fHfdfvi/i;igl)n)nnoBoapvq9rbtew<xI",
      xiang:
        "%3&'&+(C.U/g4w51748O:d<;@LGWJ6UKV^X_Y*].`fq/rYvS,$f'K)B5R8PFLI@IROkW7YO_7dVefh%iAj'jujzkkqUt9y'yW,'6*1010`1a4R4_81<T>%BdKzL7L8LCPcPvUFVXYaZ=ZX];bIbOcpe6eWfQfYfrg?icjQmKn1oRocp&pPvR",
      shu:
        "%8):)a*=*>/h0H7g:FEyF)J3KNNwPkPvQiQwXuXz]Z^Q^R^p_Ld/eagogyhfjpm2nJnRqnqprds.sesfshtAtZu0vKxE,&]&x'i*y+M.?.@0K3t8/8B8z97:*;/=]?QG3H7HxKMKPKQMtXjY6[X[ma2bwcId)dcf(hPj]pYr]vQxO,$%$I&('O'Y(M)m+Z1>1^3+4p4x=i@4@mBuC(EQF_GfHoL1PCRgTr]<]r_ZmIoqowrssFw3x2x3yf",
      dou: "%9):0:0>8I8y;Y;aeenro'tvx<,'b.32X4]:]CWLFQb[&[I`.owvn,&6*X<j=aIAKXL)M2O6QJW?Z+Zo[j]Oeefyl%l&l*l.l/",
      nang: '%</q@@@i@sc/j;lEm]rt,)_3U;>;e,1:fYf]g;x[',
      jia:
        "%=&v'h(I*v.&/)4.7m;A;L>OB5ClH7H<L)LpO<OiRcWb[O[i]T^xd=d@eBf2f;figEgelXnunxuDuEx.yt,$u%4%m(5.$0f292pBBD>DAEyF.JHL0M/Yg]bbclanvolphvTwHyl,+K+T2>2n3.>3>W?:@]BEHeKQKbOsPIQYTCWPWjY=bwc$d)d*h%j&qor@rTvT",
      mao: '%@0b0f0o0q6UDtGkLPRxT[WOa5cAd_oJpgqrtiud,$?+v.=.H0u5/AqBQD9GSNIP&QJRQXM]feqjHlFt_uPuSuTy8,%;.V.l0&2Z5L>R>Y?1@VEXLHL]M/P8P]R_WXXXk<kIsR',
      mai: "%B'p405)6<>qCnGD,oNoOvg,&P'a1Q?'?UHFJW_h_i`0tXv`va",
      luan: "%C%Q%T6[AhAiHpJ_NRNqO1SHV8gAmQrvvy,)T78;U;gN:N;jtoZr(r),'7)L5qNgQ8VerSu*uLyz",
      ru: "%E(u/D0C8y=p?xHrI*LfN2O*UzW6dyg6llrcsxw+,(S/O2'4y6d:7E+^&fYgbiYn1v3,$>$w&_'b.h0t2t434uH/JqL=N?Q+X5ccdGosqNqprG",
      xue: "%F3*8v?dBpFmNmO(RZRzUcZg^NnCncw<,&o161@6o9S;%@@C:KiKyR&ZJqBsSub,$*'E1J2K6^:(=)AZC%FsGxH&_0`ga]oNq3t`uB",
      sha: '%I*l.A/?2p3078;i<(<?<S=<=_WKY2gWgXjvswt)wR,%/&f*1*_+T.4079s>eCcLURyT>^laecMgahCkskzw4x:xc,&/3AT7X%ZEZM_TkUlimymzpZ',
      na: '%J0d6=8u9:;*>7IJJse_fIfzg6hLjf,XC]H]KcChEnG,$>$Y2&2]9%>C>FEVJzKOO;TMW2Y8_1`lly',
      qian:
        "%K%P%S&^&p'M(;)V*W*q+o.O/K2)2A3/6'7C;L=vB%B&D`EtF>FtHvK_L8N7NKNvRCRHTZU(]c_Y_t`yaib=e4e@fKfegYhWhgi*itj_kRkWkdm>m?mAs7t$xZy_,%;%b%z'V(L(f)c)i*+*7*Z/J/Y2;4H8Y8Z:I;L<e>ZB)B3BCEeN_UI[Q^X^x_U_f`pa4aBa`e8fogeh6ipkBnQptr.t*tCukv8vcyd,$N&1&?)V*6*G.>4>9::/;6=@=N=RE[FJH?J9JMO*O8OBP5P9Q7RXSiU*V9VuW6WCWEWW[daec;hmhpi'jHkskto2q[ryu_w:w@",
      suo: '%L%n+y;H;e=h>*>/JhLt`TdcgWgXjxqzwQx?,676`DdFwFxGvHCPb`C`FcXfLfiihk=w4w5,$x.<46AaINSpSyTITOX?mj',
      gan: "%P&_'o*K1X2&9lB`Q<Q>Q@QAX0X7]Aa=lBmkn<owt&u`wf,%8'.'u/h0s447z939c;kEOEpJ.KvNvOcRoXDY2]+^R_i`farcqhRn7t)uE,1q7_@/@9A+A@A`H>M(jWlRokq?qOyj",
      gui:
        '%R(O+Z2t2v3m3o5a5h5i5l7>AxC?IUJSL^M<MZO6U[UmV&WBXIXiY0Zi^lkAkcm_m`p=qUspukw&wMy[ya,%v&4&9&:&z(2(Y)2)9*g/15:64<3D2FPH.H[I6MkN>NNPKQPQlR*ShSmW<X(Zg]o`4`=oEut,%%).+E/O0?2v4g5I6(6J8)<O?$@SB/BaEFEMG:K?KNU:V4Z>[<]@^zaZi%l8l;l>m[o]olpCq:qXyZy^',
      jue:
        "%W*B+p1=2J3e5r777h8v?<?J?d@ZCiFmIFNXNYQtQvT'T9U[U`Z7Zfbkc$d$eWg=h$hkk[l'mYnhw^,'E'F)/)q.X/m16;O>9?X@'@pA%A>A?DfE=EaEcF5H2HXKiM4RCRTRWS$ZGd7dXg>hpqctW,&[&g)v*E0F0G2]5J5T5u6/686<6T6c758r:e<.=L>cAGASB/DDDEDxO>UGUWVhYLgjjtq:qaqbtD",
      liao: "%X.a?)MWPCPLQ&Q/Q0QuU4UTUUY@YUbJbxjykXl)nSntrBrm,&Y';898e<A@*@m@qDoHWKYM]QxZc[9[D`Og*g@iiilm8q'qI,%N((0=0E=]?rD$DKH;JRLKN[UJVsYMYhdedljytQux",
      er: "%_(J(l/r0.002l:7;uPqPrPsS1YxZ$t4vhvix%,&q.*1Y2%AHFKb5lNlQlvm=o?vE,'i1R2r8>>u>z@NB$F$G.HhJ^PXWe]?^GeZfph>kKkLmLpGr9uF",
      chu:
        "%`)y+r../</e1q202C2S477:?.D?GVL_R6X*YD^Oahc+j:k8kJmyo<tWyV,$@$T$r&U'['f(0(`(m)%)m*J0n6g6h9v<XBIFfHsJsRMScV4WY[N[R_ocwh_l`ldqdt^wm,$H$S(N)W+h0S6L6_9>=q>$>`AXD>DUDdL>P+QoXBZ<]R^j^vslwBxvy)y:",
      kui: "%b+Z2i5i5l=9=S>zGgHLLnMbQ9RvV1V?_daDaEb]dEiDpyqk,$5$7(]+B6'8o>IBaOFQGQPR*UB[%[<_W`U`wmUmWm[mdoEqKyt,$/&a's)9)C)j.w9tBcD*DwI`L6SJSYZq^1bWbzcSf7fEg.g=hwjClC",
      yun:
        "%d'G+e/t555:9B:x=1A3H;HjIBN[_C`ea>aHale]erp2q3qgu+,$l'<+*+8.y.z/w343D6Y9:>M?$?0?7?;?ZBxEbJ^OvULXN^:^V_ZcRf1f6fOfVh?iHlZm&p]tZvuwgz(,$;$^&Q&o&s'((J(a/)4*>f?d?z@>A'HNIvKUKjL4LDM7MqMyOIQP[p]V^/_8_jaNavb&b5b?bEezgMgby'y1",
      sui: "%j*N;:>@D1G]JuMsQIR7Tfoe,(**a*b.>2t7&9f9t:x>r?U@EHqI7PKQ'Q*S7T]W1X)YmZ+Z5drfQg$g6g_hxi]qVt7vxvy,*)4i8u:y<v?WIkImJYU2U@Ud]z^'^A^B^qa4b*jok'",
      gen: '%k%l:finj.vt,seuj,BU',
      xie:
        "%n&3'^+/+8+J.G/i0x13445(656:6N6_84=f?Y@?CGEiGdHHHOJeLMNNPIQ[QjQrSMUkYR[e^eaTa_c>ftgEgeirjDjel9lWlzmJnwoqr6uIvbwrxB,$:$t%/%?&f*50c1E1t4z6q9O:`:z<&<U<V=L=i?3@L@P@tD@DuE$GaU9VkX:bYcid1d>dNdmesf+f:gXgohSikivkjn[oKoMoQq*,'L'N(1.T.i0W0l0n1J203l4I5%6E6I6M9Q:3;Y=(=<DmDoJXK*`qa'a@aSawb:d)m[pCxTxkxnxxyc",
      zhai: "%p)'*i+N.;6n6v:s@(GZO7PFevfdh*k.lIm+nfni,%J(7MOSHW?ZZaakv,>s@AP7x]x^xc",
      tou: '%s+Q+RD?H2I`L*L]a%ednBo&,cEf(,(zI9QJSPbxeAjZw.',
      wang: "%t&<'$0DI.Q+Q3Q4Q5[<[B[E[O]F]h`JePp*q_sPsQsXtlxu,/]:^EEOfe@j;j<j=j>j@wIxG,*M+A.J8vFDG^HIHklO",
      kang: "%u'35YA/M7U5Xv]kbAe'ef,&88*<CBqS*Ypafbk,E9JvOYU&W<Yw[8oM",
      da: "%v3U5L9i:%:i=m?RCQF]GzI]^5`abedvjWko,/A016@<M@SJnJzMCP2]H]X^.gNjxlzv?vS,'B0[4/7mBmH<HMHTHXIdJ(SlT)Ux`oa/abyTyV",
      jiao:
        "%w(R)%.l.s/>3b3n4u8'96=F>H>J>V>m???`@ZJ9J^MgMnNHSFSIUOUZU^]&](^o_TbWbmc5g3gHghj/jykMkvl;mXn&n3nEnWnYnho$q$r&r]v[yP,&R2=5f5g7(7i8N90;D;]<s>*>S@'@<CCDtF9HkM_NTNmNtRbRfV%Z0ZcZm]3]y`Wd@gYgwhqiso<oapfq>qPr5stv%v&,&G(6)c+90:0K5J5T5u6/686m:h;%?=AxBZC+F'FnFuGQGUKLMON4NHNlPVUHX.eQfuiSj.mYoTpMrKtHtPuyyb",
      hai: '%x9x:I=k>.@?EkI8NpOffs,.m2n=RD@dQo8,HVJZKDMVN&eNfTh?hFj1jc',
      heng: "&$;><6JD^a^m_`knw%,&i'U3G<uFOoAod,([1lV)r>rPuI",
      peng: "&$*E.63^5C>tDYEVEnZN[/^@_8bSewg^ggh9i;j<k'sAwoxmyTyi,&.&d0x3q4(8$8.98=S?TL[NUSRStTJU(UXYG](_j`'dEgknnqFszuGw7,%>(l08092mCMEjFIRAVCZ1bBbFgti+kRk[kkrwu^",
      mu: "&%&j1t4nBmF9IqJ;JiS6WhWlasatfAr8r9s_sn,$>&`&a+h.'.0.G0.<?AjAlArB'C'JXJ]JiJtJuK0OaQ0SLYqfsg*iinzsHu(wQwU,*LC'PEPJWN_4_HaH",
      ting: '&))3);+66l7+8kAmJnKzTWX?XKXlYZY^Yb]8gawUwj,$E%E/2314n9y<r=N=PFdJPJR^MdqlUmRmcmkmlohs=wAyu,+n.U8R9TJiQVWwZD_La1c&d+x@',
      qin:
        "&0)7014s8a8b;]>0?KB;CsL5LoP/P4P;P@PRTiU(UNUVXFY;]cb6c9c:e@eYh8j'j1l5lTo9pCx=,'y*)/t6W9j:pFGGFGKMWRRRSX;Xe]7dhm%n=tKt[x5x8xE,(S*G/E/o0c245=5e8YAHOKO^QjW8XQ^]`ec?hJj8mkqWrx",
      qing: '&0*m.D/_1T3B4[6f<VATD3GpP$XDY$Y8`7b@hWlPlQqRqqy<,&F(6(T)&+)+R.i.r.w4F4S537R:@J6T$TQUg^ke8e<j.u$y[,.A5e95:<<fExF;GMKoR<V1`C`D`JbMcnn0p`wK',
      bo:
        "&1&a'Y(1)>.g.w3?3G4Q6@6B;3<d?5@5FmO)UMW+[6a[cafcgRj9l%l/lYlZu^v%wX,$x(+(.)D+/0i1*2W4M4s60?1A_C=DJEvIGIIN<N=NqO=SWTTUvVGVZX`Z1^o`K`k`rbuckj%n)ndo]q&s*s@u7x2xtyf,%g'.(n*m2f2g2p4^5&8T9s:iB)BQCEDAKfOkP/P@QWT'VTWGWKWTY2e`f4fxg4gAgDghh@iIirjqjtm8oSp>r^uO",
      lian:
        "&5.L3i5m5n>??DDkH?HhLOMXMuW(Y3^6^fb3bZcwk/n5n]xQ,$C%b%w(L(z*I+++H3A5?697v8I9Z9m:';0;4<k>O?C@IFvGfHGUIY_`qa@aFf.fuh0hUkMl6mBmVmYm]m^p(q`qhwXw]y.,%@&7'?'I(t(u/<0i3D3E4A4l5W:FD3H]IMLjN<RcS*SoTVUiX<YZkhneo7pT",
      duo: '&6&Y1d2k2x3A3M9o:]:q=?@%@PC=C>DCDdFTFUGmGnH8HiHqLNQ8T(Xe`cbgg)g*hYn+n4n:nDslsmt7t?u2uOuPv&w=yn,.80N0PJjLSTLe*iKs),2j3RA^BXB[BqCSE)E*E=O_UsWa]8]=]z^+^MeMfngWgkkcs3',
      men: '&7&k*?]z_^`&`McGcYe8h=nqr4yX,/i=q@:EbHHQ]QiYsx+,)MS&W$YkYp[([9a2',
      ren: "&8&9&?&]&l&z292:G>I4J/R1R9]6];]<e6sit4vZv^x%y+,AnVtX@XxY>c?cSd/e'h=hFn/p?tDvIvpwt,232l6y8K;g;tE/ENG=NwO.OEPj```dakb1e8eOfel_rJ",
      shen:
        "&>'c(W)<)d0=7T7U7V7W8q9f:XDcIhJPJwKyLoN>OSOjPGR4SYWfZ4aZame+eZjbn*pLrUr[ujy+y;yx,$q.g0$2x4>4?4e4f7D:b@&F)J0J7J=JILuMHP0P6QvRZR^SYW0WEZRaTaVbKbLbhbncjhWjCjQnXn]okp@w>yXy_,%3%k'=+^+_335y727I839A;G<J<q<x=$DzK%PLQkbnh<lnn+nOo6o@plrmwT",
      ze: "&B)'+N2O3'9v;y<U<Y>]MAT?WMWkX@emfdgxlIp5pI,&K*d/60@0m1G6S7.9N;DNfQ4Q_RVV1Y.]]_*`2lns(,&40k4f98:D>s?q@AA$HmeCthxmy.",
      jin:
        "&C&H&N'<)/.K/(/J1e424@4O6a7<;n?V@)CsDUE5F6G'IAK_M>MkN+P4QGV`VeY;`?b6jLo(q%q'tf,%'&=*=+=1p2K2o637_9p:2=F>h@ZF8FuGMH$H<H`HuOSRRRSS=WDWS]']@]zcUc^eXfCiWrBvOvdx=xE,%E'y254n5m666::O=B?a@.@eHOHYI]NWNXO1R]VlXe`ffCg7g_v0w)y;",
      pu: "&D.[5G?IAMA[AoCwDpFIdteyh'l4lJmcmdqLr$r>rhskuw,&w'z.L2]6K9%:D:h<5=MDjH]LOQsY'Z/^[ggrarbw*wwx;y`,$W$X9S:s=K@(DJMTQuU1UZX8YNYR]Nmu",
      reng: '&Kdw,Vdtb,H6]m',
      zong: "&L*8*U+F.5DzOIT^TdU2[a^U`U`qhFiRj+k6pasWu*xhyu,&C8>8F8g>+?N?Y@HCwD1KpMLTPUfYYbGbSbxe(eQe^ezf/f<faflfxg2hGi:l*pKz$,%'.s>;CJCLD2S2V%h_hvj>kYk`l9nHnV",
      fo: '&M&w(1BixM,,',
      lun: "&O'P(m*YA?AQD6KkT$T%`2ephVxX,0D486ITeUiY:eFhHlfp2tTx%,.*9@<&C<FPG@R6]^nC",
      cang: "&Q&y'Q*7+q1_5cTq,)N0E6k:NDXElH0_sr1s%sOtp,$c'z/W?iV]scu5",
      zi:
        "&R*b0W3<8E8p9Z9]:><G=y>3ItIuJ)JUNVN]N^NcNzO&T>Tz_'t/v`wzyR,%1'_0;1^3g4[5x6r6z8(9VB.E@I&JTJwPCPDRnW_XBXlXuY`]Ya[b*cDcbeUedgji?lVnjnooDr4t5uVuXupv*v]wxyV,%M'5*$6B7P7Q9X=2>y?9@_@cAFA[AqFBFaGaL?NoO`ROSbT/XpY+c4c5kCn.o*pns;wyx`xcxoyE",
      zai: '&R.(/@0l:`AsOcTKdzePvx,1O576N<)<*=0JTJwQ?f[wx,?fF/GOMB',
      ta: "&T)$+x=m?v@XEFENF<HxO5SlfMgDjRl=,%)%M'h.D013a6@6b8+9i9wAkCIE%E4ViWuan,4+8z;8B5C1CnDGDPDqJ3J8P$RJSlStW]ZiZv[%['[>[Za$a:aQmGo.q*",
      xian:
        "&W&X'W(7.P.p.y/$0$1F7Q9l:4:N;1;N<Q=v>[CYDAEeFvI&IaJCJPJaK6K;KtM$MTMUMkNKO]Q'Q(R'RNSVSgUiX.YYZ<Zx]ibuc&c.cXgLhRi8jDjIkQkakfm5mCpqq9rCtVu<,%b'6'e)8)i...`1b2w305u699@:n;i=%@WC?CfD<DzE&E5E;EkEtF=FeItLYMbMiOjP(PlQzSpVKVmWeXFY_]t_8aZb9byczdFdhdye9eif^g0guh&h6hQiNk7k>kBnspmqsr.rGs+tnu<wMw],'I('(*(q*Z*n+7+a1_1c4J5+5E6%8a8w9_:z=j?T@0@BAEBYBpD<DiEJFWMJMiN<PpPzQ$QGQrRDRxS.U8VLWvWyXgZ%Z&[4]>]S]W]f]i^D_wadb9b;cKcfepg)gLm]p+pNshtUtVt_uUv3vSvmxJ",
      cha: "&Y(o+52p307[=M=j@1C@I$JOP=RJTeVTe.e?gfgoiPivjhk*t(utv5ws,$&%a(A/<DGKBU.XCc7rIsLt&uBv$v0,1t7z8'<UChQ'SFSkV:XwY]`^f1g+",
      hong:
        "&Z7I8=8o9%97:Z;`=e@;CNI/JXOAOHR.V*Z.ZbaGaoiFkkq*,/b050r1u2Z2i5)536(8@9<;w=2>&ELEVIRSwT/[S[g_Pb(c;cNcddnh4h@kTkYktm*u>vhyPyQ,&z'R*%6n6s;j=S=V=XE^F^G1GBONPUQHQZSIYyZ=ZVZX[5_V_f`vl(lbrEuMw/w2",
      tong: "&[(5(n*t.u5%8J:Y>;A<C.RyS4S?X[[$_>b'bOglq)rRsYw6w],&I'P.I2l9$<d=.@/BSCLDmL:LIPLR'S_T5XpZ2[h^*^Cb)dIdSdehrqEv6,%<*@1`85A2IDMHP4PSPdWoeUmTpH",
      dai: "&b(y.'7Y909>C(D;GzRhVyW8WAWHYA[G^:cQdVrMuYxv,*h*u+m;=DQEnGYJ/^d`Vcvf9hcsR,*].z2A507e<@>j?(@UBXD'EKETEdG<HgIXNx`$`8h(mFqnwAwW",
      ling:
        "&c'a1V2X7y9NACBtG_IsKJNGRdRqT&Uu[@hhpVsDuQxTy/,)<)a1(479T;x<W@MA1C3EmFsI_NPSSWPXaYF[^][cneLi'k$k0kem4s&tvxC,%6%X&u)&*x1[2@3N7WB?EcF>LrNCOgR8WUZ3]d_<_P_^_b_d`:bcd&h&m+nDpaqqu>v1v]xtxuyByU",
      chao: "&e&n3b3n4u8t>yV6VHVIZ>]yeRkMptsS,&/&R)l7W8m<@>'>5?.ATPE[4[>aeeKi.jelX,6>7>:UAOFoLIOFW0vcwiws",
      chang: "&f&h'O*.*F*O+Y._/Q0+6i7B;t>^@.B0E.EmK>M@Q%WJYJ[_]t`%`On8p>pir*yW,.K3o3s>ACyETG;GeH8IeJ4J[K>n:pkq1tox&xY,3P3U8nR/R`X_YbYcYjZLZr[Lasl1nAoopfprx*ye",
      sa: "&g6)jvkim1,(i111]8t;Sh*oTy$,&n'S7ADoODU8Vx^;`ka$dQduga",
      fan:
        "&m1l1m1n4z5`7`?5FLI'KQMiMjVmWt]IbndxfTo`obt+uWwYxGxx,&H'8/0/@0z7N;*;A=@>p@2BfBvH_J_K(K*OGRuVR]a]d_Ja1aSe_g%g?kIl=qNrorruQ,&A'J(?))1$4]6p>p@GD=EMEgFdFzHRNpUAU]Vydbe(e=e>fho[tO",
      miao: "&n4>7J=OICL:MSXWY'YIiMtL,4J54E?OzQNXP[Y_Teqf*g*iFiitz,($J_sIuY",
      yang:
        "&o(&(E+z0Y4E4k6R9tBhCAH*IyL$RUTCTF[K^'^ta1abc`e:f(iXm/nGp(pNqwtJu[vr,$0$M%k&b*r.c.n.x1;1U8<:W<.<c<y>sETFBGeKdL@M%N&P+PYVHWfXfcrjujzk)o*,+2.L7Y9d<TEiFVP>S(S<W&[i[v]l_;`'`xd]dre:eXh*nlr0rCtlu=",
      ang: '&o6RR=p4pntm,O@nH,N$jY',
      wo: "&s*[++6M9C:R;l=.KRKSL7WVd3gChBhPi`l@o%te,$'/v3C3V3[4t4u9o:9>)D5I)QMT8Zt[)f4n9pMqqr/wZy3,'a+r/(C4gMy5yJyM",
      jian:
        "&u(v)p)w*h+?+o.j.t/;0Z1I1Y333E3L3S3p3q3u3w@nA%BPDSD`E9F`HwJ<J=P'PuWFX3YeZUZ[[g`Vd+d6dKdNf^g_h3i>iAitjElAlymCoZqts7u5v$vfx(xRyZyvz&,$=%'%n&j'9(8(Q)>*k+K+L.C1T2;3I4_4j5N5O6)869A:P:g;5;:;?>T?P?kAUAyBCCrEeF:G]GcOCOUPpQAQzR+R2TETXU)UpV$V*VAV^Y_]C]i^A^Z^f_3_v`Sa$a9bUdZegfKgCgSiBibl&mjnCpdr@s$s]sgshuvvJwlxLyJ,$`&&&O&r'P'q)E/l0q2o3G4U4W545E5p5s6%7U9=9U9r:C:r;>;@='=E=w>'?@?V@OAhB2B>BlC2C]CjG0NwO.PRQNQ[R1SUSWT9TxUQUbUlV7V8VRVUVYXMXmZ&Z'[6^^`_aJaMa_ahemf(fjgHkbninonwo?pUq0q[r[s'ssurv2v5v6vC",
      fen: "'%+X.o2<8hB<BABUFYHIHmILRDVpX%Yp]naBbopBs<sBtox6y9y:,'R.b/q9q;7<1=u@(@1DeE]Q^S1XL[Wahb4bicQhIk&kKkXqWtN,$]&`*N*O1z7.>4><E&FyM4OHUw^E_6f.fSg@gOlxodpoqYw&wax&x4",
      bin: "'%.+/BOq[.jslrngxKyS,%r(I+;+I/57::&:G:K:lE]H6HwS1gdicq/qn,)k>/>9?E?FJwV2Y>_mc1ced3jwk)k?kXkjky",
      di:
        "'&'y)g+3.F6u9Q:b;[<5<a>F?tB$BJBNBrChCmD*DsF*F7FRHAJzL0M;RrU7UnW/XSYcZ5Z:[?^9bBe&f/fXh^iNidk)n$nOozt7ttu2uqwqwxxv,$Z&>.V2U3F4v6s7F=hB(C$EMF]IvKRNJPOPfSGU&U*UyWHWkXi]I]Z`$aRc(eoiRk3kvmJn)pUtstyvvwix9,$&%9%^%c%h(7.I.t/a2Q5z626C7X9I9P<9=5>:APCXD0EbHiI<I=IqJ4JFK:NxPHT`YG]&]s`aaLb_gVjak8nMts",
      fang: "''*Q5TB@ChD^IR[9dbmmo?oPp;pJtn,/k3vApIVOyPHVqcWhLnDrvtU,*27<<+B3JxO3RqW=[uk9lwp4qjsd",
      pei: "'*(?)X9cDGI+IDJKKFL>UIW$^$f1m6oDoLv%v2xd,.6092v4.BrFTG5nAnu,%.1M3V3W?R@sG3GgM%M`R=Xj[n]X_Ng^",
      diao: "'.1U272U8:8HH[QVZ(ZJ[+e&h[yD,/:GCMSO6QbTWZe[7[k`EdK,%9'v)p*p6r8@9'<r>HNjOQPyQ;R3RdV'VzWqX'^p_Eldm7n5pjqCqKs$x8",
      dun: "'/8g?kA.B?FOFPFQXG]b`9bik`l6n@,$U'>0(8`<D@%BRDsOlOqS:U1V),.9B.CTD@DLDWI1IlJEO?W/b^cviN",
      wen: "'02D8z9/9K<=EhI9Zz]L]MeTj&j`nbpjwd,$l%D*m+9/i4P4x6Q<4EYFYGxHyM*M9Y^YzZ?c@cAd^f6fOgMhKiHmLnMo^tBwR,*7*8/S/t>7FcFgGeTLZPZUZ[[&[0[=[N_5aNb5cFf<gcgnlsnvo4ptqZqlx6",
      xin: "'2'S)d*)?j?mA'IKMwNeYH]1]2]j`Pa4o6pGt]tw,)f*4<F>4OmVKoqrUtQw>,'T1O4`747=EJGnK$NGO<QOUNVQXJYK[ccLgNgQg_",
      ai: "'6/01]7X:V:e;K<.=g>9>P?bCfDwEbFyK/K@M*N%Tua9cIcSgNhCnKnMplr1ra,)o*$+k6V6e:C>)A;H5HeMgNWNaNnR/ReS[SnT[UKV?dBsu,&:'0(O9Z;*;<?lE1Q:SgV$Y'^)^2_t`6`;f*gJorr;",
      xiu: "';)e)q:Q=`@&OrRbRwXdst,&E6Z7=8A=$FAFnHQX>b_dlg3gGhvk4o`opr7rCu:,/C2L3q3r>KQ%QCScTSTtU7XFdpfBg6k:kOmcoIrLuHxW",
      xu:
        "';'`(g)H+@0s4e4f6`7l8?9_=(==>_?.?EAtCbFEGMIaIlL+L[M^XM[R^N^n_(`Bahd.hpi^n%n2otp$p^pzqis8sFvd,$.%e)k)s*'*B*F*w/r/s1v2H405I5K6*6g7J838H<t=V>m@VDlFCFRJsKaOTOZOdP5QKRTS)WdYZYcbRdPdje&eaeef(f=gsi&i)mAmMo)tI,$I$k%D%Q&e'r(0)Y)])^*k+;.W3'6v7C7K7t9G9j:Y<$<W=8?;K*LTM1MlPiV6_FbRbTcrcsiGkqlHlXou",
      tang: "'@*F+*+j.)/n3r;R<i>hBYDPERTrVxa1czjTk;rxxs,%H&V'@/V3o5j657r;[=E?+@7A+H)RNU>Wr_]bMbabfkFlhpxq9,$u'D.q/I/fA9AjC_D&E4L:N'SxT@TkUEViX2Y5YAZr^4aXf3f>smx0",
      huo: "'C(N)s3J3s8W9w:5=(?w@M@^GxHnJ7ZvZw`Cd8gnhplpm7okro,(J0*215l859u:?:m;n;o?'E*N.P1R<RFV0WJW`XmXrXsZAZy_nlclrqzs^w^,$L(U0u9v=[>o@EAYK)OWRzV0W>XiYVYo^s_S`5achq",
      hui:
        "'D(@.h/i5j6/:J:l=3>X?7?G?X@4@wA&A6AeDdFTKPL6MmNNPKR*R+WdY0YfYhZnZpZq]'])^u^v_&_;_Z`Rb1b^cjfvgKimktq4qDqhr=s9wMyq,$4%x'H'p('(2(o+B+Z+[+b/90j1M1N2C5I6'7)8Q8o9X9u:_;s;v=:===C>M@J@RDxFXGQHcHnL>M=Q*Q=R0WZY%Z8_ydWgHgPhkiIkpkql.l?t6v.vY,%z&W'2'3(G)5*&*F+.+/+q/O0H2<4$8+8:8g9[:j;/;A;v<G<a=r?6@^FCG[HsIOPiU2UgZw[U^+^M`Ybycad4f'm_o:vy",
      kuai: "'D))/:2+:p?eAqBMEDFJVBYO]YlUods9,)v2C9XCQDyHn^QbtoSq],$/$UKRLegjogpK",
      cui: "'F*3.21b<><IF:SuSwTn]_`$azk=yH,%C&+.94:8::8>$?UG'H>KlLpNgUe[CajbCcYeEfQi]k]kwoIoLp*qJqSqmxU,2$4XAlTh^Sc=",
      che: "'K)h+0509U;UBsHqQDQy[=]%e=hviHkFl$l&,92=<=L=iA)QyS9T6T7m3w=,+VEDG8H_bd",
      chen: "'Q*p+q/`=o@IEpF1GyOkPw]`a4f5hGn(nPqFrjvOwSx5y;,$n&B).0$0%>GA9G+KeM&MBQUTDTkU^XoY[Z@e)n6r+umw$w6,&+'g/g1w5'789+9a:';X=$=P?O?uAKALB1B>CZESH.HfKwN*O4S8]6]b_It2vHxfxgy>",
      xun:
        "'R(q+K4Y4j5*5+6&:F?2?L@/B9D%E_FuG8H]JFN`NrPYPjS+VGVaVdY`[I[m^]aYiUmbosrft*vLwP,&r*x+X.)/M2)2J2P8_8n:B;h=_>M?A?x@4@Y@j@rCGE'FIHSJYPRR:Y.[(c9ghqov:vc,&?&F'U'Z(d0I0Q6q6z7)7u;p;r<PHCI'I4J2KILWN@V&c_gZh:inoUo_pQst",
      chi:
        "'V'l(_(p*+.@4S4`5S6]8/888A98;'<j=E>(?6?`BrC3F$HQIELgQDZ1[([4[5[u^w_)avbBbYcNe/f0fsg%gnk1mOn/o)t:uSuq,&D*(*[*^+@/R0T5;7y<'<l=X?qC+IfLcLgLwM5N%P7PSQh]*]L]q^c^i_qayd]kZk[l$l(l^m'n.o'o;pQuZvHx?,*5*W*b/`2i2j3O497G8A8y:.=d?0A.AIAtBXCAH^H`IpJ5JAJHJcP1PWPoS)_:e;fggYiolSr'rNsHsMsOt:u?vqw6xexpy=",
      xuan:
        "'W/92o7Q8C:P=5=AEAGcIaLEM3MvOUZH^J_s`va'c7coiLnUoQp?pSpxqcqdr@wr,$K$L's155*8%<Y=6>PE>EtFhFkGVHEI'L1N'N2PGPRQERDU3Ww_4dDf^fwg5hml'l@y/y0,$y%l''(R(g+[.]0h1]2_9J9g:u;D=0@7ELG;I3JNP%QbS[TUW[YIa7dVh:hOnu",
      nu: "'X+d48HsNlVxZ?^*jC,SP]^o2,gxj%",
      bai: "'Y(F9A;FXKfVfWg$h?i.jqlZm&n1u^v],CkIcNCNDYA[db2bDd6,'W5$?t@Caz",
      gu:
        "'Z.*.x1O7w9[:);D;E<@=r>UADDZGUJ%MNNkQ=SvT<VRVS^2aPe0eUmtt<uvwvxp,%&%P'W(e+]/[0[0q3k:H:kAzB5LkO'O.O_R3U@WMY<Yk]M^h^v_Vb^fHjEjIk*n;p%qkuKwnxB,$n'M*s*y1;6@7S<0=Q?:@]ElEmFiGCGoIQM>OeOjReWFXa^bc^cuf0g/jRmCn7pgr+sru8ugwzx$",
      ni: "'['](6*X/I/P5z9LBdDMDRIXI^KYM9N@O$QFQ_R$^C`6aScSe_f+fYholooTphqPr;uSy=,(M/.1/416a:(C6CmKSPBQ2XZa]fFmQmjnmpnqGr)u6,'j*[+D.@6R9%>TBRF=I0KvOaW_^F_YgBn<phvKy+",
      ban: "'_4*60B8BXIpR;^)e<eAfFjUjVmlnlnmp6sBtbuV,5oARFSIMITM<MhXXacd&h]n@rsrw,.H/>47BNGyH(OCP?W5Z][m`pb]cxloqY",
      zhou:
        "'b(s//0p9R9T:&:D</=$?U@'IYKgOKVDW*[bi'poq;qKyD,2&3p<n=(F>InK^NxO*O[Q7RaTp^m`sa0a3axb/c8fJg+h5h[kyn2n_nprjvixIyc,'`7^9p;:<:<X<r?K@qEsF.F<GFGRI[KqM&Pa_RguhDhXi^jNn8rMuJ",
      qu:
        "'d't(82T4:5_5u6$7L7M7i9jB[K8QRRLRkUA]0bRdWf8nTo0s&sF,)M)V)m.S264;4o;J=g>FA(HTHhN5R5UmW+[Z[o]paEb6cmd'khl7l`neo$r&u1wjyI,&T)'*k*u+(/*/i0;1A1F1Z1m2a5k5r5v677f7k8r<<AUAWAnAsDrE'E:E`VaZJZY[T]%gmgoiCipkMm(o>oQr%sBu(u@vivjvovtwHwhx;y0yI",
      ci: "'e'w(S+B0W2q2u9Z9]<GC2N.VTXYagsvuZvc,)d*R0y:>EwF%IbIqKxNOU;VFW2b*bWd:fLuuuwwf,'5++/80_7q<;?N@oAJBFGpGqGwH)^geHeVj_jum4r$svswuiy7",
      beng: "'f=t>jCgD@DYEoH^T7U%j$,1?G5G=IzJCJDL[VqdEeAg'i5xH,*:BgD4HwIVU(YDYxa9",
      ga: "'h:*>T>g?iH7H<PtQ$Q6ousH,EG,EENYRnVmlB",
      dian: "'n((+i0V79@VBbCMF0FiHJH_K`KsU&V)V9V:XU`XdehTmUmpn9yb,%Y%l'*'G+Y3c6n9[<hErG$JKJNL/LeMBMwN1N8TgUt[6`Q,$M&E+oBKCPCqOrWQ])_A`McPcQdBiRwDy9",
      tian: "'n*<0P9;<&E[EfH%HtKXQQ]K_2`1i)jbqHvW,*s0X4+4I5CG2H/HrJ1J2JFJNJbJhLeOjPrU/UF[6cuePnfp8r_rexP,5`63?QM9PzQGRaWQWyZg[Y`F`OePr5t&t1w+",
      bi:
        "'u(*(1**+D5O8`9r:k<H><BHDjFhH4HoIMIgJtKeMqN<QNT3VhWvWwXEYPYuZQZRZY[>]3^G^Pa&a*f<n7n^oMs=ssuNv*ww,$)$s+o+p+q+t+y.:060k5]7'7?8v:4>U?LCVDgDhF2HfJVJWJgJyKWKmLhLiNFN[Q.Q/TvW%WXXSXVYU]A]B]u^4^`^a_m_zabaicKckeJfegZhBjgkdmInPnbpjqarxt:uLvVvsxXxq,%&%O&;'F+g/G2F3J4S4m4r6W7i<>=h>U>x?3@2@P@pBoCxDQDRGrIgJUK4LGLVLXP)T*T]UoW^YrYsYtZ5[.[/]Ia<aVb(eDf@gCh.iDjkkHlUm3njpqrasSt?tKwqxM",
      zhao: "'v/y8(</<3>yC9I[V]eLfUoVp`rVsSu'y7,(X0Z:E<R>n@QA4A5CEH3O/P_R4]8^gj(jSjompmvmwx>,7g<=A?AdN^O/P&SEVqgrmOqK",
      shao: "'v4;546X8(;(JbPpZFguoYt5uex4,8q=A>B@0EzPcY7^Lcpe2h`s:t/txwLy5,&p2GF4K7a6b@kTmh",
      zuo: "($(2)5+4:+;S>sBFRSRTVLXf^%hOl0pZumv&,G4W*XgY=Z3]]^Jc'g9ntu@w1yAyB,%)2E98M<Oo](eC",
      ti:
        "(')y*J+%2z367'<?<k=[@+@2HAL0LLQSQgQjTGZ5[h[u_R_V`G`H`rd^gThyiNidm+s5sGw1xAxv,*@+<374v8;F]GWI5PAQFU&U=WgX3Y4]ha&dkf3i$iEjNtsvK,&Y'C3_3h3i:)ArAzCDCgCrE(E@I@IbIqMhQES9XOcBd:hsj`k(kFkVkZmfnQpsrgsMsOt(t)tFuV",
      zhan:
        "((+;.d6F?SMRQ`RuT;TOU=U>URUa^1`;d:dHdRj6o/o2oIocu:vBvowExz,$w'9)E.%.N.P0]5UG&O/OAOPR1TX[[aweIi;x*,'G):)h)i*t5l7R87;';+;`=OARFeFvGjJ[MaZ0_WdFdOdse4fRiMiWl[ojqAq[tjv'w[yi",
      he:
        "()4L8F8Q9C9`9u9w:R;.<K=5=7=^>2?:?zC0FxIkP%S&`Df*mus+s;uUvs,$%)t.B0Q3Z5&9?=^>H?8?9@X@_CDD@MfNsO9O;O?ODOHTYV/X<_[aXb7c=h7l0l1u'vrwvxT,$r/M0y2J3s5B7H7J7x:4<1>N>O?2@XA5KENbP(V/Z7Z:Zk[D[X^T`?`@`AaFbgd.eRfsm&p6sWsesktyueusvbxhy?ya",
      she: '(.6t7)HQHaPcZSapb>cuegfyg;h:iqjmjomK,(>)I*G0n3)3^4W72;FD*K.K/K4UwVerVrWrX,%a)x*v+?0a7?<*?D?H@iA0F1Zd[IawhYvW',
      die: '(07s:;:b<?<zCFDmS.TJU7W[^<^i`hd>g;iqpfrlur,$P%u+6.T0eACAMA]IHK5KDKKKLPAPNTndRhilLlMn`rAsIuC,../&/e3n4H7V9F=%AMBBBKBeCcEwHlYfa@ncppr3',
      gou: '(3+f0r587x9_<0BoCDGrGsJ:LmRYZVfRj0kVtguF,%^0=6C?)C9ExL.]`_d`ob^f)iOlIlJlKtXu+,*k2^4.5j657O8(<M>E?o@KJ.O@PBW;^eaPb%',
      kou: "(3103a4D7v8%OoOzZZ^(e1eokImq,7CP)P5QSQcZr[Z^2`8tF,&0&9Nmt'",
      ning: "(4)+*n/N1h:1?sN'O3P)P3P5P:PEfblsuo,'M(N1&9G:.C@E(JER9m;mhu5,'_V5kxtn",
      yong: '(9)S.34U4V9z<p=c?cCjEHF/FlM8U)XwY[[0^T_E_F`Wa/aWaab?f`iVlCupvJ,%y/(1=3.5b7O9W;KAOAbJ>JBL6MpN6S`T5qbu&,$5+S7sC*CVJlL&LFMzQITmYE^h^xcHd;fNn*o1oKp_q7t=',
      wa: "(:2/4F9C:':R:^;u<F=r>&JYK4KcLUR&Vz[Og<j]mV,226A7xIPIcIiJmS;ZKZaZg[*m7pppv,+32R4yK9agamb.wj",
      ka: '(=6G:(:*:E<oCR,o/,2zPP',
      bao: "(>)`/V2_3?3G53575?@5DpDqE)LZNiOOOeP8PQPT]/]xetf)r>r^rhuG,:h<]>y@eB]BjFJZ^]Qetnyu*x4yD,&R'.(K)f*Y2B3H3u3v4Q>??eB)P'VJWYZW_?`>eGeKflgij]kGm?p?qSqfu6xlyC",
      huai: '(@:LBEFqG0[L]ocFcn,%c)24<;$lu,);)@404?C?yg',
      ming: '(H1/1`8K9hJILvani3p@r%sO,%2206EDKOsPQQ[uf,$i/Q5h88L;MCPwX)qRu1',
      hen: '(M:f?j[J_.ff,CBLC,8&a*',
      quan: "(P0F2o4)4v52<bARAYD0HKJTKZNOS3V5ZD_4_b`EfnhDjgszy(ye,$e&'&h)L0h1o5q;h<vB*B+B>BcBdBeC+GgJeL8RJSe^$^ydAe1fMi9v=yq,)I.=1B6F8*<NB^CCF+GSMvPrUCX$ZeanckdIh;htk_n[q$xw",
      tiao: "(Q</N)OZR^RpXb^gg7o&orpssIsntCx/,&cPXVyW9Zl[3]Rb$c*dKm<oGswtxxg,%*%9%:./5V8@9'<rA]BjHaPyQeT3X'a5kAmwo=pXxsyD",
      xing: "(V*D0R2G:oC+CXJ'JpKaN?VFX6Zy^A`+`mlgpQrZt1,1Z3N6u>QC.D7GXNoOtQ<Sq_;_HeVpWqurRvAv`w;yS,+O1V6P6X9nJyKKMmO5PTPqQiW(Wb]7]Ff+fbhTj7m=nS",
      kan: "(Y+20y2)2@4gBDDADyF.SdTOTZ`4dCeIvX,%n(Q*+*/P'R$ROS/U[[zwV,1XFGG'Zu[]cGl+ySyY",
      lai: "(])n*6<'JlKdSfSpXq[W[cm9tGxPy4,)63@4D:%;(;.CpG.KcMsMyN/PoQ&^3^]`ta=wWx],(T5(8y?L?g@h@uIRKuRoX:c2c8h^n:rns<vn",
      kua: '(`:KCPH6JG^rg4pz,$+d5o5s5,8EB*B_Pxjf',
      gong: "(a(r0J0O4+5K5N7I;`=eEcO^OaVKVOW]YiZ'_3aGaoflfmmjt=vl,/P9<?GF?U7_ic2c5c;h4kTnK,*Q6K6[>i@?E$E+F%QHa+kNyMyRyXyv",
      mi:
        "(e0u1&14:@>nEMNPOEOnOyS<WTWaWyZ;ZCZc^WcykKlbmNmxtk,$z&P(M(W/Z030S0k1n455+7G7q:(:+;2;X?BA*CxE6I?PMQQR(W%W4X.XV`LaQambgc.fvjnjvoXt(y],$e%p%w'w)*)>+w2e5M5N5U6)869y:$=6=AHvMuNDNENJQ.Yi`StpvDvEvUvzwv",
      an: '(i*&+=/C6i6o:O;x<lCWD=DbLCO;R)R3RoS8X=Xtg/i]qYqvw.w/,.o1hBkEpLfOXO^jYo@pVvFxFy9yH,%?3]8[9^=3>A>QQ2RBX3Z^^$_>a(a)bGgImMrusKuZwU',
      lu:
        "(j.M0K3[4]4o6H6J?N@3@EApBkC&EqErG*K?S/XNYBYVZkZldPi1k3l:lFm(m<rpu4vFy@,&N&X'd(j)(.M.R1B3x434Z7I7[8]9E:X:o<7?O@oE3EBG?HNHvI:J@OOOYQ3RGSlTCTZUZWQWVY;YvZ4^n`A`_`h`ia7a8b@e`gxi=j9o0q2qyrys1sYsasbtHwp,%N%P%`&U(])D)Q)_/c106b:8?4@aAmBfC=CzF)FmG6GEGTGkIYM[O[R:RiRkTNTdU.UeVKVPYO]4]g_ychd%gfhVi:k+lrlun?p(p3p:rFrqs%t]txu:v%v/v9vMw_",
      mou: '(k4H7H9M:uDt^cmsu_w?,AjPVg*ii,+)9k<zC0SLaHrHvk',
      cun: '(v2B8IGQN_PV]Dfpt3,94O$[wa^qC,K(',
      lv: "(z)8+U.H/T5.6A8S9*;9C1QlQmQpTP[Mb8bDg:grh+oKx2,$o(m(q.F.v76:T=m@gEAQgW5Y0ZC_Ad`e.e`frg&i=iSpuq.q=q@yL,(.)S4'4FKZQKVHWpZC[@iaist>",
      zhen:
        ")&)4+OB'EaEfJALrP&Q]W9W<WRZAf&g1gUiSjcnzpUsKtxu<vTwHwSyx,$N$w%+%l'$+72>5X6W8f9`DWF3F4GzH/IoJSJrL%P3P<P=PWSITyWAWaWnYd[j_:a$cLcud_fWf`hNiZm2nrrExlys,$<$h'h2M385S7L8j<8>e?C@<@gEfFjGJH2ItM3NdOtR(RhS_T;T<VoY1[x]Q_Mh'kip%qeu7wV",
      ce: ")'+N0i0k7%72H$Y)_A`nblfumvv?,2A5$Jv]U^0^8^N_'`@b+vWxjy2,%+",
      chai: ")*/G=%@eVTf@v.,BiM?W3n8t&ul,*+0e296t>@O%W'",
      nong: ")./41$:t?WYog0g[,'m)C2I9n@TMlX+Y&Z6g^oYq^,'%4j;(H0H1N8kuxZ",
      hou: ')1*G7*8L9$9%9_<xC7DoWQ[N,1SBsDBLyQDR]_RbQl/l7uxyR,=yI/KJL5PvSOf)jemJnRofp@pJxS',
      jiong: ")2.X0a0j0nA1BgD'dfdg,0a2r9+<3<^=K>a>b?e@9Zod%dzr0r3,(f(k45HdI2Pcc>d0gph=",
      tui: ")=)B.YFJK'Q?Z0Z5]@i$,'>?*Z>m7pr,%I(B(_+U+p/348;KCiD8I(^>c/c0c3d5hPjhlM",
      nan: ")?6=<rA%A)IJJqL'MBcxexiEqstrun,$F5n?%JMJop[wTy1,/+9`A1J*^X_'",
      xiao:
        ")@)Q)u+u3*4G9e:H:j;0<g=^>Q>V>o>v?%@A@Y@aJ9KMNdObOhPnT2XgZ^^obmipl(mwnCn`naq1q`rSu;uCv[x1,);*8*E+W+e1s3(3/3i8E:v;t;u<z=b?9?pCjDnDqLHLMNbNiPcT)T1Z.Zp]?^K^Y_1_D_g`J`^dfhtkrn0qLwLxz,&l'*'n)J)U+R/u0+0N12768$8^8t9zBzI7KlQAX>_JdWiKj)jdjrk$lJr&r?t/u<",
      bian: ")A5y6D7kG[S%Yl[j][`oddeQiWp],/f/g<L?(A[DCE)E^ImL&SOTtYRZ]]m_5a1aGbNewf0iMiTr;sGtgy7,'u.`3m5G5p9D;L?&@JGtGzH$H%H'H*H+H7H8IxJ`JaNLS`Z4a3aKnXnYq&qwsY",
      pian: ")A+'A2LSdd,$($OAQBEDCE)H6Hw_Mf0iMl)oBp3,5K9H=7?%?8BgCdRyh4hZhjhlj2jAjjm$sY",
      cu: ")E68?:LV[D^4c%,'f*qD)LsMIO+`9avfgoo,%r6;8LAUAbAnAsCICbD%DBDCMfcYv;v>v@v_wg",
      e:
        ")F+..r5H6e6k8i9+9G:8:O;&?3?[A8CKDXDwE&IcIjJLK%K@KAKBQdRAS)SJSKTMY/_<_q`Sa3d[eJj?jNjdl_mzu%,)0*L*i1h325<FZG9LfLmNXPjS(S2SJSiU:V>p`tmwPy:,&X*3+X.G5c7+8N9N:c;O<%=.=zEUEqG?HUIwIzJQL0O=O]QsS6VOXEXvZR[Q[k]$]+bUbibjcCcDd<d?ebexfzhRlgnko0p'pwrRrhrisPuSufxUy4",
      guang: ')I.`0%:9C;JEX=XAYMg(knw(,2.8a;q<E<H<I=;BnE1F<Sgo7r0r3uy,F(IEQ1w*',
      ku: ')J2j;/=X@QAZDNXQXjYNe)g4ghsEu=w3,$A=`C>M.RrT*XWZbZvd?hgnku4,2k3F4@BCKBMQjbmZyq',
      jun: ')L/30z8Y9)B=CkJFPMS^cEgjm6mMq7wexq,/a2P:B=g?zFaK1NyO(O)TS[f^:^s^zw?wsyo,*>.$265Z?BEGKdOPP`Q&S7W9]D^W^fc)edg&hQj9mep]r_r`rcvAvIvOyZy^',
      zu: ")P*36*68;+;kSuT8^4oUusyH,AFF+W&X^YK_(d$hVxKyC,$O7n<3B'CFSsTHTQYH]'`n",
      hun: ')T*`ALK]KnQ)]e`Ma`h`pAp_x`xg,+32G3`4E585^5r6^=_=xFXGQOvQ1Q9Q>v_yv,%e6N9L<VFrZS[Oejg(lDxD',
      su: ")Y+^.z=d@kB%D1EJEKGlLyOraIaJbjkKwgy2,%3&L&S'D)1+(1%1w336U6_8X8dEDFEHYJ<U9YKYMYwZz`>azb'cVf_fiihmrmtpytrwJ,%_(+(^(j6Q7F:*<7=;AeD(IIJ7JBM?QSefiJj?mqoVtMuc",
      lia: ')l*4,,',
      pai: ')v:cYd[ZfGhexd,0>244a5=AVBZCh^_`c`e,$4FQHjSf',
      biao: ')x.J/XF&KLM)Wi[*kSt5vA,&W(<4@7@:c;o?M@aCnMGUaZD`+p1q2q6qt,%Z(>1s3S4L9B::?yRmTqVIY@Y^dKdPdYdidjdkdmdte%e&ijj3jJk5q2v=',
      fei: ")z375e708_<OHZI+KUKVQhX^Y+YL_xdlnkpeqbrTsEtPv3xc,%9'+'R(w0V4)4R:MBrC4CiL+L`McSK]__aeYi+kxn?nTnbnjnkpEtaxDx[,&Z+u.60D3X8x<l?+@WUcY.]Y_U`7`P`Qe'e)e*etgGhdhnn;pdx5",
      bei: "*'*;+7+S+t.I4Q5Q679A;FGYNbXr_]_y`^`ubTixp3tPtQv2wTx&xdxfyO,=tAwBKC(C`FcGDO5T`TiWl^_b]ngqau),$z(9+W2b4%8T9(>d@;EkFOGZK8KhL/PQQQUyW3]0`ta<aRj^rzu]",
      dao: "*@26282g8$>J?hG$PZPmRQSXUEUFUtWCX(]7`.h5hAjAlfsnxNy`,%p(:(D._=s@]ICOIONWIWTX/Y]Yf^gdKh+kylArksJxQ,/[1g1j3QCkEAH8J'N]]T^7^Il^p/",
      tan: "*A+x.Q/587<c>E>L?/?0BCBQB]D<FVF[FnG.KTZOZTZ_]>^S`Fbfc'c1hujum%mRpKrDrQ,$j'G'k*<.55Z7;8k8l9d;Z<[?uHmL?L_MEN7U+ePg[j2j8r[r`xN,(A2H4q5=91:q:w<w=G>a>q@HKrMcMnN6PKRUWOXkc9",
      chui: '*C8xAVByCc`KhHjOw>y.yL,%_<8TL_$p6x),RNT&Xc]ac6y`',
      kong: '*SD8NZSi^k`0hzyJ,3URsTMZP^wkA,E5RIa8s2',
      juan: '*T4C4Z5$6^9IARAYCpHDHKJ8JvKZUmV&VbW5ZD_G`EbEgwhDsNw0wry(ye,353f=aCYDvIdPUPiQ(dOd[fnhujOjmonp5qfx6,&$1<32;DL2Q[QbR>TFUfXhY6ZX^W^fa7e:eYuQyx',
      luo: '*]/k3&:E<_@h@uP[S(grhBk4m)m8m<mLm[ruyc,)Q1D1f1g4Q8+:R=3BLD/E:FDMJN9NqSDSoT4Ul]n_/aLdCh)hojAjpp&pSr%vaxpy;,$v)A+*/m0b3Z5q5w89BTDaE0IfJfT[VcXbYC^mc%fZhCi<iVj0jKmSrOtd',
      song: '*^.71Q8CJVO=T5TxU1Xy]X]q_aa?aMb5c3gyiRk+tatcu7ufx7xY,$J(=4*7a9xTG[im$mbx(,718e<(<dI)TGbVcyf2hIk]',
      leng: "*_1A;hD]E>T&aAy/,$DPuT_YF,':C>",
      ben: '*c=IBABBH+H0HRHWhKl*scvYwY,$30l4N8.<1B=Jq]Vk`u=,0D?3@PISRQXY',
      cai: '*g+L<9D>KIOs[)dpdshtt2x_,+xD(Q6eCfdh$x.,%t2x>h@@BkCKNM',
      ying:
        "*o.R<V=P>k?Q@TEEGUKwLDLdLwN6N:NLO0TsV*V0XRYX[3]JaCc?kBkZm;mDoypRqMqmsVu[wBwUx>,$M$`&p)=)A2^506%616u748?8D:/:0:J:[:r:w;1;6;R;_>>>C>V?D@=@bFWGnH%HLI>IrJ*MYN3O3O:P+R_T:TsVUWoYya;aMebfBgzi(igj*j+j6m&q?qXu?ucv`vbw`waxwxxxyy<,%7'k(x+%.M.n/1/T0d1=4<5i9x:d;=?A@+A*EBHLKeT1UUV3Xr_`a3bDc(d/d7d8omr6sGs^sftLt[tqu&uuv(",
      ruan: '*sDvG&L4kbs@,(SG_I(TlVCejlPpO,EYFSGA[q',
      chun: "*u;IL9`jp0pWqxsFtXz',%X')(Z2h4A5v757kB?GUQ@_@cJhAnEojq<t<wcxWy4,$9%F//1*?cFZMbMpRT]Gn3nas?sTu`",
      ruo: '+$7eL(U0ZGgchN,$/4Q>1@f_2_bu3,$bL.nto5so',
      dang: '+*/70822?lB)CSFrL$OGTCTrZja1gGlMmWwI,(()U/)8P9L;[FVHUHjIhK8O]QTRwU%V7^6`N`lsWv[x<,&h)10U3&4o:x;_=:AoIjUuWnZz_BwN',
      huang: "+90B2$=>E%E=FZHYLAOmT@VEW_[k^M^h`iaNakiVpvpwrLsP,$b%7(e/n5Y6p8a<m>R?2?r@kDiGpHZMZNMNdNpUuZ(_G`Yfcn+sDvLy^,.^0C1K7w9f9u=&AuJ%SBT2U>Y%^%bCf%hondoWpztNw'w(",
      duan: '+M3NE?L=o3o=ys,+O+c>KGiRdTz[r`HaHemiLlSpiym,3pDeS=SVXz',
      ou: '+P5u6$8V9%9?>ZEs]sb4,(p)j*>+N+a0B7m?cIYIwX8lipTq0,&C()(H:I;wTPqmt9u3',
      zan: "+T/Y/l/u:G=*?8@jOtfqi[kdm3m@mPpOqar5w@,'`:S;TI3I<IDX4ZI`(`]`abV,52;E;]?M@&A&B%B&CwLkLqLvRuTwTxUOUYf[ro",
      za: '+T5W9m9v:G=*?:@b@j@oVgdqfqsyw@,0<0MSZc[cer$r*,4[HHP2^l^w_)b>lv',
      lou: '+U.H3%=W>SEzJZKCP>QeTlU;Y>bDj*k5,$c&Q6+7]7b?SIuM2MTMUQg_Y`?ljlosQ,$2%q/./n:G>^E;JGTsY*]9_yaYjpjzt>',
      sou: "+[1K7o7r=q>C>DY(Y5gyh.jFjtk+l(lam'y5,(y)y6XDNMPQWa2sN,$6$j'X(@/=L9MtT8TWY$d_dadxf9g0i&",
      yuan:
        "+a/v0e1.3(71737G9B:x=5?aA0A7APAXA]A^AgCECZEgGjIQI_LILcLsNCOMOvZH^B_G`>a^i<istNy%,$K%0%>'g(u/x3V4C4O4T4X4d5m6668;CA:D6DMGjOiP@Wc]<_&erf;iVkGn3tMttuaz&,$C$R'A'^*D+i.;.d.v/:1Y273M3Y3t42:2>f@>FlGhHZIeJ6JdK'M5OZR0T?]PcNgsi3lpqTqzs+sXsgu0uAubwfwrx(x/",
      rong: '+b+v0vB>LeLuN1O4OlSWTgTsUsd0j2j;rrv>,%%%@%G%y.+.J6]:s=Y?F@bCJGuYlYndJfShek8n6uhv2v^,$p/0/?/@0p41EpSwY?h7',
      jiang: "+f/%4t5X5ZE<FjGWHTHgHkJ2PePfU3Z2ZLZMZPZak@kTwN,&1'j)$+G/Q1e2<5'7B8=BUD]JlK<KGKHV9blbsdUgThniokullq7v+y?,$1%v';/2/r:1:S;u=bMKN(N2];a`cRoHq%",
      bang: "+hC[EWW@WYWmX'[/g^h2j<oGwmxexf,%.2RA^E_T3U?Y@ddfGhdpssK,$G*2*:+0.5:+=>K&K+SmY;aBjs",
      shan:
        "+n.V/52V2a3C3_6;<s=H>MB.CrFFFGIxJ+MrR%UaWfZxdjgbhqi6i8jQkQkzlGnXqOt)v/v?yj,'''q*H/G8k8w9B;Y<e>Z?/?>CHF0K`L/PqUkWWX&Yr]Ffzg;imkJkLogqQqYrmtAu9,0L0X1v5]7%9q;3;m@)A)ABBPEOJmL^NkPnU`VwYnYoYu[*]C]KfGi6jImtoYoZq;qA",
      que: '+p6Z6bCiESFMSh_raFb.j3n:nDxw,%I/=<B@GGIMRO%T*T<T^U4U5V6VSiyj$,$A*EAiZbZl[W[[^Zs&uX',
      nuo: ".//m='Jsa<c]c^gPi=jCjPjfx+,$y'J.3YVZ:b[bpbzlP,2i2j9i<iCfIhSKXV^X_'",
      can: ".0/A7T7U7V7W=J>M@jN$Nx`Z``awaxaybzi8kHkQs7,*z+25F9Y<+@D@wHgYr`(b<,'<*C.K1@1D:HTae/e_i@j@wPwX",
      lei: ".1/S/p4a7O>eC4E;G(G:M2lDm0,&M(%(g(h)[141l3;4&;GI+K@M=MrRAUDU`V2VMVNWCX5aYcfdMfmgngth/ifj7kNlTmz,%T&J'&(5)3)4)?)H1%8B;F<BG2MSPfRGUnV>V_YW_=`3bfbucTdEoptvxL",
      zao: ".425;W;f=Y?]b/opu1v@wtxj,9K;y>w@CHCHiNGNH[E[J`;bjs7,'f(Q*R:vAyD5DOIJJCN/Vf",
      cao: ".4>NQyU@aXadaqc<kxlOs/s0,&;7hbdn'sPsovC,%J/_4M4hLdTyi0x.",
      ao: ".82/7=>=>>BjC'FaFdH`HdHfLXLkMIRORgU?UoY<b(c@eEelfQkDl[n0uywu,0p7H9D9^?O?_@iDaDbHFP/UWl3l8l<m`spt],%o/b2:4e:M:NEeJ>KlTXTdTeYe^8^Ci?jFo8q(t6wn",
      cou: '.<1[,$W5DpR,FYGb',
      chuang: ".>2;2Q2h313;3W=:?9WuXH]uaRk$sY,'PAJAXA`KqM;U]ZjZn[=,Zm[1",
      piao: ".J3`4p>RM0[1[taroask,+%7TB[ILNrQjW:`+ftidl4wO,'c/hN)ZtcVdfdge$iAjJlToD",
      man: ".NCnF%IzK(M4QcWg_^b*b<kGs2,&<&_6$737Q8'9U9b?fDZQ]QiRKd^fpie,%V%f)2+H/Z0*1E4c:T=CLRTYTlYBa2cXdAf?g8knkooAq5",
      zun: ".Z?4FQPiUYfph(kpvf,'%;5gBj1,2o:gJKPkUIoXq=sDtY",
      deng: ".c2'?FFWM[UWb`dG,(_9.:j;r@$HPNAQuUo[v]x`XsV,5o=fD:JjLUUSYU^?",
      tie: '.j9UW&^1,m?xo,*w?.@RBKOwPtU[UpWSeIf&iT',
      seng: '.n,,kp',
      zhuang: ".uG@GAGGHVI0IGK$WuXBXPd%d&d'kuwOwp,&?5r82=fBmBwb1bevRw0,3%3?",
      min: "/&1D2W4R9KC*IoRnSr]L]M]z_v`pa)b$bvf9h<mrn'nIp+p.qj,.W194P5I5^8bEYF/G(G/G[LjO1OrS'TV]P]l`Te[epiUjJu.,1(?bOdR?STZ(Z?[7[?o;q6quwdwe",
      sai: '/1>4>l?nEX^7a@iJ,.&.>`mpa,?p@zcAnnpv',
      tai: "/E178.AFBeGzH&H1HcN5Nh]C]a]pajf$ldn_oyu?,(E/A/c/d1:6?<`<a@BF*^ca%nWnirDrqtwx?,'dB<K2M8OXW+dSh(j(m>pB",
      lan:
        "/H0N7C<7?u@qBJFoFvKmNDNJNURPT_X/`AcHcXcmfaj%lhmBmZnnnpqtvI,$k)F)X)Y2_777w9F:A;@;H;c;d<q@5@A@U@`@zA.A0I$I=_u`vaAc+gfh.iDj[yz,%/'x)+)/4B4d4s5.575b5x6.:b;W=JDlM]VSVkYQZc[Saici",
      meng: "/L1)4_GuGvNfQ2X&XkcRcTcli7l`res]x8,'A(B.Q.Y6;:1D'E.IxJUN*OQQmR=RHVDsAs_w:x_,$?&B*'.&.x000rLbLgQLRjXo_@_l`1`2cdfUkIn%nGtrv*wdwewm",
      qiong: "/O6SMvO8`kbVw5,'S>0>3>i??FhGNHXI4IAPwQYZMZO[0[H]j]vs2ud,(%(C+C+FACBbJrPm",
      lie: '/R1G2M41444K:=;9CuCvJJV%VJ]Hg8g>h;m$vpxl,+z1V2L<w=H>t@B@c@hBYCqD+DuE/e+mEofuq,+42yA_D_I&dTkrkzmRoyrA',
      teng: '/bWc,7%7n?WL(L9a.a6f]pqqM,(:)G/U8H9oJ]_vh8i.ibo+x1',
      long: "/d:/:y@FC$C%G1G2Q2R.UJV'V(Yo]+f]m=pprss^vDwn,%q)51A5k7/7^;'@uF7I9M^PJRIS^T4VWVX[A[K[_]k_i_ta>m9mmo+u^,(y14165)=`@8DgTvVN]5]u^N_z`9i`tzyKyPyQyW",
      rang: '/g51@UFsG6cpmF,;>@xE7INX1Z9ZFh%,(o;4;U;lDnl$',
      xiong: "/w/z2*5<5B:[Gc]f^znU,/l2*>>>C?<?=o=o>t0,7;7j8<<'<5?b^_",
      chong: '/x1<>ID9ORPSSjSk]$]ObMbriojz,042q3.82A&FQL9XKenjjkVrLsUv4,)n.p0P1h3kCyNSPbX1]o',
      dui: "0&0(0/<;C8DTEZPWP]Pl^VbhbicUn+n4n@tZ,:=:Q:y;)LlTbUMVrds,'[:_;7G+I%UMUVYP[b]]]ybrr7",
      rui: "0&0(0/7tG3`Te_u$w[,'N/`GqJ:QI];eZgFtPuJ,&H&I&c(X(Y*9.?Q=QxU2XN",
      ke:
        "0'2r3+4N4X5w8+9`:I=lBnDOGEJkOTPdRXS'T`ThUl_0_Na6a7iaj?n>v'y3,%N&T*/+U+V.q4U5.6>:C<QAKB%BFF&KwLmQVSDT*TuU@UOV0V@XOYHZw[>ehi@knsFu'y&,'@*d.R1S2J8q<mB+EvGDMsOfP^R7WHX&X]Z2bqc<d1d9h`j<jl",
      tu: "0*021M2.8N;M<HA=AHAaAbAjAlD[DfEQFfO<QkS[TmU:XhYF[T^<_MgohJikk)ws,(7/T2y3+5`8rH7LJM'X=XAY6ZW^;pbvww[x1yT,$JAMBvHJI>MNO'ObQJR)S0VtgEhNrVres)sUt+tWxG",
      nei: '0E0d;*Ju,.d.e2toup9,JzRMeag%mmn2',
      liu:
        "0K2N3l@>EjLhNBTvY1cgjyoEoNoXv+v;wDwa,%F'4'X272E6B899;:f?J?aF1FpGsH(HaJZJpK3KCM>M`T9TZU<UYZceGi8jajkkf,$K$l(F0%39CvJ1R*SrT4T_U<XKY9YJ_%_kdcdedhdzf8g5h2hGi*iOjGl:o%spt<uouwvG",
      shou: '0[7a7j;q?.CJGOGRO:P^dndohZmemy,3OCKDrE2LWM@e:i4pwsE,TWg<yt',
      ran: "0c0h9O>rIwLQub,'T><?b?vF'g4nJtu,$)*T*i212=2Wk;kE",
      gang: "0g182P3=DVE7RMRWSzd%d&d'e'hXjntBxt,%f5'>;>?AsB;BqKZRsTh^Ue?hDiwj)jKn5,NtR2T.W4",
      gua: '0m2e323P3c6L7z9C9[:R<WBcP?fgg&hnvWwV,*2>xIFd5f4jMjUnh,2v3e8=9M<DAYC^PzQGWydLdUhzr:uG',
      zui: "1+7.9k>@?$?rUDUpqJs6sNvg,%o&u'r'w)J:8HzQ'WOYKd*h'jT,&]036BGsM.MUMdR+R@",
      qia: '1H5w6G:CB*SBW4_6a6f*f_hcialX,+&23SkUGo&yZ,2nBHM:a.jm',
      mei: "1L@:B<E+EuIdL2L@LHLiMhP.TRTY]*f4gZmEoFpYu&v<wl,$I$Y%d(n+3+i+j000?0J2s565>5B>d>k@6DFEfFbGTLEP%P9PaQBW)WiYs_Ibgjyk/oJoipNuHw9z',.e28B@E8L+MPQLSeSjY)Y/_Oaml?lGs[ujwIwZ",
      zhun: '1P1a<;AvDIODQz]bp/,4A6<Y?ZVe5nE,1k7B9.<uHK',
      du: '1j3D5p7P>fE/I<IVJ:NAXen[qSqnt>y^,(t+F+J+m3>4]4p:]AWAcB@BXCNDwGOI.O0Q+QCXy]&]1_kn4t1vk,/K111C3^5d8l;B;b<j=_?`@3@kL)MjRLS/VEY(Zd[I`bafb+b/i1k%wOw^',
      kai: "1z2%2w3V4b>KCTEIHPR8TuYk]m_@a0aUa]b2ihr',$^)o)r:C<:=1,$.=cF*S'SqT5UaWsXLXsYvZj[Ad`",
      hua: '2H3f5P648i9D:n>pCyH9J7KuKvMYM`Snj^k<l8t[u.wLyY,&(&y6x9/DLJQK+K7S)TBU@bJgIrdtStTxA,$0&N)$/H6E8/8m9C9M:W;0<K=[NqNrQcRlU/WziHj/tJw0',
      bie: '2[2bZ][ybUv%v*,MDMzw&,)N*q0<4aD7oOq4woy]',
      pao: "2_5I9q@5C)HCXTejfE,1)<]<_=JA8C/IIKtNwSTVEVTZDosxu,(>2B2C4(B7BGEnP'WY`V`wv=v?vh",
      geng: "2f;?CeDxS]XXgSs(x'yh,2d>EJad;d<dieyf@hskDkOlWm+w(x@,?S@rKcd(jimppRs@ua",
      shua: '2n;s,lO,8Z',
      cuo: "3)347/GaU'U+XsgQi&j=l0,H1LRM?PhRcUEfLoewCwG,$Q$s%i)Z98ClITJILqMxQFRfSkXGXWv4v8",
      kei: '3+Pd,,',
      la: "3.<T<v@WBzfCieifjDm$m9ovuT,$1)66&@hI8M$SNUPkbp<qgqwwoy;,(4.%.Q.y1'GuGvJbVDY_a?kenU",
      pou: '389p:zC]JtKFecehgqh]xf,B9^[,34',
      tuan: "3ZA*A+A`AcEwFKZmb;enibkL,&'(H5G5e7l>YD=K?KE`1c$,3y>XTRt4t^",
      zuan: '3zi[mS,`)aIgJgigph(it,?mDkDuOyV@VdWM',
      keng: '438lB>BGI>gYi?kR,+RB2SdT(TI,8WQ?S@TfX=[o',
      gao: "4P9'94H.S_jHtT,%R%S%g&7'Z(P(sDYNQNVQ4QHW@WBWqY)YiYj^P_`b`fXi^k(k/q+r9wy,'l(I8d<_K_QzT:XDY:b'f5k.k/t0tSx+",
      lang: "4T;6<fCoElM'ScY4njsLsMsZw`,%$&A)w2a=TC_FlH+T.Y*^>s<wN,$=$o%4+f/48ME.KPKTKaQMT=XPZB[HhL",
      weng: '4k>%EOHbTpmHr),6jIXJ)QRj5kWmZ,$q&x/;SvsiunxX',
      tao: "5E8$:M<CH0H3HUM%W`Z8aef%hbjYw'xN,%V(D1y3=3O4$7$::H'WKd=e=fTfbhyi7xV,.03L6u7o:5;kBjFhHnI+M_R4]e`sa%aOb$b6eFf:fOh5h]x'",
      nao: "5R9aCVDeGeKhM(NsSSUdV4^+_B_p`dc/gFjykjwG,'23yD?E0E9GlSjThU'oWozpXqp,+L0M7[:aU=WlZ/[;l'",
      zang: "5cEYHVYt,ALk.oUqrr'r1yk,&3'z???J@1@:@bQDh$itk&",
      suan: '5o,C^LNW(]5^G^r`),$BMR',
      nian: "6(:m<$D)J?X2Yj]d_l`IfBhMkql7m4,$w3*4>69>DU8XHXd`BawsB,&'CpD6D]FLGYGjm<nJp9pirQw5",
      shuai: '6AVlW7k(,EAJ?fQi],/s2$',
      mang: '7&8@;$GPJfQ2Xk]G_DsPt9tI,.Y/D2S8)AoB1CWLKOeOfT3T;].t4uzv5wdwe,(`+0000mJpNvQtWfhK',
      rou: '7KL1O?iGuc,$a4g>jGZI1X6agbOmxocp_yE,.a;5CeFTS4aAauhxnbsJ',
      cen: '7T7U7V7WCdRGU8,/h36Yr]@`(,',
      shuang: "7_ExNFNMb),)H1A88;';BAGV[fNsd,U'^t_ci9iejPt@u$v.",
      po: "83;3>`@GBWHcKHP_R[RmYdjUmopTsk,(^0i1D1F1q5J628O:R=8DJF$NkSVSX]g_)atg%kd,$P%uHjL`M@MrN7N`P3U4VrWI]0bbd'gqkHlF",
      a: '8T9`<8=_,p>,RHXS]+',
      tun: '8]9;<;?=A.B?QzXG]bbip/rHsR,//34=yq_qjt<,+$48=s=uER_[e7fclkp2w=',
      hang: '8lCUH+I>V^]koAtOw%,/y]>^/d0hjrutc,*P1V3$>lHPJvbYczlj',
      shun: "8m,$U'=PRQeQoQwrg,&bbPcqka",
      ne: '8u9:9L;*e_,KTPP,77;z',
      chuo: '8v;@<J@[JlJmKhL(NT`KdUfulK,*N3R3yUh_?eKgAi.,AkBwC6FEG`H3H4I_MEQgTQVGeny&yH',
      wai: '9C:R=&GiTB,*X;$[x,cW',
      guo: "9C:R<^=(>Y@vA9A@AEAGAJAUD&DlF4T*WNWjZ`Zd`:aucLi2k%mzu(y?,$+&$(e3C3l4u7`9oCvM)RB`4bIeDm@mKp4pJq3wz,&*)e.D.N0$3[3dFFHEIyKpOMS+UtXCekg'g>",
      qiang: "9E;w<:=a>:F5F?FbMKMtUBYQZMZPZad7d9dIeqjak:k@o.u8yJ,%`&n(96R7e<K?IANAPCsDUElH0KHRs_sg.gLjwk+k5k;kAkQpFsX,%U&5'>(w.'4O:&B:CoD/SzTgU3XTXtYTsc",
      pen: '9J=I=Q?g,*C5M9qIUO8l:yN,',
      pin: ":W@JJ.K&M.N0fTfw,$g/HAhEhG%R?S1V=Z<mF,'](b0x>n@Icgd3dHgPi]",
      ha: ':_Hc,c],**+>.mP^X&',
      yo: ':v;z=L,,',
      o: ';&=.?T?w,^W,',
      n: ';V>5,,',
      huan:
        ';g=4=5@]AgCZDiH@HNMvNOOXP+PNS:TVX9_ja(c7cth4iYlRm:w9x),&3)e*A*O2/2Y3E4h849M9_<x=p>lBvCADPE8EjG`HoIELXM+PeQYbvd;dgexgUiQirk<n*v;xZxd,$C(=;[>&>8>L>bG(HVIWJZKILsSRUqY&YX[$[^^c^uihkvmvnPnZp[qdrWv&',
      ken: '<1CHFe_9c=i+,FHSpn&nInU,3)3f>(>MRpy@yF',
      chuai: '<Jibj5,*(q5qH,C[',
      pa: '<XI;VqW%^/dui/tY,/58TA6GHNK^<l[rpu7yh,2OB(WA',
      se: "<Z=bEXYQcDfukKlNvV,&)*]*_1^3K4Y9(9)9r9z:iG'GrHpMQZ%Z7ZEb+gRsi,'>:[G&Q5SpU6X+Z@Zv_3dn",
      re: "='`lhN,4Q=G?du3,",
      sun: "=JN`NreIh1j7j8jw,%=%TCTDI]9^%_6`Zve,$g&t'HT6^Ve5e?st",
      hei: '>.?1,8u,w7w8',
      dia: '>8,,',
      de: '>aB$XS[Y[v[z_:_z`]ozxb,3eNJ,*]RwX[',
      dei: '>a[Y,,',
      kuo: '?=Y=e7f[fgg(lw,85:LXmXr]wy=y>,+8PzQGWyZa[V_pa=aWatbmkPkw',
      ceng: "?>QLQoULs3s4,'Q[u,D;iQ",
      ca: '@1@bf@lim1,VJV_,J@',
      zeng: "@mF=FDbXs3s4,'Q?jHRJ%RgUn[ue(f[g8i:inji,:Z@$A(LYQpXAl7ob",
      nin: 'A$^[_ofk,oR,',
      kun: 'A:BZDQDaGJGNKnSsSt_Igmp8q:xC,2z8G=w?gCtG:H9PnT?WGY1YEdtwu,.13(3/3K3o>MMgRKX^ZAZN[Eh[k6k7k>n>pes4sZu[',
      qun: 'AAG^O`SPW>,*=^sk9k:,3;3BC&IKvA',
      ri: 'ABol,.c,2)NwO.OVg`iq',
      lve: "AdP[hs,K%K'YN,QhQmXH",
      zhui: 'BVFBH]K9`gibyL,0;IkK9TLV.];eBfEi>iPpApz,92?x@wI%MeRFRYV*Xd]y^ShWj=s1',
      sao: "DKLqadc<e9hUi9j>x4,.O6DM3R8g)gVijiqqi,/Xdahei5jDk4o$oiq'",
      en: 'H>S0_/jl,?0,$d',
      zou: "HML_i'iKj4y5y6,$W^^eSwm,99<hA:A;K;KsL@Lh]Zi4iyn(nEpcw$y/y8yo",
      nv: 'Hr_+sH,0/aWm=,1L1NO)W%',
      nuan: 'Hzqu,4k5e>]>^,ey',
      shuo: 'I)aJjJnJnRsJ,%])y1w<p@lDpRUSxTx_D,$Z8i8k<cPnT%VFWV',
      niu: 'IHNn]g^+e;elfQt^,/o0/<2AfAgBzcFhOwK,OGW@`h',
      rao: "J]Mce>m*wG,'2Z.gDhhvU,&V4bJL^<fLfq",
      niang: 'JoN&NI,,MYN>NF',
      shui: 'K9W:gOh/,/$/%/*393<Q)WCY/Y8p/,3@8i8k8o<c<pZ*',
      nve: 'Kl,KbMATF,)R',
      nen: 'L4MCMJ^[,,',
      niao: 'LzMxN8QI,&a6aoyu`,%y2;3*4;qCu+',
      kuan: 'OpP9PJx3,)x***.[?[@qv,VMjvk*',
      cuan: 'V7l<m@mImP,(l)S+C/8:S;T?iA2ZIZs[?[@[F_h`D,DMDtQ[V`YS',
      te: ']?]@b%,B/B<om,06R%X;',
      zen: '^&kd,,:m=H',
      zei: 'd?,,0g?<@Zn]ohpI',
      den: 'e3eK,,',
      zhua: 'ebgCl@,(1A4A5`nqZ,kS',
      shuan: "fovM,&'3PdApZ,Ym[)",
      zhuai: 'fx,Ph,B`G>',
      nou: 'jC,%Z(SE+kPlk,SuUX',
      shai: 'jvmTq0rw,^5_p`3`MaK,9Z',
      sen: 'y*ym,&*,4P',
      run: ",'73H8cQoqT,YzZ6[2",
      ei: ',*$,8P<e',
      chua: ",*',",
      gei: ',dHhl,',
      miu: ',g*ii,:B=F',
      neng: ',oC,/L',
      fiao: ',,5?',
      shei: ',,8o',
      zhei: ',,HW',
      nun: ',,w%',
    },
    k = (function () {
      for (var e = [], t = 36; t < 123; t++) 44 !== t && 34 !== t && 92 !== t && 45 !== t && e.push(String.fromCharCode(t));
      return e.join('');
    })(),
    D = function (e) {
      for (var t = 0, i = 1, n = e.length - 1; n > -1; n--) (t += i * k.indexOf(e.charAt(n))), (i *= k.length);
      return t;
    },
    I = {},
    _ = {};
  for (var T in P)
    for (var F = P[T].split(','), M = 0; M < F.length; M++)
      for (var A = F[M], E = 0; E < A.length; E += 2) {
        var B = A.substring(E, E + 2),
          L = String.fromCharCode(D(B) + 19968 + 6976 * M);
        I[T] ? (I[T] += L) : (I[T] = L), _[L] ? (_[L] += ',' + T) : (_[L] = T);
      }
  P = null;
  const O = function (e, t, i) {
    var n = [],
      s = 'function' == typeof t;
    e = String(e).split('');
    for (var o, r, a = 0; a < e.length; a++)
      (o = e[a]), _.hasOwnProperty(o) ? (~(r = _[o]).indexOf(',') ? ((r = r.split(',')), (r = s ? t(o, r) : '[' + r + ']'), n.push(r)) : n.push(r)) : n.push(o);
    return n.join(i || ',');
  };
  function V(e) {
    const t = O(e),
      i = [t],
      n = t.match(/\[[a-z,]+\]/g);
    if (n)
      for (const e of n) {
        const t = e.replace('[', '').replace(']', '').split(','),
          n = [];
        for (let s = 0; s < t.length; s++)
          if (0 === s) for (let o = 0; o < i.length; o++) n.push(i[o]), (i[o] = i[o].replace(e, t[s]));
          else for (let o = 0; o < n.length; o++) i.push(n[o].replace(e, t[s]));
      }
    const s = [],
      o = [];
    for (const e of i) {
      const t = e.split(','),
        i = t.map(e => e.charAt(0)).join('');
      s.includes(i) || s.push(i), o.push(t.map(e => e.charAt(0).toUpperCase() + e.substr(1)).join(''));
    }
    return { pyfirst: s, py: o };
  }
  function H(e, t) {
    const i = [];
    if (!e) return i;
    if (e.length > 60) return i;
    if (/^[\u4e00-\u9fa5]+$/.test(e)) {
      const n = V(e);
      for (const s of n.py) i.push({ trueType: t, type: 'py', match: s, label: e });
      for (const s of n.pyfirst) i.push({ trueType: t, type: 'pyfirst', match: s, label: e });
      i.push({ trueType: t, type: 'base', match: e, label: e });
    } else {
      if (/(?<=(?:^|[\u4e00-\u9fa5 ]))([A-Z][a-z0-9]*(?: ?[A-Z][a-z0-9]*| \d+)+)/.test(e)) {
        const n = RegExp.$1,
          s = n
            .match(/[A-Z]| \d+/g)
            .join('')
            .toLowerCase()
            .replace(/ /g, '');
        i.push({ trueType: t, type: 'enfirst', match: e.replace(n, s), label: e });
      }
      if (/[\u4e00-\u9fa5]/.test(e)) {
        const n = e.match(/[\u4e00-\u9fa5]/g),
          s = V(n.join(''));
        for (const o of s.py) {
          const s = o.match(/[A-Z][a-z]*/g);
          let r = e.toUpperCase();
          n.forEach((e, t) => {
            r = r.replace(e, s[t]);
          }),
            i.push({ trueType: t, type: 'py+', match: r, label: e });
        }
        for (const o of s.pyfirst) {
          let s = e.toUpperCase();
          n.forEach((e, t) => {
            s = s.replace(e, o[t]);
          }),
            i.push({ trueType: t, type: 'pyfirst+', match: s, label: e });
        }
      }
      if ((i.push({ trueType: t, type: 'base', match: e.toLowerCase(), label: e }), e.includes(' '))) {
        const n = e.replace(/ /g, '');
        i.push({ trueType: t, type: 'base', match: n.toLowerCase(), label: n, weight: -10 });
      }
    }
    return i;
  }
  function N(e) {
    return /^\/.+\/[gimuy]*$/.test(e);
  }
  function U(e) {
    if ('string' != typeof e.code || !e.code) return null;
    if (!Array.isArray(e.cmds)) return null;
    if (e.platform)
      if ('string' == typeof e.platform) {
        if (e.platform !== process.platform) return null;
      } else if (Array.isArray(e.platform) && !e.platform.includes(process.platform)) return null;
    const t = [];
    for (const n of e.cmds)
      if ('string' != typeof n) {
        if (n && n.type && n.label && 'string' == typeof n.label && !(n.label.length > 60))
          if ('regex' !== n.type)
            if ('files' !== n.type)
              if ('img' !== n.type)
                if ('over' !== n.type)
                  if ('window' !== n.type);
                  else {
                    const e = { trueType: n.type, type: n.type, label: n.label };
                    if (n.match) {
                      if (n.match.app) {
                        if (((e.match = {}), 'string' == typeof n.match.app)) e.match.app = [n.match.app];
                        else {
                          if (!Array.isArray(n.match.app)) continue;
                          e.match.app = n.match.app;
                        }
                        n.match.title && N(n.match.title) && (e.match.title = n.match.title);
                      }
                      n.match.class &&
                        'win32' === process.platform &&
                        ('string' == typeof n.match.class
                          ? (e.match || (e.match = {}), (e.match.class = [n.match.class]))
                          : Array.isArray(n.match.class) && (e.match || (e.match = {}), (e.match.class = n.match.class)));
                    }
                    (e.labelCmds = H(n.label, n.type)), t.push(e);
                  }
                else {
                  const e = { trueType: n.type, type: n.type, label: n.label };
                  N(n.exclude) && (e.exclude = n.exclude),
                    'number' == typeof n.minLength && (e.minLength = n.minLength),
                    'number' == typeof n.maxLength && (e.maxLength = n.maxLength),
                    (e.labelCmds = H(n.label, n.type)),
                    t.push(e);
                }
              else {
                const e = { trueType: n.type, type: n.type, label: n.label };
                (e.labelCmds = H(n.label, n.type)), t.push(e);
              }
            else {
              const e = { trueType: n.type, type: n.type, label: n.label };
              N(n.match) && (e.match = n.match),
                n.fileType && ['directory', 'file'].includes(n.fileType) && (e.fileType = n.fileType),
                n.minNum && (e.minLength = 'number' == typeof n.minNum ? n.minNum : 1),
                n.minLength && (e.minLength = 'number' == typeof n.minLength ? n.minLength : 1),
                n.maxNum && (e.maxLength = 'number' == typeof n.maxNum ? n.maxNum : 1),
                n.maxLength && (e.maxLength = 'number' == typeof n.maxLength ? n.maxLength : 1),
                (e.labelCmds = H(n.label, n.type)),
                t.push(e);
            }
          else {
            if (!N(n.match) || ((i = n.match), /^\/(?:\.|\\S|\[.*\\S.*\]|\[\^.+\])(?:\*|\+|\?\??|\{\d+,\d+\})?\/[gimuy]*$/.test(i))) continue;
            const e = { trueType: n.type, type: n.type, label: n.label, match: n.match };
            'number' == typeof n.minLength && (e.minLength = n.minLength),
              'number' == typeof n.maxLength && (e.maxLength = n.maxLength),
              (e.labelCmds = H(n.label, n.type)),
              t.push(e);
          }
      } else {
        if (n.length > 60) continue;
        const e = H(n, 'text');
        t.push(...e);
      }
    var i;
    if (0 === t.length) return null;
    const n = { code: e.code, cmds: t };
    return (
      'string' == typeof e.explain && e.explain.length < 1e3 && (n.explain = e.explain),
      'string' == typeof e.icon && (n.icon = e.icon),
      'string' == typeof e.backgroundColor && (n.backgroundColor = e.backgroundColor),
      n
    );
  }
  const R = require('events');
  var K = e.n(R);
  const j = require('rimraf');
  var $ = e.n(j);
  const J = require('stream');
  class q extends K() {
    constructor(e, t, i, n) {
      super(),
        (this.innerPluginsPath = e),
        (this.userPluginsPath = t),
        (this.config = i),
        (this.reportCmp = n),
        (this.pluginContainer = {}),
        (this.pluginUpdateSet = []),
        (this.legalInstall = []);
    }
    init() {
      const e = h().readdirSync(this.innerPluginsPath);
      for (const t of e) {
        const e = c().join(this.innerPluginsPath, t);
        h().lstatSync(e).isDirectory() && this.mount({ pluginPath: e, updateTime: 0 });
      }
      if (h().existsSync(this.userPluginsPath)) {
        const e = this.initDelete(),
          t = [],
          i = h().readdirSync(this.userPluginsPath);
        for (const n of i) {
          const i = c().join(this.userPluginsPath, n),
            s = W().lstatSync(i);
          !s.isFile() || !/^(?:unsafe-)?[0-9a-z]{32}\.asar$/.test(n) || (e && e.includes(n)) || t.push({ pluginPath: i, updateTime: s.birthtimeMs });
        }
        t.sort((e, t) => t.updateTime - e.updateTime).forEach(e => {
          this.mount(e);
        });
      }
      this.registerGlobalService(),
        setImmediate(() => {
          this.checkUpdate();
        }),
        this.legalInstallWatch();
    }
    initDelete() {
      const e = c().join(this.userPluginsPath, 'deleted');
      if (!h().existsSync(e)) return;
      const t = h().readFileSync(e, 'utf8').split('|'),
        i = [];
      for (const e of t) {
        if (!e) continue;
        if ('.asar' !== c().extname(e)) continue;
        const t = c().join(this.userPluginsPath, e),
          n = t + '.unpacked';
        try {
          W().existsSync(t) && W().unlinkSync(t), h().existsSync(n) && $().sync(n);
        } catch (t) {
          i.push(e);
        }
      }
      if (0 !== i.length) return h().writeFileSync(e, i.join('|')), i;
      h().unlinkSync(e);
    }
    legalInstallWatch() {
      h().existsSync(this.userPluginsPath) || h().mkdirSync(this.userPluginsPath),
        W().watch(this.userPluginsPath, (e, i) => {
          if ('rename' !== e || !i) return;
          if (!/^((?:unsafe-)?[0-9a-z]{32})\.asar$/.test(i)) return;
          const n = RegExp.$1;
          if (this.legalInstall.includes(n)) return;
          const s = c().join(this.userPluginsPath, i);
          if (W().existsSync(s) && W().statSync(s).isFile()) {
            try {
              W().unlinkSync(s);
            } catch (e) {}
            this.deleteAsarFile(s), t.app.relaunch(), t.app.quit();
          }
        });
    }
    mount(e, t = null) {
      const i = e.pluginPath;
      let n = null;
      try {
        let s = '';
        if (t) {
          if ('plugin.json' !== c().basename(i)) throw new Error('参数错误');
          s = i;
        } else s = c().join(i, 'plugin.json');
        if (
          ((n = (function (e, t) {
            if (!h().existsSync(e)) throw new Error('plugin.json 文件不存在');
            let i = null;
            try {
              i = JSON.parse(h().readFileSync(e, 'utf8'));
            } catch (e) {
              throw new Error('json文件解析失败');
            }
            if (i.platform)
              if ('string' == typeof i.platform) {
                if (i.platform !== process.platform) throw new Error('插件未适配该平台');
              } else if (Array.isArray(i.platform) && !i.platform.includes(process.platform)) throw new Error('插件未适配该平台');
            const n = {};
            if (
              ((n.location = c().dirname(e)),
              (n.isDev = !!t || (o().dev() && !/\.asar$/.test(n.location))),
              n.isDev
                ? i.development &&
                  ['main', 'preload'].forEach(e => {
                    e in i.development && (i[e] = i.development[e]);
                  })
                : /unsafe-[0-9a-z]{32}\.asar$/.test(n.location) && (n.unsafe = !0),
              i.main)
            ) {
              if (!/\.html$/i.test(i.main)) throw new Error('main文件不是html文件');
              if (!n.isDev || !/^(?:https?|file):\/\//.test(i.main)) {
                if (!h().existsSync(c().join(n.location, i.main))) throw new Error('main文件不存在');
                i.main = 'file://' + c().join(n.location, i.main);
              }
              n.main = i.main;
            } else n.isTpl = !0;
            let s;
            if (t) {
              if (!/^\w{3,20}$/.test(t)) throw new Error('name只能是字母数字和下划线(3-16位)');
              s = t;
            } else {
              if (!/^\w{3,16}$/.test(i.name)) throw new Error('name只能是字母数字和下划线(3-16位)');
              s = i.name;
            }
            if (((n.name = s), !i.pluginName || i.pluginName.length > 20)) throw new Error('pluginName为空或超过20位');
            if (
              ((n.pluginName = i.pluginName),
              'string' == typeof i.author && i.author && (n.author = i.author),
              'string' == typeof i.homepage && /^https?:\/\/./i.test(i.homepage) && (n.homepage = i.homepage),
              'string' == typeof i.description && i.description ? (n.description = i.description) : (n.description = ''),
              !x().valid(i.version))
            )
              throw new Error('无效的版本号');
            if (((n.version = i.version), n.isTpl && !i.preload)) throw new Error('preload未配置');
            if (i.preload) {
              if (!/\.js$/i.test(i.preload)) throw new Error('preload文件不是js文件');
              if (!n.isDev || (o().windows() ? !/^[a-z]:\\/i.test(i.preload) : 0 !== i.preload.indexOf('/'))) {
                if (!h().existsSync(c().join(n.location, i.preload))) throw new Error('preload文件不存在');
                i.preload = c().join(n.location, i.preload);
              }
              n.preload = i.preload;
            }
            if (!i.logo) throw new Error('logo 未配置');
            if (!/\.(?:png|jpg|jpeg)$/i.test(i.logo)) throw new Error('插件logo，非png、jpg图片');
            if (!h().existsSync(c().join(n.location, i.logo))) throw new Error('logo 文件不存在');
            if (((i.logo = 'file://' + c().join(n.location, i.logo)), (n.logo = i.logo), i.pluginSetting)) {
              const e = {};
              'boolean' == typeof i.pluginSetting.single ? (e.single = i.pluginSetting.single) : (e.single = !0),
                'number' == typeof i.pluginSetting.height && i.pluginSetting.height >= 1 && (e.height = i.pluginSetting.height),
                (n.pluginSetting = e);
            } else n.pluginSetting = { single: !0 };
            if ((n.isTpl && (n.pluginSetting.height = 1), !Array.isArray(i.features))) throw new Error('未找到功能关键字');
            if (
              ((n.featureDic = {}),
              i.features.forEach(e => {
                const t = U(e);
                t &&
                  (t.icon &&
                    (t.icon.startsWith('dbicon://') ||
                      (n.isDev && t.icon.startsWith('file://')) ||
                      (/\.(?:png|svg|jpg|jpeg)$/i.test(t.icon) && h().existsSync(c().join(n.location, t.icon))
                        ? (t.icon = 'file://' + c().join(n.location, t.icon))
                        : delete t.icon)),
                  (n.featureDic[e.code] = t));
              }),
              0 === Object.keys(n.featureDic).length)
            )
              throw new Error('没有功能');
            return n;
          })(s, t)),
          'FFFFFFFF' === n.name && !n.location.startsWith(this.innerPluginsPath))
        )
          throw new Error('出错了');
        if ('clipboard' === n.name && n.unsafe) throw new Error('出错了');
        if (((n.updateTime = e.updateTime), n.name in this.pluginContainer)) {
          if (x().lt(n.version, this.pluginContainer[n.name].version)) throw new Error('已存在版本 ' + this.pluginContainer[n.name].version);
          !t && this.pluginContainer[n.name].location.startsWith(this.userPluginsPath) && this.deleteAsarFile(this.pluginContainer[n.name].location);
        }
        return (this.pluginContainer[n.name] = n), this.emit('mount', n.name), n.name;
      } catch (e) {
        !t && i.startsWith(this.userPluginsPath) && this.deleteAsarFile(i);
        const s = { error: e.message };
        return n && n.name ? (s.pluginId = n.name) : (s.pluginPath = i), this.reportCmp.info('plugin.mount.error', s), e;
      }
    }
    deleteAsarFile(e) {
      if ('.asar' !== c().extname(e)) return;
      const t = c().join(this.userPluginsPath, 'deleted');
      h().appendFileSync(t, '|' + c().basename(e));
    }
    unmount(e) {
      return (
        e in this.pluginContainer &&
        (this.pluginContainer[e].isDev
          ? (delete this.pluginContainer[e], !0)
          : (this.deleteAsarFile(this.pluginContainer[e].location),
            delete this.pluginContainer[e],
            this.pluginUpdateSet.includes(e) && this.pluginUpdateSet.splice(this.pluginUpdateSet.indexOf(e), 1),
            !0))
      );
    }
    _install(e, i, n) {
      const s = h().createReadStream(i),
        o = c().join(t.app.getPath('temp'), b() + '.asar'),
        r = W().createWriteStream(o),
        a = f().createGunzip();
      s.pipe(a)
        .on('error', () => n(new Error('安装包解压错误')))
        .pipe(r)
        .on('error', () => n(new Error('解压写入错误')))
        .on('finish', () => {
          const t = c().join(o, 'plugin.json');
          if (!h().existsSync(t)) return n(new Error('plugin.json不存在'));
          let i = null;
          try {
            i = JSON.parse(h().readFileSync(t, 'utf8'));
          } catch (e) {
            return n(new Error('plugin.json解析错误 ' + e.message));
          }
          if (e && i.name !== e) return n(new Error('pluginId与配置name不一致'));
          const s = (e ? '' : 'unsafe-') + b();
          this.legalInstall.push(s);
          let r = g()
            .listPackage(o)
            .find(e => e.endsWith('.node'))
            ? '*.node'
            : '';
          if ((i.unpack && (r = r ? `@(${i.unpack}|${r})` : i.unpack), h().existsSync(this.userPluginsPath) || h().mkdirSync(this.userPluginsPath), r)) {
            const t = c().join(this.userPluginsPath, s);
            try {
              g().extractAll(o, t + '/');
            } catch (e) {
              return n(new Error('解压提取错误'));
            }
            const i = t + '.asar';
            g()
              .createPackageWithOptions(t + '/', i, { unpack: r })
              .then(() => {
                try {
                  $().sync(t);
                } catch (e) {}
                try {
                  W().unlinkSync(o);
                } catch (e) {}
                const s = this.mount({ pluginPath: i, updateTime: Date.now() });
                if (s instanceof Error) {
                  try {
                    W().unlinkSync(i), h().existsSync(i + '.unpacked') && $().sync(i + '.unpacked');
                  } catch (e) {}
                  n(s);
                } else !e && this.pluginUpdateSet.includes(s) && this.pluginUpdateSet.splice(this.pluginUpdateSet.indexOf(s), 1), n(null, s);
              })
              .catch(() => {
                n(new Error('打包失败'));
              });
          } else {
            const t = c().join(this.userPluginsPath, s + '.asar');
            try {
              W().renameSync(o, t);
            } catch (e) {
              try {
                W().copyFileSync(o, t);
              } catch (e) {
                return n(new Error('复制失败 ' + e.message));
              }
            }
            const i = this.mount({ pluginPath: t, updateTime: Date.now() });
            if (i instanceof Error) {
              try {
                W().unlinkSync(t);
              } catch (e) {}
              n(i);
            } else !e && this.pluginUpdateSet.includes(i) && this.pluginUpdateSet.splice(this.pluginUpdateSet.indexOf(i), 1), n(null, i);
          }
        });
    }
    _hashFile(e, t) {
      return new Promise((i, n) => {
        const s = u().createHash(t);
        s.on('error', n).setEncoding('hex'),
          h()
            .createReadStream(e, { highWaterMark: 1048576 })
            .on('error', n)
            .on('end', () => {
              s.end(), i(s.read());
            })
            .pipe(s, { end: !1 });
      });
    }
    install(e, i, n) {
      if (!h().existsSync(i)) return n(new Error('upx文件不存在'));
      e
        ? p(this.config.hashURL + e, 'platform=' + process.platform + '&version=' + t.app.getVersion(), t => {
            if (0 !== t.code) return n(new Error('获取hash失败'));
            this._hashFile(i, 'md5')
              .then(s => {
                if (s !== t.data) return n(new Error('HASH验证失败'));
                this._install(e, i, n);
              })
              .catch(e => n(e));
          })
        : this._install(e, i, n);
    }
    checkUpdate() {
      const e = Object.values(this.pluginContainer)
        .filter(e => e.name && !this.pluginUpdateSet.includes(e.name) && -1 === e.location.indexOf(this.innerPluginsPath) && !e.isDev)
        .map(e => ({ name: e.name, version: e.version }));
      e.length > 0 &&
        p(
          this.config.checkURL,
          'mid=' + this.reportCmp.machineId + '&platform=' + process.platform + '&version=' + this.reportCmp.appVersion + '&plugins=' + JSON.stringify(e),
          e => {
            if (0 === e.code) {
              if (0 === e.data.length) return;
              for (const t of e.data) t.name in this.pluginContainer && !this.pluginUpdateSet.includes(t.name) && this.pluginUpdateSet.push(t.name);
            } else 120 === e.code && this.emit('appupdate', e.data);
          }
        ),
        setTimeout(() => {
          this.checkUpdate();
        }, this.config.interval);
    }
    registerGlobalService() {
      (global.services.getPluginContainer = () => JSON.stringify(this.pluginContainer)),
        (global.services.pluginInstall = (e, t, i) => {
          this.install(e, t, i);
        }),
        (global.services.pluginMount = (e, t = null) => this.mount({ pluginPath: e, updateTime: Date.now() }, t)),
        (global.services.pluginUnMount = e => this.unmount(e)),
        (global.services.pluginIsMounted = e => e in this.pluginContainer),
        (global.services.buildDeveloperPlugin = (e, i, n) => {
          const s = t.app.getPath('temp'),
            o = c().join(s, 'utools-developer', b());
          g()
            .createPackageWithOptions(e, o, {
              transform: t => {
                if (t === c().join(e, 'plugin.json'))
                  return new J.Transform({
                    transform: function (e, t, n) {
                      this.replaced || ((this.replaced = !0), this.push(JSON.stringify(i))), n();
                    },
                  });
              },
            })
            .then(function () {
              const e = h().createReadStream(o),
                t = c().join(s, 'utools-developer', i.name + '-' + i.version + '.upx'),
                r = h().createWriteStream(t),
                a = f().createGzip();
              e.pipe(a)
                .on('error', () => n(new Error('压缩错误')))
                .pipe(r)
                .on('error', () => n(new Error('压缩写入错误')))
                .on('finish', () => {
                  try {
                    h().unlinkSync(o);
                  } catch (e) {}
                  n(null, t);
                });
            })
            .catch(e => {
              n(e);
            });
        });
    }
    setFeature(e, t, i) {
      if (!(e in this.pluginContainer)) return !1;
      const n = this.pluginContainer[e],
        s = U(t);
      return (
        !!s &&
        (e &&
          s.icon &&
          (s.icon.startsWith('dbicon://') ||
            (n.isDev && s.icon.startsWith('file://')) ||
            (/\.(?:png|svg|jpg|jpeg)$/i.test(s.icon) && h().existsSync(c().join(n.location, s.icon)) ? (s.icon = 'file://' + c().join(n.location, s.icon)) : delete s.icon)),
        i && (s.dynamic = !0),
        (n.featureDic[t.code] = s),
        !0)
      );
    }
    removeFeature(e, t) {
      return e in this.pluginContainer && (delete this.pluginContainer[e].featureDic[t], !0);
    }
  }
  const G = q,
    Q = require('child_process');
  var Z = e.n(Q);
  const X = require('tree-kill');
  var Y = e.n(X);
  const z = require('os');
  var ee = e.n(z);
  const te = require('addon');
  var ie = e.n(te);
  class ne {
    constructor(e, t) {
      (this.maxScreenSize = { width: 1920, height: 1080 }),
        (this.window = e),
        (this.windowHideFunc = t),
        (this.isMacOs = o().macOS()),
        (this.isWindow = o().windows()),
        (this.nativeWorkWindowInfo = null),
        this.isWindow && (this.nativeWindowHandle = this.window.getNativeWindowHandle()),
        this.refresh(),
        setImmediate(() => {
          this.listenEvent();
        });
    }
    refresh() {
      this.window.isVisible() && this.windowHideFunc(), (this.currentDisplay = t.screen.getPrimaryDisplay());
      const e = t.screen.getAllDisplays();
      if (((this.displayCount = e.length), this._setWindowInitPosition(this.currentDisplay), 0 === e.length)) return;
      if (1 === e.length) return void (this.maxScreenSize = e[0].size);
      const i = e.sort((e, t) => t.size.width - e.size.width)[0].size.width,
        n = e.sort((e, t) => t.size.height - e.size.height)[0].size.height;
      this.maxScreenSize = { width: i, height: n };
    }
    listenEvent() {
      t.screen.on('display-metrics-changed', (e, t, i) => {
        this.refresh();
      }),
        t.screen.on('display-added', (e, t) => {
          this.refresh();
        }),
        t.screen.on('display-removed', (e, t) => {
          this.refresh();
        });
    }
    setNativeWorkWindowInfo() {
      if (this.isMacOs && !this.isHadPrivilege) {
        if (!ie().isHadPrivilege()) return void ie().requestPrivilege();
        this.isHadPrivilege = !0;
      }
      (this.nativeWorkWindowInfo = ie().getNativeWorkWindow()),
        this.nativeWorkWindowInfo &&
          (this.nativeWorkWindowInfo.appPath ? (this.nativeWorkWindowInfo.app = c().basename(this.nativeWorkWindowInfo.appPath)) : (this.nativeWorkWindowInfo = null));
    }
    _setWindowInitPosition(e, t) {
      const i = e.bounds.x + Math.round((e.size.width - this.window.getSize()[0]) / 2),
        n = e.bounds.y + Math.round((e.size.height - 600) / 2);
      this.isWindow
        ? process.nextTick(() => {
            if ((this.window.setPosition(i, n), t)) {
              const e = this.window.getPosition();
              (e[0] === i && e[1] === n) || this.window.setPosition(i, n);
            }
          })
        : this.window.setPosition(i, n);
    }
    _showLogic(e) {
      this.window.isVisible() ||
        (e || this.setNativeWorkWindowInfo(),
        this.isWindow
          ? !this.nativeWorkWindowInfo || (0 !== this.nativeWorkWindowInfo.width && 0 !== this.nativeWorkWindowInfo.height)
            ? ie().focusShowWindow(this.nativeWindowHandle, () => {
                (this.mainWindowShowTimestamp = Date.now()), this.window.show();
              })
            : ((this.mainWindowShowTimestamp = Date.now()), this.window.show())
          : (this.window.setAlwaysOnTop(!0), this.isMacOs && this.window.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }), this.window.show()));
    }
    trigger(e = !1, i) {
      if (((this.alwaysShow = e), 0 === this.displayCount)) return;
      if (1 === this.displayCount) return !e && this.window.isVisible() ? void this.windowHideFunc() : void this._showLogic(i);
      const n = this.window.getBounds(),
        s = { x: n.x + Math.round(n.width / 2), y: Math.round(n.y + n.height / 2) },
        o = t.screen.getDisplayNearestPoint(s),
        r = t.screen.getDisplayNearestPoint(t.screen.getCursorScreenPoint());
      if (o.id === r.id) return (this.currentDisplay = o), !e && this.window.isVisible() ? void this.windowHideFunc() : void this._showLogic(i);
      (this.currentDisplay = r), this._setWindowInitPosition(r, o), this.window.isVisible() || this._showLogic(i);
    }
  }
  const se = {
    Backspace: 'Backspace',
    Tab: 'Tab',
    Enter: 'Enter',
    MediaPlayPause: 'MediaPlayPause',
    Escape: 'Escape',
    Space: 'Space',
    PageUp: 'PageUp',
    PageDown: 'PageDown',
    End: 'End',
    Home: 'Home',
    ArrowLeft: 'Left',
    ArrowUp: 'Up',
    ArrowRight: 'Right',
    ArrowDown: 'Down',
    PrintScreen: 'PrintScreen',
    Insert: 'Insert',
    Delete: 'Delete',
    Digit0: '0',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    KeyA: 'A',
    KeyB: 'B',
    KeyC: 'C',
    KeyD: 'D',
    KeyE: 'E',
    KeyF: 'F',
    KeyG: 'G',
    KeyH: 'H',
    KeyI: 'I',
    KeyJ: 'J',
    KeyK: 'K',
    KeyL: 'L',
    KeyM: 'M',
    KeyN: 'N',
    KeyO: 'O',
    KeyP: 'P',
    KeyQ: 'Q',
    KeyR: 'R',
    KeyS: 'S',
    KeyT: 'T',
    KeyU: 'U',
    KeyV: 'V',
    KeyW: 'W',
    KeyX: 'X',
    KeyY: 'Y',
    KeyZ: 'Z',
    F1: 'F1',
    F2: 'F2',
    F3: 'F3',
    F4: 'F4',
    F5: 'F5',
    F6: 'F6',
    F7: 'F7',
    F8: 'F8',
    F9: 'F9',
    F10: 'F10',
    F11: 'F11',
    F12: 'F12',
    Semicolon: ';',
    Equal: '=',
    Comma: ',',
    Minus: '-',
    Period: '.',
    Slash: '/',
    Backquote: '`',
    BracketLeft: '[',
    Backslash: '\\',
    BracketRight: ']',
    Quote: "'",
  };
  class oe {
    constructor() {
      (this.autoPasteLife = 5),
        (this.updateTimestamp = 0),
        (this.onCopy = null),
        (this.cancelWatchTimeout = null),
        ie().clipboardWatch(() => {
          this.cancelWatchTimeout || ((this.updateTimestamp = Date.now()), this.onCopy && setImmediate(this.onCopy));
        }),
        (this.isMacOs = o().macOS()),
        (this.isWindows = o().windows()),
        (this.isLinux = o().linux());
    }
    isPreCopy() {
      if (0 === this.updateTimestamp) return !1;
      const e = Date.now() - this.updateTimestamp < 1e3 * this.autoPasteLife;
      return (this.updateTimestamp = 0), e;
    }
    temporaryCancelWatch() {
      this.cancelWatchTimeout && clearTimeout(this.cancelWatchTimeout),
        (this.cancelWatchTimeout = setTimeout(() => {
          this.cancelWatchTimeout = null;
        }, 300));
    }
    getPasteFormat() {
      if (this.isWindows) {
        if (t.clipboard.has('FileNameW')) return 'files';
      } else if (this.isMacOs) {
        if (t.clipboard.has('NSFilenamesPboardType')) return 'files';
      } else if (this.isLinux && t.clipboard.has('text/uri-list') && t.clipboard.read('text/uri-list')) return 'files';
      const e = t.clipboard.availableFormats();
      return e.length > 0 && 'text/plain' !== e[0] && e[e.length - 1].startsWith('image/') ? 'img' : 'text';
    }
  }
  function re() {
    return {
      goSetting: () => {
        this.autoLoadPlugin('FFFFFFFF', 'setting', '设置');
      },
      goDatabase: () => {
        this.autoLoadPlugin('FFFFFFFF', 'database', '账号与数据');
      },
      goPluginManage: () => {
        this.autoLoadPlugin('FFFFFFFF', 'installed', '插件管理');
      },
      goPluginStore: e => {
        this.autoLoadPlugin('FFFFFFFF', 'store', '插件中心', '', e);
      },
      goInstalledPluginInfo: e => {
        this.autoLoadPlugin('FFFFFFFF', 'installed', '已安装插件', '/' + e);
      },
      goInstalledPluginReadme: e => {
        this.autoLoadPlugin('FFFFFFFF', 'installed', '已安装插件', '/' + e + '/introduction');
      },
    };
  }
  const ae = {},
    ce = require('pouchdb');
  var le = e.n(ce);
  class he extends K() {
    constructor(e, t, i, n, s) {
      super(),
        (this.docMaxByteLength = 10485760),
        (this.docAttachmentMaxByteLength = 20971520),
        (this.dbpath = e),
        (this.defaultDbName = c().join(e, 'default')),
        (this.config = t),
        (this.windowCmp = i),
        (this.accountCmp = n),
        (this.reportCmp = s),
        (this.windowCmp.getDbAttachment = this.getAttachment.bind(this));
    }
    init() {
      let e;
      h().existsSync(this.dbpath) || h().mkdirSync(this.dbpath);
      const t = this.accountCmp.getAccountInfo();
      (e = t ? c().join(this.dbpath, t.uid) : this.defaultDbName),
        (this.pouchDB = new (le())(e, { auto_compaction: !0 })),
        this.listenAccountEvent(),
        this.registerGlobalService(),
        this.registerPluginApi(),
        this.listenPowerMonitorEvent();
    }
    getDocId(e, t) {
      return e + '/' + t;
    }
    replaceDocId(e, t) {
      return t.replace(e + '/', '');
    }
    errorInfo(e, t) {
      return { error: !0, name: e, message: t };
    }
    checkDocSize(e) {
      if (e._attachments) {
        const t = e._attachments;
        if (((e._attachments = {}), Buffer.byteLength(JSON.stringify(e)) > this.docMaxByteLength))
          return this.errorInfo('exception', 'doc max size ' + this.docMaxByteLength / 1024 / 1024 + 'M');
        for (const i in t) {
          if (void 0 === t[i].data && t[i].digest) {
            e._attachments[i] = t[i];
            continue;
          }
          let n = t[i].data;
          if (!(n instanceof Uint8Array)) return this.errorInfo('exception', '"' + i + '", attachment data only be buffer type (Uint8Array)');
          if (((n = Buffer.from(n)), n.byteLength > this.docAttachmentMaxByteLength))
            return this.errorInfo('exception', '"' + i + '", attachment data up to ' + this.docAttachmentMaxByteLength / 1024 / 1024 + 'M');
          const s = t[i].content_type;
          if ('string' != typeof s || s.length > 100) return this.errorInfo('exception', '"' + i + '", content_type error');
          e._attachments[i] = { content_type: s, data: n };
        }
      } else if (Buffer.byteLength(JSON.stringify(e)) > this.docMaxByteLength) return this.errorInfo('exception', 'doc max size ' + this.docMaxByteLength / 1024 / 1024 + 'M');
    }
    async put(e, t) {
      if ('object' != typeof t) return this.errorInfo('exception', 'doc is not object');
      if (!t._id) return this.errorInfo('exception', 'doc not _id field');
      const i = this.checkDocSize(t);
      if (i) return i;
      t._id = this.getDocId(e, t._id);
      try {
        const i = await this.pouchDB.put(t);
        return (i.id = this.replaceDocId(e, i.id)), i;
      } catch (i) {
        return { id: this.replaceDocId(e, t._id), name: i.name, error: !0, message: i.message };
      }
    }
    async get(e, t) {
      try {
        const i = await this.pouchDB.get(this.getDocId(e, t));
        return (i._id = this.replaceDocId(e, i._id)), i;
      } catch (e) {
        return null;
      }
    }
    async remove(e, t) {
      try {
        let i = null;
        if ('object' == typeof t) (i = t), (i._id = this.getDocId(e, i._id));
        else {
          if ('string' != typeof t) return this.errorInfo('exception', 'param error');
          i = await this.pouchDB.get(this.getDocId(e, t));
        }
        const n = await this.pouchDB.remove(i);
        return (n.id = this.replaceDocId(e, n.id)), n;
      } catch (e) {
        return this.errorInfo(e.name, e.message);
      }
    }
    async bulkDocs(e, t) {
      let i = null;
      try {
        if (!Array.isArray(t)) return this.errorInfo('exception', 'not array');
        if (t.find(e => !e._id)) return this.errorInfo('exception', 'doc not _id field');
        if (new Set(t.map(e => e._id)).size !== t.length) return this.errorInfo('exception', '_id value exists as');
        for (const i of t) {
          const t = this.checkDocSize(i);
          if (t) return t;
          i._id = this.getDocId(e, i._id);
        }
        (i = await this.pouchDB.bulkDocs(t)), (i = i.map(t => ((t.id = this.replaceDocId(e, t.id)), t.error ? { id: t.id, name: t.name, error: !0, message: t.message } : t)));
      } catch (e) {}
      return i;
    }
    async allDocs(e, t) {
      const i = { include_docs: !0 };
      if (t)
        if ('string' == typeof t) (i.startkey = this.getDocId(e, t)), (i.endkey = i.startkey + '￰');
        else {
          if (!Array.isArray(t)) return this.errorInfo('exception', 'param only key(string) or keys(Array[string])');
          i.keys = t.map(t => this.getDocId(e, t));
        }
      else (i.startkey = this.getDocId(e, '')), (i.endkey = i.startkey + '￰');
      let n = [];
      try {
        n = (await this.pouchDB.allDocs(i)).rows.map(t => (t.error ? '' : ((t.doc._id = this.replaceDocId(e, t.doc._id)), t.doc)));
      } catch (e) {}
      return n;
    }
    async putAttachment(e, t, i, n, s, o) {
      if (!t || !i || 'string' != typeof t || 'string' != typeof i || 'string' != typeof o) return this.errorInfo('exception', 'params error');
      const r = this.checkDocSize({ _attachments: { [i]: { data: s, content_type: o } } });
      if (r) return r;
      t = this.getDocId(e, t);
      try {
        let r;
        return (r = n ? await this.pouchDB.putAttachment(t, i, n, s, o) : await this.pouchDB.putAttachment(t, i, s, o)), (r.id = this.replaceDocId(e, r.id)), r;
      } catch (e) {
        return this.errorInfo(e.name, e.message);
      }
    }
    async getAttachment(e, t, i) {
      if (!t || !i || 'string' != typeof t || 'string' != typeof i) return null;
      t = this.getDocId(e, t);
      try {
        return await this.pouchDB.getAttachment(t, i);
      } catch (e) {
        return null;
      }
    }
    async removeAttachment(e, t, i, n) {
      if (!t || !i || !n || 'string' != typeof t || 'string' != typeof i || 'string' != typeof n) return this.errorInfo('exception', 'params error');
      t = this.getDocId(e, t);
      try {
        const s = await this.pouchDB.removeAttachment(t, i, n);
        return (s.id = this.replaceDocId(e, s.id)), s;
      } catch (e) {
        return this.errorInfo(e.name, e.message);
      }
    }
    async dbStatistics() {
      const e = await this.pouchDB.allDocs(),
        t = {};
      return (
        e.rows.forEach(e => {
          const i = e.id.startsWith('//') ? '/' : e.id.substr(0, e.id.indexOf('/')),
            n = this.replaceDocId(i, e.id);
          i in t ? t[i].push(n) : (t[i] = [n]);
        }),
        t
      );
    }
    async clearPluginData(e) {
      if (!e || e.length < 3) return;
      const t = {};
      (t.startkey = this.getDocId(e, '')), (t.endkey = t.startkey + '￰');
      const i = await this.pouchDB.allDocs(t);
      for (let e = 0; e < i.rows.length; e++) {
        const t = i.rows[e];
        try {
          await this.pouchDB.remove(t.id, t.value.rev);
        } catch (e) {}
      }
      const n = { include_docs: !0 };
      (n.startkey = '//feature/' + e + '/'), (n.endkey = n.startkey + '￰');
      const s = await this.pouchDB.allDocs(n);
      if (0 !== s.rows.length) {
        for (let t = 0; t < s.rows.length; t++) {
          const i = s.rows[t];
          try {
            await this.pouchDB.remove(i.id, i.value.rev);
          } catch (e) {
            continue;
          }
          this.windowCmp.pluginCmp.removeFeature(e, i.doc.code);
        }
        this.windowCmp.destroyPlugin(e), this.windowCmp.refreshCmdSource();
      }
    }
    getRemoteDbDocCount() {
      return new Promise((e, i) => {
        const n = this.accountCmp.getAccountInfo();
        if (!n) return i(new Error('no account info'));
        if (!n.db_sync) return i(new Error('no db sync'));
        const s = this.config.sync.protocol + '://' + this.config.sync.host + (this.config.sync.port ? ':' + this.config.sync.port : '') + '/db_' + n.uid,
          o = t.net.request({ url: s });
        o.setHeader('Authorization', 'Basic ' + Buffer.from(n.uid + ':' + n.db_secrect_key).toString('base64')),
          o.on('response', t => {
            const n = [];
            t.on('data', e => {
              n.push(e);
            }),
              t.on('end', () => {
                let t = null;
                try {
                  t = JSON.parse(Buffer.concat(n).toString());
                } catch (e) {
                  return i(e);
                }
                if (t.error) return i(new Error(t.error));
                'number' == typeof t.doc_count ? e(t.doc_count) : i(new Error('no doc_count'));
              }),
              t.on('error', e => {
                i(e);
              });
          }),
          o.end();
      });
    }
    dbSync(e) {
      if (this.pouchDB.name !== c().join(this.dbpath, e.uid)) return void this.reportCmp.info('app.dbsync.error.0');
      if (!e.db_sync || !e.db_secrect_key) return;
      this.pouchDBSync && (this.pouchDBSync.cancel(), delete this.pouchDBSync);
      const t = this.config.sync,
        i = t.protocol + '://' + e.uid + ':' + e.db_secrect_key + '@' + t.host + (t.port ? ':' + t.port : '') + '/db_' + e.uid;
      this.pouchDB.replicate
        .from(i)
        .on('change', e => {
          e.ok && 0 !== e.docs.length && this.pullLogic(e.docs);
        })
        .on('complete', () => {
          this.pouchDBSync && this.pouchDBSync.cancel(),
            (this.pouchDBSync = this.pouchDB
              .sync(i, { live: !0, retry: !0 })
              .on('change', e => {
                'pull' === e.direction && e.change.ok && 0 !== e.change.docs.length && this.pullLogic(e.change.docs);
              })
              .on('error', e => {
                this.reportCmp.info('app.dbsync.error', { error: e.message });
              })
              .on('denied', e => {
                this.reportCmp.info('app.dbsync.denied', { error: e.message });
              }));
        })
        .on('error', e => {
          this.pouchDBSync && this.pouchDBSync.cancel(),
            (this.pouchDBSync = this.pouchDB
              .sync(i, { live: !0, retry: !0 })
              .on('change', e => {
                'pull' === e.direction && e.change.ok && 0 !== e.change.docs.length && this.pullLogic(e.change.docs);
              })
              .on('error', e => {
                this.reportCmp.info('app.dbsync.error', { error: e.message });
              })
              .on('denied', e => {
                this.reportCmp.info('app.dbsync.denied', { error: e.message });
              })),
            'FetchError' !== e.name && this.reportCmp.info('app.dbreplicate.error', { error: e.message });
        });
    }
    pullLogic(e) {
      this.emit('pull', e);
      const t = {};
      e.forEach(e => {
        if (/^(\w{2,32})\//.test(e._id)) {
          const i = RegExp.$1;
          (e._id = this.replaceDocId(i, e._id)), i in t ? t[i].push(e) : (t[i] = [e]);
        }
      }),
        Object.keys(t).length > 0 && this.windowCmp.pluginDatabasePullEvent(t);
    }
    listenAccountEvent() {
      this.accountCmp.on('login', e => {
        const t = c().join(this.dbpath, e.uid),
          i = this.pouchDB.name;
        if (i === t) return void (e.db_sync && this.dbSync(e));
        const n = this.pouchDB,
          s = !h().existsSync(t) && i === this.defaultDbName;
        (this.pouchDB = new (le())(t, { auto_compaction: !0 })),
          s
            ? n.replicate
                .to(this.pouchDB)
                .then(() => {
                  n.close(), this.emit('switch'), e.db_sync && this.dbSync(e);
                })
                .catch(t => {
                  this.reportCmp.info('app.defaultdb.replicate.error', { error: t.message }), n.close(), this.emit('switch'), e.db_sync && this.dbSync(e);
                })
            : (n.close(), this.emit('switch'), e.db_sync && this.dbSync(e));
      }),
        this.accountCmp.on('logout', () => {
          this.pouchDBSync && (this.pouchDBSync.cancel(), delete this.pouchDBSync);
          const e = this.pouchDB;
          (this.pouchDB = new (le())(this.defaultDbName, { auto_compaction: !0 })), e.close(), this.emit('switch');
        }),
        this.accountCmp.on('dbsync', e => {
          this.pouchDBSync && (this.pouchDBSync.cancel(), delete this.pouchDBSync), this.dbSync(e);
        }),
        this.accountCmp.on('undbsync', () => {
          this.pouchDBSync && (this.pouchDBSync.cancel(), delete this.pouchDBSync);
        });
    }
    registerGlobalService() {
      global.services.database = {
        getRemoteDbDocCount: () => this.getRemoteDbDocCount(),
        dbStatistics: () => this.dbStatistics(),
        clearPluginData: e => this.clearPluginData(e),
        getDoc: (e, t) => this.get(e, t),
      };
    }
    registerPluginApi() {
      t.ipcMain.on('api.db', async (e, t, i) => {
        const n = this.windowCmp.getPluginIdByWebContents(e.sender);
        if (n)
          switch (t) {
            case 'put':
              e.returnValue = await this.put(n, i);
              break;
            case 'get':
              e.returnValue = await this.get(n, i);
              break;
            case 'remove':
              e.returnValue = await this.remove(n, i);
              break;
            case 'bulkDocs':
              e.returnValue = await this.bulkDocs(n, i);
              break;
            case 'allDocs':
              e.returnValue = await this.allDocs(n, i);
              break;
            case 'putAttachment': {
              const { docId: t, attachmentId: s, rev: o, attachment: r, type: a } = i;
              e.returnValue = await this.putAttachment(n, t, s, o, r, a);
              break;
            }
            case 'getAttachment': {
              const { docId: t, attachmentId: s } = i;
              e.returnValue = await this.getAttachment(n, t, s);
              break;
            }
            case 'removeAttachment': {
              const { docId: t, attachmentId: s, rev: o } = i;
              e.returnValue = await this.removeAttachment(n, t, s, o);
              break;
            }
            default:
              e.returnValue = this.errorInfo('exception', 'no exists [' + t + '] method');
          }
        else e.returnValue = this.errorInfo('exception', 'called after onPluginReady event');
      });
    }
    listenPowerMonitorEvent() {
      t.powerMonitor.on('resume', () => {
        this.pouchDBSync &&
          (this.pouchDBSync.cancel(),
          delete this.pouchDBSync,
          setImmediate(() => {
            const e = this.accountCmp.getAccountInfo();
            e && e.db_sync && this.dbSync(e);
          }));
      });
    }
  }
  class de {
    init() {
      const e = [
        {
          label: 'Edit',
          submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(o().macOS()
              ? [
                  { role: 'pasteAndMatchStyle' },
                  { role: 'delete' },
                  { role: 'selectAll' },
                  { type: 'separator' },
                  { label: 'Speech', submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }] },
                ]
              : [{ role: 'delete' }, { type: 'separator' }, { role: 'selectAll' }]),
          ],
        },
        {
          label: 'Window',
          submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(o().macOS() ? [{ type: 'separator' }, { role: 'front' }, { type: 'separator' }, { role: 'window' }] : [{ role: 'close' }]),
          ],
        },
      ];
      t.Menu.setApplicationMenu(t.Menu.buildFromTemplate(e));
    }
  }
  const ue = require('electron-updater');
  class pe {
    constructor(e, t, i) {
      (this.config = e), (this.windowCmp = t), (this.accountCmp = i);
    }
    init() {
      let e = t.app.getVersion();
      const i = e.split('-');
      i.length > 2 && (e = i[0] + '-' + i[1]), (this.runingIcon = 'runing@2x.png');
      const n = o().macOS();
      let s = '';
      n
        ? (s = 'res/iconTemplate@2x.png')
        : o().windows()
        ? (s = parseInt(ee().release()) < 10 ? 'res/icon.png' : 'res/icon.ico')
        : o().linux() && ((s = 'res/icon@2x.png'), ee().release().includes('deepin') && (this.runingIcon = 'runing.png')),
        (this.tray = new t.Tray(c().join(__dirname, s)));
      const r = [
        {
          label: '显示/隐藏',
          click: () => {
            this.windowCmp.display.trigger();
          },
        },
        { type: 'separator' },
        {
          id: 'preferences',
          label: '插件管理',
          click: () => {
            this.windowCmp.ffffffff.goPluginManage();
          },
        },
        {
          id: 'preferences',
          label: '偏好设置',
          accelerator: n ? 'Command+,' : null,
          click: () => {
            this.windowCmp.ffffffff.goSetting();
          },
        },
        {
          id: 'login',
          label: '登录',
          click: () => {
            this.accountCmp.login();
          },
        },
        { type: 'separator' },
        {
          label: '帮助文档',
          click: () => {
            t.shell.openExternal(this.config.helpURL);
          },
        },
        {
          label: '意见反馈',
          click: () => {
            this.accountCmp.goFeedback();
          },
        },
        {
          label: '版本(V' + e + ')',
          click: () => {
            t.shell.openExternal(this.config.versionURL);
          },
        },
        {
          label: '检测更新',
          click: () => {
            this.checkForUpdate();
          },
        },
        { type: 'separator' },
        {
          label: '重启',
          visible: !o().linux(),
          click: () => {
            t.app.relaunch(), t.app.quit();
          },
        },
        {
          label: '退出',
          click: () => {
            o().linux() && this.tray.destroy(), t.app.quit();
          },
        },
      ];
      (this.trayMenu = t.Menu.buildFromTemplate(r)),
        this.tray.setContextMenu(this.trayMenu),
        this.listenAccountEvent(),
        o().windows() &&
          this.tray.on('click', () => {
            this.windowCmp.display.trigger();
          });
    }
    checkForUpdate() {
      if (o().dev()) return void new t.Notification({ title: 'uTools 检测更新', body: '当前版本为开发版未开启检测' }).show();
      if (o().linux())
        return void this.windowCmp.linuxCheckForUpdate(
          e => {
            new t.Notification({ title: 'uTools 检测更新', body: '发现新版本 ' + e }).show(), t.shell.openExternal(this.config.downloadURL);
          },
          () => {
            new t.Notification({ title: 'uTools 检测更新', body: '当前版本为最新版本' }).show();
          }
        );
      if (ue.autoUpdater.listenerCount('update-available') > 0 || ue.autoUpdater.listenerCount('update-not-available') > 0) return;
      const e = () => {
          ue.autoUpdater.removeListener('update-available', e), new t.Notification({ title: 'uTools 检测更新', body: '已检测到新版本，已在后台自动下载' }).show();
        },
        i = () => {
          ue.autoUpdater.removeListener('update-not-available', i), new t.Notification({ title: 'uTools 检测更新', body: '当前版本为最新版本' }).show();
        };
      ue.autoUpdater.addListener('update-available', e),
        ue.autoUpdater.addListener('update-not-available', i),
        setTimeout(function () {
          ue.autoUpdater.removeListener('update-available', e), ue.autoUpdater.removeListener('update-not-available', i);
        }, 1e4),
        ue.autoUpdater.checkForUpdates();
    }
    listenAccountEvent() {
      const e = () => {
        const e = this.trayMenu.getMenuItemById('dbsyncEnable');
        e
          ? (e.visible = !0)
          : this.trayMenu.insert(1, new t.MenuItem({ id: 'dbsyncEnable', icon: c().join(__dirname, 'res', this.runingIcon), label: '数据同步服务', enabled: !1 })),
          this.tray.setContextMenu(this.trayMenu);
      };
      this.accountCmp.on('login', i => {
        const n = this.trayMenu.getMenuItemById('login');
        n && (n.visible = !1);
        const s = u()
            .createHash('md5')
            .update(i.nickname + '')
            .digest('hex'),
          o = this.trayMenu.getMenuItemById('account:' + s);
        if (o) o.visible = !0;
        else
          try {
            this.trayMenu.insert(0, new t.MenuItem({ id: 'account:' + s, icon: c().join(__dirname, 'res', this.runingIcon), label: i.nickname + '', enabled: !1 }));
          } catch (e) {
            this.trayMenu.insert(0, new t.MenuItem({ id: 'account:' + s, icon: c().join(__dirname, 'res', this.runingIcon), label: '-', enabled: !1 }));
          }
        i.db_sync && e(), this.tray.setContextMenu(this.trayMenu);
      }),
        this.accountCmp.on('dbsync', e),
        this.accountCmp.on('logout', () => {
          const e = this.trayMenu.getMenuItemById('login');
          if (e) e.visible = !0;
          else {
            const e = this.trayMenu.items.indexOf(this.trayMenu.getMenuItemById('preferences')) + 1;
            this.trayMenu.insert(
              e,
              new t.MenuItem({
                id: 'login',
                label: '登录',
                click: () => {
                  this.accountCmp.login();
                },
              })
            );
          }
          this.trayMenu.items
            .filter(e => e.id && (e.id.includes('account:') || 'dbsyncEnable' === e.id))
            .forEach(e => {
              e.visible = !1;
            }),
            this.tray.setContextMenu(this.trayMenu);
        }),
        this.accountCmp.on('undbsync', () => {
          const e = this.trayMenu.getMenuItemById('dbsyncEnable');
          e && ((e.visible = !1), this.tray.setContextMenu(this.trayMenu));
        });
    }
  }
  class we {
    constructor(e) {
      (this.windowCmp = e.windowCmp), (this.appCmp = e);
    }
    getDetachHotKey() {
      return this.windowCmp.isMacOs
        ? this.windowCmp.pluginDetachHotKey.replace('Alt+', 'Option+')
        : this.windowCmp.pluginDetachHotKey.replace('Control+', 'Ctrl+').replace('Super+', 'Windows+');
    }
    init() {
      this.initPluginMenu(), this.registerGlobalService(), this.registerDetachHandleApi();
    }
    initPluginMenu() {
      const e = this.getDetachHotKey(),
        i = [
          {
            id: 'detach@' + e,
            label: '分离窗口',
            icon: c().join(__dirname, 'res', 'menu', 'windows@2x.png'),
            accelerator: e,
            click: () => {
              process.nextTick(() => {
                this.windowCmp.detachPlugin();
              });
            },
          },
          {
            id: 'openDevTools',
            label: '开发者工具',
            icon: c().join(__dirname, 'res', 'menu', 'code@2x.png'),
            visible: !1,
            accelerator: this.windowCmp.isMacOs ? 'Command+Alt+I' : 'Ctrl+Shift+I',
            click: () => {
              this.windowCmp.openPluginDevTools();
            },
          },
          { type: 'separator' },
          {
            label: '当前插件选项',
            icon: c().join(__dirname, 'res', 'menu', 'check@2x.png'),
            submenu: [
              {
                id: 'enterdetach',
                label: '自动分离窗口',
                type: 'checkbox',
                click: e => {
                  const t = this.windowCmp.mainWindow.getBrowserView();
                  if (!t) return;
                  const i = this.windowCmp.getPluginIdByWebContents(t.webContents);
                  i && (e.checked ? this.appCmp.addEnterDetachPlugin(i) : this.appCmp.removeEnterDetachPlugin(i));
                },
              },
              {
                id: 'outkill',
                label: '隐藏插件后完全退出',
                type: 'checkbox',
                click: e => {
                  const t = this.windowCmp.mainWindow.getBrowserView();
                  if (!t) return;
                  const i = this.windowCmp.getPluginIdByWebContents(t.webContents);
                  i && (e.checked ? this.appCmp.addOutKillPlugin(i) : this.appCmp.removeOutKillPlugin(i));
                },
              },
            ],
          },
          {
            id: 'plugininfo',
            label: '当前插件信息',
            icon: c().join(__dirname, 'res', 'menu', 'info@2x.png'),
            submenu: [
              {
                label: '功能关键字',
                click: () => {
                  const e = this.windowCmp.getCurrentPluginId();
                  e && this.windowCmp.ffffffff.goInstalledPluginInfo(e);
                },
              },
              {
                label: '详情介绍',
                click: () => {
                  const e = this.windowCmp.getCurrentPluginId();
                  e && this.windowCmp.ffffffff.goInstalledPluginReadme(e);
                },
              },
            ],
          },
          { type: 'separator' },
          {
            id: 'out',
            label: '隐藏插件',
            icon: c().join(__dirname, 'res', 'menu', 'minus@2x.png'),
            accelerator: 'Esc',
            click: () => {
              this.windowCmp.outPlugin();
            },
          },
          {
            id: 'kill',
            label: '完全退出',
            icon: c().join(__dirname, 'res', 'menu', 'close@2x.png'),
            click: () => {
              this.windowCmp.endPlugin();
            },
          },
        ];
      this._mainPluginMenu = t.Menu.buildFromTemplate(i);
    }
    buildDetachPluginOptionMenu(e, i) {
      let n = t.Menu.buildFromTemplate([
        {
          label: '自动分离窗口',
          type: 'checkbox',
          checked: this.appCmp.pluginIsEnterDetach(e),
          click: t => {
            t.checked ? this.appCmp.addEnterDetachPlugin(e) : this.appCmp.removeEnterDetachPlugin(e);
          },
        },
        {
          label: '隐藏插件后完全退出',
          type: 'checkbox',
          checked: this.appCmp.pluginIsOutKill(e),
          click: t => {
            t.checked ? this.appCmp.addOutKillPlugin(e) : this.appCmp.removeOutKillPlugin(e);
          },
        },
      ]);
      if (this.windowCmp.isMacOs)
        return n.popup({
          window: i,
          x: i.getSize()[0] - 72,
          y: 56,
          callback: () => {
            n = null;
          },
        });
      n.popup({
        window: i,
        x: i.getSize()[0] - 180,
        y: 42,
        callback: () => {
          n = null;
        },
      });
    }
    buildDetachPluginInfoMenu(e, i) {
      let n = t.Menu.buildFromTemplate([
        {
          label: '功能关键字',
          click: () => {
            this.windowCmp.ffffffff.goInstalledPluginInfo(e);
          },
        },
        {
          label: '详情介绍',
          click: () => {
            this.windowCmp.ffffffff.goInstalledPluginReadme(e);
          },
        },
      ]);
      if (this.windowCmp.isMacOs)
        return n.popup({
          window: i,
          x: i.getSize()[0] - 108,
          y: 56,
          callback: () => {
            n = null;
          },
        });
      n.popup({
        window: i,
        x: i.getSize()[0] - 216,
        y: 42,
        callback: () => {
          n = null;
        },
      });
    }
    registerGlobalService() {
      global.services.showPluginMenu = () => {
        const e = this.windowCmp.mainWindow.getBrowserView();
        if (!e) return;
        const i = this.windowCmp.getPluginIdByWebContents(e.webContents);
        if (!i) return;
        const n = this.windowCmp.pluginCmp.pluginContainer[i];
        if (!n) return;
        this._mainPluginMenu.getMenuItemById('openDevTools').visible = n.isDev;
        const s = this.appCmp.pluginIsOutKill(i);
        (this._mainPluginMenu.getMenuItemById('outkill').checked = s),
          (this._mainPluginMenu.getMenuItemById('out').visible = !s),
          (this._mainPluginMenu.getMenuItemById('enterdetach').checked = this.appCmp.pluginIsEnterDetach(i)),
          (this._mainPluginMenu.getMenuItemById('plugininfo').visible = 'FFFFFFFF' !== i);
        const o = this.getDetachHotKey(),
          r = this._mainPluginMenu.getMenuItemById('detach@' + o);
        r
          ? r.visible ||
            (this._mainPluginMenu.items
              .filter(e => e.id && e.id.startsWith('detach@') && e.id !== o)
              .forEach(e => {
                e.visible = !1;
              }),
            (r.visible = !0))
          : (this._mainPluginMenu.items
              .filter(e => e.id && e.id.startsWith('detach@'))
              .forEach(e => {
                e.visible = !1;
              }),
            this._mainPluginMenu.insert(
              0,
              new t.MenuItem({
                id: 'detach@' + o,
                label: '分离窗口',
                icon: c().join(__dirname, 'res', 'menu', 'windows@2x.png'),
                accelerator: o,
                click: () => {
                  process.nextTick(() => {
                    this.windowCmp.detachPlugin();
                  });
                },
              })
            ));
        const a = this.windowCmp.mainWindow.getSize()[0] - this.windowCmp.config.initHeight,
          l = this.windowCmp.isMacOs ? this.windowCmp.config.initHeight + 5 : this.windowCmp.config.initHeight;
        this._mainPluginMenu.popup({
          window: this.windowCmp.mainWindow,
          x: a,
          y: l,
          callback: () => {
            e.webContents.focus();
          },
        });
      };
    }
    registerDetachHandleApi() {
      t.ipcMain.on('detach.handle', (e, i, n, s) => {
        const o = t.BrowserWindow.fromWebContents(e.sender);
        if (!o) return;
        let r = '';
        for (const e in this.windowCmp.runningPluginPool)
          if (this.windowCmp.runningPluginPool[e].detachWindows.includes(o)) {
            r = e;
            break;
          }
        if (r)
          switch (i) {
            case 'buildDetachPluginOptionMenu':
              this.buildDetachPluginOptionMenu(r, o);
              break;
            case 'buildDetachPluginInfoMenu':
              this.buildDetachPluginInfoMenu(r, o);
              break;
            case 'sendPluginSomeKeyDownEvent': {
              e.returnValue = se[n];
              const t = se[n];
              if (!t) break;
              const i = o.getBrowserView();
              if (!i) break;
              Array.isArray(s) && s.length > 0
                ? i.webContents.sendInputEvent({ type: 'keyDown', modifiers: s, keyCode: t })
                : i.webContents.sendInputEvent({ type: 'keyDown', keyCode: t });
              break;
            }
            case 'sendSubInputChangeEvent': {
              const e = o.getBrowserView();
              if (!e) break;
              this.windowCmp.triggerPluginViewEvent(e, 'SubInputChange', { text: n });
              break;
            }
          }
      });
    }
  }
  const ge = new (class {
    isFKey(e) {
      return e.startsWith('Double') || /^F([1-9]|1[0-2])$/.test(e);
    }
    _getKey(e) {
      if (e.startsWith('Double')) {
        const t = e.replace('Double', '').toLowerCase();
        if ('darwin' === process.platform) return 'ctrl' === t ? 'control' : 'alt' === t ? 'option' : t;
        if ('control' === t) return 'ctrl';
        if ('option' === t) return 'alt';
        if ('command' === t) return;
        return t;
      }
      if (/^F([1-9]|1[0-2])$/.test(e)) return e.toLowerCase();
    }
    register(e, t) {
      const i = this._getKey(e);
      i &&
        (this.keyAction
          ? (this.keyAction[i] = t)
          : ((this.keyAction = { [i]: t }),
            ie().fKeyTapEvent(e => {
              this.keyAction && e in this.keyAction && this.keyAction[e]();
            })));
    }
    unregister(e) {
      if (!this.keyAction) return;
      const t = this._getKey(e);
      t && (delete this.keyAction[t], 0 === Object.keys(this.keyAction).length && (delete this.keyAction, ie().stopFKeyTapEvent()));
    }
    isRegistered(e) {
      if (!this.keyAction) return !1;
      const t = this._getKey(e);
      return !!t && t in this.keyAction;
    }
  })();
  class me {
    constructor(e) {
      this.windowCmp = e;
    }
    init() {
      n().has('openAtLogin') || n().set('openAtLogin', !0),
        n().has('spaceAsEnter') || n().set('spaceAsEnter', !0),
        n().has('showHotKey') || n().set('showHotKey', 'Alt+Space'),
        n().has('pluginDetachHotKey') || (this.windowCmp.isMacOs ? n().set('pluginDetachHotKey', 'Command+D') : n().set('pluginDetachHotKey', 'Control+D')),
        n().has('autoPasteLife') || n().set('autoPasteLife', 5),
        n().has('pluginOutTimer') || n().set('pluginOutTimer', 3),
        n().has('mainWindowOpacity') || n().set('mainWindowOpacity', 1),
        this.setOpenAtLogin(n().get('openAtLogin')),
        this.setSpaceAsEnter(n().get('spaceAsEnter')),
        this.setShowHotKey(n().get('showHotKey')),
        (this.windowCmp.pluginDetachHotKey = this.getAppPluginHotKey(n().get('pluginDetachHotKey'))),
        (this.windowCmp.clipboardWatch.autoPasteLife = parseInt(n().get('autoPasteLife'))),
        (this.windowCmp.pluginOutTimer = parseInt(n().get('pluginOutTimer')));
      const e = n().get('mainWindowOpacity');
      e >= 0.2 && e < 1 && this.windowCmp.mainWindow.setOpacity(e), this.registerGlobalService();
    }
    setOpenAtLogin(e) {
      t.app.setLoginItemSettings({ openAtLogin: !0 === e, openAsHidden: !0 });
    }
    setSpaceAsEnter(e) {
      this.windowCmp.executeJavaScript(this.windowCmp.mainWindow.webContents, `window.spaceAsEnter=${!0 === e}`);
    }
    setShowHotKey(e) {
      if (ge.isFKey(e))
        ge.register(e, () => {
          this.windowCmp.display.trigger();
        });
      else
        try {
          t.globalShortcut.register(e, () => {
            setImmediate(() => {
              this.windowCmp.display.trigger();
            });
          });
        } catch (e) {}
    }
    getShowHotKey() {
      return n().get('showHotKey');
    }
    getAppPluginHotKey(e) {
      const t = ['Alt', 'Shift', 'Control', this.windowCmp.isMacOs ? 'Command' : 'Super'];
      return e
        .split('+')
        .sort((e, i) => t.indexOf(i) - t.indexOf(e))
        .join('+');
    }
    registerGlobalService() {
      global.services.preferences = {
        settingOpenAtLogin: e => {
          const t = n().get('openAtLogin'),
            i = !0 === e;
          return n().set('openAtLogin', i), t !== i && this.setOpenAtLogin(i), !0;
        },
        settingSpaceAsEnter: e => (n().set('spaceAsEnter', !0 === e), this.setSpaceAsEnter(!0 === e), !0),
        settingShowHotKey: e => {
          if (((e = C(e)), ge.isFKey(e) && ge.isRegistered(e))) return !1;
          const i = n().get('showHotKey');
          return i && (ge.isFKey(i) ? ge.unregister(i) : t.globalShortcut.isRegistered(i) && t.globalShortcut.unregister(i)), n().set('showHotKey', e), this.setShowHotKey(e), !0;
        },
        settingPluginDetachHotKey: e => {
          (e = C(e)), n().set('pluginDetachHotKey', e), (this.windowCmp.pluginDetachHotKey = this.getAppPluginHotKey(e));
        },
        settingAutoPasteLife: e => {
          (e = parseInt(e, 10)), n().set('autoPasteLife', e), (this.windowCmp.clipboardWatch.autoPasteLife = e);
        },
        settingPluginOutTimer: e => {
          (e = parseInt(e, 10)), n().set('pluginOutTimer', e), (this.windowCmp.pluginOutTimer = e);
        },
        getAllSettings: () => n().getAll(),
        settingTheme: e => {
          if (e && ['dark', 'light'].includes(e)) return n().set('theme', e), this.windowCmp.onNativeThemeUpdated(e);
          n().delete('theme'), this.windowCmp.onNativeThemeUpdated();
        },
        settingMainWindowOpacity: e => {
          if (this.windowCmp.isMacOs || this.windowCmp.isWindow) {
            if (e < 0.2 || e > 1) return;
            this.windowCmp.mainWindow.setOpacity(e),
              this.settingMainWindowOpacityDelayTimer && clearTimeout(this.settingMainWindowOpacityDelayTimer),
              (this.settingMainWindowOpacityDelayTimer = setTimeout(() => {
                delete this.settingMainWindowOpacityDelayTimer, n().set('mainWindowOpacity', e);
              }, 3e3));
          }
        },
      };
    }
  }
  const fe = require('form-data');
  var ye = e.n(fe);
  class be extends K() {
    constructor(e) {
      super(), (this.config = e);
    }
    localEncrypt(e) {
      const t = u().createCipheriv('aes-256-cbc', ie().getLocalSecretKey(), 'UTOOLS0123456789');
      return t.update(e, 'utf8', 'hex') + t.final('hex');
    }
    localDecrypt(e) {
      if (!e) return '';
      try {
        const t = u().createDecipheriv('aes-256-cbc', ie().getLocalSecretKey(), 'UTOOLS0123456789');
        return t.update(e, 'hex', 'utf8') + t.final('utf8');
      } catch (e) {
        return '';
      }
    }
    getAccountInfo() {
      const e = n().get('account');
      if (!e) return null;
      let t = '';
      if ('object' == typeof e) t = this.localDecrypt(Buffer.from(e.info || '', 'hex'));
      else {
        if ('string' != typeof e) return n().delete('account'), null;
        t = this.localDecrypt(Buffer.from(e, 'hex'));
      }
      if (!t) return n().delete('account'), null;
      let i = null;
      try {
        if (((i = JSON.parse(t)), 'object' != typeof i)) return n().delete('account'), null;
      } catch (e) {
        return n().delete('account'), null;
      }
      const user = i.uid ? ('string' == typeof e && i.db_secrect_key && (i.db_secrect_key = this.localDecrypt(Buffer.from(i.db_secrect_key, 'hex'))), i) : (n().delete('account'), null);
      user.type = 1;
      user.expired_at = 4102415999;
      // logTest(user);
      return user;
    }
    getAccountToken() {
      let e,
        t = n().get('account');
      if (!t) return '';
      if ('string' == typeof t) {
        if (((t = this.getAccountInfo()), !t)) return '';
        e = t.access_token;
      } else e = t.token;
      return e ? this.localDecrypt(Buffer.from(e, 'hex')) : '';
    }
    init() {
      this.registerGlobalService();
      const e = this.getAccountInfo();
      e &&
        (this.emit('login', e),
        setImmediate(() => {
          this.remoteAccountInfo(this.getAccountToken());
        }));
    }
    remoteAccountInfo(e, i) {
      p(this.config.profileURL, 'access_token=' + e, s => {
        if (0 !== s.code) return;
        const o = s.data.timestamp,
          r = s.data.sign,
          a = s.data.userInfo;
        if (ie().compareYuanliaoSignature(a + o, Buffer.from(r, 'hex'))) {
          const s = this.getAccountInfo();
          n().set('account', { token: this.localEncrypt(e).toString('hex'), info: this.localEncrypt(a).toString('hex'), sign: r, timestamp: o });
          const c = JSON.parse(a);
          s &&
            (s.db_sync !== c.db_sync &&
              (c.db_sync ? this.emit('dbsync', c) : (this.emit('undbsync', c), new t.Notification({ title: 'uTools', body: '数据同步服务已关闭，请知悉' }).show())),
            s.type !== c.type && this.emit('member', c)),
            'function' == typeof i && i.call(this, c);
        } else this.logout();
      });
    }
    login(e) {
      if (!this.loginWindow || this.loginWindow.isDestroyed()) {
        if (!this.loginSession) {
          this.loginSession = t.session.fromPartition('utools-login:' + Date.now());
          const i = this.config.loginURL.match(/^https?:\/\/[^\/]+/)[0];
          this.loginSession.webRequest.onResponseStarted({ urls: [i + '/*'] }, t => {
            if (t.responseHeaders['access-token'] || t.responseHeaders['Access-Token']) {
              const i = (t.responseHeaders['access-token'] || t.responseHeaders['Access-Token'])[0];
              this.remoteAccountInfo(i, t => {
                this.loginWindow && this.loginWindow.close(), this.emit('login', t), 'function' == typeof e && e(t);
              });
            }
          });
        }
        (this.loginWindow = new t.BrowserWindow({
          alwaysOnTop: !0,
          resizable: !1,
          fullscreenable: !1,
          minimizable: !1,
          maximizable: !1,
          width: 560,
          height: 560,
          backgroundColor: '#333333',
          title: 'uTools 帐号',
          autoHideMenuBar: !0,
          icon: c().join(__dirname, 'res/logo.png'),
          webPreferences: { nodeIntegration: !1, session: this.loginSession, webgl: !1, defaultFontFamily: { standard: 'system-ui', serif: 'system-ui' } },
        })),
          this.loginWindow.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
          this.loginWindow.setMenu(null),
          this.loginWindow.on('close', () => {
            this.loginWindow = null;
          }),
          this.loginWindow.on('page-title-updated', e => {
            e.preventDefault();
          }),
          this.loginWindow.loadURL(this.config.loginURL),
          this.loginWindow.webContents.on('dom-ready', () => {
            this.loginWindow && this.loginWindow.webContents.insertCSS('body{overflow: hidden;}');
          });
      } else this.loginWindow.show();
    }
    logout() {
      const e = this.getAccountToken();
      e ? (p(this.config.logoutURL, 'access_token=' + e), n().delete('account'), this.emit('logout')) : n().has('account') && (n().delete('account'), this.emit('logout'));
    }
    setOpenDbSync(e, t) {
      const i = this.getAccountToken();
      i &&
        p(this.config.dbSyncURL, 'access_token=' + i + '&sync=' + (e ? 'open' : 'close'), e => {
          0 === e.code
            ? this.remoteAccountInfo(i, () => {
                t(null);
              })
            : t(e.msg);
        });
    }
    goFeedback() {
      const e = this.getAccountToken();
      e ? t.shell.openExternal(this.config.feedbackURL + e) : t.shell.openExternal(this.config.feedbackURL);
    }
    getUserServerTemporaryToken(e, t) {
      const i = this.getAccountToken();
      if (!i) return t(null, null);
      p(this.config.temporaryToken, 'access_token=' + i + '&plugin_id=' + e, e => {
        0 === e.code ? t(null, { token: e.data.token, expiredAt: e.data.expired_at }) : t(new Error(e.msg));
      });
    }
    registerGlobalService() {
      global.services.account = {
        getLocalAccount: () => {
          const e = this.getAccountInfo();
          return e && delete e.db_secrect_key, e;
        },
        renewLocalAccount: e => {
          const t = this.getAccountToken();
          t &&
            this.remoteAccountInfo(t, () => {
              e();
            });
        },
        logout: () => {
          this.logout();
        },
        setOpenDbSync: (e, t) => {
          this.setOpenDbSync(e, () => {
            t();
          });
        },
        goEmailVerify: () => {
          const e = this.getAccountToken();
          e && t.shell.openExternal(this.config.emailVerifyURL + e);
        },
        goHomePage: () => {
          const e = this.getAccountToken();
          if (!e) return;
          const i = this.getAccountInfo(),
            n = this.config.homepageURL.replace('[user_id]', i.user_id);
          t.shell.openExternal(n + e);
        },
        createPluginId: (e, t) => {
          const i = this.getAccountToken();
          if (!i) return t(new Error('请登录，需要为你的插件创建一个全局唯一ID'));
          p(this.config.createPluginIdURL + i, e ? 'name=' + encodeURIComponent(e) : '', function (e) {
            return e && 0 === e.code ? t(null, e.data) : t(new Error(e.msg));
          });
        },
        deployPlugin: (e, t) => {
          const i = this.getAccountToken();
          if (!i) return t(new Error('请登录重试'));
          const n = new (ye())();
          n.append('upx', h().createReadStream(e)),
            n.append('access_token', i),
            n.submit(this.config.deployPlugin, (e, i) => {
              e && t(new Error(e.message));
              const n = [];
              i.on('data', e => {
                n.push(e);
              }).on('end', () => {
                let e = null;
                try {
                  e = JSON.parse(Buffer.concat(n).toString());
                } catch (e) {
                  return t(new Error('服务端错误'));
                }
                if (!e) return t(new Error('未知错误'));
                t(null, e);
              });
            });
        },
      };
    }
  }
  const Ce = require('plist');
  var ve = e.n(Ce);
  class We {
    constructor(e) {
      (this.windowCmp = e),
        (this.pluginContainer = this.windowCmp.pluginCmp.pluginContainer),
        (this.extendPluginId = 'clipboard'),
        (this.clipboardHub = []),
        (this.clipboardHubMax = 200),
        (this.copyChangeCount = 0);
    }
    init() {
      (this.windowCmp.clipboardWatch.onCopy = this.onCopy.bind(this)), this.registerGlobalService();
    }
    getCopyFiles() {
      let e;
      if (this.windowCmp.isMacOs) {
        if (!t.clipboard.has('NSFilenamesPboardType')) return null;
        const i = t.clipboard.read('NSFilenamesPboardType');
        if (!i) return null;
        try {
          e = ve().parse(i);
        } catch (e) {
          return null;
        }
      } else if (this.windowCmp.isWindow) {
        if (((e = ie().getCopyFileNames()), !e || 0 === e.length)) return null;
      } else {
        if (!this.windowCmp.isLinux) return null;
        {
          if (!t.clipboard.has('text/uri-list')) return null;
          const i = t.clipboard.read('text/uri-list').match(/^file:\/\/\/.*/gm);
          if (!i || 0 === i.length) return null;
          e = i.map(e => decodeURIComponent(e).replace(/^file:\/\//, ''));
        }
      }
      if (!Array.isArray(e)) return null;
      const i = [];
      return (
        e.forEach(e => {
          if (!W().existsSync(e)) return;
          let t;
          try {
            t = W().lstatSync(e);
          } catch (e) {
            return;
          }
          i.push({ isFile: t.isFile(), isDirectory: t.isDirectory(), name: c().basename(e) || e, path: e });
        }),
        0 === i.length ? null : i
      );
    }
    onCopy() {
      if (!(this.extendPluginId in this.pluginContainer)) return;
      const e = Date.now();
      let i = null;
      do {
        const n = this.getCopyFiles();
        if (n) {
          const t = u().createHash('md5').update(JSON.stringify(n)).digest('hex'),
            s = this.clipboardHub.find(e => 'files' === e.type && e.hash === t);
          s && this.clipboardHub.splice(this.clipboardHub.indexOf(s), 1), (i = { type: 'files', value: n, timestamp: e, hash: t });
          break;
        }
        const s = t.clipboard.availableFormats();
        if (0 === s.length) break;
        if ('text/plain' === s[0]) {
          const n = t.clipboard.readText();
          if (n.trim()) {
            const t = u().createHash('md5').update(n).digest('hex'),
              s = this.clipboardHub.find(e => 'text' === e.type && e.hash === t);
            s && this.clipboardHub.splice(this.clipboardHub.indexOf(s), 1), (i = { type: 'text', value: n, timestamp: e, hash: t });
          }
          break;
        }
        if (s[s.length - 1].startsWith('image/')) {
          const n = t.clipboard.readImage();
          if (n && !n.isEmpty()) {
            const t = n.toPNG(),
              s = u().createHash('md5').update(t).digest('hex'),
              o = this.clipboardHub.find(e => 'image' === e.type && e.hash === s);
            o && this.clipboardHub.splice(this.clipboardHub.indexOf(o), 1), (i = { type: 'image', value: t, timestamp: e, hash: s });
          }
        }
      } while (0);
      i && (this.clipboardHub.unshift(i) > this.clipboardHubMax && this.clipboardHub.splice(this.clipboardHubMax), this.copyChangeCount++);
    }
    registerGlobalService() {
      global.services.clipboardExtend = { getClipboardHub: () => this.clipboardHub, getCopyChangeCount: () => this.copyChangeCount, getCopyFiles: () => this.getCopyFiles() };
    }
  }
  const Se = require('markdown-it');
  var xe = e.n(Se);
  const Pe = {
    'iPhone 11': {
      size: { width: 414, height: 896 },
      useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    },
    'iPhone X': {
      size: { width: 375, height: 812 },
      useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    },
    iPad: {
      size: { width: 768, height: 1024 },
      useragent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
    },
    'iPhone 6/7/8 Plus': {
      size: { width: 414, height: 736 },
      useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    },
    'iPhone 6/7/8': {
      size: { width: 375, height: 667 },
      useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    },
    'iPhone 5/SE': {
      size: { width: 320, height: 568 },
      useragent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    },
    'HUAWEI Mate10': {
      size: { width: 360, height: 640 },
      useragent: 'Mozilla/5.0 (Linux; U; Android 8.1.0; ALP-AL00 Build/HUAWEIALP-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.86 Mobile Safari/537.36',
    },
    'HUAWEI Mate20': {
      size: { width: 360, height: 748 },
      useragent: 'Mozilla/5.0 (Linux; U; Android 9; HMA-AL00 Build/HUAWEIHMA-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.86 Mobile Safari/537.36',
    },
    'HUAWEI Mate30': {
      size: { width: 360, height: 780 },
      useragent: 'Mozilla/5.0 (Linux; U; Android 10; TAS-AL00 Build/HUAWEITAS-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.86 Mobile Safari/537.36',
    },
    'HUAWEI Mate30 Pro': {
      size: { width: 392, height: 800 },
      useragent: 'Mozilla/5.0 (Linux; U; Android 10; LIO-AL00 Build/HUAWEILIO-AL00) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.86 Mobile Safari/537.36',
    },
  };
  class ke {
    constructor(e, i, n, s, r) {
      if ('number' == typeof i) {
        if (!(e in s)) return r({ error: 'no ubrowser with id "' + i + '" exists' });
        if (((this._browserWindow = s[e].find(e => e.id === i)), !this._browserWindow)) return r({ error: 'no ubrowser with id "' + i + '" exists' });
      } else if (!n.find(e => 'goto' === e.method)) return r({ error: 'not implemented "goto"' });
      if (((this._pluginId = e), (this._idleUBrowserHub = s), (this._endCallback = r), (this.done = this.done.bind(this)), this._browserWindow))
        (this._isShow = !0), (this._isFinishLoad = !0), this._idleUBrowserHub[this._pluginId].splice(this._idleUBrowserHub[this._pluginId].indexOf(this._browserWindow), 1);
      else {
        if (i && 'object' == typeof i) {
          const e = {
            show: 'boolean',
            width: 'number',
            height: 'number',
            x: 'number',
            y: 'number',
            center: 'boolean',
            minWidth: 'number',
            minHeight: 'number',
            maxWidth: 'number',
            maxHeight: 'number',
            resizable: 'boolean',
            movable: 'boolean',
            minimizable: 'boolean',
            maximizable: 'boolean',
            alwaysOnTop: 'boolean',
            fullscreen: 'boolean',
            fullscreenable: 'boolean',
            enableLargerThanScreen: 'boolean',
            opacity: 'number',
          };
          for (const t in i) t in e ? typeof i[t] !== e[t] && delete i[t] : delete i[t];
        } else i = {};
        (this._isShow = !(!1 === i.show)),
          (this._isFinishLoad = !1),
          (i.show = !1),
          (i.frame = !0),
          (i.parent = null),
          (i.modal = !1),
          (i.webPreferences = { partition: '<' + e + '.ubrowser>', nodeIntegration: !1, backgroundThrottling: !1 }),
          (this._browserWindow = new t.BrowserWindow(i)),
          this._browserWindow.removeMenu(),
          this._browserWindow.once('closed', () => {
            if (
              (this._isEnd || (this._childProcess.kill('SIGKILL'), this._endCallback({ error: 'ubrowser destroyed' })), this._isShow && this._pluginId in this._idleUBrowserHub)
            ) {
              const e = this._idleUBrowserHub[this._pluginId].indexOf(this._browserWindow);
              -1 !== e && this._idleUBrowserHub[this._pluginId].splice(e, 1);
            }
            this._browserWindow = null;
          }),
          this._browserWindow.once('close', () => {
            this._browserWindow.destroy();
          }),
          this._browserWindow.webContents.once('crashed', () => {
            this._browserWindow.destroy();
          }),
          this._browserWindow.webContents.removeAllListeners('new-window'),
          this._browserWindow.webContents.on('new-window', (e, i) => {
            e.preventDefault(), /^https?:\/\//i.test(i) && t.shell.openExternal(i);
          }),
          o().macOS() &&
            this._browserWindow.webContents.on('before-input-event', (e, t) => {
              !t.meta || 'keyDown' !== t.type || ('KeyW' !== t.code && 'KeyQ' !== t.code) || this._browserWindow.destroy();
            });
      }
      (this._childProcess = Z().fork(c().join(__dirname, 'ubrowser', 'runner.js'))),
        this._childProcess.on('message', ({ method: e, args: t }) => {
          const i = this[e];
          if ('function' == typeof i)
            try {
              i.apply(this, t);
            } catch (t) {
              'end' !== e && this.done(new Error('method "' + e + '" exception: ' + t.message));
            }
          else this.done(new Error('method ' + e + ' not exist'));
        }),
        this._childProcess.send({ method: 'run', args: [n] });
    }
    done(e) {
      let t;
      (t = e instanceof Error ? [{ error: e.message }] : [{ data: e }]), this._childProcess.send({ method: 'return', args: t });
    }
    useragent(e) {
      (this._browserWindow.webContents.userAgent = e), this.done();
    }
    viewport(e, t) {
      this._browserWindow.setContentSize(e, t), this.done();
    }
    goto(...e) {
      if (!e[0] || 'string' != typeof e[0]) return this.done(new Error('goto: url error'));
      let t;
      const i = /^(?:https?|file):\/\//.test(e[0]);
      let n;
      if (
        ((t = i ? e[0] : 'file://' + c().join(__dirname, 'ubrowser/goto.html')),
        this._isShow &&
          !this._isFirstGoto &&
          ((this._isFirstGoto = !0), this._browserWindow.setTitle(i ? t : e[1] && 'string' == typeof e[1] ? e[1] : 'Markdown'), this._browserWindow.show()),
        i && e[1] && 'object' == typeof e[1])
      ) {
        const t = e[1];
        n = { extraHeaders: '' };
        for (const e in t)
          'referer' !== e.toLowerCase() ? ('useragent' !== e.toLowerCase() ? (n.extraHeaders += e + ': ' + t[e] + '\n') : (n.userAgent = t[e])) : (n.httpReferrer = t[e]);
      }
      this._browserWindow
        .loadURL(t, n)
        .then(() => {
          if (((this._isFinishLoad = !0), i)) return this.done();
          const t = new (xe())({ html: !0, linkify: !0, typographer: !0 }).render(e[0]);
          this._browserWindow.webContents
            .executeJavaScript(`document.body.innerHTML=${JSON.stringify(t)}`)
            .then(() => {
              this.done();
            })
            .catch(() => {
              this.done(new Error('goto error'));
            });
        })
        .catch(e => {
          this.done(new Error('goto: ' + e.message));
        });
    }
    hide() {
      (this._isShow = !1), this._browserWindow.hide(), this.done();
    }
    show() {
      (this._isShow = !0), this._browserWindow.show(), this.done();
    }
    devTools(e = 'detach') {
      if (!this._isShow) return this.done(new Error('devTools: ubrowser is hided'));
      this._browserWindow.webContents.openDevTools({ mode: e, activate: !1 }), this.done();
    }
    javascript(e) {
      if (!this._isFinishLoad) return this.done(new Error('"goto" no execute'));
      this._browserWindow.webContents
        .executeJavaScript(e, !0)
        .then(e => {
          e.error ? this.done(new Error(e.error)) : this.done(e.data);
        })
        .catch(() => {
          this.done(new Error('javascript run error'));
        });
    }
    css(e) {
      if (!this._isFinishLoad) return this.done(new Error('css: "goto" no execute'));
      this._browserWindow.webContents
        .insertCSS(e)
        .then(() => {
          this.done();
        })
        .catch(() => {
          this.done('css: error');
        });
    }
    press(e, ...t) {
      if (!this._isFinishLoad) return this.done(new Error('press: "goto" no execute'));
      if ((this._allKeyCodes || (this._allKeyCodes = Object.values(se)), !this._allKeyCodes.includes(e))) return this.done(new Error('press: keyCode wrong'));
      if (t.length > 0) {
        if (t.find(e => !['shift', 'alt', 'ctrl', 'contorl', 'meta', 'command', 'cmd'].includes(e.toLowerCase()))) return this.done(new Error('press: modifier key error'));
        t = Array.from(new Set(t)).map(e => e.toLowerCase());
      }
      this._browserWindow.webContents.sendInputEvent({ type: 'keyDown', keyCode: e, modifiers: t }),
        this._browserWindow.webContents.sendInputEvent({ type: 'char', keyCode: e, modifiers: t }),
        this._browserWindow.webContents.sendInputEvent({ type: 'keyUp', keyCode: e, modifiers: t }),
        this.done();
    }
    paste(e) {
      e && (/^data:image\/[a-z]+?;base64,/.test(e) ? t.clipboard.writeImage(t.nativeImage.createFromDataURL(e)) : t.clipboard.writeText(e)),
        this._browserWindow.webContents
          .executeJavaScript("document.execCommand('paste')")
          .then(() => {
            this.done();
          })
          .catch(() => {
            this.done(new Error('paste: error'));
          });
    }
    file(e, t) {
      if (!this._isFinishLoad) return this.done(new Error('file: "goto" no execute'));
      try {
        this._browserWindow.webContents.debugger.attach('1.1');
      } catch (e) {
        this.done(new Error('file: ' + e.message));
      }
      const i = this._browserWindow.webContents.debugger;
      i.sendCommand('DOM.getDocument')
        .then(n => {
          i.sendCommand('DOM.querySelector', { nodeId: n.root.nodeId, selector: e })
            .then(e => {
              i.sendCommand('DOM.setFileInputFiles', { nodeId: e.nodeId, files: t })
                .then(() => {
                  this._browserWindow.webContents.debugger.detach(), this.done();
                })
                .catch(() => {
                  this._browserWindow.webContents.debugger.detach(), this.done();
                });
            })
            .catch(e => {
              this._browserWindow.webContents.debugger.detach(), this.done(new Error('file: ' + e.message));
            });
        })
        .catch(e => {
          this._browserWindow.webContents.debugger.detach(), this.done(new Error('file: ' + e.message));
        });
    }
    capture(e, i) {
      let n, s;
      if (i) {
        if ((/\.png$/i.test(i) ? ((n = c().dirname(i)), (s = c().basename(i))) : (n = i), !h().existsSync(n))) return this.done(new Error('screenshot: save directory not exist'));
        try {
          h().accessSync(n, h().constants.W_OK);
        } catch (e) {
          return this.done(new Error('screenshot: save directory not permissions for write'));
        }
      } else {
        n = c().join(t.app.getPath('temp'), 'utools.ubrowser');
        try {
          h().existsSync(n) || h().mkdirSync(n);
        } catch (e) {
          return this.done(new Error('screenshot: ' + e.message));
        }
      }
      this._browserWindow.webContents
        .capturePage(e)
        .then(e => {
          if (e.isEmpty()) return this.done(new Error('screenshot: empty image'));
          const t = c().join(n, s || Date.now() + '.png');
          h().writeFile(t, e.toPNG(), e => {
            if (e) return this.done(new Error('screenshot: ' + e.message));
            this.done(t);
          });
        })
        .catch(e => {
          this.done(new Error('screenshot: ' + e.message));
        });
    }
    screenshot(e, t) {
      if (!this._isFinishLoad) return this.done(new Error('screenshot: "goto" no execute'));
      if ('string' == typeof e) {
        const i = `(()=>{\n        const selector = ${JSON.stringify(
          e
        )}\n        const element = document.querySelector(selector)\n        if (!element) return\n        let rect = element.getBoundingClientRect()\n        window.scrollTo(rect.left, rect.top)\n        rect = element.getBoundingClientRect()\n        return { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) }\n      })()`;
        this._browserWindow.webContents
          .executeJavaScript(i)
          .then(i => {
            i ? this.capture(i, t) : this.done(new Error('screenshot: unable to find element by selector "' + e + '"'));
          })
          .catch(() => {
            this.done(new Error('screenshot: get selector rect error'));
          });
      } else 'object' == typeof e ? this.capture(e, t) : void 0 === e ? this.capture(null, t) : this.done(new Error('screenshot: parameter error'));
    }
    pdf(...e) {
      if (!this._isFinishLoad) return this.done(new Error('pdf: "goto" no execute'));
      let i,
        n,
        s = {},
        o = null;
      if (
        (1 === e.length
          ? 'object' == typeof e[0]
            ? (s = e[0] || {})
            : 'string' == typeof e[0] && (o = e[0])
          : e.length > 1 && ('object' == typeof e[0] && (s = e[0] || {}), 'string' == typeof e[1] && (o = e[1])),
        o)
      ) {
        if ((/\.pdf$/i.test(o) ? ((i = c().dirname(o)), (n = c().basename(o))) : (i = o), !h().existsSync(i))) return this.done(new Error('paf: save directory not exist'));
        try {
          h().accessSync(i, h().constants.W_OK);
        } catch (e) {
          return this.done(new Error('pdf: save directory not permissions for write'));
        }
      } else {
        i = c().join(t.app.getPath('temp'), 'utools.ubrowser');
        try {
          h().existsSync(i) || h().mkdirSync(i);
        } catch (e) {
          return this.done(new Error('pdf: ' + e.message));
        }
      }
      this._browserWindow.webContents.printToPDF(s).then(e => {
        const t = c().join(i, n || Date.now() + '.pdf');
        h().writeFile(t, e, e => {
          if (e) return this.done(new Error('pdf: ' + e.message));
          this.done(t);
        });
      });
    }
    device(e) {
      if ('string' == typeof e) e in Pe || this.done(new Error('device: type not found')), (e = Pe[e]);
      else {
        if ('object' != typeof e) return this.done(new Error('device: parameter error'));
        if ('object' != typeof e.size || 'number' != typeof e.size.width || 'number' != typeof e.size.height) return this.done(new Error('device: property "size" wrong'));
        if ('string' != typeof e.useragent) return this.done(new Error('device: property "useragent" wrong'));
      }
      this._browserWindow.setContentSize(e.size.width, e.size.height),
        (this._browserWindow.resizable = !1),
        (this._browserWindow.maximizable = !1),
        (this._browserWindow.fullScreenable = !1),
        (this._browserWindow.webContents.userAgent = e.useragent),
        0 === this._browserWindow.webContents.listenerCount('dom-ready') &&
          this._browserWindow.webContents.on('dom-ready', () => {
            const e = this._browserWindow.getContentSize();
            this._browserWindow.webContents.enableDeviceEmulation({ screenPosition: 'mobile', screenSize: { width: e[0], height: e[1] } });
          }),
        this._browserWindow.webContents.removeAllListeners('new-window'),
        this._browserWindow.webContents.on('new-window', (e, t) => {
          e.preventDefault(), /^https?:\/\//i.test(t) && this._browserWindow.webContents.executeJavaScript(`location.href=${JSON.stringify(t)}`);
        }),
        this.done();
    }
    cookies(e) {
      if (!this._isFinishLoad) return this.done(new Error('cookies: "goto" no execute'));
      const t = { url: this._browserWindow.webContents.getURL() };
      'string' == typeof e && e && (t.name = e),
        this._browserWindow.webContents.session.cookies
          .get(t)
          .then(t => {
            if (t && t.length > 0) return e ? this.done(t[0]) : this.done(t);
            this.done(null);
          })
          .catch(e => {
            this.done(new Error('cookies: ' + e.message));
          });
    }
    removeCookies(e) {
      if (!e) return this.done(new Error('removeCookies: parameter error'));
      if (!this._isFinishLoad) return this.done(new Error('removeCookies: "goto" no execute'));
      const t = this._browserWindow.webContents.getURL();
      this._browserWindow.webContents.session.cookies.remove(t, e).then(this.done).catch(this.done);
    }
    setCookies(...e) {
      let t;
      if ((2 === e.length ? 'string' == typeof e[0] && 'string' == typeof e[1] && (t = [{ name: e[0], value: e[1] }]) : 1 === e.length && Array.isArray(e[0]) && (t = e[0]), !t))
        return this.done(new Error('setCookies: parameter error'));
      if (this._isFinishLoad) {
        const e = this._browserWindow.webContents.getURL();
        for (const i of t) i.url = e;
      } else if (t.find(e => !/^https?:\/\/.+/i.test(e.url))) return this.done(new Error('setCookies: url error'));
      try {
        t.forEach(async (e, i) => {
          await this._browserWindow.webContents.session.cookies.set(e), i === t.length - 1 && this.done();
        });
      } catch (e) {
        this.done(new Error('setCookies: ' + e.message));
      }
    }
    clearCookies(e) {
      if (this._isFinishLoad) e = this._browserWindow.webContents.getURL();
      else if (!/^https?:\/\/.+/i.test(e)) return this.done(new Error('clearCookies: parameter "url" empty'));
      this._browserWindow.webContents.session.cookies
        .get({ url: e })
        .then(t => {
          if (t && t.length > 0)
            try {
              t.forEach(async (i, n) => {
                await this._browserWindow.webContents.session.cookies.remove(e, i.name), n === t.length - 1 && this.done();
              });
            } catch (e) {
              this.done(new Error('clearCookies: ' + e.message));
            }
          else this.done();
        })
        .catch(e => {
          this.done(new Error('clearCookies: ' + e.message));
        });
    }
    end(e) {
      (this._isEnd = !0),
        this._childProcess.kill('SIGKILL'),
        this._isShow
          ? (this._pluginId in this._idleUBrowserHub || (this._idleUBrowserHub[this._pluginId] = []), this._idleUBrowserHub[this._pluginId].push(this._browserWindow))
          : this._browserWindow.destroy(),
        this._endCallback(e);
    }
  }
  class De {
    constructor(e, t, i, n, s, o) {
      (this.config = e),
        (this.pluginsCmp = t),
        (this.windowCmp = i),
        (this.voiceCmp = n),
        (this.accountCmp = s.accountCmp),
        (this.dbCmp = s),
        (this.screencolorpickerCmp = o),
        (this.idleUBrowserHub = {}),
        (this.windowCmp.pluginIsOutKill = this.pluginIsOutKill.bind(this)),
        (this.windowCmp.pluginIsEnterDetach = this.pluginIsEnterDetach.bind(this));
    }
    init(e) {
      this.appFirstRun(e),
        this.appSafety(),
        this.registerGlobalService(),
        this.registerPluginApi(),
        this.initFeatures(),
        this.initOutKillPluginDoc(),
        this.initEnterDetachPluginDoc(),
        this.pluginsCmp.on('mount', async e => {
          this.initFeatures(e + '/');
        }),
        this.dbCmp.on('switch', () => {
          for (const e in this.pluginsCmp.pluginContainer) {
            if (!e) continue;
            const t = this.pluginsCmp.pluginContainer[e].featureDic;
            for (const e in t) t[e].dynamic && delete t[e];
          }
          this.initFeatures(), this.initOutKillPluginDoc(), this.initEnterDetachPluginDoc(), this.windowCmp.killAllPlugins(!0);
        }),
        this.dbCmp.on('pull', e => {
          const t = e.filter(e => e._id.startsWith('//'));
          if (0 === t.length) return;
          const i = t.filter(e => e._id.startsWith('//feature/'));
          i.length > 0 &&
            (i.forEach(e => {
              if (!0 === e._deleted) {
                const t = e._id.replace('//feature/', ''),
                  i = t.indexOf('/');
                this.pluginsCmp.removeFeature(t.substr(0, i), t.substr(i + 1));
              } else this.setPluginFeature(e.pluginId, e);
            }),
            this.windowCmp.refreshCmdSource()),
            t.find(e => '//outkillplugin' === e._id) && this.initOutKillPluginDoc(),
            t.find(e => '//enterdetachplugin' === e._id) && this.initEnterDetachPluginDoc();
        });
    }
    goHelp() {
      t.shell.openExternal(this.config.helpURL);
    }
    appFirstRun(e) {
      setImmediate(async () => {
        let i = await this.dbCmp.get('/', 'appupdate');
        const n = t.app.getVersion();
        (i && x().lte(n, i.version)) ||
          ((i = i || { _id: 'appupdate' }),
          (i.version = n),
          await this.dbCmp.put('/', i),
          e
            ? (new t.Notification({ title: 'uTools 首次运行', body: '为帮您更快上手 uTools, 已为您打开 uTools 帮助文档' }).show(), this.goHelp())
            : t.shell.openExternal(this.config.versionURL));
      });
    }
    appSafety() {
      t.app.on('remote-require', (e, t, i) => {
        e.preventDefault();
      }),
        t.app.on('remote-get-current-window', (e, i) => {
          t.BrowserView.fromWebContents(i) && (e.returnValue = null);
        }),
        t.app.on('remote-get-current-web-contents', (e, i) => {
          t.BrowserView.fromWebContents(i) && (e.returnValue = null);
        }),
        t.app.on('remote-get-guest-web-contents', (e, t) => {
          e.preventDefault();
        }),
        t.app.on('remote-get-global', (e, t) => {
          t === this.windowCmp.mainWindow.webContents ||
            t === this.windowCmp.ffffffff.webContents ||
            (this.voiceCmp.voiceWindow && t === this.voiceCmp.voiceWindow.webContents) ||
            t === this.windowCmp.clipboardWatch.pluginWebContents ||
            e.preventDefault();
        }),
        t.app.on('remote-get-builtin', (e, t, i) => {
          e.preventDefault();
        }),
        t.app.on('web-contents-created', (e, i) => {
          i.on('will-attach-webview', (e, t, n) => {
            const s = this.windowCmp.getPluginIdByWebContents(i);
            if (!s) return e.preventDefault();
            delete t.preload,
              delete t.preloadURL,
              delete t.session,
              delete t.affinity,
              (t.partition = '<' + s + '.webview>'),
              (t.enableRemoteModule = !1),
              (t.webSecurity = !0),
              (t.nodeIntegration = !1);
          }),
            i.on('new-window', e => {
              e.preventDefault();
            }),
            i.executeJavaScript('typeof process').then(e => {
              if ('object' === e) {
                const e = t.BrowserWindow.fromWebContents(i);
                if (e) return void e.destroy();
                const n = t.BrowserView.fromWebContents(i);
                n && n.destroy();
              }
            });
        });
    }
    setPluginFeature(e, { code: t, cmds: i, explain: n, icon: s, platform: o }) {
      return this.pluginsCmp.setFeature(e, { code: t, cmds: i, explain: n, icon: s, platform: o }, !0);
    }
    async initFeatures(e) {
      const t = await this.getFeatures(e);
      0 !== t.length &&
        (t.forEach(e => {
          this.setPluginFeature(e.pluginId, e);
        }),
        this.windowCmp.refreshCmdSource());
    }
    async saveFeature(e, i) {
      if ('object' != typeof i) return !1;
      if (!i.code) return !1;
      if (!Array.isArray(i.cmds) || 0 === i.cmds.length) return !1;
      if (!i.explain) return !1;
      if (!(e in this.pluginsCmp.pluginContainer)) return !1;
      const n = { _id: 'feature/' + e + '/' + i.code, pluginId: e };
      if (((n.code = i.code), (n.cmds = i.cmds), (n.explain = i.explain), i.platform)) {
        if ('string' == typeof i.platform) {
          if (!['win32', 'darwin', 'linux'].includes(i.platform)) return !1;
        } else {
          if (!Array.isArray(i.platform)) return !1;
          for (const e of i.platform) if (!['win32', 'darwin', 'linux'].includes(e)) return !1;
        }
        n.platform = i.platform;
      }
      if (i.icon && 'string' == typeof i.icon)
        if (i.icon.startsWith('data:image/')) {
          let e = t.nativeImage.createFromDataURL(i.icon);
          if (e.isEmpty()) delete i.icon;
          else {
            const t = e.getSize();
            (t.width > 72 || t.height > 72) && (e = t.height > t.width ? e.resize({ height: 72 }) : e.resize({ width: 72 })),
              (n._attachments = { icon: { content_type: 'image/png', data: e.toPNG() } }),
              (n.icon = i.icon = 'dbicon://' + n._id);
          }
        } else h().existsSync(c().join(this.pluginsCmp.pluginContainer[e].location, i.icon)) ? (n.icon = i.icon) : delete i.icon;
      else delete i.icon;
      const s = await this.dbCmp.get('/', n._id);
      return s && (n._rev = s._rev), !(await this.dbCmp.put('/', n)).error;
    }
    async removeFeature(e, t) {
      const i = 'feature/' + e + '/' + t;
      return !(await this.dbCmp.remove('/', i)).error;
    }
    async getFeatures(e = '') {
      return await this.dbCmp.allDocs('/', 'feature/' + e);
    }
    async initOutKillPluginDoc() {
      const e = await this.dbCmp.get('/', 'outkillplugin');
      this.outKillPluginDoc = e || { _id: 'outkillplugin', data: [] };
    }
    async addOutKillPlugin(e) {
      if (this.outKillPluginDoc.data.includes(e)) return;
      this.outKillPluginDoc.data.push(e);
      const t = await this.dbCmp.put('/', this.outKillPluginDoc);
      t.ok ? ((this.outKillPluginDoc._id = t.id), (this.outKillPluginDoc._rev = t.rev)) : this.initOutKillPluginDoc();
    }
    async removeOutKillPlugin(e) {
      if (!this.outKillPluginDoc.data.includes(e)) return;
      this.outKillPluginDoc.data.splice(this.outKillPluginDoc.data.indexOf(e), 1);
      const t = await this.dbCmp.put('/', this.outKillPluginDoc);
      t.ok ? ((this.outKillPluginDoc._id = t.id), (this.outKillPluginDoc._rev = t.rev)) : this.initOutKillPluginDoc();
    }
    pluginIsOutKill(e) {
      return this.outKillPluginDoc && this.outKillPluginDoc.data.includes(e);
    }
    async initEnterDetachPluginDoc() {
      const e = await this.dbCmp.get('/', 'enterdetachplugin');
      this.enterDetachPluginDoc = e || { _id: 'enterdetachplugin', data: [] };
    }
    async addEnterDetachPlugin(e) {
      if (this.enterDetachPluginDoc.data.includes(e)) return;
      this.enterDetachPluginDoc.data.push(e);
      const t = await this.dbCmp.put('/', this.enterDetachPluginDoc);
      t.ok ? ((this.enterDetachPluginDoc._id = t.id), (this.enterDetachPluginDoc._rev = t.rev)) : this.initEnterDetachPluginDoc();
    }
    async removeEnterDetachPlugin(e) {
      if (!this.enterDetachPluginDoc.data.includes(e)) return;
      this.enterDetachPluginDoc.data.splice(this.enterDetachPluginDoc.data.indexOf(e), 1);
      const t = await this.dbCmp.put('/', this.enterDetachPluginDoc);
      t.ok ? ((this.enterDetachPluginDoc._id = t.id), (this.enterDetachPluginDoc._rev = t.rev)) : this.initEnterDetachPluginDoc();
    }
    pluginIsEnterDetach(e) {
      return this.enterDetachPluginDoc && this.enterDetachPluginDoc.data.includes(e);
    }
    async initLocalOpenFeatures() {
      if (!n().get('enableNativeApp')) return;
      const e = await this.getLocalOpenDoc();
      e && this.setLocalOpenFeatures(e.files);
    }
    async getLocalOpenDoc() {
      let e;
      return (
        (e = this.windowCmp.isWindow ? ie().getVolumeNo() + '' : u().createHash('md5').update(ie().getMachineId()).digest('hex')),
        (await this.dbCmp.get('/', 'localopen/' + e)) || { _id: 'localopen/' + e, files: [] }
      );
    }
    getNativeIconUrl(e) {
      if (!e || 'string' != typeof e) return 'nativeicon://unknow';
      if ('folder' === e.toLowerCase()) return this.windowCmp.isLinux ? (this.folderIconPath ? 'file://' + this.folderIconPath : 'nativeicon://unknow') : 'nativeicon://folder';
      if (e.startsWith('.')) return 'nativeicon://' + e.toLowerCase();
      if (!h().existsSync(e)) return 'nativeicon://unknow';
      let t = !1;
      try {
        t = W().lstatSync(e).isDirectory();
      } catch (e) {}
      if (t)
        return this.windowCmp.isLinux
          ? this.folderIconPath
            ? 'file://' + this.folderIconPath
            : 'nativeicon://unknow'
          : this.windowCmp.isMacOs && /\.app$/i.test(e)
          ? 'nativeicon://' + e
          : 'nativeicon://folder';
      const i = c().parse(c().basename(e)).ext.toLowerCase();
      return this.windowCmp.isWindow && ['.exe', '.lnk', '.appref-ms', '.url'].includes(i) ? 'nativeicon://' + e : 'nativeicon://' + (i || 'unknow');
    }
    convertLocalOpenFeature(e) {
      return { code: e, explain: e, icon: this.getNativeIconUrl(e), cmds: [c().parse(c().basename(e)).name] };
    }
    setLocalOpenFeatures(e) {
      const t = this.pluginsCmp.pluginContainer[''];
      0 !== (e = e.filter(e => !(e in t.featureDic))).length &&
        e.forEach(e => {
          if (!W().existsSync(e)) return;
          const t = this.convertLocalOpenFeature(e);
          this.pluginsCmp.setFeature('', t);
        });
    }
    async addLocalOpen(e) {
      if (!Array.isArray(e) || 0 === e.length) return;
      const t = await this.getLocalOpenDoc();
      return 0 !== (e = e.filter(e => !t.files.includes(e))).length
        ? (t.files.push(...e),
          (await this.dbCmp.put('/', t)).error ? void 0 : (n().get('enableNativeApp') && (this.setLocalOpenFeatures(e), this.windowCmp.refreshCmdSource()), !0))
        : void 0;
    }
    async removeLocalOpen(e) {
      if (!Array.isArray(e) || 0 === e.length) return;
      const t = await this.getLocalOpenDoc();
      if (0 === t.files.length) return;
      let i;
      if (((t.files = t.files.filter(t => !e.includes(t))), (i = 0 === t.files.length ? await this.dbCmp.remove('/', t) : await this.dbCmp.put('/', t)), i.error)) return;
      const n = this.pluginsCmp.pluginContainer[''].featureDic,
        s = e.filter(e => e in n);
      return (
        s.length > 0 &&
          (s.forEach(e => {
            delete n[e];
          }),
          this.windowCmp.refreshCmdSource()),
        !0
      );
    }
    showNotification(e, { body: i, clickFeatureCode: n }) {
      if (!t.Notification.isSupported()) return;
      'string' != typeof i && (i = String(i));
      const s = this.pluginsCmp.pluginContainer[e];
      if (!s) return;
      const o = new t.Notification({ title: s.pluginName, body: i, icon: s.logo.replace('file://', '') });
      if (n && n in s.featureDic) {
        const e = s.featureDic[n].cmds.find(e => 'base' === e.type);
        if (e) {
          const t = s.name,
            i = e.label;
          o.on('click', () => {
            this.windowCmp.autoLoadPlugin(t, n, i);
          });
        }
      }
      o.show();
    }
    getCurrentFolderPath() {
      const e = this.windowCmp.display.nativeWorkWindowInfo;
      if (e) {
        if (this.windowCmp.isWindow) {
          if ('explorer.exe' !== e.app) return;
          if ('CabinetWClass' !== e.class && 'ExploreWClass' !== e.class) return;
          return ie().getExplorerCurrentPath(e.id);
        }
        if (this.windowCmp.isMacOs) {
          if ('com.apple.finder' !== e.bundleId) return;
          try {
            return Z()
              .execSync('osascript -e \'tell application "Finder" to get the POSIX path of (target of front window as alias)\'', { encoding: 'utf-8' })
              .trim()
              .replace(/\/$/, '');
          } catch (e) {}
        }
      }
    }
    getCurrentBrowserUrl() {
      const e = this.windowCmp.display.nativeWorkWindowInfo;
      if (e)
        if (this.windowCmp.isWindow) {
          if (!/^(chrome|firefox|MicrosoftEdge|iexplore|opera|brave|msedge)\.exe$/.test(e.app)) return;
          const t = RegExp.$1;
          if (['brave', 'MicrosoftEdge', 'iexplore', 'msedge'].includes(t)) return ie().getCommonBrowserUrl(e.id);
          if ('chrome' === t) return ie().getChromeUrl(e.id);
          if ('firefox' === t) return ie().getFirefoxUrl(e.id);
          if ('opera' === t) return ie().getOperaUrl(e.id);
        } else if (this.windowCmp.isMacOs) {
          if (!['com.apple.Safari', 'com.google.Chrome', 'com.microsoft.edgemac', 'com.operasoftware.Opera', 'com.vivaldi.Vivaldi', 'com.brave.Browser'].includes(e.bundleId))
            return;
          try {
            return 'com.apple.Safari' === e.bundleId
              ? Z().execSync('osascript -e \'tell application "Safari" to return URL of front document\'', { encoding: 'utf8' }).trim()
              : Z().execSync(`osascript -e 'tell application "${e.app}" to return URL of active tab of front window'`, { encoding: 'utf8' }).trim();
          } catch (e) {
            const i = e.stderr
              .replace(/^\d+:\d+: execution error:/, '')
              .replace(/\(-?\d+\)\s*$/, '')
              .trim();
            new t.Notification({ title: 'uTools', body: i }).show();
          }
        }
    }
    redirect({ label: e, payload: i }) {
      if (!e) return '搜索关键字为空';
      do {
        if (!i) {
          i = null;
          break;
        }
        if ('string' == typeof i) {
          i = { type: 'text', data: i };
          break;
        }
        if ('object' != typeof i) return '参数错误';
        if (!['text', 'files', 'img'].includes(i.type) || !i.data) return '参数错误';
        if ('text' === i.type && ('string' != typeof i.data || !i.data)) return '参数错误';
        if ('files' === i.type) {
          if ('string' == typeof i.data) {
            if (!W().existsSync(i.data)) return '文件不存在';
            try {
              const e = W().lstatSync(i.data);
              i.data = [{ isFile: e.isFile(), isDirectory: e.isDirectory(), name: c().basename(i.data), path: i.data }];
            } catch (e) {
              return '文件不存在';
            }
            break;
          }
          if (Array.isArray(i.data)) {
            const e = [];
            if (
              (i.data.forEach(t => {
                if (W().existsSync(t))
                  try {
                    const i = W().lstatSync(t);
                    e.push({ isFile: i.isFile(), isDirectory: i.isDirectory(), name: c().basename(t), path: t });
                  } catch (e) {}
              }),
              0 === e.length)
            )
              return '集合文件都不存在';
            i.data = e;
            break;
          }
          return '参数错误';
        }
        if ('img' === i.type) {
          if ('string' == typeof i.data) {
            if (i.data.startsWith('data:image/')) break;
            if (/\.(jpg|jpeg|png|bmp)$/i.test(i.data) && W().existsSync(i.data)) {
              const e = t.nativeImage.createFromPath(i.data);
              if (e.isEmpty()) return '图片为空';
              i.data = e.toDataURL();
              break;
            }
            return '图片格式错误';
          }
          if ('object' == typeof i.data && i.data instanceof Uint8Array) {
            const e = t.nativeImage.createFromBuffer(Buffer.from(i.data));
            if (e.isEmpty()) return '图片为空';
            i.data = e.toDataURL();
            break;
          }
          return '参数错误';
        }
      } while (0);
      this.windowCmp.executeJavaScript(this.windowCmp.mainWindow.webContents, `window.rpcRenderer.redirectFeature(${JSON.stringify({ label: e, payload: i })})`).then(i => {
        i ||
          (this.windowCmp.ffffffff.goPluginStore(e), new t.Notification({ title: 'uTools', body: '未匹配到"' + e + '"作为功能关键字的插件，跳转至插件中心，请下载安装' }).show());
      });
    }
    pluginAPIShowDialog(e, i, n) {
      let s;
      const o = t.BrowserView.fromWebContents(e);
      if (((s = o ? t.BrowserWindow.fromBrowserView(o) : t.BrowserWindow.fromWebContents(e)), !s)) return;
      let r;
      try {
        switch (i) {
          case 'open':
            r = t.dialog.showOpenDialogSync(s, n);
            break;
          case 'save':
            r = t.dialog.showSaveDialogSync(s, n);
            break;
          case 'message':
            r = t.dialog.showMessageBoxSync(s, n);
        }
      } catch (e) {}
      return (
        s === this.windowCmp.mainWindow &&
          setTimeout(() => {
            this.windowCmp.mainWindow.isVisible() || (this.windowCmp.mainWindow.getBrowserView() && (this.windowCmp.mainWindow.show(), e.isDestroyed() || e.focus()));
          }, 500),
        r
      );
    }
    registerGlobalService() {
      global.services.app = {
        getVersion: () => t.app.getVersion(),
        getResIconAbsolutePath: e => c().join(__dirname, e),
        addLocalOpen: e => this.addLocalOpen(e),
        removeLocalOpen: e => this.removeLocalOpen(e),
        getLocalOpenFeatures: async () => {
          const e = await this.getLocalOpenDoc();
          return e
            ? e.files
                .map(e => (W().existsSync(e) ? this.convertLocalOpenFeature(e) : { code: e, explain: e, cmds: [c().parse(c().basename(e)).name] }))
                .sort((e, t) => e.cmds[0].localeCompare(t.cmds[0]))
            : [];
        },
        getNativeIconUrl: e => this.getNativeIconUrl(e),
      };
    }
    registerPluginApi() {
      (this.appAPI_1 = {
        getUserServerTemporaryToken: (e, t) => {
          t.startsWith('dev_') && (t = t.replace('dev_', ''));
          let i = setTimeout(() => {
            (i = null), (e.returnValue = { error: !0, name: 'exception', message: '请求超时' });
          }, 2e3);
          this.accountCmp.getUserServerTemporaryToken(t, (t, n) => {
            i &&
              (clearTimeout(i),
              (e.returnValue = t ? { error: !0, name: 'exception', message: t.message } : n ? { ok: !0, ...n } : { error: !0, name: 'not login', message: '未登录' }));
          });
        },
        setFeature: async (e, t, i) => {
          if (await this.saveFeature(t, i)) return (e.returnValue = !0), void (this.setPluginFeature(t, i) && this.windowCmp.refreshCmdSource());
          e.returnValue = !1;
        },
        removeFeature: async (e, t, i) => {
          if (i && 'string' == typeof i)
            return (await this.removeFeature(t, i))
              ? ((e.returnValue = !0), void (this.pluginsCmp.removeFeature(t, i) && this.windowCmp.refreshCmdSource()))
              : void (e.returnValue = !1);
          e.returnValue = !1;
        },
        getFeatures: async (e, i) => {
          const n = await this.getFeatures(i + '/');
          for (const e of n) {
            if ((delete e.pluginId, delete e._rev, e._attachments)) {
              const i = await this.dbCmp.getAttachment('/', e._id, 'icon');
              if (i) {
                const n = t.nativeImage.createFromBuffer(i);
                n.isEmpty() ? delete e.icon : (e.icon = n.toDataURL());
              } else delete e.icon;
            }
            delete e._attachments, delete e._id;
          }
          e.returnValue = n;
        },
        showNotification: (e, t, i) => {
          this.showNotification(t, i), (e.returnValue = !0);
        },
        getAccountAccessToken: (e, t) => {
          ['audit', 'FFFFFFFF'].includes(t) ? (e.returnValue = this.accountCmp.getAccountToken()) : (e.returnValue = null);
        },
        getLocalId: (e, t) => {
          e.returnValue = u()
            .createHash('md5')
            .update(ie().getMachineId() + t)
            .digest('hex');
        },
        screenColorPick: e => {
          this.screencolorpickerCmp.do(t => {
            e.sender.isDestroyed() ||
              this.windowCmp.executeJavaScript(
                e.sender,
                `if (window.utools && window.utools.__event__ && typeof window.utools.__event__.screenColorPickCallback === 'function') {\n            try { window.utools.__event__.screenColorPickCallback(${JSON.stringify(
                  t
                )}) } catch(e) {} \n            delete window.utools.__event__.screenColorPickCallback}`
              );
          });
        },
        screenCapture: e => {
          let i;
          t.clipboard.writeText(''),
            this.windowCmp.isMacOs
              ? (i = Z().spawn('/usr/sbin/screencapture', ['-c', '-i', '-r'], { detached: !0 }))
              : this.windowCmp.isWindow
              ? (i = Z().spawn('snippingtool.exe', ['/clip'], { detached: !0 }))
              : this.windowCmp.isLinux && (i = Z().spawn('gnome-screenshot', ['-c', '-a'], { detached: !0 })),
            i.once('close', () => {
              if (e.sender.isDestroyed()) return;
              const i = t.clipboard.readImage();
              i.isEmpty() ||
                this.windowCmp.executeJavaScript(
                  e.sender,
                  `if (window.utools && window.utools.__event__ && typeof window.utools.__event__.screenCaptureCallback === 'function') {\n            try { window.utools.__event__.screenCaptureCallback(${JSON.stringify(
                    i.toDataURL()
                  )}) } catch(e) {} \n            delete window.utools.__event__.screenCaptureCallback}`
                );
            });
        },
        runUBrowser: (e, t, i) => {
          const { instanceId: n, queue: s, options: o } = i,
            r = t => {
              e.sender.isDestroyed() ||
                this.windowCmp.executeJavaScript(
                  e.sender,
                  `if (window.utools.__event__[${JSON.stringify(n)}]) { \n            window.utools.__event__[${JSON.stringify(n)}](${JSON.stringify(
                    t
                  )}); \n            delete window.utools.__event__[${JSON.stringify(n)}]; }`
                );
            };
          setImmediate(() => new ke(t, o, s, this.idleUBrowserHub, r));
        },
        getIdleUBrowsers: (e, t) => {
          t in this.idleUBrowserHub ? (e.returnValue = this.idleUBrowserHub[t].map(e => ({ id: e.id, title: e.getTitle(), url: e.webContents.getURL() }))) : (e.returnValue = []);
        },
        setUBrowserProxy: (e, i, n) => {
          t.session
            .fromPartition('<' + i + '.ubrowser>')
            .setProxy(n)
            .then(() => {
              e.returnValue = !0;
            })
            .catch(() => {
              e.returnValue = !1;
            });
        },
        clearUBrowserCache: (e, i) => {
          t.session
            .fromPartition('<' + i + '.ubrowser>')
            .clearCache()
            .then(() => {
              e.returnValue = !0;
            })
            .catch(() => {
              e.returnValue = !1;
            });
        },
      }),
        (this.appAPI_2 = {
          getUser: e => {
            const t = this.accountCmp.getAccountInfo();
            e.returnValue = t ? { avatar: t.avatar, nickname: t.nickname, type: 1 === t.type ? 'member' : 'user' } : null;
          },
          getAppVersion: e => {
            e.returnValue = t.app.getVersion();
          },
          getPath: (e, i) => {
            try {
              e.returnValue = t.app.getPath(i);
            } catch (t) {
              e.returnValue = null;
            }
          },
          getFileIcon: (e, t) => {
            const i = this.getNativeIconUrl(t);
            i.startsWith('file://')
              ? (e.returnValue = i)
              : this.windowCmp.nativeIconHandler(i.substr(13), t => {
                  e.returnValue = 'data:' + t.mimeType + ';base64,' + t.data.toString('base64');
                });
          },
          redirect: (e, t) => {
            e.returnValue = this.redirect(t);
          },
          copyFile: (e, t) => {
            t
              ? (Array.isArray(t) || (t = [t]), 0 !== (t = t.filter(e => h().existsSync(e))).length ? (ie().copyFile.apply(null, t), (e.returnValue = !0)) : (e.returnValue = !1))
              : (e.returnValue = !1);
          },
          copyImage: (e, i) => {
            if (!i) return void (e.returnValue = !1);
            let n;
            'string' == typeof i
              ? /^data:image\/([a-z]+);base64,/.test(i)
                ? (n = t.nativeImage.createFromDataURL(i))
                : c().basename(i) !== i && h().existsSync(i) && (n = t.nativeImage.createFromPath(i))
              : 'object' == typeof i && i instanceof Uint8Array && (n = t.nativeImage.createFromBuffer(Buffer.from(i))),
              n && !n.isEmpty() ? (t.clipboard.writeImage(n), (e.returnValue = !0)) : (e.returnValue = !1);
          },
          copyText: (e, i) => {
            t.clipboard.writeText(String(i)), (e.returnValue = !0);
          },
          getCurrentFolderPath: e => {
            e.returnValue = this.getCurrentFolderPath();
          },
          getCurrentBrowserUrl: e => {
            e.returnValue = this.getCurrentBrowserUrl();
          },
          showOpenDialog: (e, t) => {
            e.returnValue = this.pluginAPIShowDialog(e.sender, 'open', t);
          },
          showSaveDialog: (e, t) => {
            e.returnValue = this.pluginAPIShowDialog(e.sender, 'save', t);
          },
          showMessageBox: (e, t) => {
            e.returnValue = this.pluginAPIShowDialog(e.sender, 'message', t);
          },
          findInPage: (e, t) => {
            const { text: i, options: n } = t;
            e.sender.findInPage(i, n), (e.returnValue = !0);
          },
          stopFindInPage: (e, t) => {
            e.sender.stopFindInPage(t || 'clearSelection'), (e.returnValue = !0);
          },
          startDrag: (e, t) => {
            if (!t) return;
            const i = { icon: c().join(__dirname, 'res', 'dragfile.png') };
            if ('string' == typeof t) i.file = t;
            else {
              if (!Array.isArray(t)) return;
              i.files = t;
            }
            e.sender.startDrag(i);
          },
          shellOpenExternal: (e, i) => {
            t.shell.openExternal(i), (e.returnValue = !0);
          },
          shellShowItemInFolder: (e, i) => {
            t.shell.showItemInFolder(i), (e.returnValue = !0);
          },
          shellOpenItem: (e, i) => {
            t.shell.openPath(i), (e.returnValue = !0);
          },
          shellOpenPath: (e, i) => {
            t.shell.openPath(i), (e.returnValue = !0);
          },
          shellBeep: e => {
            t.shell.beep(), (e.returnValue = !0);
          },
          simulateKeyboardTap: (e, { key: t, modifier: i }) => {
            const n = [t.toLowerCase()];
            i &&
              Array.isArray(i) &&
              i.length > 0 &&
              i.forEach(e => {
                n.push(e.toLowerCase());
              }),
              ie().simulateKeyboardTap.apply(null, n),
              (e.returnValue = !0);
          },
          simulateMouseClick: (e, t) => {
            t ? ie().simulateMouseClick(t.x, t.y) : ie().simulateMouseClick(), (e.returnValue = !0);
          },
          simulateMouseRightClick: (e, t) => {
            t ? ie().SimulateMouseRightClick(t.x, t.y) : ie().SimulateMouseRightClick(), (e.returnValue = !0);
          },
          simulateMouseDoubleClick: (e, t) => {
            t ? ie().simulateMouseDoubleClick(t.x, t.y) : ie().simulateMouseDoubleClick(), (e.returnValue = !0);
          },
          simulateMouseMove: (e, t) => {
            t ? (ie().simulateMouseMove(t.x, t.y), (e.returnValue = !0)) : (e.returnValue = !1);
          },
          getCursorScreenPoint: e => {
            e.returnValue = t.screen.getCursorScreenPoint();
          },
          getPrimaryDisplay: e => {
            e.returnValue = t.screen.getPrimaryDisplay();
          },
          getAllDisplays: e => {
            e.returnValue = t.screen.getAllDisplays();
          },
          getDisplayNearestPoint: (e, i) => {
            e.returnValue = t.screen.getDisplayNearestPoint(i);
          },
          getDisplayMatching: (e, i) => {
            e.returnValue = t.screen.getDisplayMatching(i);
          },
        }),
        t.ipcMain.on('api.app', async (e, t, i) => {
          if (t in this.appAPI_1) {
            const n = this.windowCmp.getPluginIdByWebContents(e.sender);
            return n ? this.appAPI_1[t].call(this, e, n, i) : void (e.returnValue = null);
          }
          if (t in this.appAPI_2) return this.appAPI_2[t].call(this, e, i);
          e.returnValue = null;
        });
    }
  }
  class Ie {
    constructor(e, t) {
      (this.windowCmp = e), (this.dbCmp = t), (this.featureHotKeyDic = {});
    }
    init() {
      this.adaptatOldVersion().then(() => {
        this.initFeatureHotKey();
      }),
        this.registerGlobalService(),
        this.dbCmp.on('switch', () => {
          Object.values(this.featureHotKeyDic).forEach(e => {
            e.hotkey && this.unregisterHotKey(e.hotkey);
          }),
            (this.featureHotKeyDic = {}),
            this.initFeatureHotKey();
        }),
        this.dbCmp.on('pull', e => {
          const t = e.filter(e => e._id.startsWith('//featurehotkey/'));
          0 !== t.length &&
            t.forEach(e => {
              const t = e._id.replace('//', '');
              if (!0 === e._deleted) {
                if (!this.featureHotKeyDic[t]) return;
                this.removeFeatureHotKey(t), delete this.featureHotKeyDic[t];
              } else {
                if (t in this.featureHotKeyDic)
                  return void (this.featureHotKeyDic[t].hotkey === e.hotkey
                    ? (this.featureHotKeyDic[t] = { ...e, _id: t })
                    : (this.removeFeatureHotKey(t), (this.featureHotKeyDic[t] = { ...e, _id: t }), this.setFeatureHotKey(t, e.hotkey)));
                (this.featureHotKeyDic[t] = { ...e, _id: t }), this.setFeatureHotKey(t, e.hotkey);
              }
            });
        });
    }
    async initFeatureHotKey() {
      const e = await this.dbCmp.allDocs('/', 'featurehotkey/');
      0 !== e.length &&
        e.forEach(e => {
          (this.featureHotKeyDic[e._id] = e), this.setFeatureHotKey(e._id, e.hotkey);
        });
    }
    registerHotKey(e, i) {
      const s = C(e);
      if (s !== n().get('showHotKey'))
        if (ge.isFKey(s)) ge.register(s, i);
        else
          try {
            t.globalShortcut.isRegistered(s) && t.globalShortcut.unregister(s), t.globalShortcut.register(s, i);
          } catch (e) {}
    }
    unregisterHotKey(e) {
      const i = C(e);
      ge.isFKey(i) ? ge.unregister(i) : t.globalShortcut.isRegistered(i) && t.globalShortcut.unregister(i);
    }
    setFeatureHotKey(e, t) {
      t &&
        this.registerHotKey(t, () => {
          setImmediate(() => {
            const t = this.featureHotKeyDic[e];
            if (!t) return;
            const i = this.windowCmp.clipboardWatch.isPreCopy();
            this.windowCmp.mainWindow.isVisible() || this.windowCmp.display.setNativeWorkWindowInfo();
            const n = this.windowCmp.display.nativeWorkWindowInfo;
            this.windowCmp
              .executeJavaScript(this.windowCmp.mainWindow.webContents, `window.rpcRenderer.autoTextCmd(${JSON.stringify({ cmd: t.cmd, wininfo: n, isPreCopy: i })})`)
              .then(e => {
                e && this.windowCmp.display.trigger(!0);
              });
          });
        });
    }
    removeFeatureHotKey(e) {
      const t = this.featureHotKeyDic[e];
      if (!t) return;
      const i = Object.values(this.featureHotKeyDic).find(e => e !== t && e.hotkey === t.hotkey);
      i ? this.setFeatureHotKey(i._id, i.hotkey) : this.unregisterHotKey(t.hotkey);
    }
    createItem() {
      const e = 'featurehotkey/' + Date.now();
      this.featureHotKeyDic[e] = { _id: e, hotkey: '', cmd: '' };
    }
    async deleteItem(e) {
      const t = this.featureHotKeyDic[e];
      return (
        !!t && (t.hotkey ? (this.removeFeatureHotKey(e), !(await this.dbCmp.remove('/', e)).error && (delete this.featureHotKeyDic[e], !0)) : (delete this.featureHotKeyDic[e], !0))
      );
    }
    async updateItemHotKey(e, t) {
      const i = this.featureHotKeyDic[e];
      if (!i) return !1;
      if (Object.values(this.featureHotKeyDic).find(e => e.hotkey === t)) return !1;
      i.hotkey && this.removeFeatureHotKey(e), (i.hotkey = t);
      const n = await this.dbCmp.put('/', i);
      return (i._id = n.id), !n.error && ((i._rev = n.rev), this.setFeatureHotKey(e, i.hotkey), !0);
    }
    async updateItemCmd(e, t) {
      const i = this.featureHotKeyDic[e];
      if (!i) return !1;
      if (!i.hotkey) return !1;
      i.cmd = t;
      const n = await this.dbCmp.put('/', i);
      return (i._id = n.id), !n.error && ((i._rev = n.rev), !0);
    }
    async adaptatOldVersion() {
      const e = n().get('featureHotKey');
      if (!e) return;
      const t = await this.dbCmp.allDocs('/', 'featurehotkey/');
      for (const i in e)
        if (e[i].hotkey) {
          let n = e[i].hotkey;
          const s = e[i].cmd;
          if (
            ((n = n.startsWith('Double')
              ? this.windowCmp.isMacOs
                ? n.replace('Command', 'Meta').replace('Option', 'Alt')
                : n.replace('Ctrl', 'Control')
              : n.replace('Command+', 'Meta+').replace('Super+', 'Meta+')),
            t.find(e => e.hotkey === n && e.cmd === s))
          )
            continue;
          await this.dbCmp.put('/', { _id: 'featurehotkey/' + i, hotkey: n, cmd: s });
        }
      n().delete('featureHotKey');
    }
    registerGlobalService() {
      global.services.featureHotKey = {
        getAll: () => JSON.stringify(Object.values(this.featureHotKeyDic)),
        createItem: this.createItem.bind(this),
        deleteItem: this.deleteItem.bind(this),
        updateItemHotKey: this.updateItemHotKey.bind(this),
        updateItemCmd: this.updateItemCmd.bind(this),
      };
    }
  }
  class _e {
    constructor(e, t, i) {
      (this.config = e),
        (this.config.borderWidth = t.isMacOs ? 0 : 1),
        (this.windowBounds = { x: 0, y: 0, width: this.config.contentWidth + 2 * this.config.borderWidth, height: this.config.initContentHeight + 2 * this.config.borderWidth }),
        (this.cursorPoint = { x: 0, y: 0 }),
        (this.windowCmp = t),
        (this.dbCmp = i),
        (this.nativeVoicePanelTrigger = this.nativeVoicePanelTrigger.bind(this));
    }
    isEnableVoicePanel() {
      return !0 === n().get('enableVoicePanel');
    }
    isTriggerWayNumberValue(e) {
      return [0, 1, 2, 4, 5, 6, 7].includes(e);
    }
    init(e) {
      n().has('enableVoicePanel') || (e ? n().set('enableVoicePanel', !this.windowCmp.isLinux) : n().set('enableVoicePanel', !1)),
        this.isEnableVoicePanel() && this.enableVoicePanel(),
        this.registerGlobalService();
    }
    enableVoicePanel() {
      (this._useVoice = !(!1 === n().get('voicePanelUseVoice'))),
        this.windowCmp.isLinux
          ? (this._triggerWay = 0)
          : ((this._triggerWay = n().get('voicePanelTriggerWay')),
            this.isTriggerWayNumberValue(this._triggerWay) || (this.windowCmp.isWindow ? (this._triggerWay = 0) : this.windowCmp.isMacOs && (this._triggerWay = 2)),
            (this._longDownTriggerMS = n().get('voicePanelLongDownTriggerMS')),
            (!this._longDownTriggerMS || this._longDownTriggerMS < 200 || this._longDownTriggerMS > 400) && (this._longDownTriggerMS = 200)),
        this.initVoiceWindow(),
        (this.windowCmp.voiceRefreshCmdSource = () => {
          this.voiceWindow.webContents.executeJavaScript('window.refreshCmdSource()');
        }),
        (this.windowCmp.voiceNativeThemeUpdated = e => {
          this.voiceWindow.webContents.executeJavaScript(`window.nativeThemeUpdated(${e})`);
        }),
        (this.windowCmp.voiceChangeAccount = (e = null) => {
          this.voiceWindow.webContents.executeJavaScript(`window.changeAccount(${JSON.stringify(e)})`);
        }),
        this.windowCmp.isLinux && Z().spawn('xmodmap', ['-e', '"pointer = 1 25 3 4 5 6 7 8 9 10"'], { shell: !0, detached: !0 });
    }
    disableVoicePanel() {
      this.voiceWindow &&
        (this.voiceWindow.isDestroyed() || this.voiceWindow.destroy(),
        (this.voiceWindow = null),
        delete this.windowCmp.voiceRefreshCmdSource,
        delete this.windowCmp.voiceNativeThemeUpdated,
        delete this.windowCmp.voiceChangeAccount,
        ie().stopVoicePanelTriggerEvent());
    }
    triggerShow(e, i) {
      if ((this.windowCmp.reportCmp.info('panel.show'), this.windowCmp.isWindow)) {
        const n = t.screen.screenToDipPoint({ x: e, y: i });
        (e = Math.round(n.x)), (i = Math.round(n.y));
      } else
        this.windowCmp.isMacOs
          ? this._useVoice &&
            !this._isMicrophoneGranted &&
            (void 0 === this._isMicrophoneGranted && (this._isMicrophoneGranted = 'granted' === t.systemPreferences.getMediaAccessStatus('microphone')),
            this._isMicrophoneGranted || t.systemPreferences.askForMediaAccess('microphone'))
          : this.windowCmp.isLinux &&
            ((this._displayScaleFactor = t.screen.getPrimaryDisplay().scaleFactor),
            this._displayScaleFactor > 1 && ((e = Math.round(e / this._displayScaleFactor)), (i = Math.round(i / this._displayScaleFactor))));
      (this.cursorPoint.x = e), (this.cursorPoint.y = i);
      let n = null;
      this.windowCmp.display.setNativeWorkWindowInfo();
      const s = this.windowCmp.display.nativeWorkWindowInfo;
      do {
        if (this.windowCmp.clipboardWatch.isPreCopy()) {
          this.windowCmp.isWindow && ie().simulateKeyboardTap('ctrl'), (n = { type: 'clipboard', wininfo: s || null });
          break;
        }
        if (!s) {
          this.windowCmp.isWindow && ie().simulateKeyboardTap('ctrl');
          break;
        }
        if (this.windowCmp.isMacOs) {
          if (e > s.x && e < s.x + s.width && i > s.y && i < s.y + 23) {
            n = { type: 'window', data: s, wininfo: s };
            break;
          }
          this.windowCmp.clipboardWatch.temporaryCancelWatch(),
            (this._simulateCopyClipboardChangeCount = ie().getClipboardChangeCount()),
            ie().simulateKeyboardTap('c', 'command'),
            (n = { type: 'simulatecopy', wininfo: s });
          break;
        }
        if (this.windowCmp.isWindow) {
          if (('uTools.exe' === s.app || (this.windowCmp.isDev && 'electron.exe' === s.app)) && s.id === this.voiceWindow.getNativeWindowHandle().readInt32LE()) break;
          const o = t.screen.screenToDipRect(null, { x: s.x, y: s.y, width: s.width, height: s.height });
          if (e > o.x && e < o.x + o.width && i > o.y && i < o.y + 33) {
            n = { type: 'window', data: s, wininfo: s };
            break;
          }
          if ('explorer.exe' === s.app) {
            let e;
            if (
              (this.windowCmp.isWindow && ie().simulateKeyboardTap('ctrl'),
              'CabinetWClass' === s.class || 'ExploreWClass' === s.class
                ? (e = ie().getExplorerSelectedFilePath(s.id))
                : ('Progman' !== s.class && 'WorkerW' !== s.class) || (e = ie().getDesktopSelectedFilePath()),
              e)
            ) {
              const t = [];
              if (
                (e.forEach(e => {
                  let i;
                  try {
                    i = h().lstatSync(e);
                  } catch (e) {
                    return;
                  }
                  t.push({ isFile: i.isFile(), isDirectory: i.isDirectory(), name: c().basename(e), path: e });
                }),
                t.length > 0)
              ) {
                n = { type: 'files', data: t, wininfo: s };
                break;
              }
            }
            n = { type: 'window', data: s, wininfo: s };
            break;
          }
          this.windowCmp.clipboardWatch.temporaryCancelWatch(),
            (this._simulateCopyClipboardChangeCount = ie().getClipboardChangeCount()),
            ie().simulateKeyboardTap('c', 'ctrl'),
            (n = { type: 'simulatecopy', wininfo: s });
          break;
        }
        if (this.windowCmp.isLinux) {
          if (('utools' === s.app || (this.windowCmp.isDev && 'electron' === s.app)) && s.id === this.voiceWindow.getNativeWindowHandle().readInt32LE()) {
            this._voiceWindowShowTimeStamp = Date.now();
            break;
          }
          if (/\/(?:dde-file-manager|nautilus)$/.test(s.appPath)) {
            this.windowCmp.clipboardWatch.temporaryCancelWatch(),
              (this._simulateCopyClipboardChangeCount = ie().getClipboardChangeCount()),
              ie().simulateKeyboardTap('c', 'ctrl'),
              (n = { type: 'simulatecopy', wininfo: s });
            break;
          }
          if (ie().wheelMouseDownIsSelection()) {
            const e = t.clipboard.readText('selection').trim();
            e && (n = { type: 'text', data: e, wininfo: s });
          }
        }
      } while (0);
      (this.windowBounds.height = this.config.initContentHeight + 2 * this.config.borderWidth),
        (this.windowBounds.x = e - ((this.windowBounds.width / 2) | 0)),
        (this.windowBounds.y = i - ((this.windowBounds.height / 2) | 0)),
        (this.workedDisplay = t.screen.getDisplayNearestPoint({ x: e, y: i })),
        this.windowBounds.x < this.workedDisplay.bounds.x
          ? (this.windowBounds.x = this.workedDisplay.bounds.x)
          : this.windowBounds.x + this.windowBounds.width > this.workedDisplay.bounds.x + this.workedDisplay.bounds.width &&
            (this.windowBounds.x = this.workedDisplay.bounds.x + this.workedDisplay.bounds.width - this.windowBounds.width),
        this.windowCmp.isLinux || this.voiceWindow.setFocusable(!1),
        this.voiceWindow.setMinimumSize(this.windowBounds.width, this.windowBounds.height),
        this.voiceWindow.setMaximumSize(this.windowBounds.width, this.windowBounds.height),
        this.voiceWindow.setBounds(this.windowBounds),
        (this.pointerInWindow = !0),
        this.windowCmp.isWindow && ie().setAlwaysOnTop(this.voiceWindow.getNativeWindowHandle()),
        this.windowCmp.isMacOs && this.voiceWindow.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
        this.voiceWindow.showInactive(),
        this.voiceWindow.webContents.send('mousemove', e - this.windowBounds.x, i - this.windowBounds.y),
        this.dbCmp.allDocs('/', 'panelcmd/').then(e => {
          if (!this.voiceWindow.isVisible()) return;
          const t = Array.from(new Set(e.map(e => e.cmd.toLowerCase())));
          this.voiceWindow.webContents.executeJavaScript(`window.showInit(${JSON.stringify({ payload: n, panelTextCmds: t, useVoice: this._useVoice })})`);
        });
    }
    triggerMove(e, i) {
      if (this.windowCmp.isWindow) {
        const n = t.screen.screenToDipPoint({ x: e, y: i });
        (e = Math.round(n.x)), (i = Math.round(n.y));
      } else this.windowCmp.isLinux && this._displayScaleFactor > 1 && ((e = Math.round(e / this._displayScaleFactor)), (i = Math.round(i / this._displayScaleFactor)));
      (this.cursorPoint.x = e),
        (this.cursorPoint.y = i),
        e >= this.windowBounds.x + this.config.borderWidth &&
        e <= this.windowBounds.x + this.windowBounds.width - this.config.borderWidth &&
        i >= this.windowBounds.y + this.config.borderWidth &&
        i <= this.windowBounds.y + this.windowBounds.height - this.config.borderWidth
          ? (this.pointerInWindow || (this.pointerInWindow = !0), this.voiceWindow.webContents.send('mousemove', e - this.windowBounds.x, i - this.windowBounds.y))
          : this.pointerInWindow && ((this.pointerInWindow = !1), this.voiceWindow.webContents.send('mouseout'));
    }
    handleNativeMouseUp() {
      this.voiceWindow.isVisible() &&
        (this.pointerInWindow
          ? ((this.pointerInWindow = !1),
            this.voiceWindow.webContents.executeJavaScript('window.holdUp()').then(e => {
              e &&
                (this.windowCmp.isLinux || this.voiceWindow.setFocusable(!0),
                (this._voiceWindowShowTimeStamp = Date.now()),
                this.voiceWindow.show(),
                this.windowCmp.isWindow &&
                  ie().focusShowWindow(this.voiceWindow.getNativeWindowHandle(), () => {
                    this.voiceWindow.show();
                  }));
            }))
          : this.triggerEmpty());
    }
    triggerHide(e) {
      this.windowCmp.isMacOs
        ? e
          ? this.voiceWindow.hide()
          : (t.app.hide(), this.voiceWindow.hide(), t.app.show())
        : this.windowCmp.isWindow
        ? (this.voiceWindow.hide(), !e && this.windowCmp.display.nativeWorkWindowInfo && ie().restorePrevWindowFocus(this.windowCmp.display.nativeWorkWindowInfo.id))
        : this.voiceWindow.hide(),
        e && !this.windowCmp.mainWindow.isVisible() && this.windowCmp.display.trigger(!0, !0);
    }
    triggerEmpty() {
      (this.pointerInWindow = !1), this.voiceWindow.isVisible() && this.voiceWindow.hide();
    }
    nativeVoicePanelTrigger(e, t, i) {
      switch (e) {
        case 1:
          setImmediate(() => {
            this.triggerShow(t, i);
          });
          break;
        case 2:
          this.triggerMove(t, i);
          break;
        case 3:
          setImmediate(() => {
            this.handleNativeMouseUp();
          });
          break;
        case 7:
          this._mouseLongDownTimeout && clearTimeout(this._mouseLongDownTimeout),
            this.voiceWindow.isVisible() && this.triggerEmpty(),
            (this._mouseLongDownTimeout = setTimeout(() => {
              (this._mouseLongDownTimeout = null), ie().triggerMouseLongDown() && this.triggerShow(t, i);
            }, this._longDownTriggerMS));
          break;
        case 8:
          this.triggerMove(t, i);
          break;
        case 9:
          if (this._mouseLongDownTimeout) {
            clearTimeout(this._mouseLongDownTimeout), (this._mouseLongDownTimeout = null);
            break;
          }
          setImmediate(() => {
            this.handleNativeMouseUp();
          });
          break;
        case 0:
          this._mouseLongDownTimeout && (clearTimeout(this._mouseLongDownTimeout), (this._mouseLongDownTimeout = null)),
            setImmediate(() => {
              this.triggerEmpty();
            });
      }
    }
    setWindowBounds(e, i) {
      if (!this.voiceWindow.isVisible()) return;
      const n = this.config.initContentHeight + 2 * this.config.borderWidth + e,
        s = 'number' == typeof i;
      if (s) {
        const e = this.cursorPoint.x - ((this.windowBounds.width / 2) | 0),
          s = this.cursorPoint.y - i;
        if (n === this.windowBounds.height && e === this.windowBounds.x && s === this.windowBounds.y) return;
        (this.windowBounds.height = n),
          (this.windowBounds.x = e),
          (this.windowBounds.y = s),
          (this.workedDisplay = t.screen.getDisplayNearestPoint({ x: this.cursorPoint.x, y: this.cursorPoint.y })),
          e < this.workedDisplay.bounds.x
            ? (this.windowBounds.x = this.workedDisplay.bounds.x)
            : e + this.windowBounds.width > this.workedDisplay.bounds.x + this.workedDisplay.bounds.width &&
              (this.windowBounds.x = this.workedDisplay.bounds.x + this.workedDisplay.bounds.width - this.windowBounds.width);
      } else {
        if (this.windowBounds.height === n) return;
        !1 === i && (this.windowBounds.y = this.windowBounds.y + this.windowBounds.height - n), (this.windowBounds.height = n);
      }
      if (!1 !== i)
        if (this.windowBounds.y + this.windowBounds.height > this.workedDisplay.bounds.y + this.workedDisplay.bounds.height) {
          let e;
          (e = s
            ? this.windowBounds.y - this.windowBounds.height + 2 * i
            : this.windowBounds.y - this.windowBounds.height + this.config.initContentHeight + 2 * this.config.borderWidth),
            e < this.windowBounds.y
              ? ((this.windowBounds.y = e), this.voiceWindow.webContents.send('changeDirection', !1))
              : this.voiceWindow.webContents.send('changeDirection', !0);
        } else this.voiceWindow.webContents.send('changeDirection', !0);
      this.voiceWindow.setMinimumSize(this.windowBounds.width, this.windowBounds.height),
        this.voiceWindow.setMaximumSize(this.windowBounds.width, this.windowBounds.height),
        this.voiceWindow.setBounds(this.windowBounds),
        s && this.voiceWindow.webContents.send('mousemove', this.cursorPoint.x - this.windowBounds.x, this.cursorPoint.y - this.windowBounds.y);
    }
    initVoiceWindow() {
      (this.voiceWindow = new t.BrowserWindow({
        resizable: !0,
        focusable: this.windowCmp.isLinux,
        fullscreenable: !1,
        minimizable: !1,
        maximizable: !1,
        alwaysOnTop: !0,
        show: !1,
        width: this.windowBounds.width,
        height: this.windowBounds.height,
        backgroundColor: this.windowCmp.windowBackgroundColor,
        frame: !1,
        enableLargerThanScreen: !0,
        skipTaskbar: !0,
        autoHideMenuBar: !0,
        type: this.windowCmp.isLinux && 'ubuntu' === this.windowCmp.osName ? 'dock' : 'toolbar',
        webPreferences: {
          devTools: this.windowCmp.isDev,
          nodeIntegration: !1,
          enableRemoteModule: !0,
          backgroundThrottling: !1,
          partition: 'persist:<utools>',
          navigateOnDragDrop: !1,
          spellcheck: !1,
          preload: c().join(__dirname, 'preload.js'),
        },
      })),
        this.voiceWindow.removeMenu(),
        this.voiceWindow.setAlwaysOnTop(!0, 'screen-saver'),
        this.voiceWindow.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
        this.voiceWindow.loadURL('file://' + c().join(__dirname, 'voice.html')),
        this.voiceWindow.webContents.once('dom-ready', () => {
          this.config.borderWidth > 0 &&
            this.voiceWindow.webContents.insertCSS(`.voice-panel, .voice-panel-reverse { border-style: solid; border-width: ${this.config.borderWidth}px; }`),
            ie().voicePanelTriggerEvent(this.nativeVoicePanelTrigger, this._triggerWay);
        }),
        this.voiceWindow.webContents.once('crashed', () => {
          this.disableVoicePanel();
        }),
        this.voiceWindow.on('blur', () => {
          Date.now() - this._voiceWindowShowTimeStamp < 50
            ? this.windowCmp.isWindow
              ? ie().focusShowWindow(this.voiceWindow.getNativeWindowHandle(), () => {
                  this.voiceWindow.show();
                })
              : this.voiceWindow.show()
            : this.triggerEmpty();
        }),
        this.voiceWindow.on('hide', () => {
          this.windowCmp.isLinux || this.voiceWindow.setFocusable(!1), this.voiceWindow.webContents.executeJavaScript('window.empty()');
        });
    }
    registerGlobalService() {
      (global.services.voice = {
        getXFAuthStr: e => {
          if (!this.voiceWindow) return;
          const t = `api_key="49a3c546cf95f60b1b752125bc12650d", algorithm="hmac-sha256", headers="host date request-line", signature="${ie()
            .xfSignature(`host: iat-api.xfyun.cn\ndate: ${e}\nGET /v2/iat HTTP/1.1`)
            .toString('base64')}"`;
          return Buffer.from(t).toString('base64');
        },
        setWindowBounds: (e, t) => {
          this.voiceWindow && this.setWindowBounds(e, t);
        },
        triggerHide: e => {
          this.voiceWindow && this.triggerHide(e);
        },
        isSimulateCopyForClipboardUpdate: () => ie().getClipboardChangeCount() > this._simulateCopyClipboardChangeCount,
        enterPlugin: (e, t) => {
          this.voiceWindow &&
            this.windowCmp.executeJavaScript(this.windowCmp.mainWindow.webContents, `window.rpcRenderer.setEnterFeatureCmd(${JSON.stringify(e)})`).then(() => {
              this.windowCmp.enterPlugin(e.pluginId, e.featureCode, t);
            });
        },
        voiceInput: e => {
          this.windowCmp.reportCmp.info('voice.input'),
            this.windowCmp.clipboardWatch.temporaryCancelWatch(),
            t.clipboard.writeText(e),
            this.windowCmp.isMacOs ? ie().simulateKeyboardTap('v', 'command') : ie().simulateKeyboardTap('v', 'ctrl');
        },
        getPinyin: e => O(e),
        mainAutoCmdSearch: e => {
          this.windowCmp.executeJavaScript(this.windowCmp.mainWindow.webContents, `window.rpcRenderer.autoCmdSearch(${JSON.stringify(e)})`).then(() => {
            this.windowCmp.display.trigger(!0, !0);
          });
        },
        translate: (e, t) => {
          const i = this.windowCmp.accountCmp.getAccountToken();
          p(this.config.translateURL, 'body=' + encodeURIComponent(e) + '&mid=' + this.windowCmp.reportCmp.machineId + (i ? '&access_token=' + i : ''), t);
        },
        copyText: e => {
          t.clipboard.writeText(e);
        },
      }),
        (global.services.voicePreferences = {
          isEnableVoicePanel: () => this.isEnableVoicePanel(),
          enableVoicePanel: e => {
            if (e) {
              n().set('enableVoicePanel', !0), this.enableVoicePanel();
              const e = this.windowCmp.accountCmp.getAccountInfo();
              e && this.windowCmp.voiceChangeAccount(e);
            } else n().set('enableVoicePanel', !1), this.disableVoicePanel();
          },
          getVoicePanelSetting: () => ({ useVoice: this._useVoice, triggerWay: this._triggerWay, longDownTriggerMS: this._longDownTriggerMS }),
          getVoicePanelCustomCmds: async () => await this.dbCmp.allDocs('/', 'panelcmd/'),
          putVoicePanelCustomCmds: async e => {
            e._id.startsWith('panelcmd/') && (await this.dbCmp.put('/', e));
          },
          changeVoicePanelUseVoice: e => {
            e ? (n().delete('voicePanelUseVoice'), (this._useVoice = !0)) : (n().set('voicePanelUseVoice', !1), (this._useVoice = !1));
          },
          changeVoicePanelTriggerWay: e => {
            this.isTriggerWayNumberValue(e) &&
              ((this._triggerWay = e),
              n().set('voicePanelTriggerWay', this._triggerWay),
              ie().stopVoicePanelTriggerEvent(),
              ie().voicePanelTriggerEvent(this.nativeVoicePanelTrigger, this._triggerWay));
          },
          changeVoicePanelLongDownTriggerMS: e => {
            !e || 'number' != typeof e || e < 200 || e > 400 || (n().set('voicePanelLongDownTriggerMS', e), (this._longDownTriggerMS = e));
          },
        });
    }
  }
  const Te = require('chokidar');
  var Fe = e.n(Te);
  const Me = {
      addlocalopen: {
        func: (e, t, i) => {
          e.appCmp.addLocalOpen(i.map(e => e.path));
        },
      },
      saveimage: {
        feature: { code: 'saveimage', explain: '保存为图片文件', icon: 'res/native/imgfile.png', cmds: [{ type: 'img', label: '保存为文件' }] },
        func: (e, i, n) => {
          if ((e.windowCmp.hideMainWindow(), !/^data:image\/([a-z]+);base64,/.test(n))) return;
          const s = RegExp.$1,
            o = c().join(t.app.getPath('downloads'), 'uTools_' + Date.now() + '.' + s);
          W().writeFile(o, n.replace(/^data:image\/([a-z]+);base64,/, ''), 'base64', e => {
            e || t.shell.showItemInFolder(o);
          });
        },
      },
      showfolder: {
        feature: {
          code: 'showfolder',
          explain: '前往文件夹',
          icon: 'res/native/folderopen.svg',
          cmds: [{ type: 'regex', match: '/^(?:~?\\/[^/\\n\\r\\f\\v]+)+\\/?$/', label: '前往文件夹' }],
        },
        func: (e, i, n) => {
          (n = n.trim()).startsWith('~') && (n = n.replace('~', t.app.getPath('home'))),
            W().existsSync(n) || ((n = c().dirname(n)), W().existsSync(n))
              ? (e.windowCmp.hideMainWindow(!1), W().lstatSync(n).isFile() ? t.shell.showItemInFolder(n) : t.shell.openPath(n))
              : new t.Notification({ body: '文件、文件夹都不存在' }).show();
        },
      },
      copyfile: {
        feature: {
          code: 'copyfile',
          explain: '复制文件或文件夹到剪贴板',
          icon: 'res/native/clip.svg',
          cmds: [{ type: 'regex', match: '/^(?:\\/[^/\\n\\r\\f\\v]+)+\\/?$/m', maxLength: 5e3, label: '复制文件' }],
        },
        func: (e, i, n) => {
          const s = n
            .match(/^(?:\/[^/\n\r\f\v]+)+\/?$/gm)
            .map(e => e.trim())
            .filter(e => W().existsSync(e));
          0 !== s.length ? (e.windowCmp.hideMainWindow(), e.copyFile(s)) : new t.Notification({ body: '文件不存在' }).show();
        },
      },
      openitem: {
        feature: {
          code: 'openitem',
          explain: '系统默认方式打开文件',
          icon: 'res/native/openitem.png',
          cmds: [{ type: 'regex', match: '/^(?:~?\\/[^/\\n\\r\\f\\v]+)+\\.\\w{2,10}$/', label: '打开文件' }],
        },
        func: (e, i, n) => {
          (n = n.trim()).startsWith('~') && (n = n.replace('~', t.app.getPath('home'))),
            W().existsSync(n) ? (e.windowCmp.hideMainWindow(!1), t.shell.openPath(n)) : new t.Notification({ body: '文件不存在' }).show();
        },
      },
      openweburl: {
        feature: {
          code: 'openweburl',
          explain: '默认浏览器打开网址',
          icon: 'res/native/link.svg',
          cmds: [
            {
              type: 'regex',
              match:
                '/^(?:https?:\\/\\/)?(?:localhost|(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3})|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$/i',
              label: '打开网址',
            },
          ],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(!1), /^https?:\/\//.test(n) ? t.shell.openExternal(n) : t.shell.openExternal('https://' + n);
        },
      },
      copyfilepath: {
        feature: { code: 'copyfilepath', explain: '复制路径', icon: 'res/native/link.svg', cmds: [{ type: 'files', label: '复制路径' }] },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(), t.clipboard.writeText(n.map(e => e.path).join('\n'));
        },
      },
      finder_copy_current_path: {
        feature: {
          code: 'finder_copy_current_path',
          explain: '复制当前目录路径',
          icon: 'res/native/link.svg',
          cmds: [{ type: 'window', match: { app: 'Finder.app' }, label: '复制当前路径' }],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow();
          const s = e.appCmp.getCurrentFolderPath();
          s && t.clipboard.writeText(s);
        },
      },
      finder_new_file: {
        feature: {
          code: 'finder_new_file',
          explain: '在当前目录新建文件',
          icon: 'res/native/newfile.png',
          cmds: [{ type: 'window', match: { app: 'Finder.app' }, label: '新建文件' }],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(),
            e
              .runOSAScript(
                `tell application "Finder"\n        set dir_path to ${
                  n.id ? 'the folder of the front window as alias' : '(path to desktop)'
                }\n        display dialog "新建文件" default answer "未命名"\n        set file_name to the text returned of result\n        set full_file_name to make new file at dir_path with properties {name: file_name}\n        set extension hidden of full_file_name to false\n        end tell`,
                !1
              )
              .catch(e => {
                128 !== e.code && new t.Notification({ body: e.message }).show();
              });
        },
      },
    },
    Ae = [
      { code: 'call:systemAction lock', icon: 'res/native/lock.png', explain: '电脑锁屏', cmds: ['锁屏', 'Lock'] },
      { code: 'call:systemAction logout', icon: 'res/native/logout.png', explain: '当前操作系统账号注销', cmds: ['注销', 'Logout'] },
      { code: 'call:systemAction restart', icon: 'res/native/reboot.png', explain: '电脑重启', cmds: ['重启', 'Restart'] },
      { code: 'call:systemAction sleep', icon: 'res/native/sleep.png', explain: '电脑睡眠', cmds: ['睡眠', 'Sleep'] },
      { code: 'call:systemAction shutdown', icon: 'res/native/shutdown.png', explain: '电脑关机', cmds: ['关机', 'Shutdown'] },
      { code: 'call:showDesktop', icon: 'res/native/desktop.png', explain: '显示桌面', cmds: ['显示桌面', 'Show Desktop'] },
      { code: 'call:emptyTrash', icon: 'res/native/empty.png', explain: '清倒废纸篓', cmds: ['清倒废纸篓', 'Empty Trash'] },
      { code: 'call:screenCapture', icon: 'res/native/screenshot.png', explain: '屏幕截图', cmds: ['截图'] },
      { code: 'call:screenshotWorkWindow', icon: 'res/native/camera.png', explain: '当前活动窗口截图', cmds: ['窗口截图'] },
      { code: 'call:screenColorPicker', icon: 'res/native/picker.png', explain: '屏幕颜色拾取', cmds: ['取色', '拾色', 'Pick Color'] },
      { code: 'call:screenCaptureShowUTools', icon: 'res/native/screenshot.png', explain: '截图完呼出 uTools', cmds: ['截图完呼出 uTools'] },
      { code: 'call:simulateCopyShowUTools', icon: 'res/native/keyboard-c.png', explain: '模拟执行复制后呼出 uTools', cmds: ['执行复制后呼出 uTools'] },
    ];
  class Ee {
    constructor(e, t, i, n, s) {
      (this.pluginsCmp = e), (this.windowCmp = t), (this.reportCmp = i), (this.screenColorPickerCmp = n), (this.appCmp = s);
    }
    adapterOldVersion() {
      setImmediate(() => {
        const e = [];
        if (n().has('nativeExtendApp')) {
          let t = n().get('nativeExtendApp');
          Array.isArray(t) && ((t = t.filter(e => W().existsSync(e))), t.length > 0 && e.push(...t)), n().delete('nativeExtendApp');
        }
        if (n().has('nativeExtendDir')) {
          const t = n().get('nativeExtendDir');
          if (W().existsSync(t)) {
            const i = [];
            this.dirAppRead('.app', t, 1, 0, i), i.length > 0 && e.push(...i);
          }
          n().delete('nativeExtendDir');
        }
        e.length > 0 && this.appCmp.addLocalOpen(e);
      });
    }
    init() {
      n().has('enableNativeApp') || n().set('enableNativeApp', !0),
        this.registerGlobalService(),
        setImmediate(() => {
          this.initFeatures(), this.adapterOldVersion();
        });
    }
    convertAppFeature(e) {
      const t = {},
        i = ie().getAppLocalName(e),
        n = c().parse(e).name;
      if (i)
        if (i.includes('\n')) {
          const e = i.split('\n');
          e[1].includes(e[0]) ? (t.cmds = [e[1]]) : (t.cmds = e.reverse());
        } else n === i || i.startsWith('${') ? (t.cmds = [n]) : i.includes(n) ? (t.cmds = [i]) : (t.cmds = [i, n]);
      else t.cmds = [n];
      return (t.code = e), (t.explain = e), (t.icon = 'nativeicon://' + e), t;
    }
    dirAppRead(e, t, i, n, s) {
      let o = null;
      try {
        if (!W().existsSync(t)) return;
        o = W().readdirSync(t);
      } catch (e) {
        return;
      }
      if (0 !== o.length)
        for (const r of o) {
          const o = c().join(t, r),
            a = W().lstatSync(o);
          a.isDirectory() ? (c().extname(o) === e ? s.push(o) : n < i && this.dirAppRead(e, o, i, n + 1, s)) : a.isSymbolicLink() && '.app' === c().extname(o) && s.push(o);
        }
    }
    dirAppWatch(e, t) {
      return Fe()
        .watch(e, { persistent: !0, ignoreInitial: !0, ignorePermissionErrors: !0, followSymlinks: !1, disableGlobbing: !0, depth: t, ignored: /\.app\/.*|\/\../ })
        .on('addDir', e => {
          /\.app$/.test(e) &&
            setTimeout(() => {
              W().existsSync(e) && (this.pluginsCmp.setFeature('', this.convertAppFeature(e)), this.windowCmp.refreshCmdSource());
            }, 1e4);
        })
        .on('unlinkDir', e => {
          /\.app$/.test(e) && e in this.pluginsCmp.pluginContainer[''].featureDic && (delete this.pluginsCmp.pluginContainer[''].featureDic[e], this.windowCmp.refreshCmdSource());
        });
    }
    setBaseAppFeatures() {
      const e = [];
      this.dirAppRead('.app', '/Applications', 1, 0, e);
      const t = e.find(e => e.endsWith('uTools.app'));
      t && e.splice(e.indexOf(t), 1),
        this.dirAppRead('.app', '/System/Applications', 1, 0, e),
        ['Terminal', 'Visual Studio Code'].forEach(t => {
          const i = e.find(e => e.endsWith(t + '.app'));
          i &&
            ((Me['path_open_to_' + t] = {
              func: (e, i, n) => {
                e.windowCmp.hideMainWindow(!1);
                const s = this.appCmp.getCurrentFolderPath();
                s && Z().spawn('open', ['-a', `"${t}"`, `"${s}"`], { detached: !0, shell: !0 });
              },
            }),
            this.pluginsCmp.setFeature('', {
              code: 'path_open_to_' + t,
              explain: ('Terminal' === t ? '终端' : t) + ' 中打开',
              icon: 'nativeicon://' + i,
              cmds: [{ type: 'window', match: { app: 'Finder.app' }, label: ('Terminal' === t ? '终端' : t) + ' 中打开' }],
            }));
        }),
        this.dirAppRead('.prefPane', '/System/Library/PreferencePanes', 0, 0, e),
        this.dirAppRead('.app', process.env.HOME + '/Applications', 1, 0, e),
        this.dirAppRead('.app', '/System/Library/CoreServices/Applications', 0, 0, e),
        ['Finder.app', 'Paired Devices.app', 'Ticket Viewer.app'].forEach(t => {
          const i = c().join('/System/Library/CoreServices', t);
          W().existsSync(i) && e.push(i);
        }),
        e
          .map(e => this.convertAppFeature(e))
          .forEach(e => {
            this.pluginsCmp.setFeature('', e);
          }),
        (this.baseAppDirWatch = this.dirAppWatch(['/Applications', process.env.HOME + '/Applications'], 1));
    }
    setMatchAppFeatures() {
      Object.values(Me).forEach(e => {
        e.feature && this.pluginsCmp.setFeature('', e.feature);
      });
    }
    setActionAppFeatures() {
      Ae.forEach(e => {
        e.icon || (e.icon = 'res/native/symbolic.svg'), this.pluginsCmp.setFeature('', e);
      });
    }
    initFeatures() {
      this.baseAppDirWatch && (this.baseAppDirWatch.close(), delete this.baseAppDirWatch),
        (this.pluginsCmp.pluginContainer[''] = { name: '', pluginName: '', logo: 'res/logo.png', featureDic: {} }),
        this.pluginsCmp.setFeature('', { code: 'call:goHelp', icon: 'res/native/help.png', explain: 'uTools 帮助文档', cmds: ['Help', '帮助'] }),
        this.pluginsCmp.setFeature('', { code: 'call:killAllPlugin', icon: 'res/native/clear.svg', explain: 'uTools 后台插件全部退出', cmds: ['Clear'] }),
        this.setMatchAppFeatures(),
        this.setActionAppFeatures(),
        n().get('enableNativeApp') &&
          (this.pluginsCmp.setFeature('', {
            code: 'addlocalopen',
            explain: '加入到 uTools 搜索启动',
            icon: 'res/native/add.svg',
            cmds: [{ type: 'files', maxLength: 1, label: '加入到 uTools 搜索启动' }],
          }),
          this.setBaseAppFeatures()),
        this.appCmp.initLocalOpenFeatures().then(() => {
          this.windowCmp.refreshCmdSource();
        });
    }
    runOSAScript(e, i = !0) {
      return new Promise((n, s) => {
        let o = '',
          r = '';
        const a = Z().spawn('osascript', ['-ss'], { detached: !0 });
        a.on('close', e => {
          if (0 === e) return n(r.trim());
          if (
            ((o = o
              .trim()
              .replace(/^\d+:\d+: execution error:/, '')
              .replace(/\(-?(\d+)\)\s*$/, '')),
            i)
          )
            new t.Notification({ body: o }).show();
          else {
            const t = new Error(o);
            (t.code = parseInt(RegExp.$1 || e)), s(t);
          }
        }),
          a.stderr.on('data', e => {
            o += e;
          }),
          a.stdout.on('data', e => {
            r += e;
          }),
          a.stdin.write(e),
          a.stdin.end();
      });
    }
    systemAction(e) {
      if (['shutdown', 'restart', 'logout'].includes(e)) {
        const i = { shutdown: '关机', restart: '重启', logout: '注销' }[e];
        0 ===
          t.dialog.showMessageBoxSync({
            icon: t.nativeImage.createFromPath(c().join(__dirname, this.pluginsCmp.pluginContainer[''].featureDic['call:systemAction ' + e].icon)),
            buttons: [i, '取消'],
            message: '确定要' + i + '?',
            defaultId: 0,
            cancelId: 1,
          }) && ie().macAction(e);
      } else this.windowCmp.hideMainWindow(!1), ie().macAction(e);
    }
    copyFile(e) {
      Array.isArray(e) || (e = [e]), 0 !== (e = e.filter(e => W().existsSync(e))).length && ie().copyFile.apply(null, e);
    }
    goHelp() {
      this.windowCmp.hideMainWindow(!1), this.appCmp.goHelp();
    }
    killAllPlugin() {
      this.windowCmp.killAllPlugins();
    }
    screenshotWorkWindow() {
      const e = this.windowCmp.display.nativeWorkWindowInfo;
      e &&
        (this.windowCmp.hideMainWindow(),
        setTimeout(() => {
          const i = ie().screenshotWindow(e.id);
          i
            ? (t.clipboard.writeImage(t.nativeImage.createFromBuffer(Buffer.from(i, 'base64'))), new t.Notification({ body: '窗口照相已复制到剪贴板' }).show())
            : new t.Notification({ body: '窗口截图失败，安全性与隐私中允许屏幕录制权限再尝试' }).show();
        }, 100));
    }
    screenColorPicker() {
      this.screenColorPickerCmp.do(({ hex: e }) => {
        new t.Notification({ body: '颜色 ' + e + ' 已复制到剪贴板' }).show();
      });
    }
    showDesktop() {
      this.windowCmp.hideMainWindow(!1);
      const e = '/System/Applications/Mission Control.app/Contents/MacOS/Mission Control';
      W().existsSync(e) ? Z().spawn(e, ['1'], { detached: !0 }) : Z().spawn(e.replace('/System', ''), ['1'], { detached: !0 });
    }
    emptyTrash() {
      this.windowCmp.hideMainWindow(), this.runOSAScript('tell application "Finder"\n      set warns before emptying of trash to false\n      empty trash\n    end tell');
    }
    screenCapture() {
      this.windowCmp.hideMainWindow(), Z().spawn('/usr/sbin/screencapture', ['-c', '-i', '-r'], { detached: !0 });
    }
    screenCaptureShowUTools() {
      this.windowCmp.hideMainWindow(),
        Z()
          .spawn('/usr/sbin/screencapture', ['-c', '-i', '-r'], { detached: !0 })
          .once('close', () => {
            setTimeout(() => {
              this.windowCmp.display.trigger();
            }, 250);
          });
    }
    simulateCopyShowUTools() {
      this.windowCmp.hideMainWindow(),
        ie().simulateKeyboardTap('c', 'command'),
        setTimeout(() => {
          this.windowCmp.display.trigger();
        }, 250);
    }
    registerGlobalService() {
      global.services.native = {
        open: (e, i) => {
          if ((this.reportCmp.info('native.open', { way: i }), e.startsWith('call:'))) {
            const t = e.replace('call:', '').split(/ +/g),
              i = t.shift();
            'function' == typeof this[i] && this[i].apply(this, t);
          } else if (W().existsSync(e)) {
            if ((this.windowCmp.hideMainWindow(!1), /\.sh$/i.test(e)))
              try {
                return W().accessSync(e, W().constants.X_OK), void Z().spawn(e, { detached: !0 });
              } catch (e) {}
            else if (/.scpt$/i.test(e) && W().lstatSync(e).isFile()) return void Z().spawn('osascript', [e], { detached: !0 });
            t.shell.openPath(e);
          } else new t.Notification({ body: '文件不存在，打开失败' }).show(), delete this.pluginsCmp.pluginContainer[''].featureDic[e], this.windowCmp.refreshCmdSource();
        },
        matchCall: (e, t, i, n) => {
          if ((this.reportCmp.info('native.open', { way: n }), e in Me))
            try {
              Me[e].func(this, t, i);
            } catch (e) {}
        },
        settingEnableNativeApp: e => {
          n().set('enableNativeApp', !0 === e),
            setImmediate(() => {
              this.initFeatures();
            });
        },
      };
    }
  }
  const Be = [
      { code: 'ms-settings:about', cmds: ['电脑信息'] },
      { code: 'ms-settings:display', cmds: ['显示器设置'] },
      { code: 'ms-settings:storagesense', cmds: ['存储设置'] },
      { code: 'ms-settings:quietmomentshome', cmds: ['专注助手设置'] },
      { code: 'ms-settings:multitasking', cmds: ['多任务设置'] },
      { code: 'ms-settings:project', cmds: ['投影到此电脑设置'] },
      { code: 'ms-settings:crossdevice', cmds: ['共享体验设置'] },
      { code: 'ms-settings:tabletmode', cmds: ['平板模式设置'] },
      { code: 'ms-settings:taskbar', cmds: ['任务栏设置'] },
      { code: 'ms-settings:notifications', cmds: ['通知和操作设置'] },
      { code: 'ms-settings:remotedesktop', cmds: ['远程桌面设置'] },
      { code: 'ms-settings:powersleep', cmds: ['电源和睡眠设置'] },
      { code: 'ms-settings:sound', cmds: ['声音播放设置'] },
      { code: 'ms-settings:workplace', cmds: ['访问工作单位或学校'] },
      { code: 'ms-settings:emailandaccounts', cmds: ['你的电子邮件和应用账户设置'] },
      { code: 'ms-settings:otherusers', cmds: ['家庭成员使用此电脑设置'] },
      { code: 'ms-settings:signinoptions', cmds: ['登录选项设置'] },
      { code: 'ms-settings:sync', cmds: ['同步个性化设置'] },
      { code: 'ms-settings:yourinfo', cmds: ['账户设置'] },
      { code: 'ms-settings:appsfeatures', cmds: ['应用和功能', '程序和功能'] },
      { code: 'ms-settings:appsforwebsites', cmds: ['网站选择默认应用设置'] },
      { code: 'ms-settings:defaultapps', cmds: ['默认应用设置'] },
      { code: 'ms-settings:maps', cmds: ['离线地图设置'] },
      { code: 'ms-settings:startupapps', cmds: ['开机启动设置'] },
      { code: 'ms-settings:videoplayback', cmds: ['视频播放设置'] },
      { code: 'ms-settings:autoplay', cmds: ['自动播放设置'] },
      { code: 'ms-settings:bluetooth', cmds: ['蓝牙或其他设备设置'] },
      { code: 'ms-settings:mousetouchpad', cmds: ['鼠标设置', '触摸板设置'] },
      { code: 'ms-settings:pen', cmds: ['笔设置'] },
      { code: 'ms-settings:printers', cmds: ['打印机或扫描仪设置'] },
      { code: 'ms-settings:typing', cmds: ['输入设置'] },
      { code: 'ms-settings:usb', cmds: ['USB设置'] },
      { code: 'ms-settings:easeofaccess-audio', cmds: ['音频设置'] },
      { code: 'ms-settings:easeofaccess-closedcaptioning', cmds: ['隐藏式字幕设置'] },
      { code: 'ms-settings:easeofaccess-colorfilter', cmds: ['颜色滤镜设置'] },
      { code: 'ms-settings:easeofaccess-display', cmds: ['显示设置'] },
      { code: 'ms-settings:easeofaccess-highcontrast', cmds: ['高对比度设置'] },
      { code: 'ms-settings:easeofaccess-keyboard', cmds: ['键盘设置'] },
      { code: 'ms-settings:easeofaccess-magnifier', cmds: ['放大镜设置'] },
      { code: 'ms-settings:easeofaccess-mouse', cmds: ['键盘控制鼠标设置'] },
      { code: 'ms-settings:easeofaccess-narrator', cmds: ['讲述人设置'] },
      { code: 'ms-settings:easeofaccess-speechrecognition', cmds: ['语音交互设置'] },
      { code: 'ms-settings:fonts', cmds: ['字体设置'] },
      { code: 'ms-settings:datausage', cmds: ['网络流量使用情况'] },
      { code: 'ms-settings:network-dialup', cmds: ['网络拨号设置'] },
      { code: 'ms-settings:network-ethernet', cmds: ['以太网设置'] },
      { code: 'ms-settings:network-proxy', cmds: ['网络代理设置'] },
      { code: 'ms-settings:network-status', cmds: ['网络设置'] },
      { code: 'ms-settings:network-vpn', cmds: ['VPN设置'] },
      { code: 'ms-settings:personalization-background', cmds: ['桌面背景设置'] },
      { code: 'ms-settings:personalization-colors', cmds: ['系统颜色设置'] },
      { code: 'ms-settings:lockscreen', cmds: ['锁屏界面设置'] },
      { code: 'ms-settings:personalization-start', cmds: ['开始菜单设置'] },
      { code: 'ms-settings:themes', cmds: ['主题设置'] },
      { code: 'ms-settings:privacy', cmds: ['权限和隐私设置'] },
      { code: 'ms-settings:dateandtime', cmds: ['日期和时间设置'] },
      { code: 'ms-settings:regionlanguage', cmds: ['区域和语言设置'] },
      { code: 'ms-settings:speech', cmds: ['语音设置'] },
      { code: 'ms-settings:activation', cmds: ['系统激活设置'] },
      { code: 'ms-settings:backup', cmds: ['备份设置'] },
      { code: 'ms-settings:findmydevice', cmds: ['查找我的设备'] },
      { code: 'ms-settings:developers', cmds: ['开发者选项设置'] },
      { code: 'ms-settings:recovery', cmds: ['系统恢复设置'] },
      { code: 'ms-settings:troubleshoot', cmds: ['疑难解答'] },
      { code: 'ms-settings:windowsdefender', cmds: ['安全设置'] },
      { code: 'ms-settings:windowsupdate-action', cmds: ['检测系统更新'] },
    ],
    Le = {
      addlocalopen: {
        func: (e, t, i) => {
          e.appCmp.addLocalOpen(i.map(e => e.path));
        },
      },
      saveimage: {
        feature: { code: 'saveimage', explain: '保存为图片文件', icon: 'res/native/imgfile.png', cmds: [{ type: 'img', label: '保存为文件' }] },
        func: (e, i, n) => {
          if ((e.windowCmp.hideMainWindow(), !/^data:image\/([a-z]+);base64,/.test(n))) return;
          const s = RegExp.$1,
            o = c().join(t.app.getPath('downloads'), 'uTools_' + Date.now() + '.' + s);
          W().writeFile(o, n.replace(/^data:image\/([a-z]+);base64,/, ''), 'base64', e => {
            e || t.shell.showItemInFolder(o);
          });
        },
      },
      showfolder: {
        feature: {
          code: 'showfolder',
          explain: '前往文件夹',
          icon: 'res/native/folderopen.svg',
          cmds: [{ type: 'regex', match: '/^[C-Zc-z]:(?:\\\\|\\/\\/?)[^:*?"<>|\\f\\n\\r\\t\\v]*$/', label: '前往文件夹' }],
        },
        func: (e, i, n) => {
          if (((n = n.trim()), !W().existsSync(n) && ((n = c().dirname(n)), !W().existsSync(n)))) return void new t.Notification({ body: '文件、文件夹都不存在' }).show();
          e.windowCmp.hideMainWindow(!1);
          let s = !0;
          try {
            s = W().lstatSync(n).isFile();
          } catch (e) {}
          s ? t.shell.showItemInFolder(n) : t.shell.openPath(n);
        },
      },
      copyfile: {
        feature: {
          code: 'copyfile',
          explain: '复制文件或文件夹到剪贴板',
          icon: 'res/native/clip.svg',
          cmds: [{ type: 'regex', match: '/^[C-Zc-z]:(?:\\\\|\\/\\/?)[^:*?"<>|\\f\\n\\r\\t\\v]*$/m', maxLength: 5e3, label: '复制文件' }],
        },
        func: (e, i, n) => {
          const s = n
            .match(/^[C-Zc-z]:(?:\\|\/\/?)[^:*?"<>|\f\n\r\t\v]*$/gm)
            .map(e => e.trim())
            .filter(e => W().existsSync(e));
          0 !== s.length ? (e.windowCmp.hideMainWindow(), e.copyFile(s)) : new t.Notification({ body: '文件不存在' }).show();
        },
      },
      openitem: {
        feature: {
          code: 'openitem',
          explain: '系统默认方式打开文件',
          icon: 'res/native/openitem.png',
          cmds: [{ type: 'regex', match: '/^[C-Zc-z]:(?:\\\\|\\/\\/?)[^:*?"<>|\\f\\n\\r\\t\\v]*\\.\\w{2,10}$/', label: '打开文件' }],
        },
        func: (e, i, n) => {
          W().existsSync(n) ? (e.windowCmp.hideMainWindow(!1), t.shell.openPath(n)) : new t.Notification({ body: '文件不存在' }).show();
        },
      },
      openweburl: {
        feature: {
          code: 'openweburl',
          explain: '默认浏览器打开网址',
          icon: 'res/native/link.svg',
          cmds: [
            {
              type: 'regex',
              match:
                '/^(?:https?:\\/\\/)?(?:localhost|(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3})|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$/i',
              label: '打开网址',
            },
          ],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(!1), /^https?:\/\//.test(n) ? t.shell.openExternal(n) : t.shell.openExternal('https://' + n);
        },
      },
      copypath: {
        feature: { code: 'copypath', explain: '复制路径', icon: 'res/native/link.svg', cmds: [{ type: 'files', label: '复制路径' }] },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(), t.clipboard.writeText(n.map(e => e.path).join('\n'));
        },
      },
      filedialog_select_path: {
        feature: {
          code: 'filedialog_select_path',
          explain: '选择文件资源管理器当前路径',
          icon: 'res/native/rundll32.png',
          cmds: [{ type: 'window', match: { class: '#32770' }, label: '选择文件资源管理器当前路径' }],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow();
          const s = ie().getAllOpenedExplorerCurrentPath();
          if (0 === s.length) return;
          let o = [...new Set(s)];
          (o = o.filter(e => W().existsSync(e))), o.push('取消');
          const r = n.id;
          t.dialog.showMessageBox({ buttons: o, message: '选择文件资源管理器当前路径', defaultId: 0, cancelId: o.length - 1 }).then(({ response: i }) => {
            if (i === o.length - 1) return;
            const n = ie().getNativeWorkWindow();
            r === n.id &&
              (e.windowCmp.clipboardWatch.temporaryCancelWatch(),
              t.clipboard.writeText(o[i]),
              ie().simulateKeyboardTap('d', 'alt'),
              ie().simulateKeyboardTap('v', 'ctrl'),
              ie().simulateKeyboardTap('enter'));
          });
        },
      },
    },
    Oe = [
      { code: 'call:actionProcessSpawn rundll32.exe user32.dll,LockWorkStation', icon: 'res/native/lock.png', explain: '电脑锁屏', cmds: ['锁屏', 'Lock'] },
      { code: 'call:actionProcessSpawn rundll32.exe powrprof.dll,SetSuspendState 0,1,0', icon: 'res/native/sleep.png', explain: '电脑睡眠', cmds: ['睡眠', 'Sleep'] },
      { code: 'call:shutdown -l', icon: 'res/native/logout.png', explain: '当前操作系统账号注销', cmds: ['注销', 'Logout'] },
      { code: 'call:shutdown -r -t 00', icon: 'res/native/reboot.png', explain: '电脑重启', cmds: ['重启', 'Reboot'] },
      { code: 'call:shutdown -s -t 00', icon: 'res/native/shutdown.png', explain: '电脑关机', cmds: ['关机', 'Shutdown'] },
      {
        code: 'call:actionProcessSpawn explorer.exe shell:::{3080F90D-D7AD-11D9-BD98-0000947B0257}',
        icon: 'res/native/rundll32.png',
        explain: '桌面显示切换',
        cmds: ['显示桌面', 'Show Desktop'],
      },
      { code: 'call:mousePosWindowInfo', explain: '查看鼠标所在位置的窗口信息', cmds: ['查看鼠标所在位置的窗口信息'] },
      { code: 'call:screenColorPicker', icon: 'res/native/picker.png', explain: '屏幕颜色拾取', cmds: ['取色', '拾色', 'Pick Color'] },
      { code: 'call:screenCapture', icon: 'res/native/screenshot.png', explain: '屏幕截图', cmds: ['截图'] },
      { code: 'call:emptyRecycleBin', icon: 'res/native/recyclebin.png', explain: '清空回收站', cmds: ['清空回收站'] },
      { code: 'call:setNativeWindowAlwaysOnTop', icon: 'res/native/ontop.png', explain: '置顶当前应用窗口或取消置顶', cmds: ['置顶窗口'] },
      { code: 'call:screenCaptureShowUTools', icon: 'res/native/screenshot.png', explain: '截图完呼出 uTools', cmds: ['截图完呼出 uTools'] },
      { code: 'call:simulateCopyShowUTools', icon: 'res/native/keyboard-c.png', explain: '模拟执行复制后呼出 uTools', cmds: ['执行复制后呼出 uTools'] },
    ];
  class Ve {
    constructor(e, i, n, s, o) {
      (this.pluginsCmp = e),
        (this.windowCmp = i),
        (this.reportCmp = n),
        (this.screenColorPickerCmp = s),
        (this.appCmp = o),
        (this.osVersion = parseFloat(ee().release())),
        (this.systemAccentColor = '#' + t.systemPreferences.getAccentColor());
    }
    adapterOldVersion() {
      setImmediate(() => {
        const e = [];
        if (n().has('nativeExtendApp')) {
          let t = n().get('nativeExtendApp');
          Array.isArray(t) && ((t = t.filter(e => W().existsSync(e))), t.length > 0 && e.push(...t)), n().delete('nativeExtendApp');
        }
        if (n().has('nativeExtendDir')) {
          const t = n().get('nativeExtendDir');
          if (W().existsSync(t)) {
            const i = [];
            this.dirRead(t, 2, 0, i, !0), i.length > 0 && e.push(...i);
          }
          n().delete('nativeExtendDir');
        }
        e.length > 0 && this.appCmp.addLocalOpen(e);
      });
    }
    init() {
      n().has('enableNativeApp') || n().set('enableNativeApp', !0),
        this.registerGlobalService(),
        setImmediate(() => {
          this.initFeatures(), this.adapterOldVersion();
        });
    }
    dirRead(e, t, i, n, s) {
      if (!W().existsSync(e)) return;
      let o = [];
      try {
        o = W().readdirSync(e);
      } catch (e) {}
      if (0 !== o.length)
        for (const r of o) {
          const o = c().join(e, r);
          let a = !1;
          try {
            a = W().lstatSync(o).isDirectory();
          } catch (e) {}
          a
            ? i < t && this.dirRead(o, t, i + 1, n, s)
            : /\.lnk$/i.test(r) && ((!s && (r.toLowerCase().startsWith('uninstall') || r.startsWith('卸载') || r.toLowerCase().endsWith('卸载.lnk'))) || n.push(o));
        }
    }
    setLnkMatchFeature(e, i, n) {
      (Le['path_open_to' + e] = {
        func: (i, s, o) => {
          i.windowCmp.hideMainWindow(!1);
          const r = ie().getExplorerCurrentPath(o.id);
          if (r)
            if ('Visual Studio Code' !== e) {
              if ('PowerShell' === e)
                return r.includes("'")
                  ? void new t.Notification({ body: "路径包含特殊字符 '" }).show()
                  : void Z().spawn('start', ['powershell', '-noexit', '-command', `"Set-Location '${r}'"`], { shell: 'cmd.exe', detached: !0 });
              if ('CMD' === e) {
                if (/&|'|\^/.test(r)) return void new t.Notification({ body: "路径包含特殊字符 &'^" }).show();
                Z().spawn('start', ['cmd', '/k', `"cd /d ${r}"`], { shell: 'cmd.exe', detached: !0 });
              }
            } else Z().spawn(n, [r], { detached: !0 });
        },
      }),
        this.pluginsCmp.setFeature('', {
          code: 'path_open_to' + e,
          explain: e + ' 中打开',
          icon: i,
          cmds: [{ type: 'window', match: { app: 'explorer.exe', class: ['CabinetWClass', 'ExploreWClass'] }, label: e + ' 中打开' }],
        });
    }
    setLnkFeatures() {
      const e = [];
      this.dirRead(process.env.USERPROFILE + '\\Desktop', 0, 0, e),
        this.dirRead(process.env.ProgramData + '\\Microsoft\\Windows\\Start Menu', 3, 0, e),
        this.dirRead(process.env.APPDATA + '\\Microsoft\\Windows\\Start Menu', 3, 0, e);
      const t = ie().getLnksInfo.apply(null, e);
      if (!t) return [];
      (this.lnkNameTargetDic = {}),
        t.forEach(e => {
          void 0 !== e.target &&
            ((e.name = c().parse(e.path).name),
            ('' === e.target || ['.exe', '.msc', '.bat', '.ico'].includes(c().extname(e.target).toLowerCase())) && (this.lnkNameTargetDic[(e.name + e.target).toLowerCase()] = e));
        });
      const i = [];
      Object.values(this.lnkNameTargetDic).forEach(e => {
        const t = { code: e.path, explain: e.description || e.target || e.path, cmds: [e.name], icon: 'nativeicon://' + e.path };
        if ('' === e.target || 0 === e.target.indexOf('%')) {
          const i = ie().getLnkLocalName(e.path);
          i && e.name !== i && t.cmds.unshift(i);
        }
        if (0 === e.target.indexOf('%')) {
          let i = c().basename(e.target);
          ['cmd.exe', 'WF.msc'].includes(i) && ((i = c().parse(i).name), t.cmds.push(i), 'cmd' === i && this.setLnkMatchFeature('CMD', t.icon, e.target));
        }
        i.push(t),
          ['Visual Studio Code', 'Windows PowerShell'].includes(e.name) &&
            ('Windows PowerShell' === e.name ? this.setLnkMatchFeature('PowerShell', t.icon, e.target) : this.setLnkMatchFeature(e.name, t.icon, e.target));
      });
      const n = process.env.SystemRoot;
      [
        { code: n + '\\System32\\gpedit.msc', explain: '本地组策略编辑器', cmds: ['本地组策略编辑器'], icon: 'nativeicon://' + n + '\\System32\\gpedit.msc' },
        {
          code: n + '\\System32\\DisplaySwitch.exe',
          explain: '投影到第二屏幕',
          cmds: ['投影'],
          icon: 'nativeicon://' + n + '\\System32\\DisplaySwitch.exe',
          backgroundColor: this.systemAccentColor,
        },
        { code: n + '\\System32\\MRT.exe', explain: '恶意软件删除工具', cmds: ['恶意软件删除工具', 'MRT'], icon: 'nativeicon://' + n + '\\System32\\MRT.exe' },
      ].forEach(e => {
        W().existsSync(e.code) && i.push(e);
      }),
        [
          { code: 'call:processSpawn rundll32.exe sysdm.cpl,EditEnvironmentVariables', cmds: ['编辑用户环境变量'] },
          { code: 'call:processSpawn rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3', cmds: ['系统属性环境变量'] },
          { code: 'call:processSpawn rundll32.exe keymgr.dll,KRShowKeyMgr', cmds: ['存储的用户名和密码'] },
          { code: 'call:processSpawn rundll32.exe shell32.dll,Control_RunDLL appwiz.cpl,,0', cmds: ['卸载或更改程序'] },
          { code: 'call:processSpawn rundll32.exe devmgr.dll DeviceManager_Execute', cmds: ['设备管理器'] },
        ].forEach(e => {
          (e.explain = e.cmds[0]), (e.icon = 'res/native/rundll32.png'), i.push(e);
        }),
        i.push({ code: 'call:processSpawn explorer.exe shell:RecycleBinFolder', icon: 'res/native/recyclebin.png', cmds: ['回收站'], explain: '打开回收站' }),
        i.forEach(e => {
          this.pluginsCmp.setFeature('', e);
        }),
        (this.desktopLnkWatcher = this.lnkDirWatch(process.env.USERPROFILE + '\\Desktop', 0)),
        (this.startMenuLnkWatcher = this.lnkDirWatch([process.env.ProgramData + '\\Microsoft\\Windows\\Start Menu', process.env.APPDATA + '\\Microsoft\\Windows\\Start Menu'], 3));
    }
    lnkDirWatch(e, t) {
      return Fe()
        .watch(e, { persistent: !0, ignoreInitial: !0, followSymlinks: !1, ignorePermissionErrors: !0, disableGlobbing: !0, depth: t })
        .on('unlink', e => {
          if (!/\.lnk$/i.test(e)) return;
          if (!(e in this.pluginsCmp.pluginContainer[''].featureDic)) return;
          const t = Object.values(this.lnkNameTargetDic).find(t => t.path === e);
          t && delete this.lnkNameTargetDic[(t.name + t.target).toLowerCase()], delete this.pluginsCmp.pluginContainer[''].featureDic[e], this.windowCmp.refreshCmdSource();
        })
        .on('add', e => {
          if (!/\.lnk$/i.test(e)) return;
          const t = c().basename(e);
          if (t.toLowerCase().startsWith('uninstall') || t.startsWith('卸载') || t.toLowerCase().endsWith('卸载.lnk')) return;
          const i = ie().getLnksInfo(e)[0];
          if (i.target && !['.exe', '.msc', '.bat', '.ico'].includes(c().extname(i.target).toLowerCase())) return;
          i.name = c().parse(t).name;
          const n = i.name + i.target;
          setTimeout(() => {
            if (!W().existsSync(e)) return;
            if (n in this.lnkNameTargetDic) return;
            this.lnkNameTargetDic[n] = i;
            const t = { code: i.path, explain: i.description || i.target || e, cmds: [i.name], icon: 'nativeicon://' + i.path };
            this.pluginsCmp.setFeature('', t), this.windowCmp.refreshCmdSource();
          }, 3e3);
        });
    }
    setActionAppFeatures() {
      Oe.forEach(e => {
        e.icon || (e.icon = 'res/native/symbolic.svg'), this.pluginsCmp.setFeature('', e);
      });
    }
    getUWPLocalString(e, t) {
      if (0 === t.indexOf('ms-resource:')) {
        const i = e.substr(0, e.indexOf('_'));
        if (t.includes(i)) return ie().getIndirectString(`@{${e}?${t}}`);
        let n = t.replace('ms-resource:', '');
        return 0 === n.indexOf('/')
          ? ((n = n.replace(/^\/+/, '/')), ie().getIndirectString(`@{${e}?ms-resource://${i}${n}}`))
          : n.toLowerCase().indexOf('/resources/') > 0
          ? ie().getIndirectString(`@{${e}?ms-resource://${i}/${n}}`)
          : ie().getIndirectString(`@{${e}?ms-resource://${i}/resources/${n}}`);
      }
      return t;
    }
    setUWPFeatures() {
      (ie().uwp.getAppxPackage() || []).forEach(e => {
        const t = c().join(e.location, 'AppxManifest.xml');
        if (!W().existsSync(t)) return;
        let i = null;
        try {
          i = W().readFileSync(t, 'utf8');
        } catch (e) {
          return;
        }
        const n = i.match(/<Application[^>]+Id="[^"]+"/g);
        if (!n) return;
        const s = i.match(/:VisualElements[^>]+>/g);
        if (s)
          for (let t = 0; t < n.length; t++) {
            if (!s[t]) continue;
            if (s[t].includes('AppListEntry="none"')) continue;
            /Id="([^"]+)"/.test(n[t]);
            const i = RegExp.$1,
              o = {};
            s[t].match(/[\w]+="[^"]+"/g).forEach(e => {
              const t = e.split('="');
              o[t[0]] = t[1].replace(/"$/, '');
            });
            const r = this.getUWPLocalString(e.fullname, o.DisplayName);
            if (!r) continue;
            let a = o.Square44x44Logo;
            if ((!a && o.Square150x150Logo && (a = o.Square150x150Logo), !a)) continue;
            a = a.replace(/\\/g, '/');
            let l = ie().getIndirectString(`@{${e.fullname}?ms-resource://${e.fullname.substr(0, e.fullname.indexOf('_'))}/Files/${a}}`);
            if ((l || (l = c().join(e.location, a)), !W().existsSync(l))) continue;
            const h = this.getUWPLocalString(e.fullname, o.Description) || r,
              d = { code: e.familyname + '!' + i, explain: h, cmds: [r], icon: 'file://' + l };
            'transparent' === o.BackgroundColor ? (d.backgroundColor = this.systemAccentColor) : (d.backgroundColor = o.BackgroundColor), this.pluginsCmp.setFeature('', d);
          }
      }),
        ie().uwp.uwpChangeNotify(e => {
          0 === e &&
            setTimeout(() => {
              this.goRefreshUwpFeatures();
            }, 3e3);
        });
    }
    goRefreshUwpFeatures() {
      const e = this.pluginsCmp.pluginContainer[''].featureDic,
        t = [];
      for (const i in e) e[i].icon && 0 === e[i].icon.indexOf('file://') && t.push(i);
      t.forEach(t => {
        delete e[t];
      }),
        this.setUWPFeatures(),
        this.windowCmp.refreshCmdSource();
    }
    setSettingsFeatures() {
      Be.forEach(e => {
        (e.explain = '系统设置'), (e.icon = 'res/native/mssetting.png'), (e.backgroundColor = this.systemAccentColor), this.pluginsCmp.setFeature('', e);
      });
    }
    setMatchAppFeatures() {
      Object.values(Le).forEach(e => {
        e.feature && this.pluginsCmp.setFeature('', e.feature);
      });
    }
    initFeatures() {
      this.desktopLnkWatcher && (this.desktopLnkWatcher.close(), delete this.desktopLnkWatcher),
        this.startMenuLnkWatcher && (this.startMenuLnkWatcher.close(), delete this.startMenuLnkWatcher),
        (this.pluginsCmp.pluginContainer[''] = { name: '', pluginName: '', logo: 'res/logo.png', featureDic: {} }),
        this.pluginsCmp.setFeature('', { code: 'call:goHelp', icon: 'res/native/help.png', explain: 'uTools 帮助文档', cmds: ['Help', '帮助'] }),
        this.pluginsCmp.setFeature('', { code: 'call:killAllPlugin', icon: 'res/native/clear.svg', explain: 'uTools后台插件全部退出', cmds: ['Clear'] }),
        this.setMatchAppFeatures(),
        this.setActionAppFeatures(),
        n().get('enableNativeApp') &&
          (this.pluginsCmp.setFeature('', {
            code: 'addlocalopen',
            explain: '加入到 uTools 搜索启动',
            icon: 'res/native/add.svg',
            cmds: [{ type: 'files', maxLength: 1, label: '加入到 uTools 搜索启动' }],
          }),
          this.setLnkFeatures(),
          this.osVersion >= 6.2 && (this.setUWPFeatures(), this.osVersion >= 10 && this.setSettingsFeatures())),
        this.appCmp.initLocalOpenFeatures().then(() => {
          this.windowCmp.refreshCmdSource();
        });
    }
    shutdown(...e) {
      this.windowCmp.hideMainWindow(!1);
      let i = '';
      '-s' === e[0] ? (i = '关机') : '-r' === e[0] ? (i = '重启') : '-l' === e[0] && (i = '注销');
      const n = 'call:shutdown ' + e.join(' '),
        s = c().join(__dirname, this.pluginsCmp.pluginContainer[''].featureDic[n].icon);
      t.dialog
        .showMessageBox({ icon: t.nativeImage.createFromPath(s), buttons: ['取消', i], title: i + '确认', message: '确定要' + i + '?', defaultId: 1 })
        .then(({ response: t }) => {
          1 === t && Z().spawn('Shutdown.exe', e, { detached: !0 });
        });
    }
    processSpawn(...e) {
      this.windowCmp.hideMainWindow(!1);
      const t = e.shift();
      Z().spawn(t, e, { detached: !0 });
    }
    actionProcessSpawn(...e) {
      this.windowCmp.hideMainWindow(!1);
      const t = e.shift();
      Z().spawn(t, e, { detached: !0 });
    }
    copyFile(e) {
      Array.isArray(e) || (e = [e]), 0 !== (e = e.filter(e => W().existsSync(e))).length && ie().copyFile.apply(null, e);
    }
    goHelp() {
      this.windowCmp.hideMainWindow(!1), this.appCmp.goHelp();
    }
    killAllPlugin() {
      this.windowCmp.killAllPlugins();
    }
    mousePosWindowInfo() {
      const e = ie().getMousePosWindow();
      if (!e) return;
      this.windowCmp.hideMainWindow(!1);
      let i = `\n    窗口标题:  ${e.title}\n\n    窗口ID:  ${e.id}\n\n    窗口类:  ${e.class}\n\n    坐标X:  ${e.x}\n\n    坐标Y:  ${e.y}\n\n    窗口宽度:  ${
        e.width
      }\n\n    窗口高度:  ${e.height}\n\n    进程ID:  ${e.pid}\n\n    应用:  ${c().basename(e.appPath || '')}\n\n    应用位置:  ${e.appPath}`;
      (i = i.replace(/^\n/, '')), t.dialog.showMessageBox({ buttons: ['关闭'], title: ' 窗口信息 - 鼠标位置', message: i });
    }
    screenColorPicker() {
      this.screenColorPickerCmp.do(({ hex: e }) => {
        new t.Notification({ body: '颜色 ' + e + ' 已复制到剪贴板' }).show();
      });
    }
    screenCapture() {
      this.windowCmp.hideMainWindow(), Z().spawn('snippingtool.exe', ['/clip'], { detached: !0 });
    }
    emptyRecycleBin() {
      this.windowCmp.hideMainWindow(), ie().emptyRecycleBin();
    }
    setNativeWindowAlwaysOnTop() {
      this.windowCmp.hideMainWindow();
      const e = this.windowCmp.display.nativeWorkWindowInfo;
      e &&
        '#32770' !== e.class &&
        ('explorer.exe' !== e.app || ('Progman' !== e.class && 'WorkerW' !== e.class)) &&
        (ie().setWindowAlwaysOnTop(e.id) ? new t.Notification({ body: '应用窗口已置顶' }).show() : new t.Notification({ body: '应用窗口已取消置顶' }).show());
    }
    screenCaptureShowUTools() {
      this.windowCmp.hideMainWindow(),
        Z()
          .spawn('snippingtool.exe', ['/clip'], { detached: !0 })
          .once('close', () => {
            setTimeout(() => {
              this.windowCmp.display.trigger();
            }, 250);
          });
    }
    simulateCopyShowUTools() {
      this.windowCmp.hideMainWindow(),
        ie().simulateKeyboardTap('c', 'ctrl'),
        setTimeout(() => {
          this.windowCmp.display.trigger();
        }, 250);
    }
    registerGlobalService() {
      global.services.native = {
        open: (e, i, n) => {
          if ((this.reportCmp.info('native.open', { way: i }), /^[a-z]:\\/i.test(e)))
            W().existsSync(e)
              ? (this.windowCmp.hideMainWindow(!1), (n && ie().adminShellExecute(e)) || t.shell.openPath(e))
              : (new t.Notification({ body: '文件不存在，打开失败' }).show(), delete this.pluginsCmp.pluginContainer[''].featureDic[e], this.windowCmp.refreshCmdSource());
          else {
            if (e.startsWith('ms-settings:')) return this.windowCmp.hideMainWindow(!1), void t.shell.openExternal(e);
            if (e.startsWith('call:')) {
              const t = e.replace('call:', '').split(/ +/g),
                i = t.shift();
              return void ('function' == typeof this[i] && this[i].apply(this, t));
            }
            this.windowCmp.hideMainWindow(!1), ie().activateApplication(e);
          }
        },
        matchCall: (e, t, i, n) => {
          if ((this.reportCmp.info('native.open', { way: n }), e in Le))
            try {
              Le[e].func(this, t, i);
            } catch (e) {}
        },
        settingEnableNativeApp: e => {
          n().set('enableNativeApp', !0 === e),
            setImmediate(() => {
              this.initFeatures();
            });
        },
      };
    }
  }
  const He = {
      addlocalopen: {
        func: (e, t, i) => {
          e.appCmp.addLocalOpen(i.map(e => e.path));
        },
      },
      saveimage: {
        feature: { code: 'saveimage', explain: '保存为图片文件', icon: 'res/native/imgfile.png', cmds: [{ type: 'img', label: '保存为文件' }] },
        func: (e, i, n) => {
          if ((e.windowCmp.hideMainWindow(), !/^data:image\/([a-z]+);base64,/.test(n))) return;
          const s = RegExp.$1,
            o = c().join(t.app.getPath('downloads'), 'uTools_' + Date.now() + '.' + s);
          W().writeFile(o, n.replace(/^data:image\/([a-z]+);base64,/, ''), 'base64', e => {
            e || t.shell.showItemInFolder(o);
          });
        },
      },
      showfolder: {
        feature: {
          code: 'showfolder',
          explain: '前往文件夹',
          icon: 'res/native/folderopen.svg',
          cmds: [{ type: 'regex', match: '/^(?:~?\\/[^/\\n\\r\\f\\v]+)+\\/?$/', label: '前往文件夹' }],
        },
        func: (e, i, n) => {
          (n = n.trim()).startsWith('~') && (n = n.replace('~', t.app.getPath('home'))),
            W().existsSync(n) || ((n = c().dirname(n)), W().existsSync(n))
              ? (e.windowCmp.hideMainWindow(), W().lstatSync(n).isFile() ? t.shell.showItemInFolder(n) : t.shell.openPath(n))
              : new t.Notification({ title: 'uTools', body: '文件、文件夹都不存在' }).show();
        },
      },
      copyfile: {
        feature: {
          code: 'copyfile',
          explain: '复制文件或文件夹到剪贴板',
          icon: 'res/native/clip.svg',
          cmds: [{ type: 'regex', match: '/^(?:\\/[^/\\n\\r\\f\\v]+)+\\/?$/m', maxLength: 5e3, label: '复制文件' }],
        },
        func: (e, i, n) => {
          const s = n
            .match(/^(?:\/[^/\n\r\f\v]+)+\/?$/gm)
            .map(e => e.trim())
            .filter(e => W().existsSync(e));
          0 !== s.length ? (e.windowCmp.hideMainWindow(), e.copyFile(s)) : new t.Notification({ title: 'uTools', body: '文件不存在', silent: !1 }).show();
        },
      },
      openitem: {
        feature: {
          code: 'openitem',
          explain: '系统默认方式打开文件',
          icon: 'res/native/openitem.png',
          cmds: [{ type: 'regex', match: '/^(?:~?\\/[^/\\n\\r\\f\\v]+)+\\.\\w{2,10}$/', label: '打开文件' }],
        },
        func: (e, i, n) => {
          (n = n.trim()).startsWith('~') && (n = n.replace('~', t.app.getPath('home'))),
            W().existsSync(n) ? (e.windowCmp.hideMainWindow(!1), t.shell.openPath(n)) : new t.Notification({ title: 'uTools', body: '文件不存在' }).show();
        },
      },
      openweburl: {
        feature: {
          code: 'openweburl',
          explain: '默认浏览器打开网址',
          icon: 'res/native/link.svg',
          cmds: [
            {
              type: 'regex',
              match:
                '/^(?:https?:\\/\\/)?(?:localhost|(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3})|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$/i',
              label: '打开网址',
            },
          ],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(), /^https?:\/\//.test(n) ? t.shell.openExternal(n) : t.shell.openExternal('https://' + n);
        },
      },
      copy_file_path: {
        feature: { code: 'copy_file_path', explain: '复制文件路径到剪贴板', icon: 'res/native/link.svg', cmds: [{ type: 'files', label: '复制路径' }] },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(), t.clipboard.writeText(n.map(e => e.path).join('\n'));
        },
      },
      copy_current_folder_path: {
        feature: {
          code: 'copy_current_folder_path',
          explain: '复制当前目录路径',
          icon: 'res/native/link.svg',
          cmds: [{ type: 'window', match: { app: ['dde-file-manager', 'nautilus'] }, label: '复制当前目录路径' }],
        },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(),
            t.clipboard.writeText(''),
            ie().simulateKeyboardTap('l', 'ctrl'),
            setTimeout(() => {
              ie().simulateKeyboardTap('c', 'ctrl'), ie().simulateKeyboardTap('escape');
            }, 100);
        },
      },
      file_manager_new_file: {
        feature: { code: 'file_manager_new_file', explain: '新建文件', icon: 'res/native/newfile.png', cmds: [{ type: 'window', match: { app: 'nautilus' }, label: '新建文件' }] },
        func: (e, i, n) => {
          e.windowCmp.hideMainWindow(),
            t.clipboard.writeText(''),
            ie().simulateKeyboardTap('l', 'ctrl'),
            ie().simulateKeyboardTap('c', 'ctrl'),
            ie().simulateKeyboardTap('escape'),
            setTimeout(() => {
              const e = t.clipboard.readText();
              e &&
                W().existsSync(e) &&
                Z().exec('zenity --title "新建文件" --entry --text "文件名称"', (i, n, s) => {
                  if (i) {
                    if (!s) return;
                    if (!(s = s.trim())) return;
                    if (s.endsWith('GtkDialog mapped without a transient parent. This is discouraged.')) return;
                    return void new t.Notification({ title: 'uTools', body: s }).show();
                  }
                  if (!n) return;
                  const o = c().join(e, n.trim());
                  if (W().existsSync(o)) new t.Notification({ title: 'uTools', body: '文件已存在' }).show();
                  else
                    try {
                      W().closeSync(W().openSync(o, 'w'));
                    } catch (e) {
                      new t.Notification({ title: 'uTools', body: '新建文件出错了' }).show();
                    }
                });
            }, 100);
        },
      },
    },
    Ne = [
      { code: 'dde-lock', explain: '电脑锁屏', icon: 'res/native/lock.png', cmds: ['锁屏', 'Lock'] },
      { code: 'reboot', explain: '电脑重启', icon: 'res/native/reboot.png', cmds: ['重启', 'Reboot'] },
      { code: 'shutdown', explain: '电脑关机', icon: 'res/native/shutdown.png', cmds: ['关机', 'Shutdown'] },
      { code: 'call:screenColorPicker', icon: 'res/native/picker.png', explain: '屏幕颜色拾取', cmds: ['取色', '拾色', 'Pick Color'] },
    ],
    Ue = [
      {
        code: 'dbus-send --type=method_call --dest=org.gnome.ScreenSaver  /org/gnome/ScreenSaver org.gnome.ScreenSaver.Lock',
        explain: '电脑锁屏',
        icon: 'res/native/lock.png',
        cmds: ['锁屏', 'Lock'],
      },
      { code: 'gnome-session-quit', explain: '当前操作系统账号注销', icon: 'res/native/logout.png', cmds: ['注销', 'Logout'] },
      { code: 'gnome-session-quit --reboot', explain: '电脑重启', icon: 'res/native/reboot.png', cmds: ['重启', 'Reboot'] },
      { code: 'gnome-session-quit --power-off', explain: '电脑关机', icon: 'res/native/shutdown.png', cmds: ['关机', 'Shutdown'] },
      { code: 'call:screenColorPicker', icon: 'res/native/picker.png', explain: '屏幕颜色拾取', cmds: ['取色', '拾色', 'Pick Color'] },
      { code: 'call:screenCapture', icon: 'res/native/screenshot.png', explain: '屏幕截图', cmds: ['截图'] },
      { code: 'call:screenCaptureShowUTools', icon: 'res/native/screenshot.png', explain: '截图完呼出 uTools', cmds: ['截图完呼出 uTools'] },
      { code: 'call:simulateCopyShowUTools', icon: 'res/native/keyboard-c.png', explain: '模拟执行复制后呼出 uTools', cmds: ['执行复制后呼出 uTools'] },
    ];
  class Re {
    constructor(e, t, i, n, s) {
      (this.pluginsCmp = e), (this.windowCmp = t), (this.reportCmp = i), (this.screenColorPickerCmp = n), (this.appCmp = s), (this.entryFileExec = {});
    }
    adapterOldVersion() {
      setImmediate(() => {
        const e = [];
        if (n().has('nativeExtendApp')) {
          let t = n().get('nativeExtendApp');
          Array.isArray(t) && ((t = t.filter(e => W().existsSync(e))), t.length > 0 && e.push(...t)), n().delete('nativeExtendApp');
        }
        if (n().has('nativeExtendDir')) {
          const t = n().get('nativeExtendDir');
          if (W().existsSync(t)) {
            const i = [];
            this.dirAppRead('.desktop', t, 1, 0, i), this.dirAppRead('.AppImage', t, 1, 0, i), i.length > 0 && e.push(...i);
          }
          n().delete('nativeExtendDir');
        }
        e.length > 0 && this.appCmp.addLocalOpen(e);
      });
    }
    init() {
      n().has('enableNativeApp') || n().set('enableNativeApp', !0), this.registerGlobalService();
      let e = null;
      'deepin' === this.windowCmp.osName
        ? ((e = ie().getGSetting('com.deepin.dde.appearance', 'icon-theme')),
          (this.localIconThemes = [e]),
          ['deepin', 'hicolor'].forEach(e => {
            this.localIconThemes.includes(e) || this.localIconThemes.push(e);
          }))
        : 'ubuntu' === this.windowCmp.osName &&
          ((e = ie().getGSetting('org.gnome.desktop.interface', 'icon-theme')),
          ['ubuntu-mono-dark', 'ubuntu-mono-light'].includes(e) && (e = 'Yaru'),
          (this.localIconThemes = [e]),
          ['hicolor', 'Adwaita', 'Humanity'].forEach(e => {
            this.localIconThemes.includes(e) || this.localIconThemes.push(e);
          })),
        (this.emptyIcon = this.getIcon('empty')),
        (this.appCmp.folderIconPath = this.getIcon('folder')),
        setImmediate(() => {
          this.initFeatures(), this.adapterOldVersion();
        });
    }
    getIcon(e) {
      const t = ['48x48', '48', 'scalable', '256x256', '512x512', '256', '512'],
        i = ['apps', 'categories', 'devices', 'mimetypes', 'legacy', 'actions', 'places', 'status', 'mimes'],
        n = ['.png', '.svg'];
      for (const s of this.localIconThemes)
        for (const o of t)
          for (const t of i)
            for (const i of n) {
              let n = c().join('/usr/share/icons', s, o, t, e + i);
              if (W().existsSync(n)) return n;
              if (((n = c().join('/usr/share/icons', s, t, o, e + i)), W().existsSync(n))) return n;
            }
      return W().existsSync(c().join('/usr/share/pixmaps', e + '.png')) ? c().join('/usr/share/pixmaps', e + '.png') : this.emptyIcon;
    }
    convertEntryFile2Feature(e) {
      let t = null;
      try {
        t = W().readFileSync(e, 'utf8');
      } catch (e) {
        return null;
      }
      if (!t.includes('[Desktop Entry]')) return null;
      t = t.substr(t.indexOf('[Desktop Entry]')).replace('[Desktop Entry]', '').trim();
      const i = t.indexOf('\n[');
      i > 0 && (t = t.substr(0, i).trim());
      const n = {};
      if (
        (t.match(/^[\w\-[\]]+ ?=.*$/gm).forEach(e => {
          const t = e.indexOf('=');
          n[e.substr(0, t).trim()] = e.substr(t + 1).trim();
        }),
        'Application' !== n.Type)
      )
        return null;
      if (!n.Exec) return null;
      if ('true' === n.NoDisplay && !n.Exec.startsWith('gnome-control-center')) return null;
      let s = String(process.env.DESKTOP_SESSION).toLowerCase();
      if (('ubuntu' === s && (s = 'gnome'), n.OnlyShowIn && !n.OnlyShowIn.toLowerCase().includes(s))) return null;
      if (n.NotShowIn && n.NotShowIn.toLowerCase().includes(s)) return null;
      let o = n.Icon;
      if (!o) return null;
      if (o.startsWith('/')) {
        if (!W().existsSync(o)) return null;
      } else if (e.startsWith('/usr/share/applications') || e.startsWith('/var/lib/snapd/desktop/applications')) o = this.getIcon(o);
      else {
        if (!e.startsWith(process.env.HOME + '/.local/share/applications')) return null;
        (o = c().join(process.env.HOME, '.local/share/icons', o + '.png')), W().existsSync(o) || (o = this.emptyIcon);
      }
      let r = '';
      const a = process.env.LANG.split('.')[0];
      r =
        'Comment[' + a + ']' in n
          ? n['Comment[' + a + ']']
          : n.Comment
          ? 'X-Ubuntu-Gettext-Domain' in n
            ? ie().getLocaleName(n['X-Ubuntu-Gettext-Domain'], n.Comment)
            : n.Comment
          : e;
      let l = n.Exec.replace(/ %[A-Za-z]/g, '')
        .replace(/"/g, '')
        .trim();
      'true' === n.Terminal && (l = 'gnome-terminal -x ' + l), (this.entryFileExec[e] = l);
      const h = { code: e, explain: r, icon: 'file://' + o, cmds: [n.Name] };
      if ('Name[' + a + ']' in n) n['Name[' + a + ']'] && n['Name[' + a + ']'] !== n.Name && h.cmds.unshift(n['Name[' + a + ']']);
      else if ('X-Ubuntu-Gettext-Domain' in n) {
        const e = ie().getLocaleName(n['X-Ubuntu-Gettext-Domain'], n.Name);
        e && e !== n.Name && h.cmds.unshift(e);
      }
      return h;
    }
    dirAppRead(e, t, i, n, s) {
      let o = null;
      try {
        if (!W().existsSync(t)) return;
        o = W().readdirSync(t);
      } catch (e) {
        return;
      }
      if (0 !== o.length)
        for (const r of o) {
          const o = c().join(t, r);
          W().lstatSync(o).isFile() && (c().extname(o) === e ? s.push(o) : n < i && this.dirAppRead(e, o, i, n + 1, s));
        }
    }
    appDirWatch(e, t) {
      return Fe()
        .watch(e, { persistent: !0, ignoreInitial: !0, followSymlinks: !1, ignorePermissionErrors: !0, disableGlobbing: !0, depth: t })
        .on('unlink', e => {
          /\.desktop$/i.test(e) &&
            e in this.pluginsCmp.pluginContainer[''].featureDic &&
            ('.desktop' === c().extname(e).toLowerCase() && delete this.entryFileExec[e],
            delete this.pluginsCmp.pluginContainer[''].featureDic[e],
            this.windowCmp.refreshCmdSource());
        })
        .on('add', e => {
          /\.desktop$/i.test(e) &&
            setTimeout(() => {
              if (!W().existsSync(e)) return;
              const t = this.convertEntryFile2Feature(e);
              t && (this.pluginsCmp.setFeature('', t), this.windowCmp.refreshCmdSource());
            }, 3e3);
        });
    }
    setBaseAppFeatures() {
      const e = ['/usr/share/applications', '/var/lib/snapd/desktop/applications', process.env.HOME + '/.local/share/applications'],
        i = [];
      e.forEach(e => {
        this.dirAppRead('.desktop', e, 0, 0, i);
      }),
        i.forEach(e => {
          const i = this.convertEntryFile2Feature(e);
          if (i && (this.pluginsCmp.setFeature('', i), ['Visual Studio Code'].includes(i.cmds[0]))) {
            const e = i.cmds[0],
              n = this.entryFileExec[i.code];
            (He['path_open_to_' + e] = {
              func: (e, i, s) => {
                e.windowCmp.hideMainWindow(),
                  t.clipboard.writeText(''),
                  ie().simulateKeyboardTap('l', 'ctrl'),
                  ie().simulateKeyboardTap('c', 'ctrl'),
                  ie().simulateKeyboardTap('escape'),
                  setTimeout(() => {
                    const e = t.clipboard.readText();
                    if (!e || !W().existsSync(e)) return;
                    const i = n.split(/ +/),
                      s = i.shift();
                    i.push(e), Z().spawn(s, i, { detached: !0 });
                  }, 100);
              },
            }),
              this.pluginsCmp.setFeature('', {
                code: 'path_open_to_' + e,
                explain: e + ' 中打开',
                icon: i.icon,
                cmds: [{ type: 'window', match: { app: ['dde-file-manager', 'nautilus'] }, label: e + ' 中打开' }],
              });
          }
        }),
        (this.baseAppDirWatch = this.appDirWatch(e, 0));
    }
    setMatchAppFeatures() {
      Object.values(He).forEach(e => {
        e.feature && this.pluginsCmp.setFeature('', e.feature);
      });
    }
    setActionAppFeatures() {
      let e = null;
      if ('ubuntu' === this.windowCmp.osName) e = Ue;
      else {
        if ('deepin' !== this.windowCmp.osName) return;
        e = Ne;
      }
      e.forEach(e => {
        e.icon || (e.icon = 'res/native/symbolic.svg'), this.pluginsCmp.setFeature('', e);
      });
    }
    initFeatures() {
      this.baseAppDirWatch && (this.baseAppDirWatch.close(), delete this.baseAppDirWatch),
        (this.pluginsCmp.pluginContainer[''] = { name: '', pluginName: '', logo: 'res/logo.png', featureDic: {} }),
        this.pluginsCmp.setFeature('', { code: 'call:goHelp', icon: 'res/native/help.png', explain: 'uTools 帮助文档', cmds: ['Help', '帮助'] }),
        this.pluginsCmp.setFeature('', { code: 'call:killAllPlugin', icon: 'res/native/clear.svg', explain: 'uTools后台插件全部退出', cmds: ['Clear'] }),
        this.setMatchAppFeatures(),
        this.setActionAppFeatures(),
        n().get('enableNativeApp') &&
          (this.pluginsCmp.setFeature('', {
            code: 'addlocalopen',
            explain: '加入到 uTools 搜索启动',
            icon: 'res/native/add.svg',
            cmds: [{ type: 'files', maxLength: 1, label: '加入到 uTools 搜索启动' }],
          }),
          this.setBaseAppFeatures()),
        this.appCmp.initLocalOpenFeatures().then(() => {
          this.windowCmp.refreshCmdSource();
        });
    }
    copyFile(e) {
      Array.isArray(e) || (e = [e]), 0 !== (e = e.filter(e => W().existsSync(e))).length && ie().copyFile.apply(null, e);
    }
    goHelp() {
      this.windowCmp.hideMainWindow(!1), this.appCmp.goHelp();
    }
    killAllPlugin() {
      this.windowCmp.killAllPlugins();
    }
    screenColorPicker() {
      this.screenColorPickerCmp.do(({ hex: e }) => {
        new t.Notification({ title: 'uTools', body: '颜色 ' + e + ' 已复制到剪贴板' }).show();
      });
    }
    screenCapture() {
      this.windowCmp.hideMainWindow(), Z().spawn('gnome-screenshot', ['-c', '-a'], { detached: !0 });
    }
    screenCaptureShowUTools() {
      this.windowCmp.hideMainWindow(),
        Z()
          .spawn('gnome-screenshot', ['-c', '-a'], { detached: !0 })
          .once('close', () => {
            setTimeout(() => {
              this.windowCmp.display.trigger();
            }, 250);
          });
    }
    simulateCopyShowUTools() {
      this.windowCmp.hideMainWindow(),
        setTimeout(() => {
          ie().simulateKeyboardTap('c', 'ctrl'),
            setTimeout(() => {
              this.windowCmp.display.trigger();
            }, 250);
        }, 50);
    }
    registerGlobalService() {
      global.services.native = {
        open: (e, i) => {
          if ((this.reportCmp.info('native.open', { way: i }), e.startsWith('call:'))) {
            const t = e.replace('call:', '').split(/ +/g),
              i = t.shift();
            'function' == typeof this[i] && this[i].apply(this, t);
          } else if (['reboot', 'shutdown'].includes(e)) {
            this.windowCmp.hideMainWindow();
            const i = 'shutdown' === e ? '关机' : '重启';
            t.dialog.showMessageBox({ type: 'question', buttons: ['取消', i], title: i + '确认', message: '电脑确定要' + i + '?', defaultId: 1 }).then(({ response: t }) => {
              1 === t && Z().spawn(e, [], { detached: !0 });
            });
          } else {
            if ((this.windowCmp.hideMainWindow(), e.startsWith('/')))
              if (e in this.entryFileExec) e = this.entryFileExec[e];
              else {
                if (!W().existsSync(e))
                  return (
                    new t.Notification({ title: 'uTools', body: '文件不存在，打开失败' }).show(),
                    delete this.pluginsCmp.pluginContainer[''].featureDic[e],
                    void this.windowCmp.refreshCmdSource()
                  );
                try {
                  W().accessSync(e, W().constants.X_OK);
                } catch (i) {
                  return t.shell.openPath(e);
                }
              }
            Z().exec(e);
          }
        },
        matchCall: (e, t, i, n) => {
          if ((this.reportCmp.info('native.open', { way: n }), e in He))
            try {
              He[e].func(this, t, i);
            } catch (e) {}
        },
        settingEnableNativeApp: e => {
          n().set('enableNativeApp', !0 === e),
            setImmediate(() => {
              this.initFeatures();
            });
        },
      };
    }
  }
  class Ke {
    constructor(e) {
      this.windowCmp = e;
    }
    do(e) {
      !this.windowCmp.isMacOs || ie().isHadPrivilege() ? this.doPixelPattern(e) : ie().requestPrivilege();
    }
    doPixelPattern(e) {
      if (this.workWindow) return;
      this.windowCmp.mainWindow.isVisible() && this.windowCmp.mainWindow.hide();
      const i = {
        show: !1,
        alwaysOnTop: !0,
        resizable: !1,
        fullscreenable: !1,
        minimizable: !1,
        maximizable: !1,
        closable: !1,
        autoHideMenuBar: !0,
        frame: !1,
        transparent: !0,
        titleBarStyle: 'customButtonsOnHover',
        enableLargerThanScreen: !0,
        hasShadow: !1,
        width: 108,
        height: 188,
        webPreferences: { preload: c().join(__dirname, 'screencolorpicker/pixelPreload.js'), nodeIntegration: !1 },
      };
      this.windowCmp.isLinux && (i.type = 'dock'),
        (this.workWindow = new t.BrowserWindow(i)),
        this.workWindow.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 }),
        this.workWindow.removeMenu(),
        this.workWindow.setAlwaysOnTop(!0, 'screen-saver'),
        this.workWindow.loadURL('file://' + c().join(__dirname, 'screencolorpicker/pixel.html'));
      const n = '0,0,0',
        s = [];
      for (let e = 0; e < 9; e++) {
        const e = [];
        for (let t = 0; t < 9; t++) e.push(n);
        s.push(e);
      }
      const o = () => {
        this.workWindow.destroy();
        const i = s[4][4].split(',').map(e => parseInt(e));
        let n = '#' + this.componentToHex(i[0]) + this.componentToHex(i[1]) + this.componentToHex(i[2]);
        if (((n = n.toUpperCase()), t.clipboard.writeText(n), 'function' == typeof e)) {
          const t = 'RGB(' + i.join(', ') + ')';
          e({ hex: n, rgb: t });
        }
      };
      let r;
      this.windowCmp.isLinux && (r = t.screen.getPrimaryDisplay().scaleFactor);
      const a = (e, i) => {
        let a, c, l, h;
        if (this.windowCmp.isWindow) {
          if (void 0 === e) return setImmediate(o);
          const n = t.screen.screenToDipPoint({ x: e, y: i });
          (a = t.screen.getDisplayNearestPoint(n)), (c = t.screen.dipToScreenRect(null, a.bounds)), (l = Math.round(n.x) - 54), (h = Math.round(n.y) - 20);
        } else if (this.windowCmp.isMacOs) (a = t.screen.getDisplayNearestPoint({ x: e, y: i })), (c = a.bounds), (l = e - 54), (h = i - 20);
        else if (this.windowCmp.isLinux)
          if (r > 1) {
            const n = Math.round(e / r),
              s = Math.round(i / r);
            (a = t.screen.getDisplayNearestPoint({ x: n, y: s })),
              (c = a.bounds),
              (c.x = Math.round(c.x * r)),
              (c.y = Math.round(c.y * r)),
              (c.width = Math.round(c.width * r)),
              (c.height = Math.round(c.height * r)),
              (l = n - 54),
              (h = s - 20);
          } else (a = t.screen.getDisplayNearestPoint({ x: e, y: i })), (c = a.bounds), (l = e - 54), (h = i - 20);
        let d,
          u = e - 4,
          p = i - 4,
          w = 9,
          g = 9,
          m = 0,
          f = 0;
        if (u < c.x) {
          (m = c.x - u), m > 9 && (m = 9), (w -= m), (u = c.x);
          for (let e = 0; e < 9; e++) for (let t = 0; t < m; t++) s[e][t] = n;
        } else if (e + 5 > c.x + c.width) {
          let t = e + 5 - (c.x + c.width);
          t > 9 && (t = 9), (w -= t);
          for (let e = 0; e < 9; e++) for (let i = 9 - t; i < 9; i++) s[e][i] = n;
        }
        if (p < c.y) {
          (f = c.y - p), f > 9 && (f = 9), (g -= f), (p = c.y);
          for (let e = 0; e < f; e++) for (let t = 0; t < 9; t++) s[e][t] = n;
        } else if (i + 5 > c.y + c.height) {
          let e = i + 5 - (c.y + c.height);
          e > 9 && (e = 9), (g -= e);
          for (let t = 9 - e; t < 9; t++) for (let e = 0; e < 9; e++) s[t][e] = n;
        }
        if (0 === w || 0 === g) return this.workWindow.webContents.send('colors', s);
        if (this.windowCmp.isWindow)
          t.screen.dipToScreenPoint({ x: 0, y: h + 148 }).y > c.y + c.height && (h -= 148),
            this.workWindow.setIgnoreMouseEvents(!1),
            this.workWindow.setAlwaysOnTop(!0, 'screen-saver'),
            this.workWindow.setPosition(l, h),
            (d = ie().getScreenRectRGBColor(u, p, w, g));
        else if ((h + 148 > c.y + c.height && (h -= 148), this.workWindow.setPosition(l, h), this.windowCmp.isMacOs)) d = ie().getScreenRectSRGBColor(u, p, w, g);
        else if (this.windowCmp.isLinux) {
          const e = ie().captureScreen(u, p, w, g);
          d = [];
          for (let t = 0; t < e.length; t += 4) d.push(e[t + 2] + ',' + e[t + 1] + ',' + e[t]);
        }
        for (let e = 0; e < g; e++) for (let t = 0; t < w; t++) s[e + f][t + m] = d[e * w + t];
        this.workWindow.webContents.send('colors', s);
      };
      this.workWindow.once('ready-to-show', () => {
        const e = t.screen.getCursorScreenPoint();
        if ((this.workWindow.show(), this.windowCmp.isWindow)) {
          const i = t.screen.dipToScreenPoint(e);
          a(Math.round(i.x), Math.round(i.y)), ie().mouseMoveEvent(a);
        } else
          this.windowCmp.isMacOs
            ? (a(e.x, e.y), ie().mouseMoveEvent(a))
            : this.windowCmp.isLinux &&
              (r > 1 ? a(Math.round(e.x * r), Math.round(e.y * r)) : a(e.x, e.y),
              ie().mouseMoveEvent(e => {
                if (!e) return;
                const t = e.split(',');
                a(parseInt(t[0]), parseInt(t[1]));
              }));
      }),
        this.workWindow.on('blur', () => {
          this.workWindow.destroy();
        }),
        this.workWindow.once('closed', () => {
          ie().stopMouseMoveEvent(), (this.workWindow = null);
        }),
        this.workWindow.webContents.on('before-input-event', (e, i) => {
          if ((e.preventDefault(), 'keyDown' === i.type))
            if ('Escape' !== i.key)
              if ('ArrowUp' !== i.key)
                if ('ArrowDown' !== i.key)
                  if ('ArrowLeft' !== i.key)
                    if ('ArrowRight' !== i.key) ('Space' !== i.code && 'Enter' !== i.code && 'NumpadEnter' !== i.code) || o();
                    else {
                      const e = t.screen.getCursorScreenPoint(),
                        i = t.screen.getDisplayNearestPoint(e).bounds;
                      if (e.x === i.x + i.width - 1) return;
                      if (this.windowCmp.isWindow) {
                        e.x += 1;
                        const i = t.screen.dipToScreenPoint(e);
                        ie().simulateMouseMove(Math.round(i.x), Math.round(i.y));
                      } else ie().simulateMouseMove(e.x + 1, e.y);
                    }
                  else {
                    const e = t.screen.getCursorScreenPoint(),
                      i = t.screen.getDisplayNearestPoint(e).bounds;
                    if (e.x === i.x) return;
                    if (this.windowCmp.isWindow) {
                      e.x -= 1;
                      const i = t.screen.dipToScreenPoint(e);
                      ie().simulateMouseMove(Math.round(i.x), Math.round(i.y));
                    } else ie().simulateMouseMove(e.x - 1, e.y);
                  }
                else {
                  const e = t.screen.getCursorScreenPoint(),
                    i = t.screen.getDisplayNearestPoint(e).bounds;
                  if (e.y === i.y + i.height - 1) return;
                  if (this.windowCmp.isWindow) {
                    e.y += 1;
                    const i = t.screen.dipToScreenPoint(e);
                    ie().simulateMouseMove(Math.round(i.x), Math.round(i.y));
                  } else ie().simulateMouseMove(e.x, e.y + 1);
                }
              else {
                const e = t.screen.getCursorScreenPoint(),
                  i = t.screen.getDisplayNearestPoint(e).bounds;
                if (e.y === i.y) return;
                if (this.windowCmp.isWindow) {
                  e.y -= 1;
                  const i = t.screen.dipToScreenPoint(e);
                  ie().simulateMouseMove(Math.round(i.x), Math.round(i.y));
                } else ie().simulateMouseMove(e.x, e.y - 1);
              }
            else this.workWindow.destroy();
        });
    }
    componentToHex(e) {
      const t = e.toString(16);
      return 1 === t.length ? '0' + t : t;
    }
  }
  let je = t.app.getPath('userData'),
    $e = 'https://api.u-tools.cn',
    Je = 'https://yuanliao.info',
    qe = { protocol: 'https', host: 'db.u-tools.cn' },
    Ge = 6e5;
  o().dev() &&
    ((je = c().join(t.app.getPath('appData'), 'dev-utools')),
    h().existsSync(je) || h().mkdirSync(je),
    ($e = 'http://api.test.u.tools'),
    (Je = 'http://bbs.u.tools'),
    (qe = { protocol: 'http', host: '192.168.2.119', port: '5984' }),
    (Ge = 6e4));
  const Qe = {
    path: { root: je, plugins: c().join(je, 'plugins'), database: c().join(je, 'database'), settings: c().join(je, 'settings') },
    app: { helpURL: 'https://u.tools/docs/guide/about-uTools.html', versionURL: 'https://api.u-tools.cn/System/Statistical/redirect', downloadURL: 'https://u.tools' },
    database: { sync: qe },
    window: {
      backgroundColor: '#ffffff',
      darkBackgroundColor: '#303133',
      initHeight: 56,
      initWidth: 800,
      openPluginHeight: 600,
      pluginDownloadURL: $e + '/Plugins/Manage/download/',
    },
    plugin: { interval: Ge, checkURL: $e + '/Plugins/Manage/checkUpdate', hashURL: $e + '/Plugins/Manage/hash/' },
    autoupdate: { interval: 72e5, linuxURL: 'https://resource.u-tools.cn/currentversion/', linuxDownloadURL: 'https://u.tools' },
    crashreport: { submitURL: $e + '/Plugins/Manage/crashReport' },
    report: { submitURL: $e + '/system/statistical/commit', interval: 6e4 },
    account: {
      emailVerifyURL: Je + '/auth/utools?token=',
      loginURL: Je + '/auth/wechat?from=utools',
      infoURL: $e + '/passport/user/info',
      profileURL: $e + '/Passport/User/profile',
      dbSyncURL: $e + '/passport/user/dbsync',
      logoutURL: $e + '/passport/user/logout',
      temporaryToken: $e + '/passport/user/accessToken',
      createPluginIdURL: $e + '/Plugins/Developer/globalPluginId?access_token=',
      deployPlugin: $e + '/Plugins/Developer/deploy?access_token=',
      feedbackURL: Je + '/auth/utools?callbackUrl=' + Je + '/t/utools&token=',
      homepageURL: Je + '/auth/utools?callbackUrl=' + Je + '/u/[user_id]&token=',
    },
    voice: { contentWidth: 260, initContentHeight: 56, translateURL: $e + '/AI/Translate/query' },
  };
  new (class extends class {
    constructor() {
      this.services = {};
    }
    get() {
      let e = null;
      const t = Array.from(arguments);
      return t.length < 1 || (this.has(t[0]) && (e = this.services[t[0]].resolve(t.slice(1), this))), e;
    }
    mget() {
      const e = Array.from(arguments),
        t = {};
      for (const i in e) 'string' == typeof e[i] ? (t[e[i]] = this.get(e[i])) : (t[e[i][0]] = this.get(...e[i]));
      return t;
    }
    set(e, t, i) {
      return (
        (this.services[e] = new (class {
          constructor(e, t, i) {
            if ('string' != typeof e || '' === e) throw new Error('Name is required');
            (this.name = e), (this.contrete = t), (this.shared = i), (this.instance = null);
          }
          shareable(e) {
            this.shared = e;
          }
          resolve(e, t) {
            return (
              (!0 === this.shared && null !== this.instance) ||
                ('function' == typeof this.contrete ? (this.instance = this.contrete.apply(t, e)) : ((this.shared = !0), (this.instance = this.contrete))),
              this.instance
            );
          }
        })(e, t, i)),
        this
      );
    }
    singleton(e, t) {
      return this.set(e, t, !0), this;
    }
    has(e) {
      return e in this.services;
    }
    remove(e) {
      return delete this.services[e], this;
    }
  } {
    launch() {
      if (!t.app.requestSingleInstanceLock()) return void t.app.exit(0);
      t.app.on('second-instance', (e, t, i) => {
        try {
          this.get('window').display.trigger(!0);
        } catch (e) {}
      }),
        o().dev() && t.app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');
      const e = new Date().valueOf();
      if (o().macOS()) {
        if (o().production() && !t.app.isInApplicationsFolder()) return void t.app.moveToApplicationsFolder();
        t.app.dock.hide();
      } else o().windows() ? (t.app.disableHardwareAcceleration(), t.app.setAppUserModelId('org.yuanli.utools')) : o().linux() && t.app.disableHardwareAcceleration();
      const i = !h().existsSync(Qe.path.settings);
      n().setPath(Qe.path.settings),
        t.app.on('ready', () => {
          new (class {
            constructor(e) {
              this.container = e;
            }
            register() {
              this.container.set(
                'config',
                () => {
                  const e = new (class {
                    get(e = null, t = null) {
                      return e ? this.getData(e, r, t) : r;
                    }
                    set(e, t = {}) {
                      return 'object' == typeof e ? this.setObject(r, e) : 'string' == typeof e && '' !== e && void this.setData(e, r, t);
                    }
                    getData(e, t, i) {
                      if (-1 === e.indexOf('.')) return void 0 !== t[e] ? t[e] : i;
                      {
                        const n = e.split('.'),
                          s = n.splice(0, 1)[0],
                          o = n.join('.');
                        return this.getData(o, t[s], i);
                      }
                    }
                    setData(e, t, i) {
                      const n = e.split('.');
                      if (-1 === e.indexOf('.')) t[e] = i;
                      else {
                        const e = n.splice(0, 1)[0];
                        'object' != typeof t[e] && (t[e] = {});
                        const s = n.join('.');
                        this.setData(s, t[e], i);
                      }
                    }
                    setObject(e, t = {}) {
                      for (const i in t) 'object' == typeof t[i] && 'object' == typeof e && 'object' == typeof e[i] ? (e[i] = this.setObject(e[i], t[i])) : (e[i] = t[i]);
                      return e;
                    }
                  })();
                  return e.set(Qe), e;
                },
                !0
              ),
                this.container.set(
                  'account',
                  () => {
                    const e = this.container.get('config');
                    return new be(e.get('account'));
                  },
                  !0
                ),
                this.container.set(
                  'report',
                  () => {
                    const e = this.container.get('config'),
                      i = this.container.get('account');
                    return new (class {
                      constructor(e, i) {
                        (this.config = e),
                          (this.accountCmp = i),
                          (this.reportQueue = []),
                          (this.appVersion = t.app.getVersion()),
                          (this.osRelease = ee().release()),
                          (this.machineId = ie().getMachineId());
                      }
                      info(e, t) {
                        t
                          ? this.reportQueue.push({ ...t, event: e, '@timestamp': new Date().toISOString() })
                          : this.reportQueue.push({ event: e, '@timestamp': new Date().toISOString() }),
                          this.netTimeout ||
                            (this.netTimeout = setTimeout(() => {
                              (this.netTimeout = null), this.netPost();
                            }, this.config.interval));
                      }
                      netPost() {
                        if (!global.isOnLine || 0 === this.reportQueue.length) return;
                        for (const e of this.reportQueue)
                          (e.machineId = this.machineId),
                            (e.platform = process.platform),
                            (e.arch = process.arch),
                            (e.appVersion = this.appVersion),
                            (e.osRelease = this.osRelease);
                        const e = JSON.stringify(this.reportQueue);
                        this.reportQueue = [];
                        const i = t.net.request({ method: 'POST', url: this.config.submitURL });
                        i.setHeader('content-type', 'application/x-www-form-urlencoded');
                        const n = this.accountCmp.getAccountToken();
                        n ? i.end('access_token=' + n + '&data=' + e, 'utf-8') : i.end('data=' + e, 'utf-8');
                      }
                    })(e.get('report'), i);
                  },
                  !0
                ),
                this.container.set(
                  'plugins',
                  () => {
                    const e = this.container.get('config'),
                      t = this.container.get('report');
                    return new G(c().join(__dirname, 'plugins'), e.get('path.plugins'), e.get('plugin'), t);
                  },
                  !0
                ),
                this.container.set(
                  'window',
                  () => {
                    const e = this.container.get('config').get('window'),
                      i = this.container.get('plugins'),
                      s = this.container.get('report'),
                      r = this.container.get('account');
                    return new (class {
                      constructor(e, i, s, r) {
                        if (
                          ((this.runningPluginPool = {}),
                          (this.pluginSessionPool = []),
                          (this.webContentId2PluginId = {}),
                          (this.config = e),
                          (this.pluginCmp = i),
                          (this.reportCmp = s),
                          (this.accountCmp = r),
                          (this.pluginDetachHotKey = ''),
                          (this.pluginOutTimer = 3),
                          (this.isMacOs = o().macOS()),
                          (this.isWindow = o().windows()),
                          (this.isLinux = o().linux()),
                          this.isLinux)
                        ) {
                          const e = Z().execSync('cat /etc/*release | grep -E ^NAME', { encoding: 'utf8' }).toLowerCase();
                          /name="(.+?)"/.test(e) ? ((this.osName = RegExp.$1), ['deepin', 'ubuntu'].includes(this.osName) || (this.osName = 'ubuntu')) : (this.osName = 'ubuntu');
                        }
                        (this.isDev = o().dev()),
                          (this.osRelease = ee().release()),
                          (this.appVersion = t.app.getVersion()),
                          (this.isDarkColors = n().has('theme') ? 'dark' === n().get('theme') : t.nativeTheme.shouldUseDarkColors),
                          (this.windowBackgroundColor = this.isDarkColors ? this.config.darkBackgroundColor : this.config.backgroundColor),
                          (this.onMainWindowBlur = this.onMainWindowBlur.bind(this)),
                          (this.onMainWindowHide = this.onMainWindowHide.bind(this)),
                          (this.onMainWindowShow = this.onMainWindowShow.bind(this)),
                          (this.onNativeThemeUpdated = this.onNativeThemeUpdated.bind(this)),
                          this.isWindow || this.isLinux ? (this.mainWindowBorderWidth = 1) : (this.mainWindowBorderWidth = 0);
                      }
                      init() {
                        this.initNativeIconHandler(),
                          this.initMainWin(),
                          this.registerGlobalService(),
                          this.registerPluginApi(),
                          this.listenAccountEvent(),
                          t.nativeTheme.on('updated', this.onNativeThemeUpdated);
                      }
                      initNativeIconHandler() {
                        const e = ['unknow'];
                        let i = null;
                        return this.isWindow
                          ? ((this.nativeIconHandler = (t, n) =>
                              t in ae
                                ? n({ mimeType: 'image/png', data: ae[t] })
                                : e.includes(t)
                                ? n({ mimeType: 'image/png', data: i })
                                : void ie().fetchFileIconAsPng(t, (s, o) =>
                                    s
                                      ? (e.push(t), n({ mimeType: 'image/png', data: i }))
                                      : i.equals(o)
                                      ? ((o = null), e.push(t), n({ mimeType: 'image/png', data: i }))
                                      : ((ae[t] = o), void n({ mimeType: 'image/png', data: o }))
                                  )),
                            void ie().fetchFileIconAsPng('unknow', (e, n) => {
                              if (e) return t.app.exit(0);
                              i = n;
                            }))
                          : this.isMacOs
                          ? ((this.nativeIconHandler = (t, n) =>
                              t in ae
                                ? n({ mimeType: 'image/png', data: ae[t] })
                                : e.includes(t)
                                ? n({ mimeType: 'image/png', data: i })
                                : void ie().fetchFileIconAsPng(t, s => {
                                    const o = Buffer.from(s, 'base64');
                                    if (i.equals(o)) return e.push(t), n({ mimeType: 'image/png', data: i });
                                    (ae[t] = o), n({ mimeType: 'image/png', data: o });
                                  })),
                            void ie().fetchFileIconAsPng('unknow', e => {
                              i = Buffer.from(e, 'base64');
                            }))
                          : void (
                              this.isLinux &&
                              ((this.nativeIconHandler = (n, s) =>
                                n in ae
                                  ? s({ mimeType: 'image/png', data: ae[n] })
                                  : e.includes(n)
                                  ? s({ mimeType: 'image/png', data: i })
                                  : void t.app
                                      .getFileIcon(n, { size: 'large' })
                                      .then(t => {
                                        if (t.isEmpty()) return e.push(n), s({ mimeType: 'image/png', data: i });
                                        const o = t.toPNG();
                                        if (i.equals(o)) return e.push(n), s({ mimeType: 'image/png', data: i });
                                        (ae[n] = o), s({ mimeType: 'image/png', data: o });
                                      })
                                      .catch(() => {
                                        e.push(n), s({ mimeType: 'image/png', data: i });
                                      })),
                              t.app.getFileIcon('unknow', { size: 'large' }).then(e => {
                                i = e.toPNG();
                              }))
                            );
                      }
                      setSessionIconProtocol(e) {
                        e.protocol.registerBufferProtocol('nativeicon', (e, t) => {
                          let i = e.url.substr(13);
                          try {
                            i = decodeURIComponent(i);
                          } catch (e) {}
                          this.nativeIconHandler(i, t);
                        }),
                          e.protocol.registerBufferProtocol('dbicon', (e, t) => {
                            let i = e.url.substr(9);
                            try {
                              i = decodeURIComponent(i);
                            } catch (e) {}
                            if (i in ae) return t({ mimeType: 'image/png', data: ae[i] });
                            this.getDbAttachment('/', i, 'icon')
                              .then(e => {
                                (ae[i] = e), t({ mimeType: 'image/png', data: e });
                              })
                              .catch(() => {
                                t();
                              });
                          });
                      }
                      getMainWindwoSession() {
                        const e = t.session.fromPartition('persist:<utools>');
                        return (
                          e.on('will-download', (e, i, n) => {
                            if ((i.setSavePath(c().join(t.app.getPath('temp'), b() + '.upx')), !this._updatePluginCmdCache)) return e.preventDefault();
                            const s = { ...this._updatePluginCmdCache };
                            delete this._updatePluginCmdCache;
                            const o = i.getURLChain()[0];
                            if (0 !== o.indexOf(this.config.pluginDownloadURL)) return e.preventDefault();
                            const r = o.replace(this.config.pluginDownloadURL, '').split('?')[0];
                            let a = null;
                            i.on('updated', (e, n) => {
                              if ('interrupted' === n)
                                return (
                                  i.cancel(),
                                  this.reallyEnterPlugin(r, s.featureCode, s.inputCmd),
                                  this.reportCmp.info('plugin.update.fail.download', { pluginId: r }),
                                  void new t.Notification({ title: 'uTools', body: '插件下载中断，更新失败' }).show()
                                );
                              a && clearTimeout(a),
                                (a = setTimeout(() => {
                                  a = null;
                                  const e = ((100 * i.getReceivedBytes()) / i.getTotalBytes()) | 0;
                                  this.executeJavaScript(this.mainWindow.webContents, `window.rpcRenderer.downloadProgressing(${e})`);
                                }, 200));
                            }),
                              i.once('done', (e, t) => {
                                a && clearTimeout(a);
                                const n = i.getSavePath();
                                if (s.pluginId === r && r in this.pluginCmp.pluginContainer) {
                                  if ('completed' === t) {
                                    if ((this.destroyPlugin(r), !this.pluginCmp.unmount(r))) {
                                      try {
                                        h().unlinkSync(n);
                                      } catch (e) {}
                                      return this.refreshCmdSource(), void this.emptyRecovery();
                                    }
                                    this.pluginCmp.install(r, n, e => {
                                      this.refreshCmdSource(),
                                        e
                                          ? (this.emptyRecovery(), this.reportCmp.info('plugin.update.fail', { pluginId: r, error: e.message }))
                                          : (this.reallyEnterPlugin(r, s.featureCode, s.inputCmd, !0),
                                            this.reportCmp.info('plugin.update', {
                                              pluginId: r,
                                              pluginVersion: this.pluginCmp.pluginContainer[r].version,
                                              timeCost: Date.now() - s.timestamp,
                                            }));
                                      try {
                                        h().unlinkSync(n);
                                      } catch (e) {}
                                    });
                                  }
                                } else {
                                  try {
                                    h().unlinkSync(n);
                                  } catch (e) {}
                                  this.emptyRecovery();
                                }
                              });
                          }),
                          this.setSessionIconProtocol(e),
                          e
                        );
                      }
                      initMainWin() {
                        (this.mainWindow = new t.BrowserWindow({
                          fullscreenable: !1,
                          minimizable: !1,
                          maximizable: !1,
                          alwaysOnTop: !0,
                          show: !1,
                          width: this.config.initWidth + 2 * this.mainWindowBorderWidth,
                          height: this.config.initHeight + 2 * this.mainWindowBorderWidth,
                          backgroundColor: this.windowBackgroundColor,
                          frame: !1,
                          enableLargerThanScreen: !0,
                          skipTaskbar: !0,
                          autoHideMenuBar: !0,
                          type: 'toolbar',
                          webPreferences: {
                            devTools: this.isDev,
                            nodeIntegration: !1,
                            session: this.getMainWindwoSession(),
                            enableRemoteModule: !0,
                            backgroundThrottling: !1,
                            navigateOnDragDrop: !1,
                            spellcheck: !1,
                            preload: c().join(__dirname, 'preload.js'),
                          },
                        })),
                          this.mainWindow.removeMenu(),
                          this.mainWindow.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 });
                        const e = this.mainWindow.webContents.executeJavaScript;
                        (this.executeJavaScript = (t, i, n) => e.call(t, i, n)),
                          (this.mainWindow.webContents.executeJavaScript = null),
                          (this.display = new ne(this.mainWindow, this.hideMainWindow.bind(this))),
                          this.isWindow &&
                            (this.mainWindow.setAlwaysOnTop(!0, 'pop-up-menu'),
                            (this.mainWindowNativeWindowHandle = this.mainWindow.getNativeWindowHandle()),
                            ie().disableSystemMenu(this.mainWindowNativeWindowHandle)),
                          this.disableResizeHeight(this.config.initHeight),
                          this.mainWindow.loadURL('file://' + c().join(__dirname, 'index.html')),
                          (this.clipboardWatch = new oe()),
                          this.mainWindow.on('blur', this.onMainWindowBlur),
                          this.mainWindow.on('hide', this.onMainWindowHide),
                          this.mainWindow.on('show', this.onMainWindowShow),
                          this.mainWindow.webContents.once('dom-ready', () => {
                            this.mainWindowBorderWidth > 0 &&
                              this.mainWindow.webContents.insertCSS(`.main { border-style: solid; border-width: ${this.mainWindowBorderWidth}px; }`),
                              this.executeJavaScript(
                                this.mainWindow.webContents,
                                `\n        window.onerror = function (message, source, lineno, colno) {\n          source = source.substr(source.indexOf('.asar/')+6)\n          const report = {\n            event: "appweb.exception",\n            "@timestamp": new Date().toISOString(),\n            platform: ${JSON.stringify(
                                  process.platform
                                )},\n            arch: ${JSON.stringify(process.arch)},\n            appVersion: ${JSON.stringify(
                                  this.appVersion
                                )},\n            osRelease: ${JSON.stringify(
                                  this.osRelease
                                )},\n            error: JSON.stringify({message,source,lineno,colno})\n          }\n          fetch(${JSON.stringify(
                                  this.reportCmp.config.submitURL
                                )},{\n            method: 'POST',\n            headers: {\n              'Content-Type': 'application/x-www-form-urlencoded'\n            },\n            body: 'data='+JSON.stringify([report])\n          })\n        }`
                              ).catch(() => {});
                          }),
                          this.mainWindow.webContents.on('before-input-event', (e, t) => {
                            if ('keyDown' !== t.type || !(t.meta || t.control || t.shift || t.alt)) return;
                            const i = this.hotKeyAction(t);
                            if (i) {
                              if ('close' === i) return e.preventDefault(), void (this.mainWindow.getBrowserView() ? this.outPlugin() : this.hideMainWindow());
                              if ('detach' !== i)
                                return 'setting' === i
                                  ? (e.preventDefault(), void this.ffffffff.goSetting())
                                  : 'select' === i
                                  ? (e.preventDefault(), void this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.mainInputSelect()'))
                                  : void ('dev' === i && (e.preventDefault(), this.openPluginDevTools()));
                              this.mainWindow.getBrowserView() &&
                                (e.preventDefault(),
                                process.nextTick(() => {
                                  this.detachPlugin();
                                }));
                            }
                          }),
                          o().production() &&
                            (this.mainWindow.once('closed', () => {
                              t.app.quit();
                            }),
                            this.mainWindow.webContents.once('crashed', () => {
                              t.app.quit();
                            })),
                          (this.ffffffff = re.call(this));
                      }
                      onNativeThemeUpdated(e) {
                        let i;
                        if ('string' == typeof e) i = 'dark' === e;
                        else {
                          if (n().has('theme')) return;
                          i = t.nativeTheme.shouldUseDarkColors;
                        }
                        this.isDarkColors !== i &&
                          ((this.isDarkColors = i),
                          (this.windowBackgroundColor = this.isDarkColors ? this.config.darkBackgroundColor : this.config.backgroundColor),
                          t.BrowserWindow.getAllWindows().forEach(e => e.setBackgroundColor(this.windowBackgroundColor)),
                          this.executeJavaScript(this.mainWindow.webContents, `window.rpcRenderer.nativeThemeUpdated(${this.isDarkColors})`),
                          this.voiceNativeThemeUpdated && this.voiceNativeThemeUpdated(this.isDarkColors));
                      }
                      onMainWindowBlur() {
                        if (this.mainWindow.isVisible())
                          return this.isWindow
                            ? ((this.mainWindowBlurTimestamp = Date.now()),
                              this.mainWindowBlurTimestamp - this.display.mainWindowShowTimestamp < 50
                                ? (this.display.trigger(!0, !0), void (this.mainWindow.isFocused() || this.hideMainWindow()))
                                : void setTimeout(() => {
                                    ie().isMouseLeftDown() ? this.win32CheckMouseLeftUp() : this.hideMainWindow();
                                  }, 50))
                            : void this.hideMainWindow();
                      }
                      onMainWindowHide() {
                        if ((this.mainWindowHideTimeout && (clearTimeout(this.mainWindowHideTimeout), (this.mainWindowHideTimeout = null)), this.mainWindow.getBrowserView()))
                          if (this.isWindow)
                            this.mainWindow.isFocused()
                              ? (this.mainWindow.blur(),
                                (this.mainWindowBlurTimestamp = Date.now()),
                                setTimeout(() => {
                                  this._isMainInputFocus = this.mainWindowBlurTimestamp - this.mainWebContentsBlurTimestamp <= 0;
                                }, 50))
                              : (this._isMainInputFocus = this.mainWindowBlurTimestamp - this.mainWebContentsBlurTimestamp <= 0);
                          else if (this.isLinux) {
                            const e = Date.now();
                            setTimeout(() => {
                              this._isMainInputFocus = e - this.mainWebContentsBlurTimestamp <= 0;
                            }, 50);
                          } else
                            setImmediate(() => {
                              this._isMainInputFocus = Date.now() - this.mainWebContentsBlurTimestamp < 50;
                            });
                        else (this._isMainInputFocus = !1), this.isWindow && this.mainWindow.isFocused() && (this.mainWindow.blur(), (this.mainWindowBlurTimestamp = Date.now()));
                        this.pluginOutTimer > 10 ||
                          (this.mainWindowHideTimeout = setTimeout(
                            () => {
                              (this.mainWindowHideTimeout = null),
                                this.mainWindow.getBrowserView()
                                  ? this.outPlugin()
                                  : this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.getEnterFeatureCmd()').then(e => {
                                      e || this.emptyRecovery();
                                    });
                            },
                            this.pluginOutTimer > 0.1 ? 6e4 * this.pluginOutTimer : 1e3
                          ));
                      }
                      onMainWindowShow() {
                        if (this.isLinux && 'deepin' === this.osName) {
                          const e = this.mainWindow.getSize();
                          this.mainWindow.setSize(e[0] + 1, e[1]),
                            setTimeout(() => {
                              const e = this.mainWindow.getSize();
                              e[0] > this.config.initWidth + 2 * this.mainWindowBorderWidth && this.mainWindow.setSize(e[0] - 1, e[1]);
                            }, 50);
                        }
                        this.mainWindowHideTimeout && (clearTimeout(this.mainWindowHideTimeout), (this.mainWindowHideTimeout = null)),
                          this.executeJavaScript(this.mainWindow.webContents, `window.rpcRenderer.localWindowMatch(${JSON.stringify(this.display.nativeWorkWindowInfo || null)})`);
                        const e = this.mainWindow.getBrowserView();
                        e
                          ? !0 !== this._isMainInputFocus || this.display.alwaysShow
                            ? this.isLinux
                              ? setTimeout(() => {
                                  this.mainWindow.getBrowserView() === e && e.webContents.focus();
                                }, 50)
                              : setImmediate(() => {
                                  this.mainWindow.getBrowserView() === e && e.webContents.focus();
                                })
                            : (this.mainWindow.webContents.focus(), this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.mainInputSelect()'))
                          : (this.mainWindow.webContents.focus(),
                            this.display.alwaysShow || !this.clipboardWatch.isPreCopy()
                              ? this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.mainInputSelect()')
                              : this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.autoPaste()'));
                      }
                      win32CheckMouseLeftUp() {
                        this.win32CheckMouseLeftUpTimer && clearTimeout(this.win32CheckMouseLeftUpTimer),
                          (this.win32CheckMouseLeftUpTimer = setTimeout(() => {
                            if (((this.win32CheckMouseLeftUpTimer = null), ie().isMouseLeftDown())) return void this.win32CheckMouseLeftUp();
                            const e = ie().getCursorPos();
                            if (e) {
                              const t = Math.round(e.x / this.display.currentDisplay.scaleFactor),
                                i = Math.round(e.y / this.display.currentDisplay.scaleFactor),
                                n = this.mainWindow.getBounds();
                              if (t > n.x && t < n.x + n.width && i > n.y && i < n.y + n.height) {
                                if ((this.mainWindow.focus(), i > n.y + this.config.initHeight)) {
                                  const e = this.mainWindow.getBrowserView();
                                  e && e.webContents.focus();
                                }
                                return;
                              }
                              this.hideMainWindow();
                            } else this.hideMainWindow();
                          }, 50));
                      }
                      hideMainWindow(e = !0) {
                        if (this.mainWindow.isVisible()) {
                          if (this.isWindow)
                            return this.mainWindow.isFocused()
                              ? (this.mainWindow.hide(), void (e && this.display.nativeWorkWindowInfo && ie().restorePrevWindowFocus(this.display.nativeWorkWindowInfo.id)))
                              : void this.mainWindow.hide();
                          if (this.isMacOs) {
                            if (!this.mainWindow.isFocused()) return void this.mainWindow.hide();
                            if (!e) return void this.mainWindow.hide();
                            if (
                              this.display.nativeWorkWindowInfo &&
                              ('org.yuanli.utools' === this.display.nativeWorkWindowInfo.bundleId ||
                                (this.isDev && 'com.github.Electron' === this.display.nativeWorkWindowInfo.bundleId))
                            ) {
                              this.mainWindow.hide();
                              const e = t.BrowserWindow.getAllWindows().find(e => ie().getWindowNumber(e.getNativeWindowHandle()) === this.display.nativeWorkWindowInfo.id);
                              return void (e && e.isVisible() && e.show());
                            }
                            return t.app.hide(), this.mainWindow.hide(), void t.app.show();
                          }
                          this.isLinux && this.mainWindow.hide();
                        }
                      }
                      hotKeyAction(e) {
                        const t = se[e.code];
                        if (!t) return !1;
                        let i = '';
                        if ((e.meta && (i += this.isMacOs ? 'Command+' : 'Super+'), e.control && (i += 'Control+'), e.shift && (i += 'Shift+'), e.alt && (i += 'Alt+'), !i))
                          return !1;
                        if (this.isMacOs) {
                          if (['Command+Q', 'Command+W'].includes(i + t)) return 'close';
                          if (i + t === 'Command+,') return 'setting';
                          if (i + t === 'Command+V') return 'paste';
                          if (i + t === 'Command+L') return 'select';
                          if (i + t === 'Command+Alt+I') return 'dev';
                        } else {
                          if (i + t === 'Control+W') return 'close';
                          if (i + t === 'Control+V') return 'paste';
                          if (i + t === 'Control+L') return 'select';
                          if (i + t === 'Control+Shift+I') return 'dev';
                        }
                        return this.pluginDetachHotKey === i + t && 'detach';
                      }
                      enableResizeHeight(e) {
                        this.mainWindow.setMinimumSize(this.config.initWidth + 2 * this.mainWindowBorderWidth, e + 2 * this.mainWindowBorderWidth),
                          this.mainWindow.setMaximumSize(
                            this.display.maxScreenSize.width + 2 * this.mainWindowBorderWidth,
                            this.display.maxScreenSize.height + 2 * this.mainWindowBorderWidth
                          );
                      }
                      disableResizeHeight(e) {
                        this.mainWindow.setMinimumSize(this.config.initWidth + 2 * this.mainWindowBorderWidth, e + 2 * this.mainWindowBorderWidth),
                          this.mainWindow.setMaximumSize(this.display.maxScreenSize.width + 2 * this.mainWindowBorderWidth, e + 2 * this.mainWindowBorderWidth);
                      }
                      setExpendHeight(e) {
                        if (!this.isMacOs && this.display.currentDisplay.scaleFactor > 1 && this.display.currentDisplay.scaleFactor % 1 > 0) {
                          const t = this.mainWindow.getBounds(),
                            i = this.config.initHeight + e;
                          this.disableResizeHeight(i), (t.height = i + 2 * this.mainWindowBorderWidth), this.mainWindow.setBounds(t);
                          const n = this.mainWindow.getBounds();
                          return void (
                            n.width > t.width && ((t.width = t.width - (n.width - t.width)), (t.x = t.x - (n.x - t.x)), (t.y = t.y - (n.y - t.y)), this.mainWindow.setBounds(t))
                          );
                        }
                        const t = this.config.initHeight + e;
                        this.disableResizeHeight(t), this.mainWindow.setSize(this.mainWindow.getSize()[0], t + 2 * this.mainWindowBorderWidth);
                      }
                      reallyEnterPlugin(e, i, n, s) {
                        const o = this.pluginCmp.pluginContainer[e];
                        if (!o) return void this.emptyRecovery();
                        if (!(i in o.featureDic))
                          return s
                            ? void setTimeout(() => {
                                this.reallyEnterPlugin(e, i, n);
                              }, 300)
                            : (new t.Notification({ body: '功能不存在，已从「' + o.pluginName + '」插件中移除' }).show(), void this.emptyRecovery());
                        if ((this.reportCmp.info('plugin.enter', { pluginId: e, way: n.way }), !(e in this.runningPluginPool)))
                          return this.setExpendHeight(0), void this.assemblyPlugin(o, i, n);
                        const r = this.runningPluginPool[e];
                        if (r.view) this.displayPlugin(r.view, o, i, n);
                        else {
                          if (0 === r.detachWindows.length) return this.setExpendHeight(0), void this.assemblyPlugin(o, i, n);
                          if (o.pluginSetting.single) {
                            this.setExpendHeight(0);
                            const e = r.detachWindows[0];
                            return (
                              (r.detachWindows = []),
                              (r.view = e.getBrowserView()),
                              void this.triggerPluginViewEvent(r.view, 'PluginOut', null, () => {
                                e.setBrowserView(null), e.destroy(), this.displayPlugin(r.view, o, i, n);
                              })
                            );
                          }
                          this.setExpendHeight(0), this.assemblyPlugin(o, i, n);
                        }
                      }
                      enterPlugin(e, t, i) {
                        if (!e) return void this.emptyRecovery();
                        if (this.mainWindow.getBrowserView())
                          return void this.recoverPlugin(() => {
                            this.enterPlugin(e, t, i);
                          });
                        if (!this.pluginCmp.pluginUpdateSet.includes(e)) return void this.reallyEnterPlugin(e, t, i);
                        const n = this.pluginCmp.pluginContainer[e],
                          s = this.runningPluginPool[e];
                        n && s && !n.pluginSetting.single && s.detachWindows.length > 0
                          ? this.reallyEnterPlugin(e, t, i)
                          : this.executeJavaScript(this.mainWindow.webContents, 'navigator.onLine').then(n => {
                              n
                                ? (this.setExpendHeight(0),
                                  this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.startUpdatePlugin()'),
                                  (this._updatePluginCmdCache = { pluginId: e, featureCode: t, inputCmd: i, timestamp: new Date().valueOf() }),
                                  this.mainWindow.webContents.downloadURL(
                                    this.config.pluginDownloadURL + e + '?platform=' + process.platform + '&version=' + this.appVersion + '&update=true'
                                  ))
                                : this.reallyEnterPlugin(e, t, i);
                            });
                      }
                      getEnterPluginWinHeight(e) {
                        const t = this.pluginCmp.pluginContainer[e];
                        if (t.pluginSetting.height) {
                          const e = this.config.initHeight + t.pluginSetting.height;
                          return this.disableResizeHeight(e), e + 2 * this.mainWindowBorderWidth;
                        }
                        return this.enableResizeHeight(this.config.openPluginHeight), this.config.openPluginHeight + 2 * this.mainWindowBorderWidth;
                      }
                      triggerPluginViewEvent(e, i, n, s) {
                        const o = ` if(window.utools && window.utools.__event__ && typeof window.utools.__event__.on${i} === 'function' ) {\n      try { window.utools.__event__.on${i}(${
                          n ? JSON.stringify(n) : ''
                        }) } catch(e) {} }`;
                        let r = setTimeout(() => {
                          Y()(e.webContents.getOSProcessId()), new t.Notification({ body: '插件超过5秒未响应, 插件进程已被强制退出' }).show();
                        }, 5e3);
                        this.executeJavaScript(e.webContents, o).then(() => {
                          clearTimeout(r), (r = null), 'function' == typeof s && s();
                        });
                      }
                      displayPlugin(e, t, i, n, s = !1) {
                        const o = this.pluginIsEnterDetach(t.name),
                          r = this.getEnterPluginWinHeight(t.name);
                        let a = !1;
                        'text' === n.type && n.subInputInput && (a = n.subInputInput);
                        const c = { code: i, type: n.type, payload: n.payload };
                        if ((n.optional && (c.optional = n.optional), o)) {
                          const i = this.mainWindow.getBounds();
                          return (
                            (i.height = r),
                            void this.autoDetachPlugin(t.name, i, e, i => {
                              s
                                ? ((this.webContentId2PluginId[e.webContents.id] = t.name),
                                  this.triggerPluginViewEvent(e, 'PluginReady', null, () => {
                                    this.triggerPluginViewEvent(e, 'PluginEnter', c, () => {
                                      a && this.detachSubInputAutoInput(i, a);
                                    });
                                  }))
                                : this.triggerPluginViewEvent(e, 'PluginEnter', c, () => {
                                    a && this.detachSubInputAutoInput(i, a);
                                  });
                            })
                          );
                        }
                        const l = this.mainWindow.getSize()[0];
                        this.mainWindow.setSize(l, r), this.mainWindow.setBrowserView(e);
                        const h = l - 2 * this.mainWindowBorderWidth;
                        e.setBounds({
                          x: s ? this.mainWindowBorderWidth : 1 - h,
                          y: this.config.initHeight + this.mainWindowBorderWidth,
                          width: h,
                          height: r - this.config.initHeight - 2 * this.mainWindowBorderWidth,
                        }),
                          e.setAutoResize({ width: !0, height: !0 }),
                          e.webContents.focus(),
                          s
                            ? ((this.webContentId2PluginId[e.webContents.id] = t.name),
                              this.triggerPluginViewEvent(e, 'PluginReady', null, () => {
                                this.triggerPluginViewEvent(e, 'PluginEnter', c, () => {
                                  a && this.subInputAutoInput(a);
                                });
                              }))
                            : this.triggerPluginViewEvent(e, 'PluginEnter', c, () => {
                                a && this.subInputAutoInput(a),
                                  setTimeout(() => {
                                    if (this.mainWindow.getBrowserView() !== e) return;
                                    const t = this.mainWindow.getMinimumSize()[1];
                                    e.setBounds({
                                      x: this.mainWindowBorderWidth,
                                      y: this.config.initHeight + this.mainWindowBorderWidth,
                                      width: h,
                                      height: t - this.config.initHeight - 2 * this.mainWindowBorderWidth,
                                    }),
                                      this.isMacOs && (this.mainWindow.setBrowserView(e), this.mainWindow.webContents.isFocused() || e.webContents.focus());
                                  }, 50);
                              });
                      }
                      assemblyPlugin(e, i, n) {
                        const s = Date.now();
                        this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.startAssemblyPlugin()');
                        const r = t.session.fromPartition('<' + e.name + '>');
                        this.pluginSessionPool.includes(e.name) ||
                          (this.pluginSessionPool.push(e.name),
                          e.isDev ||
                            r.webRequest.onBeforeSendHeaders((e, t) => {
                              t({ cancel: !e.url.startsWith('file://') && ('script' === e.resourceType || 'stylesheet' === e.resourceType), requestHeaders: e.requestHeaders });
                            }),
                          r.setPreloads([c().join(__dirname, 'apisdk.js')]));
                        const a = {
                          textAreasAreResizable: !1,
                          devTools: e.isDev || e.unsafe,
                          nodeIntegration: !1,
                          nodeIntegrationInWorker: !1,
                          enableRemoteModule: !1,
                          webSecurity: !1,
                          allowRunningInsecureContent: !1,
                          navigateOnDragDrop: !1,
                          spellcheck: !1,
                          session: r,
                          defaultFontSize: 14,
                          defaultFontFamily: { standard: 'system-ui', serif: 'system-ui' },
                        };
                        e.preload && (a.preload = e.preload), ['FFFFFFFF', 'clipboard'].includes(e.name) && (a.enableRemoteModule = !0);
                        let l = new t.BrowserView({ webPreferences: a });
                        if (((l.webContents.executeJavaScript = null), 'FFFFFFFF' === e.name)) {
                          const e = !this.ffffffff.webContents;
                          (this.ffffffff.webContents = l.webContents), e && this.setSessionIconProtocol(this.ffffffff.webContents.session);
                        } else 'clipboard' === e.name && (this.clipboardWatch.pluginWebContents = l.webContents);
                        e.name in this.runningPluginPool ? (this.runningPluginPool[e.name].view = l) : (this.runningPluginPool[e.name] = { view: l, detachWindows: [] }),
                          e.isTpl ? l.webContents.loadURL('file://' + c().join(__dirname, 'template/index.html')) : l.webContents.loadURL(e.main);
                        const h = l.webContents.id,
                          d = () => {
                            for (let i in this.webContentId2PluginId)
                              if (((i = parseInt(i)), this.webContentId2PluginId[i] === e.name)) {
                                if (i !== h) {
                                  const e = t.webContents.fromId(i);
                                  if (e) {
                                    const i = t.BrowserWindow.fromWebContents(e);
                                    i ? i.destroy() : Y()(e.getOSProcessId());
                                  }
                                }
                                delete this.webContentId2PluginId[i];
                              }
                          };
                        l.webContents.once('destroyed', () => {
                          l = null;
                          const t = this.runningPluginPool[e.name];
                          if (t) {
                            if (t.view) {
                              if (!t.view.isDestroyed()) return;
                              t.view = null;
                            }
                            if (t.detachWindows.length > 0) return;
                            delete this.runningPluginPool[e.name];
                          }
                          d();
                        }),
                          l.webContents.once('crashed', (t, i) => {
                            i || l.destroy();
                            const n = this.runningPluginPool[e.name];
                            if (n) {
                              if (n.view && n.view === l)
                                (n.view = null),
                                  this.mainWindow.getBrowserView() === l && (this.mainWindow.setBrowserView(null), this.mainWindow.webContents.focus(), this.emptyRecovery());
                              else if (n.detachWindows.length > 0) {
                                const e = n.detachWindows.find(e => e.getBrowserView() === l);
                                e && (n.detachWindows.splice(n.detachWindows.indexOf(e), 1), e.setBrowserView(null), e.destroy());
                              }
                              n.view || 0 !== n.detachWindows.length || (delete this.runningPluginPool[e.name], d());
                            }
                          }),
                          l.webContents.once('dom-ready', async () => {
                            if (Date.now() - s > 1e4) return this.emptyRecovery(), Y()(l.webContents.getOSProcessId());
                            let t =
                              "\n        window.__EscTimestamp = 0;\n        window.addEventListener('keydown',(e)=>{\n          if(e.code==='Escape') window.__EscTimestamp=Date.now();\n        });\n        window.onpopstate = () => { history.pushState(null, null, null) }\n      ";
                            e.isTpl &&
                              (this.isWindow
                                ? (t += `window.__WorkDir = ${JSON.stringify(e.location.replace(/\\/g, '/'))};`)
                                : (t += `window.__WorkDir = ${JSON.stringify(e.location)};`)),
                              e.isDev ||
                                e.unsafe ||
                                (t += `\n          window.onerror = function (message, source, lineno, colno){\n            source = source.substr(source.indexOf('.asar/')+6)\n            const report = {\n              event: "plugin.exception",\n              "@timestamp": new Date().toISOString(),\n              platform : ${JSON.stringify(
                                  process.platform
                                )},\n              arch : ${JSON.stringify(process.arch)},\n              appVersion : ${JSON.stringify(
                                  this.appVersion
                                )},\n              osRelease : ${JSON.stringify(this.osRelease)},\n              pluginId : ${JSON.stringify(
                                  e.name
                                )},\n              pluginVersion : ${JSON.stringify(
                                  e.version
                                )},\n              error: JSON.stringify({message,source,lineno,colno})\n            }\n            fetch(${JSON.stringify(
                                  this.reportCmp.config.submitURL
                                )},{\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/x-www-form-urlencoded'\n              },\n              body: 'data='+JSON.stringify([report])\n            })\n          }`),
                              this.executeJavaScript(l.webContents, t).catch(() => {}),
                              this.isMacOs ||
                                l.webContents.insertCSS(
                                  '\n          ::-webkit-scrollbar-track-piece{ background-color: #fff; }\n          ::-webkit-scrollbar{ width:8px; height:8px; }\n          ::-webkit-scrollbar-thumb{ background-color: #e2e2e2; -webkit-border-radius: 4px; border: 2px solid #fff; }\n          ::-webkit-scrollbar-thumb:hover{ background-color: #9f9f9f; }'
                                ),
                              this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.endAssemblyPlugin()'),
                              this.displayPlugin(l, e, i, n, !0);
                          }),
                          o().production() &&
                            l.webContents.on('will-navigate', (e, t) => {
                              e.preventDefault();
                            }),
                          l.webContents.on('before-input-event', (e, i) => {
                            if ('keyDown' !== i.type) return;
                            if (!(i.meta || i.control || i.shift || i.alt)) {
                              if ('Escape' === i.key) {
                                const e = t.BrowserWindow.fromBrowserView(l);
                                if (e !== this.mainWindow) return void (e.isFullScreen() && e.setFullScreen(!1));
                                const i = Date.now();
                                setTimeout(() => {
                                  l &&
                                    this.executeJavaScript(l.webContents, 'window.__EscTimestamp').then(e => {
                                      e - i < -50 || this.outPlugin();
                                    });
                                }, 50);
                              }
                              return;
                            }
                            const n = this.hotKeyAction(i);
                            if (n)
                              if ('close' !== n)
                                if ('detach' !== n) {
                                  if ('paste' === n) {
                                    const e = this.clipboardWatch.getPasteFormat();
                                    if ('files' !== e && 'img' !== e) return;
                                    const i = t.BrowserWindow.fromBrowserView(l);
                                    return i === this.mainWindow
                                      ? void this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.getEnterFeatureCmd()').then(t => {
                                          if (!t) return;
                                          const i = this.getCurrentPluginId();
                                          if (!i) return;
                                          const n = this.pluginCmp.pluginContainer[i].featureDic[t.featureCode];
                                          n &&
                                            n.cmds.find(t => t.type === e) &&
                                            this.executeJavaScript(
                                              this.mainWindow.webContents,
                                              `window.rpcRenderer.getPasteInputCmdForSameFeature(${JSON.stringify({ pluginId: i, featureCode: t.featureCode })})`
                                            ).then(e => {
                                              e &&
                                                this.triggerPluginViewEvent(l, 'PluginOut', null, () => {
                                                  this.triggerPluginViewEvent(l, 'PluginEnter', e);
                                                });
                                            });
                                        })
                                      : void this.executeJavaScript(i.webContents, 'window.payload.featureCode').then(t => {
                                          if (!t) return;
                                          const i = this.getPluginIdByWebContents(l.webContents);
                                          if (!i) return;
                                          const n = this.pluginCmp.pluginContainer[i].featureDic[t];
                                          n &&
                                            n.cmds.find(t => t.type === e) &&
                                            this.executeJavaScript(
                                              this.mainWindow.webContents,
                                              `window.rpcRenderer.getPasteInputCmdForSameFeature(${JSON.stringify({ pluginId: i, featureCode: t })})`
                                            ).then(e => {
                                              e &&
                                                this.triggerPluginViewEvent(l, 'PluginOut', null, () => {
                                                  this.triggerPluginViewEvent(l, 'PluginEnter', e);
                                                });
                                            });
                                        });
                                  }
                                  if ('select' !== n) {
                                    if ('setting' === n) return e.preventDefault(), void this.ffffffff.goSetting();
                                    'dev' === n && (e.preventDefault(), this.openPluginDevTools(l));
                                  } else {
                                    e.preventDefault();
                                    const i = t.BrowserWindow.fromBrowserView(l);
                                    i === this.mainWindow
                                      ? (this.mainWindow.webContents.focus(), this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.mainInputSelect()'))
                                      : (i.webContents.focus(), this.executeJavaScript(i.webContents, 'window.api.subInputSelect()'));
                                  }
                                } else
                                  l === this.mainWindow.getBrowserView() &&
                                    (e.preventDefault(),
                                    process.nextTick(() => {
                                      this.detachPlugin();
                                    }));
                              else {
                                e.preventDefault();
                                const i = t.BrowserWindow.fromBrowserView(l);
                                i === this.mainWindow ? this.outPlugin() : i.close();
                              }
                          });
                      }
                      getCurrentPluginId() {
                        const e = this.mainWindow.getBrowserView();
                        if (null === e) return null;
                        let t = null;
                        for (const i in this.runningPluginPool)
                          if (this.runningPluginPool[i].view === e) {
                            t = i;
                            break;
                          }
                        return t;
                      }
                      outPlugin() {
                        this.recoverPlugin(() => {
                          this.emptyRecovery();
                        });
                      }
                      recoverPlugin(e) {
                        const t = this.getCurrentPluginId();
                        if (!t) return;
                        const i = this.pluginIsOutKill(t);
                        let n = this.mainWindow.getBrowserView();
                        this.triggerPluginViewEvent(n, 'PluginOut', null, () => {
                          this.mainWindow.setBrowserView(null), this.mainWindow.webContents.focus(), i && n.destroy(), (n = null), e();
                        });
                      }
                      endPlugin() {
                        if (!this.getCurrentPluginId()) return;
                        let e = this.mainWindow.getBrowserView();
                        this.triggerPluginViewEvent(e, 'PluginOut', null, () => {
                          this.mainWindow.setBrowserView(null), this.mainWindow.webContents.focus(), this.emptyRecovery(), e.destroy(), (e = null);
                        });
                      }
                      detachPlugin() {
                        const e = this.getCurrentPluginId();
                        if (!e) return;
                        const t = this.mainWindow.getBrowserView();
                        if (!t) return;
                        const i = t.webContents.isFocused(),
                          n = this.mainWindow.getBounds();
                        this.isWindow || this.mainWindow.hide(),
                          this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.getEnterFeatureCmd()').then(s => {
                            s &&
                              (s.subInput
                                ? this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.getMainInputValue()').then(o => {
                                    (s.subInput.value = o), this.mainWindow.setBrowserView(null), this.detachPluginLogic(e, s, n, t, i);
                                  })
                                : (this.mainWindow.setBrowserView(null), this.detachPluginLogic(e, s, n, t, i)));
                          });
                      }
                      autoDetachPlugin(e, t, i, n) {
                        this.isWindow || this.mainWindow.hide(),
                          this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.getEnterFeatureCmd()').then(s => {
                            this.detachPluginLogic(e, s, t, i, !0, n);
                          });
                      }
                      detachPluginLogic(e, i, n, s, o, r) {
                        this.emptyRecovery();
                        const a = this.pluginCmp.pluginContainer[e];
                        let l = a.logo;
                        const h = a.featureDic[i.featureCode].icon;
                        h && h.startsWith('file://') && (l = h);
                        const d = {
                          show: !1,
                          autoHideMenuBar: !0,
                          width: n.width,
                          height: n.height,
                          x: n.x,
                          y: n.y,
                          backgroundColor: this.windowBackgroundColor,
                          webPreferences: { devTools: !1, nodeIntegration: !1, navigateOnDragDrop: !1, spellcheck: !1, preload: c().join(__dirname, 'detach', 'preload.js') },
                        };
                        this.isMacOs
                          ? ((d.titleBarStyle = 'hiddenInset'), (d.fullscreenable = !1))
                          : ((d.maximizable = this.isLinux), (d.frame = !1), (d.icon = a.logo.replace('file://', '')), (d.title = a.pluginName));
                        let u = new t.BrowserWindow(d);
                        if (
                          (this.isMacOs && ie().relayoutWindowButtons(u.getNativeWindowHandle()),
                          u.setMenu(null),
                          (this.runningPluginPool[e].view = null),
                          this.runningPluginPool[e].detachWindows.push(u),
                          (u.webContents.executeJavaScript = null),
                          u.loadURL('file://' + c().join(__dirname, 'detach/index.html')),
                          u.once('ready-to-show', () => {
                            this.isWindow
                              ? ie().focusShowWindow(u.getNativeWindowHandle(), () => {
                                  u.show();
                                })
                              : u.show(),
                              o || !i.subInput ? s.webContents.focus() : u.webContents.focus(),
                              this.executeJavaScript(
                                u.webContents,
                                `window.reander(${JSON.stringify({
                                  icon: l,
                                  label: i.label,
                                  subInput: i.subInput,
                                  featureCode: i.featureCode,
                                  isDev: a.isDev,
                                  isPluginInfo: 'FFFFFFFF' !== e && !a.isDev,
                                  isDarkColors: this.isDarkColors,
                                })})`
                              ).then(() => {
                                'function' == typeof r && r(u);
                              });
                          }),
                          u.setMinimumSize(this.config.initWidth, this.config.initHeight + 1),
                          u.on('close', t => {
                            t.preventDefault();
                            const i = this.runningPluginPool[e].detachWindows;
                            i.splice(i.indexOf(u), 1),
                              this.triggerPluginViewEvent(s, 'PluginOut', null, () => {
                                u.setBrowserView(null), s.destroy(), u.destroy(), (s = null), (u = null);
                              });
                          }),
                          u.on('closed', () => {
                            (s = null), (u = null);
                          }),
                          u.setBrowserView(s),
                          s.setBounds({ x: 0, y: this.config.initHeight, width: n.width, height: n.height - this.config.initHeight }),
                          s.setAutoResize({ width: !0, height: !0 }),
                          this.isMacOs)
                        )
                          u.on('minimize', () => {
                            u.setVisibleOnAllWorkspaces(!0, { visibleOnFullScreen: !0 });
                          }),
                            u.on('restore', () => {
                              u.setVisibleOnAllWorkspaces(!1, { visibleOnFullScreen: !0 });
                            });
                        else if (this.isWindow) {
                          let e = null;
                          u.on('win32-maximize', i => {
                            e = u.getBounds();
                            const n = t.screen.getDisplayMatching(e);
                            u.setBounds({ x: n.bounds.x, y: n.bounds.y, width: n.workAreaSize.width, height: n.workAreaSize.height }),
                              s.webContents.focus(),
                              (u.movable = !1),
                              (u.resizable = !1);
                          }),
                            u.on('win32-unmaximize', t => {
                              u.setBounds(e), s.webContents.focus(), (u.movable = !0), (u.resizable = !0);
                            });
                        } else
                          this.isLinux &&
                            u.on('maximize', e => {
                              setTimeout(() => {
                                u.setBrowserView(s);
                              }, 50);
                            });
                        u.on('page-title-updated', e => {
                          e.preventDefault();
                        }),
                          u.webContents.once('crashed', () => {
                            u.close();
                          }),
                          u.on('blur', () => {
                            this.executeJavaScript(u.webContents, 'window.subInputBlurTimestamp').then(e => {
                              o = !e || Date.now() - e > 100;
                            });
                          }),
                          u.on('focus', () => {
                            o && s.webContents.focus();
                          }),
                          this.triggerPluginViewEvent(s, 'PluginDetach'),
                          this.reportCmp.info('plugin.detach', { pluginId: e });
                      }
                      destroyPlugin(e) {
                        if (!(e in this.runningPluginPool)) return;
                        const t = this.runningPluginPool[e];
                        if ((t.view && (this.mainWindow.getBrowserView() === t.view ? this.endPlugin() : t.view.destroy()), t.detachWindows.length > 0))
                          for (const e of t.detachWindows) e.close();
                      }
                      emptyRecovery() {
                        this.setExpendHeight(0), this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.empty()');
                      }
                      refreshCmdSource() {
                        this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.refreshCmdSource()'), this.voiceRefreshCmdSource && this.voiceRefreshCmdSource();
                      }
                      listenAccountEvent() {
                        this.accountCmp.on('login', e => {
                          this.executeJavaScript(this.mainWindow.webContents, `window.rpcRenderer.changeAccount(${JSON.stringify(e)})`),
                            this.voiceChangeAccount && this.voiceChangeAccount(e);
                        }),
                          this.accountCmp.on('member', e => {
                            this.executeJavaScript(this.mainWindow.webContents, `window.rpcRenderer.changeAccount(${JSON.stringify(e)})`),
                              this.voiceChangeAccount && this.voiceChangeAccount(e);
                          }),
                          this.accountCmp.on('logout', () => {
                            this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.changeAccount()'), this.voiceChangeAccount && this.voiceChangeAccount();
                          }),
                          setTimeout(() => {
                            const e = this.accountCmp.getAccountInfo();
                            if (e && 1 === e.type && e.expired_at - Math.floor(Date.now() / 1e3) < 604800) {
                              const e = new t.Notification({ body: 'uTools 会员即将到期' });
                              e.once('click', () => {
                                this.ffffffff.goDatabase();
                              }),
                                e.show();
                            }
                          }, 1e4);
                      }
                      getPluginIdByWebContents(e) {
                        return this.webContentId2PluginId[e.id];
                      }
                      pluginDatabasePullEvent(e) {
                        for (const t in e)
                          t in this.runningPluginPool &&
                            (this.runningPluginPool[t].view && this.triggerPluginViewEvent(this.runningPluginPool[t].view, 'DbPull', e[t]),
                            this.runningPluginPool[t].detachWindows.length > 0 &&
                              this.runningPluginPool[t].detachWindows.forEach(i => {
                                const n = i.getBrowserView();
                                n && this.triggerPluginViewEvent(n, 'DbPull', e[t]);
                              }));
                      }
                      autoLoadPlugin(e, t, i, n, s) {
                        e in this.pluginCmp.pluginContainer &&
                          t in this.pluginCmp.pluginContainer[e].featureDic &&
                          this.pluginCmp.pluginContainer[e].featureDic[t].cmds.find(e => 'base' === e.type && e.label === i) &&
                          (this.display.trigger(!0),
                          this.executeJavaScript(
                            this.mainWindow.webContents,
                            `window.rpcRenderer.autoLoadPlugin(${JSON.stringify({ pluginId: e, featureCode: t, label: i, value: n, subInputInput: s })})`
                          ));
                      }
                      _killAllPlugin(e) {
                        const t = { ...this.runningPluginPool };
                        e && delete t.FFFFFFFF,
                          Object.values(t).forEach(e => {
                            e.view && !e.view.isDestroyed() && e.view.destroy(), e.detachWindows.length > 0 && e.detachWindows.forEach(e => e.close());
                          });
                      }
                      killAllPlugins(e) {
                        if (this.mainWindow.getBrowserView())
                          return e && this.mainWindow.getBrowserView().webContents === this.ffffffff.webContents
                            ? this._killAllPlugin(e)
                            : this.recoverPlugin(() => {
                                this.emptyRecovery(), this._killAllPlugin(e);
                              });
                        setImmediate(() => this._killAllPlugin(e));
                      }
                      subInputAutoInput(e) {
                        setTimeout(() => {
                          this.mainWindow.getBrowserView() &&
                            this.executeJavaScript(this.mainWindow.webContents, 'window.rpcRenderer.getEnterFeatureCmd()').then(i => {
                              if (i && i.subInput && i.subInput.isFocus)
                                if (!0 === e) {
                                  if ('text/plain' !== t.clipboard.availableFormats()[0]) return;
                                  const e = t.clipboard.readText();
                                  if (!e || e.length > 99) return;
                                  this.executeJavaScript(this.mainWindow.webContents, `window.api.setSubInputValue(${JSON.stringify({ value: e })})`);
                                } else if ('string' == typeof e) {
                                  if (e.length > 99) return;
                                  this.executeJavaScript(this.mainWindow.webContents, `window.api.setSubInputValue(${JSON.stringify({ value: e })})`);
                                }
                            });
                        }, 50);
                      }
                      detachSubInputAutoInput(e, i) {
                        setTimeout(() => {
                          e.isDestroyed() ||
                            e.webContents.isDestroyed() ||
                            this.executeJavaScript(e.webContents, 'window.payload.subInput').then(n => {
                              if (n && n.isFocus)
                                if (!0 === i) {
                                  if ('text/plain' !== t.clipboard.availableFormats()[0]) return;
                                  const i = t.clipboard.readText();
                                  if (!i || i.length > 99) return;
                                  this.executeJavaScript(e.webContents, `window.api.setSubInputValue(${JSON.stringify({ value: i })})`);
                                } else if ('string' == typeof i) {
                                  if (i.length > 99) return;
                                  this.executeJavaScript(e.webContents, `window.api.setSubInputValue(${JSON.stringify({ value: i })})`);
                                }
                            });
                        }, 50);
                      }
                      openPluginDevTools(e) {
                        if (!(e = e || this.mainWindow.getBrowserView())) return;
                        const t = this.getPluginIdByWebContents(e.webContents);
                        if (!t) return;
                        const i = this.pluginCmp.pluginContainer[t];
                        if (i && (i.isDev || i.unsafe))
                          if (e.webContents.isDevToolsOpened()) e.webContents.closeDevTools();
                          else {
                            const t = this.mainWindow.getSize()[1] < this.config.openPluginHeight ? 'detach' : 'bottom';
                            e.webContents.openDevTools({ mode: t });
                          }
                      }
                      pluginAPICreateBrowserWindow(e, i, n, s) {
                        const o = n.split('?');
                        if (!/\.html$/i.test(o[0])) throw new Error('加载的不是html文件');
                        const r = this.pluginCmp.pluginContainer[i];
                        if (!r) throw new Error('插件ID不存在');
                        const a = c().join(r.location, o[0]);
                        if (!h().existsSync(a)) throw new Error('html文件不存在');
                        if (
                          ((s = s || {}).backgroundColor || (s.backgroundColor = this.windowBackgroundColor),
                          (s.autoHideMenuBar = !0),
                          (s.webPreferences = s.webPreferences || {}),
                          delete s.webPreferences.session,
                          (s.webPreferences.partition = '<' + i + '>'),
                          (s.webPreferences.nodeIntegration = !1),
                          (s.webPreferences.nodeIntegrationInWorker = !1),
                          (s.webPreferences.nodeIntegrationInSubFrames = !1),
                          s.webPreferences.defaultFontFamily || (s.webPreferences.defaultFontFamily = { standard: 'system-ui', serif: 'system-ui' }),
                          s.webPreferences.defaultFontSize || (s.webPreferences.defaultFontSize = 14),
                          s.webPreferences.preload &&
                            !s.webPreferences.preload.startsWith(r.location) &&
                            ((s.webPreferences.preload = c().join(r.location, s.webPreferences.preload)), !h().existsSync(s.webPreferences.preload)))
                        )
                          throw new Error('preload文件不存在');
                        const l = new t.BrowserWindow(s);
                        return (
                          l.removeMenu(),
                          (this.webContentId2PluginId[l.webContents.id] = i),
                          l.webContents.once('crashed', () => {
                            l.destroy();
                          }),
                          l.loadURL('file://' + a + (o.length > 1 ? '?' + o[1] : '')).finally(() => {
                            e.isDestroyed() ||
                              this.executeJavaScript(
                                e,
                                "if (window.utools && window.utools.__event__ && typeof window.utools.__event__.createBrowserWindowCallback === 'function') {\n        try { window.utools.__event__.createBrowserWindowCallback() } catch(e) {} \n        delete window.utools.__event__.createBrowserWindowCallback}"
                              );
                          }),
                          l.webContents.id
                        );
                      }
                      registerGlobalService() {
                        (global.services.setExpendHeight = e => {
                          this.setExpendHeight(e);
                        }),
                          (global.services.onWebcontensBlur = () => {
                            this.mainWebContentsBlurTimestamp = Date.now();
                          }),
                          (global.services.enterPlugin = (e, t, i) => {
                            this.enterPlugin(e, t, i);
                          }),
                          (global.services.getNativeWorkWindowInfo = () => this.display.nativeWorkWindowInfo),
                          (global.services.outPlugin = () => {
                            this.outPlugin();
                          }),
                          (global.services.recoverPlugin = e => {
                            this.recoverPlugin(e);
                          }),
                          (global.services.endPlugin = () => {
                            this.endPlugin();
                          }),
                          (global.services.detachPlugin = () => {
                            this.detachPlugin();
                          }),
                          (global.services.hideMainWindow = () => {
                            this.hideMainWindow();
                          }),
                          (global.services.setPosition = (e, t, i, n) => {
                            this.mainWindow.setBounds({ width: i, height: n, x: e, y: t });
                          }),
                          (global.services.destroyPlugin = e => {
                            this.destroyPlugin(e);
                          }),
                          (global.services.refreshCmdSource = () => {
                            this.refreshCmdSource();
                          }),
                          (global.services.sendSubInputChangeEvent = e => {
                            const t = this.mainWindow.getBrowserView();
                            t && this.triggerPluginViewEvent(t, 'SubInputChange', { text: e });
                          }),
                          (global.services.sendPluginSomeKeyDownEvent = (e, t) => {
                            if (!(e = se[e])) return;
                            const i = this.mainWindow.getBrowserView();
                            i &&
                              (Array.isArray(t) && t.length > 0
                                ? i.webContents.sendInputEvent({ type: 'keyDown', modifiers: t, keyCode: e })
                                : i.webContents.sendInputEvent({ type: 'keyDown', keyCode: e }));
                          }),
                          (global.services.getOriginImageBase64 = (e, i) => {
                            const n = t.net.request(e);
                            n.on('response', e => {
                              if (!e.headers['content-type']) return;
                              const t = e.headers['content-type'].toString();
                              if (-1 === t.toLowerCase().indexOf('image/')) return;
                              const n = 'data:' + t + ';base64,',
                                s = [];
                              e.on('data', e => {
                                s.push(e);
                              }),
                                e.on('end', () => {
                                  i(n + Buffer.concat(s).toString('base64'));
                                });
                            }),
                              n.end();
                          }),
                          (global.services.autoLoadPlugin = (e, t, i) => {
                            this.autoLoadPlugin(e, t, i);
                          }),
                          (global.services.ffffffffLogin = e => {
                            /^[a-zA-Z]+$/.test(e) &&
                              this.accountCmp.login(() => {
                                this.ffffffff.webContents.isDestroyed() || this.executeJavaScript(this.ffffffff.webContents, `window[${JSON.stringify(e)}]()`);
                              });
                          }),
                          (global.services.isDarkColors = () => this.isDarkColors);
                      }
                      getWorkWebContentsBySender(e) {
                        const i = t.BrowserView.fromWebContents(e);
                        if (!i) return null;
                        const n = t.BrowserWindow.fromBrowserView(i);
                        if (!n) return null;
                        if (n === this.mainWindow) return this.mainWindow.webContents;
                        const s = this.getPluginIdByWebContents(e);
                        if (!s) return null;
                        const o = this.runningPluginPool[s];
                        return o && o.detachWindows.includes(n) ? n.webContents : null;
                      }
                      registerPluginApi() {
                        (this.baseAPI = {
                          hideMainWindow: (e, t) => {
                            const i = this.mainWindow.getBrowserView();
                            i && i.webContents === e.sender ? (this.hideMainWindow(t), (e.returnValue = !0)) : (e.returnValue = !1);
                          },
                          showMainWindow: e => {
                            const t = this.mainWindow.getBrowserView();
                            t && t.webContents === e.sender ? (this.mainWindow.isVisible() || this.display.trigger(!0), (e.returnValue = !0)) : (e.returnValue = !1);
                          },
                          setExpendHeight: (e, i) => {
                            (i = 0 | parseInt(i)) < 1 && (i = 1);
                            const n = t.BrowserView.fromWebContents(e.sender);
                            if (!n) return void (e.returnValue = !1);
                            const s = t.BrowserWindow.fromBrowserView(n);
                            if (!s) return void (e.returnValue = !1);
                            if (s === this.mainWindow) return this.setExpendHeight(i), void (e.returnValue = !0);
                            const o = this.getPluginIdByWebContents(e.sender);
                            if (!o) return void (e.returnValue = !1);
                            const r = this.runningPluginPool[o];
                            r && r.detachWindows.includes(s) ? (s.setSize(s.getSize()[0], this.config.initHeight + i), (e.returnValue = !0)) : (e.returnValue = !1);
                          },
                          setSubInput: (e, { isFocus: t, placeholder: i }) => {
                            const n = this.getWorkWebContentsBySender(e.sender);
                            n
                              ? this.executeJavaScript(n, `window.api.setSubInput(${JSON.stringify({ placeholder: i, isFocus: t })})`).then(() => {
                                  if (t) {
                                    if (this.mainWindow.webContents === n && !this.mainWindow.isVisible()) return (this._isMainInputFocus = !0), void (e.returnValue = !0);
                                    n.isFocused() || n.focus(),
                                      this.executeJavaScript(n, 'window.api.subInputFocus()').then(() => {
                                        e.returnValue = !0;
                                      });
                                  } else e.returnValue = !0;
                                })
                              : (e.returnValue = !1);
                          },
                          removeSubInput: e => {
                            const t = this.getWorkWebContentsBySender(e.sender);
                            t
                              ? this.executeJavaScript(t, 'window.api.removeSubInput()').then(() => {
                                  e.sender.focus(), (e.returnValue = !0);
                                })
                              : (e.returnValue = !1);
                          },
                          setSubInputValue: (e, t) => {
                            const i = this.getWorkWebContentsBySender(e.sender);
                            i
                              ? ((t = String(t)),
                                this.executeJavaScript(i, `window.api.setSubInputValue(${JSON.stringify({ value: t })})`).then(() => {
                                  i.isFocused() || i.focus(),
                                    this.executeJavaScript(i, 'window.api.subInputFocus()').then(() => {
                                      e.returnValue = !0;
                                    });
                                }))
                              : (e.returnValue = !1);
                          },
                          subInputFocus: e => {
                            const t = this.getWorkWebContentsBySender(e.sender);
                            if (t) {
                              if (this.mainWindow.webContents === t && !this.mainWindow.isVisible()) return (this._isMainInputFocus = !0), void (e.returnValue = !0);
                              t.isFocused() || t.focus(),
                                this.executeJavaScript(t, 'window.api.subInputFocus()').then(() => {
                                  e.returnValue = !0;
                                });
                            } else e.returnValue = !1;
                          },
                          subInputSelect: e => {
                            const t = this.getWorkWebContentsBySender(e.sender);
                            t
                              ? (t.isFocused() || t.focus(),
                                this.executeJavaScript(t, 'window.api.subInputSelect()').then(() => {
                                  e.returnValue = !0;
                                }))
                              : (e.returnValue = !1);
                          },
                          subInputBlur: e => {
                            e.sender.focus(), (e.returnValue = !0);
                          },
                          outPlugin: e => {
                            const i = t.BrowserView.fromWebContents(e.sender);
                            if (!i) return void (e.returnValue = !1);
                            const n = t.BrowserWindow.fromBrowserView(i);
                            if (!n) return void (e.returnValue = !1);
                            if (n === this.mainWindow) return this.outPlugin(), void (e.returnValue = !0);
                            const s = this.getPluginIdByWebContents(e.sender);
                            if (!s) return void (e.returnValue = !1);
                            const o = this.runningPluginPool[s];
                            o && o.detachWindows.includes(n) ? (n.close(), (e.returnValue = !0)) : (e.returnValue = !1);
                          },
                          createBrowserWindow: (e, { url: t, options: i }) => {
                            const n = this.getPluginIdByWebContents(e.sender);
                            if (n)
                              try {
                                e.returnValue = this.pluginAPICreateBrowserWindow(e.sender, n, t, i);
                              } catch (t) {
                                e.returnValue = t.message;
                              }
                            else e.returnValue = 'called after onPluginReady event';
                          },
                          isDarkColors: e => {
                            e.returnValue = this.isDarkColors;
                          },
                        }),
                          t.ipcMain.on('api.base', (e, t, i) => {
                            t in this.baseAPI ? this.baseAPI[t].call(this, e, i) : (e.returnValue = null);
                          });
                      }
                    })(e, i, s, r);
                  },
                  !0
                ),
                this.container.set(
                  'database',
                  () => {
                    const e = this.container.get('config'),
                      t = this.container.get('window'),
                      i = this.container.get('account'),
                      n = this.container.get('report');
                    return new he(e.get('path.database'), e.get('database'), t, i, n);
                  },
                  !0
                ),
                this.container.set(
                  'voice',
                  () => {
                    const e = this.container.get('config').get('voice'),
                      t = this.container.get('window'),
                      i = this.container.get('database');
                    return new _e(e, t, i);
                  },
                  !0
                ),
                this.container.set(
                  'screencolorpicker',
                  () => {
                    const e = this.container.get('window');
                    return new Ke(e);
                  },
                  !0
                ),
                this.container.set(
                  'app',
                  () => {
                    const e = this.container.get('config').get('app'),
                      t = this.container.get('plugins'),
                      i = this.container.get('window'),
                      n = this.container.get('voice'),
                      s = this.container.get('database'),
                      o = this.container.get('screencolorpicker');
                    return new De(e, t, i, n, s, o);
                  },
                  !0
                ),
                this.container.set(
                  'featurehotkey',
                  () => {
                    const e = this.container.get('window'),
                      t = this.container.get('database');
                    return new Ie(e, t);
                  },
                  !0
                ),
                this.container.set(
                  'autoupdate',
                  () => {
                    const e = this.container.get('config'),
                      i = this.container.get('window'),
                      n = this.container.get('voice'),
                      s = this.container.get('report');
                    return new (class {
                      constructor(e, t, i, n) {
                        (this.config = e), (this.windowCmp = t), (this.voiceCmp = i), (this.reportCmp = n), (this.newVersionIsDownloaded = !1);
                      }
                      init() {
                        o().linux()
                          ? ((this.windowCmp.linuxCheckForUpdate = this.linuxCheckForUpdate.bind(this)),
                            setImmediate(() => {
                              this.linuxUpdateWatch();
                            }))
                          : (this.registerEvent(),
                            setImmediate(() => {
                              this.updateWatch();
                            })),
                          this.windowCmp.pluginCmp.on('appupdate', this.noticeUpdate.bind(this)),
                          this.registerGlobalService();
                      }
                      updateWatch() {
                        this.newVersionIsDownloaded ||
                          (ue.autoUpdater.checkForUpdates().catch(e => {
                            e.message.startsWith('net::ERR_') || this.reportCmp.info('app.checkforupdate.error', { error: e.message });
                          }),
                          setTimeout(() => {
                            this.updateWatch();
                          }, this.config.interval));
                      }
                      registerEvent() {
                        ue.autoUpdater.on('update-downloaded', e => {
                          (this.newVersionIsDownloaded = !0), this.noticeUpdate();
                        }),
                          ue.autoUpdater.on('error', e => {
                            e.message.startsWith('net::ERR_') || this.reportCmp.info('app.autoupdate.error', { error: e.message });
                          });
                      }
                      noticeUpdate(e) {
                        this.windowCmp.executeJavaScript(this.windowCmp.mainWindow.webContents, `window.rpcRenderer.noticeUpdate(${e ? JSON.stringify(e) : ''})`),
                          this.voiceCmp.voiceWindow &&
                            this.windowCmp.executeJavaScript(this.voiceCmp.voiceWindow.webContents, `window.noticeUpdate(${e ? JSON.stringify(e) : ''})`);
                      }
                      registerGlobalService() {
                        global.services.update = {
                          appUpdate: () => {
                            this.newVersionIsDownloaded && (o().linux() ? t.shell.openExternal(this.config.linuxDownloadURL) : ue.autoUpdater.quitAndInstall());
                          },
                        };
                      }
                      linuxUpdateWatch() {
                        this.newVersionIsDownloaded ||
                          (this.linuxCheckForUpdate(),
                          setTimeout(() => {
                            this.linuxUpdateWatch();
                          }, this.config.interval));
                      }
                      linuxCheckForUpdate(e, i) {
                        if (!global.isOnLine) return;
                        const n = t.app.getVersion(),
                          s = n.split('-'),
                          o = t.net.request(this.config.linuxURL + (s[1] ? s[1] : 'latest') + '-linux.yml');
                        o.on('response', t => {
                          200 === t.statusCode &&
                            t.on('data', t => {
                              const s = t.toString();
                              if (!/^version: (.*)$/m.test(s)) return;
                              const o = RegExp.$1;
                              x().gt(o, n) ? ((this.newVersionIsDownloaded = !0), this.noticeUpdate(), e && e(o)) : i && i();
                            });
                        }),
                          o.end();
                      }
                    })(e.get('autoupdate'), i, n, s);
                  },
                  !0
                ),
                this.container.set('menu', () => new de(), !0),
                this.container.set('preferences', () => new me(this.container.get('window')), !0),
                this.container.set(
                  'tray',
                  () => {
                    const e = this.container.get('config'),
                      t = this.container.get('window'),
                      i = this.container.get('account');
                    return new pe(e.get('app'), t, i);
                  },
                  !0
                ),
                this.container.set('pluginmenu', () => new we(this.container.get('app')), !0),
                this.container.set(
                  'crashreport',
                  () => {
                    const e = this.container.get('config');
                    return new (class {
                      constructor(e) {
                        this.config = e;
                      }
                      init() {
                        t.crashReporter.start({ productName: 'uTools', companyName: 'YuanLi', submitURL: this.config.submitURL, uploadToServer: !0 });
                      }
                    })(e.get('crashreport'));
                  },
                  !0
                ),
                this.container.set(
                  'clipboardextend',
                  () => {
                    const e = this.container.get('window');
                    return new We(e);
                  },
                  !0
                ),
                o().macOS()
                  ? this.container.set(
                      'darwinapp',
                      () => {
                        const e = this.container.get('plugins'),
                          t = this.container.get('window'),
                          i = this.container.get('report'),
                          n = this.container.get('screencolorpicker');
                        return new Ee(e, t, i, n, this.container.get('app'));
                      },
                      !0
                    )
                  : o().windows()
                  ? this.container.set(
                      'win32app',
                      () => {
                        const e = this.container.get('plugins'),
                          t = this.container.get('window'),
                          i = this.container.get('report'),
                          n = this.container.get('screencolorpicker');
                        return new Ve(e, t, i, n, this.container.get('app'));
                      },
                      !0
                    )
                  : o().linux() &&
                    this.container.set(
                      'linuxapp',
                      () => {
                        const e = this.container.get('plugins'),
                          t = this.container.get('window'),
                          i = this.container.get('report'),
                          n = this.container.get('screencolorpicker');
                        return new Re(e, t, i, n, this.container.get('app'));
                      },
                      !0
                    );
            }
          })(this).register(),
            (global.isOnLine = !0),
            (global.isDev = o().dev()),
            (global.services = {
              onLineStatusChange(e) {
                global.isOnLine = 'online' === e;
              },
            }),
            this.get('plugins').init(),
            this.get('window').init(),
            this.get('database').init(),
            this.get('voice').init(i),
            this.get('app').init(i),
            this.get('featurehotkey').init(),
            o().linux() || this.get('menu').init(),
            this.get('preferences').init(),
            this.get('tray').init(),
            this.get('pluginmenu').init(),
            this.get('clipboardextend').init(),
            o().macOS() ? this.get('darwinapp').init() : o().windows() ? this.get('win32app').init() : o().linux() && this.get('linuxapp').init(),
            this.get('account').init(),
            o().production() && this.get('autoupdate').init(),
            this.get('report').info('app.ready', { timeCost: new Date().valueOf() - e });
        }),
        o().production() &&
          t.app.once('before-quit', e => {
            e.preventDefault(),
              setImmediate(() =>
                o().windows()
                  ? t.app.exit(0)
                  : o().macOS()
                  ? Z().spawn('killall', ['-9', 'uTools'], { detached: !0 })
                  : o().linux()
                  ? Z().spawn('killall', ['-9', 'utools'], { detached: !0 })
                  : void 0
              );
          }),
        process.on('uncaughtException', e => {
          e.message.startsWith('net::ERR_') ||
            (this.get('report').info('app.exception', { error: e.stack }), o().dev() && console.log('UncaughtException-----------', e.message, e.stack));
        });
    }
  })().launch();
})();
