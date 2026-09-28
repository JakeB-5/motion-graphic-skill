// clean: light paper-white, faint baseline grid, page counter only, panel slide transitions
function drawBg(t){
  ctx.fillStyle = C.bg; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = rgba(C.ink, .045); for (let y = 120; y < H - 100; y += 60) ctx.fillRect(110, y, W - 220, 1);
}
function overlay(t){}
function hud(t, sc){
  T(CFG.hudTitle, 110, 70, { f: FK, w: 700, z: 20, c: C.dim });
  T(`${String(sc.i + 1).padStart(2, '0')} / ${String(SC.length).padStart(2, '0')}`, W - 110, 70, { f: FK, w: 700, z: 20, c: C.dim, al: 'right' });
  ctx.fillStyle = C.acc; ctx.fillRect(110, 88, 48, 4);
}
function transition(sc, lt){   // a panel in the accent colour slides across and uncovers the new scene
  const p = eIO(inv(0, .45, lt)); if (p >= 1) return;
  ctx.fillStyle = C.acc; ctx.fillRect(lerp(0, W, p), 0, W, H);
  ctx.fillStyle = C.bg; ctx.fillRect(lerp(-W * .15, W, p) + W * .12, 0, W, H);
}
