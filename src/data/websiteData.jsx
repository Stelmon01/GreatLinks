// src/data/websiteData.js

const websiteData = [
    {
      category: 'Search Engines',
      sites: [
        { 
          name: 'Google', 
          link: 'https://www.google.com', 
          rank: 1 ,
          description: 'Google Search is the most widely used search engine in the world, known for its fast and accurate results. Launched in 1998 by Larry Page and Sergey Brin, it revolutionized the way information is accessed online by using a ranking system called PageRank to prioritize web pages based on relevance and authority.'
        },
        { 
          name: 'Bing', 
          link: 'https://www.bing.com', 
          rank: 2 ,
          description: 'Bing is a search engine developed by Microsoft, launched in 2009 as a successor to the companys earlier search platforms. It offers a clean interface and provides users with web, image, video, and news search results.'
        },
        { 
          name: 'DuckDuckGo', 
          link: 'https://www.duckduckgo.com', 
          rank: 3 ,
          description: 'DuckDuckGo is a search engine known for its focus on user privacy and data protection. Launched in 2008, it distinguishes itself by not tracking users’ search history or personal information, making it a popular choice for those concerned about privacy.'
        },
      ]
    },
    {
      category: 'Social Media',
      sites: [
        { 
          name: 'Facebook', 
          link: 'https://www.facebook.com', 
          rank: 1 ,
          description: 'Facebook is a social networking platform launched in 2004 by Mark Zuckerberg and his college roommates. It allows users to create personal profiles, connect with friends, share updates, photos, and videos, and engage in various forms of social interaction.'
        },
        { 
          name: 'Instagram', 
          link: 'https://www.instagram.com', 
          rank: 2 ,
          description: 'Instagram is a social media platform launched in 2010 by Kevin Systrom and Mike Krieger, focusing on photo and video sharing. It allows users to post images and videos, apply filters, and share their content with followers.'
        },
        { 
          name: 'Twitter', 
          link: 'https://www.twitter.com', 
          rank: 3 ,
          description: 'Twitter is a social media platform launched in 2006 by Jack Dorsey, Biz Stone, and Evan Williams. It allows users to post and interact with short messages known as tweets, which are limited to 280 characters.'
        },
      ]
    },
    {
      category: 'Learning Platforms',
      sites: [
        { 
          name: 'Coursera', 
          link: 'https://www.coursera.org', 
          rank: 1 ,
          description: 'Coursera is an online learning platform founded in 2012 by Daphne Koller and Andrew Ng. It offers a wide range of courses, specializations, and degree programs from top universities and institutions worldwide.'
        },
        { 
          name: 'Udemy', 
          link: 'https://www.udemy.com', 
          rank: 2 ,
          description: 'Udemy is an online learning and teaching platform founded in 2010. It offers a vast array of courses across various subjects, including technology, business, and personal development.' 
        },
        { 
          name: 'edX', 
          link: 'https://www.edx.org', 
          rank: 3 ,
          description: 'edX is an online learning platform founded in 2012 by Harvard University and MIT. It offers a wide range of courses, professional certificates, and degree programs from top universities and institutions worldwide.'
        },
      ]
    },
      {
        category: "Online Shopping",
        sites: [
          {
            name: "Amazon",
            link: "https://www.amazon.com",
            rank: 1,
            description: "Amazon is the world’s largest online retailer, offering a wide variety of products, from books and electronics to clothing and home goods. Founded by Jeff Bezos in 1994, it also provides cloud computing services and streaming entertainment."
          },
          {
            name: "eBay",
            link: "https://www.ebay.com",
            rank: 2,
            description: "eBay is an online auction and shopping website launched in 1995, where individuals and businesses can buy and sell items. It features a wide range of new and used goods across numerous categories."
          },
          {
            name: "Alibaba",
            link: "https://www.alibaba.com",
            rank: 3,
            description: "Alibaba is a leading global e-commerce platform based in China, founded in 1999. It connects businesses with suppliers worldwide, focusing on wholesale trade and bulk product sourcing."
          },
        ]
      },
      {
        category: "Streaming Platforms",
        sites: [
          {
            name: "Netflix",
            link: "https://www.netflix.com",
            rank: 1,
            description: "Netflix is a popular streaming platform offering a wide selection of movies, TV shows, and original content. Launched in 1997, it pioneered subscription-based streaming services globally."
          },
          {
            name: "YouTube",
            link: "https://www.youtube.com",
            rank: 2,
            description: "YouTube is a video-sharing platform where users can upload, watch, and interact with videos. Founded in 2005, it is a hub for diverse content, from tutorials and entertainment to educational videos."
          },
          {
            name: "Spotify",
            link: "https://www.spotify.com",
            rank: 3,
            description: "Spotify is a music streaming service launched in 2008, offering millions of songs, podcasts, and playlists. It allows users to listen on-demand or discover curated recommendations."
          },
        ]
      },
      {
        category: "News and Media",
        sites: [
          {
            name: "BBC News",
            link: "https://www.bbc.com/news",
            rank: 1,
            description: "BBC News is a trusted international news outlet providing accurate and up-to-date coverage on global events, politics, science, and culture."
          },
          {
            name: "CNN",
            link: "https://www.cnn.com",
            rank: 2,
            description: "CNN is a leading news organization offering 24-hour coverage of breaking news, politics, and global events, founded in 1980 by Ted Turner."
          },
          {
            name: "Reuters",
            link: "https://www.reuters.com",
            rank: 3,
            description: "Reuters is a global news agency delivering real-time, in-depth reports on business, finance, technology, and world news."
          },
        ]
      },

      {
          category: 'Educational Resources',
          sites: [
            {
              name: "Khan Academy",
              link: "https://www.khanacademy.org",
              rank: 1,
              description: "Khan Academy is a free educational platform offering courses, lessons, and practice exercises on a variety of subjects, including math, science, and programming."
            },
            {
              name: "Coursera",
              link: "https://www.coursera.org",
              rank: 2,
              description: "Coursera provides access to online courses and certifications from top universities and institutions worldwide, covering numerous academic and professional fields."
            },
            {
              name: "Udemy",
              link: "https://www.udemy.com",
              rank: 3,
              description: "Udemy is an online learning platform featuring thousands of courses taught by experts, offering both personal development and career-enhancing skills."
            },
          ]
        },
        {
          category: 'Technology News',
          sites: [
            {
              name: "TechCrunch",
              link: "https://www.techcrunch.com",
              rank: 1,
              description: "TechCrunch is a leading technology news platform covering startups, product launches, and industry trends in the tech world."
            },
            {
              name: "Wired",
              link: "https://www.wired.com",
              rank: 2,
              description: "Wired is a technology magazine that explores the intersection of technology, culture, and business through in-depth articles and analysis."
            },
            {
              name: "The Verge",
              link: "https://www.theverge.com",
              rank: 3,
              description: "The Verge is a multimedia platform offering news and reviews on technology, science, and entertainment, focusing on innovation and modern culture."
            },
          ]
        },
        {
          category: 'Online Learning Platforms',
          sites: [
            {
              name: "edX",
              link: "https://www.edx.org",
              rank: 1,
              description: "edX offers free and paid online courses from top universities worldwide, with certifications available for various fields of study."
            },
            {
              name: "LinkedIn Learning",
              link: "https://www.linkedin.com/learning",
              rank: 2,
              description: "LinkedIn Learning provides professional development courses focusing on career advancement, technical skills, and personal growth."
            },
            {
              name: "Skillshare",
              link: "https://www.skillshare.com",
              rank: 3,
              description: "Skillshare is a platform that emphasizes creative and entrepreneurial skills, offering courses in design, photography, writing, and business."
            },
          ]
        },
        {
          category: 'Cloud Storage Services',
          sites: [
            {
              name: "Google Drive",
              link: "https://www.google.com/drive",
              rank: 1,
              description: "Google Drive is a cloud storage service offering seamless file storage, sharing, and collaboration tools integrated with other Google products."
            },
            {
              name: "Dropbox",
              link: "https://www.dropbox.com",
              rank: 2,
              description: "Dropbox is a cloud-based file hosting service that allows users to store, sync, and share files across multiple devices easily."
            },
            {
              name: "OneDrive",
              link: "https://www.onedrive.com",
              rank: 3,
              description: "OneDrive is Microsoft’s cloud storage solution, providing easy access and integration with Microsoft Office products and other tools."
            },
          ]
        },
        {
          category: 'Health and Fitness',
          sites: [
            {
              name: "MyFitnessPal",
              link: "https://www.myfitnesspal.com",
              rank: 1,
              description: "MyFitnessPal is a comprehensive fitness and nutrition app that helps users track their diet, exercise, and overall health goals."
            },
            {
              name: "WebMD",
              link: "https://www.webmd.com",
              rank: 2,
              description: "WebMD is a trusted source for medical information, providing articles, tools, and advice on health, wellness, and medical conditions."
            },
            {
              name: "Fitbit",
              link: "https://www.fitbit.com",
              rank: 3,
              description: "Fitbit is a fitness tracking platform offering wearable devices and an app to monitor activity, sleep, and overall wellness."
            },
          ]
        },
        {
          category: 'Travel and Booking',
          sites: [
            {
              name: "Booking.com",
              link: "https://www.booking.com",
              rank: 1,
              description: "Booking.com is a global travel platform that provides hotel, flight, and car rental options for travelers worldwide."
            },
            {
              name: "Expedia",
              link: "https://www.expedia.com",
              rank: 2,
              description: "Expedia is an online travel agency offering deals on flights, hotels, and vacation packages with user-friendly tools for trip planning."
            },
            {
              name: "Airbnb",
              link: "https://www.airbnb.com",
              rank: 3,
              description: "Airbnb connects travelers with hosts offering unique accommodations, from private homes to boutique stays, for short- and long-term trips."
            },
          ]
        },
        {
          category: 'Online Forums and Communities',
          sites: [
            {
              name: "Reddit",
              link: "https://www.reddit.com",
              rank: 1,
              description: "Reddit is a social platform featuring thousands of user-generated communities discussing a wide variety of topics and interests."
            },
            {
              name: "Quora",
              link: "https://www.quora.com",
              rank: 2,
              description: "Quora is a question-and-answer platform where users can ask questions, share knowledge, and learn from experts in various fields."
            },
            {
              name: "Stack Overflow",
              link: "https://stackoverflow.com",
              rank: 3,
              description: "Stack Overflow is a community-driven platform for programmers to ask and answer technical questions and share coding expertise."
            },
          ]
        },
        {
          category: 'Freelancing Platforms',
          sites: [
            {
              name: "Upwork",
              link: "https://www.upwork.com",
              rank: 1,
              description: "Upwork is a popular freelancing platform connecting businesses with independent professionals for a wide range of projects, from design to software development."
            },
            {
              name: "Fiverr",
              link: "https://www.fiverr.com",
              rank: 2,
              description: "Fiverr is a marketplace for freelancers offering services in various categories, such as graphic design, writing, and digital marketing, at affordable rates."
            },
            {
              name: "Toptal",
              link: "https://www.toptal.com",
              rank: 3,
              description: "Toptal is a premium freelancing platform that connects clients with the top 3% of freelance talent in software development, design, and finance."
            },
          ]
        },
        {
          category: 'Programming and Development Resources',
          sites: [
            {
              name: "GitHub",
              link: "https://www.github.com",
              rank: 1,
              description: "GitHub is a platform for developers to collaborate on projects, manage code repositories, and share open-source contributions."
            },
            {
              name: "Stack Overflow",
              link: "https://stackoverflow.com",
              rank: 2,
              description: "Stack Overflow is a Q&A site for developers to ask, answer, and share programming knowledge across various languages and technologies."
            },
            {
              name: "Codecademy",
              link: "https://www.codecademy.com",
              rank: 3,
              description: "Codecademy offers interactive coding lessons for beginners and advanced learners in languages like Python, JavaScript, and HTML/CSS."
            },
          ]
        },
        {
          category: 'Digital Design Tools',
          sites: [
            {
              name: "Canva",
              link: "https://www.canva.com",
              rank: 1,
              description: "Canva is a user-friendly graphic design tool offering templates and assets for creating presentations, social media posts, and more."
            },
            {
              name: "Adobe Creative Cloud",
              link: "https://www.adobe.com/creativecloud",
              rank: 2,
              description: "Adobe Creative Cloud is a suite of professional design software, including Photoshop, Illustrator, and Premiere Pro, for creative professionals."
            },
            {
              name: "Figma",
              link: "https://www.figma.com",
              rank: 3,
              description: "Figma is a cloud-based design and prototyping tool enabling teams to collaborate in real-time on UI/UX projects."
            },
          ]
        },
        {
          category: 'Finance and Investing',
          sites: [
            {
              name: "Yahoo Finance",
              link: "https://finance.yahoo.com",
              rank: 1,
              description: "Yahoo Finance provides financial news, stock market data, and tools for tracking investments and analyzing trends."
            },
            {
              name: "Robinhood",
              link: "https://www.robinhood.com",
              rank: 2,
              description: "Robinhood is a commission-free stock trading platform that allows users to invest in stocks, ETFs, and cryptocurrencies easily."
            },
            {
              name: "Investopedia",
              link: "https://www.investopedia.com",
              rank: 3,
              description: "Investopedia offers educational content on investing, personal finance, and market trends, along with tools for financial planning."
            },
          ]
        },
        {
          category: 'Entertainment and Fun',
          sites: [
            {
              name: "IMDb",
              link: "https://www.imdb.com",
              rank: 1,
              description: "IMDb is a database of movies, TV shows, and celebrity information, offering reviews, ratings, and recommendations."
            },
            {
              name: "Twitch",
              link: "https://www.twitch.tv",
              rank: 2,
              description: "Twitch is a live streaming platform primarily for gamers, but it also hosts streams of music, art, and other creative content."
            },
            {
              name: "9GAG",
              link: "https://www.9gag.com",
              rank: 3,
              description: "9GAG is a platform for sharing and discovering memes, funny videos, and entertaining content from around the web."
            },
          ]
        },
        {
          category: 'Job Search and Careers',
          sites: [
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com",
              rank: 1,
              description: "LinkedIn is a professional networking platform where users can connect with colleagues, search for jobs, and showcase their career achievements."
            },
            {
              name: "Indeed",
              link: "https://www.indeed.com",
              rank: 2,
              description: "Indeed is a leading job search engine that aggregates job listings from company websites, job boards, and recruitment agencies."
            },
            {
              name: "Glassdoor",
              link: "https://www.glassdoor.com",
              rank: 3,
              description: "Glassdoor provides job listings along with company reviews, salary reports, and interview insights shared by employees."
            },
          ]
        },
        {
          category: 'Food and Recipe Platforms',
          sites: [
            {
              name: "AllRecipes",
              link: "https://www.allrecipes.com",
              rank: 1,
              description: "AllRecipes is a comprehensive platform featuring user-submitted recipes, cooking tips, and meal planning tools."
            },
            {
              name: "Epicurious",
              link: "https://www.epicurious.com",
              rank: 2,
              description: "Epicurious offers a curated collection of recipes, cooking guides, and tips for both novice and experienced cooks."
            },
            {
              name: "Tasty",
              link: "https://tasty.co",
              rank: 3,
              description: "Tasty provides quick, easy-to-follow recipes with engaging video tutorials, focused on accessible and delicious meals."
            },
          ]
        },
        {
          category: "E-commerce Platforms",
          sites: [
            {
              name: "Amazon",
              link: "https://www.amazon.com",
              rank: 1,
              description: "Amazon is the largest online marketplace, offering a wide variety of products, fast shipping, and customer-friendly policies."
            },
            {
              name: "eBay",
              link: "https://www.ebay.com",
              rank: 2,
              description: "eBay is an auction-based e-commerce platform where users can buy and sell new or used items ranging from electronics to collectibles."
            },
            {
              name: "Etsy",
              link: "https://www.etsy.com",
              rank: 3,
              description: "Etsy is an online marketplace specializing in handmade, vintage, and unique craft items created by independent sellers."
            }
          ]
        },
        {
          category: "Streaming Platforms",
          sites: [
            {
              name: "Netflix",
              link: "https://www.netflix.com",
              rank: 1,
              description: "Netflix is a leading subscription-based streaming service offering movies, TV shows, documentaries, and original content."
            },
            {
              name: "YouTube",
              link: "https://www.youtube.com",
              rank: 2,
              description: "YouTube is a video-sharing platform with a wide variety of user-generated and professional content, from tutorials to entertainment."
            },
            {
              name: "Hulu",
              link: "https://www.hulu.com",
              rank: 3,
              description: "Hulu provides streaming access to movies, TV shows, and live TV, with an extensive library of current and classic content."
            }
          ]
        },
        {
          category: "Social Media Platforms",
          sites: [
            {
              name: "Facebook",
              link: "https://www.facebook.com",
              rank: 1,
              description: "Facebook is a global social networking site allowing users to connect, share updates, photos, and videos with friends and groups."
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com",
              rank: 2,
              description: "Instagram is a photo and video-sharing platform known for its visual content focus, used by individuals and brands for creative expression."
            },
            {
              name: "Twitter",
              link: "https://www.twitter.com",
              rank: 3,
              description: "Twitter is a social media platform designed for sharing short updates, news, and discussions in real-time."
            }
          ]
        },
        {
          category: "Pet Care Resources",
          sites: [
            {
              name: "Chewy",
              link: "https://www.chewy.com",
              rank: 1,
              description: "Chewy is an online retailer offering pet food, supplies, and medication, with fast shipping and subscription options."
            },
            {
              name: "Petfinder",
              link: "https://www.petfinder.com",
              rank: 2,
              description: "Petfinder helps users find adoptable pets near them and offers resources for responsible pet ownership."
            },
            {
              name: "The Spruce Pets",
              link: "https://www.thesprucepets.com",
              rank: 3,
              description: "The Spruce Pets provides expert advice, care guides, and tips for pet owners, covering a variety of animals."
            }
          ]
        },
        {
          category: "Environmental and Sustainability Resources",
          sites: [
            {
              name: "WWF",
              link: "https://www.worldwildlife.org",
              rank: 1,
              description: "WWF is a global organization focused on wildlife conservation, climate action, and promoting sustainable practices."
            },
            {
              name: "Greenpeace",
              link: "https://www.greenpeace.org",
              rank: 2,
              description: "Greenpeace is an environmental advocacy group addressing issues like deforestation, pollution, and renewable energy."
            },
            {
              name: "Earth911",
              link: "https://earth911.com",
              rank: 3,
              description: "Earth911 provides information and resources for recycling, waste reduction, and sustainable living practices."
            }
          ]
        },
        {
          category: "Personal Finance Management",
          sites: [
            {
              name: "Mint",
              link: "https://www.mint.com",
              rank: 1,
              description: "Mint is a free personal finance app for budgeting, tracking expenses, and managing financial goals."
            },
            {
              name: "YNAB (You Need A Budget)",
              link: "https://www.youneedabudget.com",
              rank: 2,
              description: "YNAB is a budgeting software designed to help users allocate every dollar intentionally and gain control over their finances."
            },
            {
              name: "Personal Capital",
              link: "https://www.personalcapital.com",
              rank: 3,
              description: "Personal Capital provides tools for managing investments, tracking net worth, and planning for retirement."
            }
          ]
        },
        {
          category: "Gaming Platforms",
          sites: [
            {
              name: "Steam",
              link: "https://store.steampowered.com",
              rank: 1,
              description: "Steam is a digital distribution platform for PC games, offering a vast library of games, community features, and sales."
            },
            {
              name: "Epic Games Store",
              link: "https://www.epicgames.com/store",
              rank: 2,
              description: "Epic Games Store is an online game marketplace known for its exclusive titles, free games, and developer-friendly policies."
            },
            {
              name: "GOG",
              link: "https://www.gog.com",
              rank: 3,
              description: "GOG is a DRM-free platform offering classic and new PC games, emphasizing user ownership and accessibility."
            }
          ]
        },
        {
          category: "News Aggregators",
          sites: [
            {
              name: "Google News",
              link: "https://news.google.com",
              rank: 1,
              description: "Google News provides personalized news coverage from a variety of sources, organized by topics and interests."
            },
            {
              name: "Flipboard",
              link: "https://www.flipboard.com",
              rank: 2,
              description: "Flipboard curates news and stories from multiple sources into an engaging magazine-style layout for readers."
            },
            {
              name: "Feedly",
              link: "https://www.feedly.com",
              rank: 3,
              description: "Feedly is an RSS reader and news aggregator, allowing users to follow blogs, websites, and news sources in one place."
            }
          ]
        },
        {
          category: "Online Education",
          sites: [
            {
              name: "Coursera",
              link: "https://www.coursera.org",
              rank: 1,
              description: "Coursera offers online courses, certifications, and degrees from top universities and institutions globally."
            },
            {
              name: "edX",
              link: "https://www.edx.org",
              rank: 2,
              description: "edX provides high-quality courses from renowned universities, including free auditing options and certificates upon completion."
            },
            {
              name: "Udemy",
              link: "https://www.udemy.com",
              rank: 3,
              description: "Udemy is an online learning platform offering courses in various fields, taught by industry professionals and experts."
            }
          ]
        },
        {
          category: "Tech News and Reviews",
          sites: [
            {
              name: "TechCrunch",
              link: "https://www.techcrunch.com",
              rank: 1,
              description: "TechCrunch covers the latest in technology, startups, and business, offering breaking news and in-depth analyses."
            },
            {
              name: "The Verge",
              link: "https://www.theverge.com",
              rank: 2,
              description: "The Verge reports on the intersection of technology, science, art, and culture, featuring product reviews and news."
            },
            {
              name: "Gizmodo",
              link: "https://gizmodo.com",
              rank: 3,
              description: "Gizmodo delivers tech news, gadget reviews, and insights into science and technology trends."
            }
          ]
        },
        {
          category: "Travel Planning",
          sites: [
            {
              name: "TripAdvisor",
              link: "https://www.tripadvisor.com",
              rank: 1,
              description: "TripAdvisor offers user-generated reviews, recommendations, and tools for planning trips, hotels, and activities."
            },
            {
              name: "Expedia",
              link: "https://www.expedia.com",
              rank: 2,
              description: "Expedia is a travel booking platform offering flights, hotels, car rentals, and vacation packages in one place."
            },
            {
              name: "Kayak",
              link: "https://www.kayak.com",
              rank: 3,
              description: "Kayak is a travel search engine helping users compare prices for flights, hotels, and car rentals."
            }
          ]
        },
        {
          category: "Online Marketplaces",
          sites: [
            {
              name: "Craigslist",
              link: "https://www.craigslist.org",
              rank: 1,
              description: "Craigslist is a classified ads website where users can buy and sell items, find services, and browse job listings."
            },
            {
              name: "Alibaba",
              link: "https://www.alibaba.com",
              rank: 2,
              description: "Alibaba is a global B2B marketplace connecting manufacturers and buyers for wholesale trade and bulk purchases."
            },
            {
              name: "Facebook Marketplace",
              link: "https://www.facebook.com/marketplace",
              rank: 3,
              description: "Facebook Marketplace allows users to buy, sell, and trade items with people in their local community."
            }
          ]
        },
        {
          category: "Fitness and Health",
          sites: [
            {
              name: "MyFitnessPal",
              link: "https://www.myfitnesspal.com",
              rank: 1,
              description: "MyFitnessPal helps users track calories, exercise, and nutritional goals with an extensive food database."
            },
            {
              name: "Healthline",
              link: "https://www.healthline.com",
              rank: 2,
              description: "Healthline offers medically reviewed articles and resources covering a wide range of health and wellness topics."
            },
            {
              name: "Nike Training Club",
              link: "https://www.nike.com/ntc-app",
              rank: 3,
              description: "Nike Training Club is a fitness app offering guided workouts, training plans, and wellness content for all levels."
            }
          ]
        },
        {
          category: "Productivity Tools",
          sites: [
            {
              name: "Notion",
              link: "https://www.notion.so",
              rank: 1,
              description: "Notion is an all-in-one workspace for notes, project management, and team collaboration."
            },
            {
              name: "Trello",
              link: "https://www.trello.com",
              rank: 2,
              description: "Trello is a visual project management tool using boards and cards to organize tasks and workflows."
            },
            {
              name: "Evernote",
              link: "https://www.evernote.com",
              rank: 3,
              description: "Evernote helps users organize notes, ideas, and to-do lists across devices with powerful search features."
            }
          ]
        },
        {
          category: "Cryptocurrency Platforms",
          sites: [
            {
              name: "Coinbase",
              link: "https://www.coinbase.com",
              rank: 1,
              description: "Coinbase is a secure platform for buying, selling, and storing cryptocurrencies like Bitcoin and Ethereum."
            },
            {
              name: "Binance",
              link: "https://www.binance.com",
              rank: 2,
              description: "Binance is a global cryptocurrency exchange offering trading, investment, and staking options for digital assets."
            },
            {
              name: "CoinGecko",
              link: "https://www.coingecko.com",
              rank: 3,
              description: "CoinGecko provides cryptocurrency market data, analytics, and insights into price movements and trends."
            }
          ]
        },
        {
          category: "Language Learning Platforms",
          sites: [
            {
              name: "Duolingo",
              link: "https://www.duolingo.com",
              rank: 1,
              description: "Duolingo offers free, gamified language learning for over 30 languages with fun lessons and daily streaks."
            },
            {
              name: "Babbel",
              link: "https://www.babbel.com",
              rank: 2,
              description: "Babbel provides subscription-based language courses focused on conversation skills and real-world usage."
            },
            {
              name: "Rosetta Stone",
              link: "https://www.rosettastone.com",
              rank: 3,
              description: "Rosetta Stone offers immersive language learning software and apps designed to teach vocabulary and grammar intuitively."
            }
          ]
        },
        {
          category: "DIY and Crafting Resources",
          sites: [
            {
              name: "Instructables",
              link: "https://www.instructables.com",
              rank: 1,
              description: "Instructables is a community-based site for sharing step-by-step DIY projects, ideas, and tutorials."
            },
            {
              name: "Pinterest",
              link: "https://www.pinterest.com",
              rank: 2,
              description: "Pinterest is a visual discovery platform where users can find and save ideas for DIY projects, crafts, and more."
            },
            {
              name: "Craftsy",
              link: "https://www.craftsy.com",
              rank: 3,
              description: "Craftsy offers online classes and resources for crafting, including knitting, sewing, and baking tutorials."
            }
          ]
        },
        {
          category: "Open Source Software Platforms",
          sites: [
            {
              name: "GitLab",
              link: "https://gitlab.com",
              rank: 1,
              description: "GitLab is a web-based platform for DevOps lifecycle management, offering tools for version control and collaboration."
            },
            {
              name: "SourceForge",
              link: "https://sourceforge.net",
              rank: 2,
              description: "SourceForge hosts open-source software projects, allowing developers to share and distribute their work."
            },
            {
              name: "Apache Software Foundation",
              link: "https://www.apache.org",
              rank: 3,
              description: "The Apache Software Foundation develops open-source software, including popular tools like Apache HTTP Server."
            }
          ]
        },
        {
          category: "Event Planning and Ticketing",
          sites: [
            {
              name: "Eventbrite",
              link: "https://www.eventbrite.com",
              rank: 1,
              description: "Eventbrite is a platform for organizing, promoting, and ticketing events, from small meetups to large conferences."
            },
            {
              name: "Meetup",
              link: "https://www.meetup.com",
              rank: 2,
              description: "Meetup helps users find and create groups for social or professional gatherings based on shared interests."
            },
            {
              name: "Ticketmaster",
              link: "https://www.ticketmaster.com",
              rank: 3,
              description: "Ticketmaster is a ticket sales and distribution platform for concerts, sports, and live events worldwide."
            }
          ]
        },
        {
          category: "Scientific Research and Publications",
          sites: [
            {
              name: "PubMed",
              link: "https://pubmed.ncbi.nlm.nih.gov",
              rank: 1,
              description: "PubMed is a database of biomedical literature, including research articles, clinical studies, and reviews."
            },
            {
              name: "ResearchGate",
              link: "https://www.researchgate.net",
              rank: 2,
              description: "ResearchGate is a social networking site for scientists to share research, collaborate, and access publications."
            },
            {
              name: "Google Scholar",
              link: "https://scholar.google.com",
              rank: 3,
              description: "Google Scholar is a search engine for scholarly articles, theses, books, and patents from academic publishers."
            }
          ]
        },
      ];
        
  
  export default websiteData;
  