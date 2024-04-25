import julius from '/assets/images/avatars/image-juliusomo.png'
import amy from '/assets/images/avatars/image-amyrobson.png'
import max from '/assets/images/avatars/image-maxblagun.png'
import rams from '/assets/images/avatars/image-ramsesmiron.png'

export default {
  "currentUser": {
    "image": { 
      "png": julius,
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": 1710827351299,
      "score": 12,
      "user": {
        "image": { 
          "png": amy
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": 1712036826709,
      "score": 5,
      "user": {
        "image": { 
          "png": max
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": 1712641889028,
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": rams
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": 1713073966990,
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": julius
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}