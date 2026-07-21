(function(){
  function parseTarget(text){
    var raw=String(text||'').trim();
    var prefix=raw.startsWith('$')?'$':'';
    var suffix=raw.endsWith('+')?'+':'';
    var multiplier=/K/i.test(raw)?1000:/M/i.test(raw)?1000000:1;
    var numeric=parseFloat(raw.replace(/[^0-9.]/g,''));
    if(!Number.isFinite(numeric)) return null;
    return {raw:raw,prefix:prefix,suffix:suffix,multiplier:multiplier,target:numeric*multiplier,compact:/[KM]/i.test(raw)};
  }
  function formatValue(value,meta){
    if(meta.compact){
      if(meta.multiplier===1000000) return meta.prefix+(value/1000000).toFixed(value<meta.target?1:0)+'M'+meta.suffix;
      if(meta.multiplier===1000) return meta.prefix+Math.round(value/1000)+'K'+meta.suffix;
    }
    return meta.prefix+Math.round(value).toLocaleString('en-US')+meta.suffix;
  }
  function animate(el){
    if(el.dataset.v3Animated==='1') return;
    var meta=parseTarget(el.textContent);
    if(!meta) return;
    el.dataset.v3Animated='1';
    var start=performance.now();
    var duration=1200;
    function step(now){
      var p=Math.min(1,(now-start)/duration);
      var eased=1-Math.pow(1-p,3);
      el.textContent=formatValue(meta.target*eased,meta);
      if(p<1) requestAnimationFrame(step); else el.textContent=meta.raw;
    }
    requestAnimationFrame(step);
  }
  function initCounters(){
    var items=document.querySelectorAll('.stat-num');
    if(!items.length) return;
    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(entries,obs){
        entries.forEach(function(entry){
          if(entry.isIntersecting){ animate(entry.target); obs.unobserve(entry.target); }
        });
      },{threshold:0.45});
      items.forEach(function(el){io.observe(el);});
    }else{
      items.forEach(animate);
    }
  }
  document.addEventListener('DOMContentLoaded',initCounters);
})();
