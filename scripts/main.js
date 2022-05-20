//make api call
async function makeApiCall(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (err) {
    console.log("error", err);
  }
}

function appendPic(data, parent) {
    data.forEach((ele)=>{
        var div =document.createElement("div")
        var img =document.createElement("img")
        img.src=ele.urls.small
        var p =document.createElement("p")
        p.innerText=ele.user.name
        div.append(img,p)
        parent.append(div)
    })
}

export { makeApiCall,appendPic };
