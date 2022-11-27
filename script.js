
let qoutes = [
    {author:'Adidun Rasheed', Quote: `"Knowledge is learnt within a short period of time,but the usage is eternal"`},

    {author:'Michael Jordan',Quote:`“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.”`},

    {author:'Mary Kay Ash',Quote:`“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”`},

    {author:'Arianna Huffington',Quote:`“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.”`},

    {author:'Robert Frost',Quote:`“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference”`},

    {author:'Kevin Kruse',Quote:`“Life isn't about getting and having, it's about giving and being human.”`},

    {author:'Alice Walker',Quote:`“The most common way people give up their power is by thinking they don’t have any.”`},

    {author:'Chinese Proverb',Quote:`“The best time to plant a tree was 20 years ago. The second best time is now. ”`},

    {author:'Steve Jobs',Quote:`“Your time is limited, so don’t waste it living someone else’s life.”`},

    {author:'Prophet Muhammad',Quote:`“When you see a person who has been given more than you in money and beauty, then look to those who have been given less”`},
]


   let generateButton = document.getElementById('qouteGenerateButton')

   generateButton.onclick = () => {

   let randomQoutes = Math.floor(Math.random()*qoutes.length)
   let getAuthor = qoutes[randomQoutes].author

   let getQoutes = qoutes[randomQoutes].Quote
   
    let qoute = document.getElementById('qouteArea')
    qoute.innerHTML = getQoutes
    let author = document.getElementById('authorArea')
    author.innerText = getAuthor
   }
    

   
    

