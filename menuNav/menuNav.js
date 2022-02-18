export const menuNav = (target,position)=>{
    const template =  `
    <ul class="menuNav">
               <li class="menu selected">
                <a><img src="https://static-page.kakao.com/static/pc/menu_home.svg?156813c20605e12311c90bae39f38c31"/></a>
            </li>
            <li class="menu toon">
                <div class="dot"></div>
                <a><img src="https://static-page.kakao.com/static/pc/menu_toon.svg?fd6837bff2e823e13c693320961cc5a8"/></a>
            </li>
            <li class="menu">
                <div class="dot"></div>
                <a><img src="https://static-page.kakao.com/static/pc/menu_novel.svg?417f894a74c6cd5334b4a84cfa470d55"/></a>
            </li>
            <li class="menu">
                <div class="dot"></div>
                <a><img src="https://static-page.kakao.com/static/pc/menu_vod.svg?549a6831d63d4b27a463c6cc2be7044f"/></a>
            </li>
            <li class="menu">
                <div class="dot"></div>
                <a><img src="https://static-page.kakao.com/static/pc/menu_broadcast.svg?549cf0553505cda3d418aa684f358c18"/></a>
            </li>
            <li class="menu">
                <div class="dot"></div>
                <a><img src="https://static-page.kakao.com/static/pc/menu_book.svg?eb9b97c2528955f1e6cf788c6fe7e504"/></a>
            </li>
</ul>
`
    target.insertAdjacentHTML(position, template);
}