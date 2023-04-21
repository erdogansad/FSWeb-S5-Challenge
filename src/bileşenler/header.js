const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  let createEl = (el, obj) => {
        el = document.createElement(el);
        if(obj !== undefined) Object.assign(el, obj);
        return el;
      },
      date = createEl("span", {className: "date", textContent: tarih}),
      title = createEl("h1", {textContent: baslik}),
      temp = createEl("span", {className: "temp", textContent: yazi}),
      header = createEl("div", {className: "header"});

  header.append(date,title,temp);
  return header;
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  let el = document.querySelector(secici),
      header = Header("Lorem Ipsum", "01.01.1970", "Lorem ipsum dolor sit amet.");
  el.append(header);
}

export { Header, headerEkleyici }
