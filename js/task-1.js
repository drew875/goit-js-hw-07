const a = document.querySelectorAll(".item");
console.log(`number of categories: ${a.length}`);

for (let b of a) {
    let c = b.querySelector("h2").textContent;
    let d = b.querySelectorAll("li").length;

    console.log(`names of categories: ${c}`);
    console.log(`numbers of products: ${d}`);
}
