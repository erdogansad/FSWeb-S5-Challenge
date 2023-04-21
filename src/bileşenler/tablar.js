import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  let createEl = (el, obj) => {
        el = document.createElement(el);
        if(obj !== undefined) Object.assign(el, obj);
        return el;
      },
      topics = createEl("div", {className: "topics"});
  konu.forEach(text => {
    let el = createEl("div", {className: "tab", textContent: text})
    topics.appendChild(el);
  });
  return topics;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  let el = document.querySelector(secici);
  axios.get("http://localhost:5001/api/konular")
  .then((resp) => {
    let tabs = Tablar(resp.data.konular);
    el.appendChild(tabs);
  })
  .catch( err => {
    console.log(err);
  })
}

export { Tablar, tabEkleyici }
