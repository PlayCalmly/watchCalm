const videos = [
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 1,
    monthsAgo: 1,
    link: "./vid/id/0000001"
  },
{
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
  {
    thumbnailImage: "https://raw.githubusercontent.com/PlayCalmly/watchCalm/main/thumbs/1280%20x%20720.png",
    title: "Video Template",
    videoDuration: "0:00",
    views: 10,
    monthsAgo: 1
  },
]


const main = document.querySelector("main")
main.innerHTML = ""
videos.forEach(video => {
  const newVideoItem = document.createElement("div")
  newVideoItem.classList.add("flex")
  newVideoItem.classList.add("flex-col")
  newVideoItem.classList.add("w-72")
  newVideoItem.innerHTML = 
  `
  <div class="flex flex-col w-72">
        <div class="video-thumbnail w-full h-44 relative">
          <a href="${video.link}"><img class="w-full h-full object-cover cursor-pointer"
            src="${video.thumbnailImage}" alt="video"></a>
          <span class="text-white bg-black p-1 bottom-1 right-1 absolute text-xs">${video.videoDuration}</span>
        </div>
        <div class="mt-2 flex justify-between items-center">
          <h3 class="ml-3 text-sm cursor-pointer font-bold">${video.title}
          </h3>
        </div>
        <div class="text-sm text-gray-600 mt-2 ml-12">
          <p class="text-gray-900">~ ${video.views}k Views . ${video.monthsAgo} Months Ago</p>
        </div>
      </div>
  `
  main.appendChild(newVideoItem)
});
