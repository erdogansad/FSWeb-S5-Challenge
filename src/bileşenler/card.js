import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  let createEl = (el, obj) => {
        el = document.createElement(el);
        if(obj !== undefined) Object.assign(el, obj);
        return el;
      },
      img = createEl("img", {src: makale["yazarFoto"]}),
      imgContainer = createEl("div", {className: "img-container"}),
      authorText = createEl("span", {textContent: `${makale["yazarAdi"]} tarafından`}),
      author = createEl("div", {className: "author"}),
      headLine = createEl("div", {className: "headline", textContent: makale["anabaslik"]}),
      card = createEl("div", {className: "card"});
  imgContainer.appendChild(img);
  author.append(imgContainer, authorText);
  card.append(headLine, author);
  return card;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  let el = document.querySelector(secici);
  axios.get("http://localhost:5001/api/makaleler")
      .then(resp => {
        let makaleler = resp.data.makaleler;
        for(let i in makaleler){
          let mkl = makaleler[i];
          for(let idx in mkl){
            let card = Card(mkl[idx]);
            el.appendChild(card);
          }
        }
      });
}

export { Card, cardEkleyici }
