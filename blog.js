
let blogs = []


function addBlog(event) {
    event.preventDefault()


    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value

    let image = document.getElementById('input-blog-image').files
    
    image = URL.createObjectURL(image[0])
    
    let blog = {
        
        title: title,
        content: content,
        image:image,
        author:'eva',
        postAt:new Date()
    }

    blogs.push(blog)

    console.log(blogs);

    // for (let i = 0; i < blogs.length; i++){
    //     console.log(blogs[i]);
    // } 
    renderBlog()

}

function renderBlog() {
    let contentContainer = document.getElementById('contents')

    contentContainer.innerHTML = ''

    for (let i = 0; i < blogs.length; i++){
     contentContainer.innerHTML +=`        <div class="blog-list-item">
     <div class="blog-image">
       <img src="${blogs[i].image}" alt="" />
     </div>
     <div class="blog-content">
       <div class="btn-group">
         <button class="btn-edit">Edit Post</button>
         <button class="btn-post">Post Blog</button>
       </div>
       <h1>
         <a href="blog-detail.html" target="_blank"
           >${blogs[i].title}</a
         >
       </h1>
       <div class="detail-blog-content">
       ${getFullTime(blogs[i].postAt)} |${blogs[i].author}
       </div>
       <p>
       ${blogs[i].content}
       </p>
       <div style="text-align:right;">
            <span style="font-size:13 px; color:grey">
            ${getDistanceTime(blogs[i].postAt)}
            </span>
     </div>
   </div>`
    } 
}


// let waktu = new Date()

// console.log(waktu)
// console.log(waktu.getDate());
// console.log(waktu.getMonth());
// console.log(waktu.getFullYear());

// console.log(waktu.getHours());
// console.log(waktu.getMinutes());

let month =['January','Febuary','March','April','May','June','July','August','September','October','November','Desember']

function getFullTime(time) {

  let date = time.getDate()
  let monthIndex = time.getMonth ()
  let year = time.getFullYear()

  let hours = time.getHours()
  let minutes = time.getMinutes()
  
  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes}WIB`

  return FullTime
}

function getDistanceTime(time) {
  // dimana function getDistanceTime di dalamanya terdapat data paramater waktu full time

  let timePost = time;
  let timeNow = new Date();

  let distance = timeNow - timePost; 
  let milisecond = 1000;      //dalam 1 detik
  let secondInhours = 3600;  // dalamm 1 jam(berapa detik 60 *60)
  let hoursInDay = 23;       //dalam 1 hari(berapa jam)
  let seconds = 60;           //dalam 1 detik
  let minutes = 60;          //dalam 1 menit

  let distanceDay  =distance / (milisecond * secondInhours * hoursInDay);
  let distanceHours = Math.floor(distance / (milisecond * seconds * minutes));   ///milisecond/detik/menit
  let distanceMinutes = Math.floor(distance / (milisecond * seconds));
  let distanceSeconds = Math.floor(distance / milisecond );

  // distanceDay=Math.second(distanceDay)
  // Jika dia menggunakan floor dia kurang dari sejam maka hasilnya akan minus
  // Jadi lebih baik menggunakan floor

  distanceDay = Math.floor(distanceDay);

  // kondisi menampilkan hari
  if (distanceDay >= 1) {
    return `${distanceDay} day ago`;
  } else{
    if (distanceHours >=1) {
    return `${distanceHours} hours ago`;      
    } else {
    if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`;
    }else {
    return`${distanceSeconds} seconds ago`
    }
    }
  }

}

setInterval(() => {
  renderBlog()
}, 1000)
