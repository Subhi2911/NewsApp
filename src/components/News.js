import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles=[
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Four arrested over India cricket stadium crush",
            "description": "Personnel from the cricket league - Royal Challengers Bengaluru - are among the four arrested.",
            "url": "https://www.bbc.com/news/articles/cx2e1w4y23ro",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/ba5b/live/85f88300-4292-11f0-80b4-914a905be633.jpg",
            "publishedAt": "2025-06-06T06:01:03Z",
            "content": "Police in India have arrested at least four people in connection with the fatal crowd crush that took place in the southern city of Bengaluru earlier this week.\r\nOn Wednesday, 11 people were killed w… [+1247 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Ben Ramsdale",
            "title": "Littler, Humphries, Wade & Beckham in King's Honours",
            "description": "Darts duo Luke Littler and Luke Humphries are awarded MBEs in the King's Birthday Honours, while Virginia Wade earns a CBE.",
            "url": "https://www.bbc.com/sport/articles/cly3jy68x35o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/1407/live/c1ae2930-478e-11f0-84b6-6bf0f66205f1.jpg",
            "publishedAt": "2025-06-13T21:30:04Z",
            "content": "Knighthood\r\nDavid Beckham (former England footballer), for services to sport and charity\r\nBilly Boston (former rugby league player), for services to rugby league football\r\nCommanders of the Order of … [+3345 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Ffion Wynne",
            "title": "Six games, six wins - but what have England learned?",
            "description": "England have started the summer by thrashing a depleted West Indies side - but what does it mean for the team's post-Ashes rebuild and World Cup hopes?",
            "url": "https://www.bbc.com/sport/cricket/articles/crr785ddxv0o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/2cbc/live/a539f140-43cd-11f0-b6e6-4ddb91039da1.jpg",
            "publishedAt": "2025-06-07T19:12:59Z",
            "content": "Fielding has been one of England's biggest areas for improvement, with six drops seeing them prematurely knocked out in T20 World Cup group stage and seven on day one of the Ashes Test alone. \r\nThey … [+1801 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Emma Roth",
            "title": "Even Klarna is launching a mobile phone service now",
            "description": "Klarna, the buy-now-pay-later service, is launching a mobile phone service. The $40 per month phone plan is launching in the US in the “coming weeks,” offering unlimited 5G data, calls, and texts on AT&T’s network — making it yet another MVNO in an increasing…",
            "url": "https://www.theverge.com/news/689123/klarna-mobile-phone-service-mvno-gigs",
            "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/Klarna-X-Gigs.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
            "publishedAt": "2025-06-18T13:50:11Z",
            "content": "The $40 per month unlimited plan operates on AT&amp;Ts network.\r\nThe $40 per month unlimited plan operates on AT&amp;Ts network.\r\nKlarna, the buy-now-pay-later service, is launching a mobile phone se… [+1912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Kevin Lynch",
            "title": "How to Watch England vs. India From Anywhere for Free: Livestream 1st Test Cricket",
            "description": "The cricketing giants get their five-match summer series underway at Headingley.",
            "url": "https://www.cnet.com/tech/services-and-software/how-to-watch-england-vs-india-from-anywhere-for-free-livestream-1st-test-cricket/",
            "urlToImage": "https://www.cnet.com/a/img/resize/a283400187d37fd75073de95181d89eed8ddee6a/hub/2025/06/20/71364c20-6f4b-4a80-bb22-f15721ce3313/gettyimages-2221133649.jpg?auto=webp&fit=crop&height=675&width=1200",
            "publishedAt": "2025-06-20T15:27:32Z",
            "content": "Ben Stokes' England get their five-match contest against a new-look India team underway with an intriguing first Test at Headingley today. \r\nBelow, we'll outline the best live TV streaming services t… [+5598 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "Bethell and Overton in England first Test squad",
            "description": "England recall Jacob Bethell for the first Test against India and respond to a lengthy pace-bowling injury list by naming Jamie Overton in the squad.",
            "url": "https://www.bbc.com/sport/cricket/articles/c4gk7j6jz47o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/1fc8/live/dbcc1610-4180-11f0-b6e6-4ddb91039da1.png",
            "publishedAt": "2025-06-05T08:30:06Z",
            "content": "England were hopeful Atkinson would be available for the beginning of the India series, while Archer's long route back to Test cricket has been delayed by a thumb injury that prevented him playing fo… [+1113 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jacob Kastrenakes",
            "title": "Trump Mobile is a bad deal",
            "description": "Trump Mobile launched this morning with a single prepaid wireless plan and the promise of nationwide coverage for $47.45 per month. For that price, you get unlimited talk and texting, international calling, plus 20GB of \"high-speed\" cell and hotspot data, whi…",
            "url": "https://www.theverge.com/tech/687574/trump-mobile-plan-bad-deal",
            "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/06/Screenshot-2025-06-16-at-11.50.01%E2%80%AFAM.png?quality=90&strip=all&crop=0%2C13.869741440863%2C100%2C67.667237906674&w=1200",
            "publishedAt": "2025-06-16T16:05:38Z",
            "content": "The debut plan is overpriced for mobile coverage and loaded with questionable extras.\r\nTrump Mobile launched this morning with a single prepaid wireless plan and the promise of nationwide coverage fo… [+3041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Sean Kearns",
            "title": "Biles calls Gaines 'sick' in trans rights row",
            "description": "Olympic champion Simone Biles calls former US swimmer and activist Riley Gaines \"sick\" over online comments about a transgender woman softball player.",
            "url": "https://www.bbc.com/sport/articles/cn4qdgqdn22o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/841b/live/8cd93950-437b-11f0-9b6f-9f479ae5feed.png",
            "publishedAt": "2025-06-07T10:00:04Z",
            "content": "Olympic gymnastics champion Simone Biles has called former US swimmer and activist Riley Gaines \"sick\" over online comments about a transgender woman softball player.\r\nGaines, who has regularly spoke… [+2254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "I wrote autobiography in pub car park - Joanna Page",
            "description": "The actress, presenter, podcaster and mother-of-four explains how she managed to write her memoir.",
            "url": "https://www.bbc.com/news/articles/cdedpn894y3o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f6ef/live/50f295a0-4180-11f0-8664-bfe21a845758.jpg",
            "publishedAt": "2025-06-04T19:18:47Z",
            "content": "Joanna Page has presented TV shows and podcasts since Gavin &amp; Stacey\r\nAs she turns the next page of her career, Joanna Page felt the time was right for her autobiography.\r\nThe only problem was fi… [+4178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "CBC",
            "title": "Stampede after cricket victory kills at least 11 in India",
            "description": "Eleven people were killed and scores more injured after a stampede outside a cricket stadium in Bengaluru, in India's southern Karnataka state, where fervent...",
            "url": "https://ca.news.yahoo.com/stampede-cricket-victory-kills-least-152332625.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/vG2PSTHs8dX5vomcV1oasA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/cbc.ca/642e329af4b7170cf624e71d0cb1eb7a",
            "publishedAt": "2025-06-04T15:23:32Z",
            "content": "Eleven people were killed and scores more injured after a stampede outside a cricket stadium in Bengaluru, in India's southern Karnataka state, where fervent fans had gathered to celebrate the first-… [+2402 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand) , Jerry Hildenbrand",
            "title": "Tech Talk: How does an MVNO work?",
            "description": "An MVNO uses the same network you're used to but usually offers much lower prices. How does that all work?",
            "url": "https://www.androidcentral.com/phones/carriers/tech-talk-how-does-an-mvno-work",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/xZYJ6UGXQUxjbEdWXMUgAT.jpg",
            "publishedAt": "2025-05-28T19:34:24Z",
            "content": "(Image credit: Future)\r\nHow it works, explained in a way that everyone can understand. Your weekly look into what makes your gadgets tick.\r\nWelcome to Tech Talk, a weekly column about the things we u… [+5699 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Women's T20 Cricket",
            "description": "The best of the action from Chelmsford as England’s women conclude a three-match T20 series against the West Indies, hoping for a winning start under new head coach Charlotte Edwards.",
            "url": "https://www.bbc.co.uk/iplayer/episode/m002cvs6/womens-t20-cricket-2025-highlights-england-v-west-indies-third-t20",
            "urlToImage": "https://ichef.bbci.co.uk/images/ic/1200x675/p0lb55l6.jpg",
            "publishedAt": "2025-05-26T22:05:10Z",
            "content": "The best of the action from Chelmsford as Englands women conclude a three-match T20 series against the West Indies, hoping for a winning start under new head coach Charlotte Edwards."
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Women's ODI Cricket",
            "description": "Highlights from Grace Road in Leicester as England women take on the West Indies in the second of a three-match one-day international series.",
            "url": "https://www.bbc.co.uk/iplayer/episode/m002d4yf/womens-odi-cricket-2025-highlights-england-v-west-indies-second-odi",
            "urlToImage": "https://ichef.bbci.co.uk/images/ic/1200x675/p0ld28dg.jpg",
            "publishedAt": "2025-06-04T22:05:46Z",
            "content": "Highlights from Grace Road in Leicester as England women take on the West Indies in the second of a three-match one-day international series."
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Vaughan wants 'two leagues ' to help Test cricket 'narrative'",
            "description": "Former England captain Michael Vaughan calls for \"two leagues\" to give Test cricket a more compelling \"narrative\" after day one of England's Test Match with Zimbabwe at Trent Bridge.",
            "url": "https://www.bbc.com/sport/cricket/videos/czxywgkq4z7o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/8906/live/f61bb580-3739-11f0-8519-3b5a01ebe413.jpg",
            "publishedAt": "2025-05-22T18:27:30Z",
            "content": "Former England captain Michael Vaughan calls for \"two leagues\" to give Test cricket a more compelling \"narrative\" after day one of England's Test Match with Zimbabwe at Trent Bridge.\r\nMATCH REPORT: P… [+74 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Faz.net"
            },
            "author": "sid",
            "title": "Massenpanik in Indien: „Niemand hat solche Menschenmengen erwartet“",
            "description": "Die Royal Challengers gewinnen die indische Cricket-Meisterschaft – doch zu viele Menschen wollen den Triumph mit dem Team feiern. Mindestens elf Personen sterben, als es zu einer Massenpanik kommt.",
            "url": "https://www.faz.net/aktuell/sport/mehr-sport/cricket-mehrere-tote-bei-massenpanik-in-indien-110518530.html",
            "urlToImage": "https://media1.faz.net/ppmedia/aktuell/sport/846042902/1.10518535/facebook_teaser/mindestens-elf-menschen-kommen.jpg",
            "publishedAt": "2025-06-04T18:25:26Z",
            "content": "Bei einer Massenpanik nach dem Gewinn der nationalen Cricket-Meisterschaft sind in der indischen Stadt Bengaluru mehrere Menschen getötet worden. Nach offiziellen Angaben von Mittwoch kamen bei der S… [+1128 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": null,
            "title": "Indian Premier League cricket championship sparks deadly stampede",
            "description": "At least 11 people died in a stampede outside a cricket stadium in Bengaluru",
            "url": "https://www.aljazeera.com/program/newsfeed/2025/6/4/indian-premier-league-cricket-championship-sparks-deadly-stampede",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/image-1749059857.jpg?resize=1620%2C1080&quality=80",
            "publishedAt": "2025-06-04T17:58:00Z",
            "content": "NewsFeed\r\nAt least 11 people died in a stampede outside a cricket stadium in Bengaluru as crowds gathered to celebrate Royal Challengers Bengalurus first Indian Premier League title. Footage shows fa… [+42 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Brook wants 'aggressive' style of play",
            "description": "England's new limited-overs captain Harry Brook tells BBC Sport that he wants an \"aggressive\" style of play from his team.",
            "url": "https://www.bbc.com/sport/cricket/videos/czxyg66nyk0o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/08dd/live/aa5a1580-3be7-11f0-b6e6-4ddb91039da1.jpg",
            "publishedAt": "2025-05-28T17:33:57Z",
            "content": "Up Next. Vaughan wants 'two leagues ' to help Test cricket 'narrative' Video, 00:02:26Vaughan wants 'two leagues ' to help Test cricket 'narrative'"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Several feared dead in stampede outside cricket stadium in India",
            "description": "Authorities say crowd was 'uncontrollable' as thousands gathered celebrating Indian Premier League winners in Bengaluru.",
            "url": "https://www.aljazeera.com/news/2025/6/4/several-feared-dead-in-stampede-outside-cricket-stadium-in-india",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/2025-06-04T125056Z_1561880540_RC2MVEAC4JO3_RTRMADP_3_INDIA-STAMPEDE-CRICKET-1749043930.jpg?resize=1920%2C1440",
            "publishedAt": "2025-06-04T14:00:28Z",
            "content": "Several people are feared dead and many more injured in a stampede outside a cricket stadium in the southern Indian state of Karnataka to celebrate the home teams victory in the Indian Premier League… [+923 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Allen smashes Gayle’s T20 cricket sixes record in MLC opener",
            "description": "New Zealand and San Francisco's Finn Allen hits record 19 sixes against Washington in 2025 Major League Cricket opener.",
            "url": "https://www.aljazeera.com/sports/2025/6/13/allen-smashes-gayles-t20-cricket-sixes-record-in-mlc-opener",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/GettyImages-2193366232-1749806823.jpg?resize=1920%2C1440",
            "publishedAt": "2025-06-13T10:00:06Z",
            "content": "San Francisco Unicorns opener Finn Allen smashed a record 19 sixes in his incredible 151 off 51 balls against defending champions Washington Freedom in the opening match of the new Major League Crick… [+1402 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Timothy Abraham",
            "title": "State schools to contest Knight-Stokes Cup in 2026",
            "description": "A new nationwide cricket tournament for state schools will launch in 2026 with the trophy named after England cricketers Ben Stokes and Heather Knight.",
            "url": "https://www.bbc.com/sport/cricket/articles/c8d1vd7g7ypo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/9d36/live/42b6a9c0-49de-11f0-b209-c18fcce2798c.png",
            "publishedAt": "2025-06-15T12:03:04Z",
            "content": "A new nationwide cricket tournament for state schools will launch in 2026 with the trophy awarded to the winning teams carrying the name of England cricketers Ben Stokes and Heather Knight.\r\nThe Knig… [+1888 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "Tendulkar-Anderson Trophy for England-India series",
            "description": "This summer’s Test series between England and India will be played for a new trophy named after legendary pair Sachin Tendulkar and James Anderson.",
            "url": "https://www.bbc.com/sport/cricket/articles/cy9025x173po",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/3c53/live/c2d24170-41e9-11f0-ae42-c9936551965a.jpg",
            "publishedAt": "2025-06-05T14:42:58Z",
            "content": "This summer's Test series between England and India will be played for a new trophy named after legendary pair Sachin Tendulkar and James Anderson.\r\nThe Tendulkar-Anderson Trophy will be unveiled in … [+1812 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Mohsin Kamal",
            "title": "Nair's long road back to India team, via Northampton",
            "description": "Karun Nair hasn't played for India since 2017 but is expected to return to the Test side against England after impressing for Northamptonshire.",
            "url": "https://www.bbc.com/sport/cricket/articles/cj939e9lz43o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/a099/live/af646470-49d1-11f0-95d4-8bbd907ae5da.jpg",
            "publishedAt": "2025-06-18T05:26:18Z",
            "content": "After months of grinding, Nair was keen to get back on the field but there was no cricket to play in India, so he decided to sign as an overseas player for Northamptonshire in England, a decision tha… [+2601 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Indian police arrest four people in connection with deadly cricket stampede",
            "description": "At least 11 people died and dozens of others were wounded in a stampede outside Bengaluru stadium on Wednesday.",
            "url": "https://www.aljazeera.com/news/2025/6/6/indian-police-arrest-four-people-in-connection-with-deadly-cricket-stampede",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/AFP__20250604__499G667__v2__HighRes__TopshotIndiaCricketAccident-1749194033.jpg?resize=1920%2C1440",
            "publishedAt": "2025-06-06T09:25:33Z",
            "content": "Police in the southern Indian city of Bengaluru have arrested four people after a stampede during the Royal Challengers Bengaluru (RCB) cricket teams Indian Premier League victory celebrations killed… [+2651 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Pakistan’s Wasim Akram praises his cricket statue amid social media flak",
            "description": "Former captain says 'it's the idea that matters' after his newly erected statue in Hyderabad goes viral.",
            "url": "https://www.aljazeera.com/sports/2025/6/12/pakistans-wasim-akram-praises-his-cricket-statue-amid-social-media-flak",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/AFP__20250612__623B9KE__v2__HighRes__CricketPakWasimStatue-crop-1749739314.jpg?resize=1200%2C630",
            "publishedAt": "2025-06-12T15:12:10Z",
            "content": "Legendary Pakistan cricketer Wasim Akram has saluted the effort of the artist who created a statue of him that has spawned scorn on social media for being far from the players actual features.\r\nLots … [+2019 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "In rural Pakistan, bull racing draws crowd in cricket-loving nation",
            "description": "In Attock district of Punjab province, bull racing in a popular sport, drawing participants from across the country.",
            "url": "https://www.aljazeera.com/gallery/2025/5/25/pakistans-punjab-tradition-and-pride-on-display-in-bull-racing",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/05/AP25140567370281-1748156191.jpg?resize=1920%2C1440",
            "publishedAt": "2025-05-25T11:50:37Z",
            "content": "Bulls are yoked together by thick wooden frames in a sun-scorched field in rural Pakistan. Behind them, clutching nothing more than ropes and his pride stands a man perched on a plank.\r\nHundreds of s… [+1801 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera Staff",
            "title": "Pakistan beat Bangladesh by 57 runs to lead T20I cricket series",
            "description": "Three wickets Abrar by followed fifties by Sahibzada and Nawaz as the hosts took a 2-0 series lead against Bangladesh.",
            "url": "https://www.aljazeera.com/sports/2025/5/30/pakistan-beat-bangladesh-by-57-runs-to-lead-t20i-cricket-series",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250530__48NZ6CR__v1__HighRes__CricketPakBanT20-1748626671.jpg?resize=1920%2C1440",
            "publishedAt": "2025-05-30T20:01:23Z",
            "content": "Pakistan beat Bangladesh by 57 runs in the second T20 international in Lahore to seal the three-game series 2-0.\r\nOpener Sahibzada Farhan was named Player of the Match after he top scored with 74 for… [+2290 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Glenn Maxwell retires from ODI cricket but T20 World Cup in his sights",
            "description": "Maxwell, known as one of the game's most powerful hitters, is calling time on his one-day career with Australia.",
            "url": "https://www.aljazeera.com/sports/2025/6/2/glenn-maxwell-retires-from-odi-cricket-but-t20-world-cup-in-his-sights",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/GettyImages-2185064352-1748852707.jpg?resize=1920%2C1440",
            "publishedAt": "2025-06-02T08:58:06Z",
            "content": "Explosive Australian batsman Glenn Maxwell has announced his retirement from one-day cricket, but will continue in Twenty20 cricket with his eye on next years World Cup.\r\nThe 36-year-old, who played … [+2818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Rising American Cricketer Sanjay Krishnamurthi Set To Be Homegrown Hero For San Francisco",
            "description": "Talented all-rounder Sanjay Krishnamurthi enters the Major League Cricket season in form after impressing for the U.S. as he blossoms into an American cricket star.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/12/rising-american-cricketer-sanjay-krishnamurthi-set-to-be-homegrown-hero-for-san-francisco/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6846758d10d89463f26f24c3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-12T05:47:42Z",
            "content": "San Francisco Unicorns batter Sanjay Krishnamurthi is an American cricketer on the rise. \r\nSupplied\r\nThree years ago, Sanjay Krishnamurthi was high in the terraces of the iconic Coliseum amid a rabid… [+6992 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Katherine Tangalakis-Lippert",
            "title": "I make $3,000 a month by sports betting 2 hours a day — my arbitrage strategy has minimized risk",
            "description": "James Crosby has raked in almost $8,500 since he began arbitrage betting in March. He told BI he's saving for a down payment — and his tax bill.",
            "url": "https://www.businessinsider.com/sports-betting-arbitrage-easy-low-risk-strategy-side-hustle-2025-5",
            "urlToImage": "https://i.insider.com/682fa3f0ca50259add4cdab3?width=1200&format=jpeg",
            "publishedAt": "2025-05-24T12:18:01Z",
            "content": "James Crosby told Business Insider he spends about an hour or two a day placing arbitrage bets on sites like FanDuel and DraftKings and has earned about $8,500 in three months.James Crosby\r\n<ul><li>J… [+6465 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "Gill marks first Test as India captain with half-century",
            "description": "Shubman Gill hits a 56-ball half-century, his quickest in Test cricket, in his first match as India captain to put his side in control on 181-2 on the opening day of the first Test against England at Headingley.",
            "url": "https://www.bbc.com/sport/cricket/videos/cew020gxk8xo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/ffcd/live/0db1dac0-4de3-11f0-8c47-237c2e4015f5.jpg",
            "publishedAt": "2025-06-20T14:38:52Z",
            "content": "Shubman Gill hits a 56-ball half-century, his quickest in Test cricket, in his first match as India captain to put his side in control on 181-2 on the opening day of the first Test against England at… [+91 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": null,
            "title": "Stampede after cricket victory kills at least 11 in India",
            "description": "Eleven people were killed and scores more injured after a stampede outside a cricket stadium in Bengaluru, in India's southern Karnataka state, where fervent fans had gathered to celebrate the first-ever Indian Premier League title win for the city's team.",
            "url": "https://www.cbc.ca/news/world/india-cricket-stampede-1.7551884",
            "urlToImage": "https://i.cbc.ca/1.7551894.1749046628!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/ambulance-responds-to-stampede-in-bengaluru.jpg?im=Resize%3D620",
            "publishedAt": "2025-06-04T15:23:32Z",
            "content": "Eleven people were killed and scores more injured after a stampede outside a cricket stadium in Bengaluru, in India's southern Karnataka state, where fervent fans had gathered to celebrate the first-… [+2088 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Ground Identified To Ensure Legacy For Cricket In Japan After 2026 Asian Games",
            "description": "A park near Nagoya is set to be repurposed into a permanent cricket ground in a bid to leave a legacy in baseball-crazy Japan following next year’s Asian Games.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/10/ground-identified-to-ensure-legacy-for-cricket-in-japan-after-2026-asian-games/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6524938614e8909c1afe6197/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-11T01:56:13Z",
            "content": "Cricket will be played at next year's 2026 Asian Games (Photo by Jamie McDonald/Getty Images)\r\nGetty Images\r\nThe Korogi Athletic Park, about 15 miles from Nagoya and distinguished by three baseball f… [+3859 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Frandroid"
            },
            "author": "Axel Savoye",
            "title": "Netflix bientôt détrônée ? Cette plateforme SVoD compte 280 millions d’abonnés et ce n’est ni Amazon ni HBO Max",
            "description": "Un nouveau champion du streaming s'apprête à ravir la place de leader du marché à Netflix, et il est très probable que vous n'en ayez jamais entendu parler. En trois mois, la plateforme JioHotstar a enregistré un nombre record de nouveaux abonnés et approche …",
            "url": "https://www.frandroid.com/services/svod/2628553_netflix-bientot-detronee-cette-plateforme-svod-compte-280-millions-dabonnes-et-ce-nest-ni-amazon-ni-hbo-max",
            "urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/05/podium-streaming.jpg?resize=1600,900&key=9e1ad9bb&watermark",
            "publishedAt": "2025-05-27T09:15:46Z",
            "content": "Un nouveau champion du streaming s’apprête à ravir la place de leader du marché à Netflix, et il est très probable que vous n’en ayez jamais entendu parler. En trois mois, la plateforme JioHotstar a … [+1969 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Seattle Orcas Building Cricket Legacy In Pacific Northwest",
            "description": "Major League Cricket's Seattle Orcas are hoping to inspire the Pacific Northwest as the bat and ball sport builds towards the 2028 Los Angeles Olympics.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/05/29/seattle-orcas-building-cricket-legacy-in-pacific-northwest/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6838123935612f45b626c83d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-05-29T23:49:33Z",
            "content": "Seattle is one of six cities with a team in Major League Cricket (Photo by Donald Miralle/Getty ... More Images for Rock'n'Roll Marathon )\r\nGetty Images for Rock'n'Roll Mar\r\nWith ambitious dreams of … [+4693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Playing Powerhouse England In Test Cricket Has Been Years In The Making For Zimbabwe",
            "description": "Zimbabwe will end a 22-year Test cricket drought against powerhouse England after many discussions over the past decade amid a thorny relationship.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/05/22/playing-powerhouse-england-in-test-cricket-has-been-years-in-the-making-for-zimbabwe/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/682e7f0a3798f33e1556ac4d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-05-22T09:00:27Z",
            "content": "Zimbabwe end a 22-year drought against England in Test cricket (Photo by Mike Egerton/PA Images via ... More Getty Images)\r\nPA Images via Getty Images\r\nWhen small cricket nation Zimbabwe finally ends… [+5253 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Matthew Henry",
            "title": "Broad to coach SA before Test final v Australia",
            "description": "Former England bowler Stuart Broad will work with South Africa in the build-up to the World Test Championship final against Australia.",
            "url": "https://www.bbc.com/sport/cricket/articles/c3089z0z1rvo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/11cf/live/16763850-3f2d-11f0-8856-23a2b548f30c.jpg",
            "publishedAt": "2025-06-01T21:20:26Z",
            "content": "Former England bowler Stuart Broad will work with South Africa in the build-up to the World Test Championship final against Australia later this month.\r\nBroad, 38, will work for one day as a consulta… [+645 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "BBC Sport",
            "title": "Stirling hits milestone as Ireland beat West Indies",
            "description": "Paul Stirling becomes the first Irish player to reach 10,000 career runs in ODI, T20 and Test matches combined as Ireland beat West Indies in their opening ODI at Clontarf.",
            "url": "https://www.bbc.com/sport/cricket/articles/ckg44j06lz4o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/f3a6/live/80cc3af0-365a-11f0-920c-1b4eb3cd37cf.jpg",
            "publishedAt": "2025-05-21T17:08:16Z",
            "content": "Paul Stirling became the first Irish player to reach 10,000 international runs as Ireland comfortably beat West Indies in the opening one-day international at Clontarf.\r\nA 109-run partnership between… [+490 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Marc Higginson",
            "title": "How does new captain Gill compare to India batting greats?",
            "description": "BBC Sport explores how good new India Test captain Shubman Gill is, and how England can keep him subdued this summer.",
            "url": "https://www.bbc.com/sport/cricket/articles/c0r1lgqe8pqo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/a0bd/live/0f5d28a0-49e4-11f0-bbaa-4bc03e0665b7.jpg",
            "publishedAt": "2025-06-16T12:40:08Z",
            "content": "Let's start with the most impressive of all Gill stats: he has the second-best one-day international batting average of all time (59), sandwiched between the Netherlands' Ryan ten Doeschate (67), who… [+1828 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
            "title": "The WTC Final Is At The Home Of Cricket, But Hasn’t Found Its Place",
            "description": "Australia and South Africa lock horns in the World Test Championship final at Lord's. It should be the pinnacle, but lacks the gravitas of a white-ball final.",
            "url": "https://www.forbes.com/sites/timellis/2025/06/10/the-wtc-final-is-at-the-home-of-cricket-but-hasnt-found-its-place/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6848d33b1f0adea683e2128c/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-11T01:24:54Z",
            "content": "LONDON, ENGLAND - JUNE 08: (EDITORS NOTE: This image has been retouched) Temba Bevuma of South ... More Africa and Pat Cummins of Australia pose for a photo with the ICC World Test Championship Mace … [+5363 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Mike Peter",
            "title": "Woakes to return in England Lions matches",
            "description": "England seamer Chris Woakes is to make his return from an ankle injury after being selected for two Lions fixtures with India A.",
            "url": "https://www.bbc.com/sport/cricket/articles/cjrnnvq15j8o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/f83b/live/813aa110-3642-11f0-a5d5-e3ea58cb3993.jpg",
            "publishedAt": "2025-05-21T13:04:06Z",
            "content": "Seamer Josh Hull, 20, who played one Test against Sri Lanka last summer, also makes the group, as does all-rounder Dan Mousley, who made his limited-overs debuts against the West Indies in the autumn… [+689 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Salary Cap For America’s Major League Cricket Tipped To Rise In Coming Years",
            "description": "Major League Cricket is starting its third season at the Oakland Coliseum as anticipation rises for increased revenue in the American T20 league attracting big names.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/12/salary-cap-for-americas-major-league-cricket-tipped-to-rise-in-coming-years/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/64df8389fc6017631ed8ae1f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-13T02:21:03Z",
            "content": "Major League Cricket is starting its third season (AP Photo/LM Otero)\r\nCopyright 2023 The Associated Press. All rights reserved.\r\nIn the late afternoon sunshine, with the spectacular Oakland Hills in… [+5640 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
            "title": "Shubman Gill Must Score Runs In England To Pass Leadership Test",
            "description": "Shubman Gill is the new prince of Indian cricket as his team take on England in a five-match Test series. It might be the making of him.",
            "url": "https://www.forbes.com/sites/timellis/2025/06/19/shubman-gill-must-score-runs-in-england-to-pass-leadership-test/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/68544445d622f642ead3ee70/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-19T22:48:04Z",
            "content": "Indian cricket captain Shubman Gill addresses a pre-departure presser at the Board of Control for ... More Cricket in India (BCCI) headquarters in Mumbai on June 5, 2025, ahead of India's tour of Eng… [+6061 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "South Africa End Decades Of Heartbreak In Tonic For Test Cricket",
            "description": "South Africa defeated favored Australia to win the World Test Championship final as the proud cricket nation ended an unwanted perception built over decades.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/14/south-africa-end-decades-of-heartbreak-in-tonic-for-test-cricket/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/684d89ef21a06da9c40f74c1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-14T15:05:31Z",
            "content": "Temba Bavuma lifts the trophy (Photo by Matthew Lewis-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nTemba Bavuma remained seated on the balcony in the bowels of crickets most storied ground as a d… [+4849 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Candidates Revealed For Cricket’s All-Important Chief Executives’ Committee Election",
            "description": "Eight candidates will contest the upcoming Chief Executives’ Committee election, with three coveted Associate Member spots up for grabs.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/20/candidates-revealed-for-crickets-all-important-chief-executives-committee-election/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/60629b7796d2cc039db54598/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-20T23:19:01Z",
            "content": "The CEC election will be part of the AGM in Singapore (Photo by Steve Bardens-ICC/ICC via Getty ... More Images)\r\nICC via Getty Images\r\nEight candidates will contest the upcoming Chief Executives Com… [+4678 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "John Gruber",
            "title": "Trump Mobile — The President Launches a Mobile Carrier and a $500 ‘T1’ Android Phone",
            "description": "President Trump and his family are getting into the wireless business, in partnership with the three major U.S. carriers.",
            "url": "https://variety.com/2025/digital/news/trump-mobile-wireless-phone-service-launch-1236431690/",
            "urlToImage": "https://variety.com/wp-content/uploads/2025/06/Donald-Trump.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2025-06-17T01:14:50Z",
            "content": "President Trump and his family are getting into the wireless business, in partnership with the three major U.S. carriers.\r\nThe Trump Organization on Monday announced Trump Mobile, which will offer 5G… [+4175 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "UAE To Host Cricket’s Asia Cup, But India-Pakistan Tensions Jeopardize Lucrative Event",
            "description": "The lucrative Asia Cup is set to be played in the United Arab Emirates with officials remaining hopeful a cancellation can be avoided amid India and Pakistan tension.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/15/uae-to-host-crickets-asia-cup-but-india-pakistan-tensions-jeopardize-lucrative-event/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/684f4247e6b24ec76a72a5e5/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-16T01:54:17Z",
            "content": "India and Pakistan have a storied rivalry (Photo by Surjeet Yadav/Getty Images)\r\nGetty Images\r\nThis years Asia Cup, a highly lucrative biennial event that essentially bankrolls regional body Asian Cr… [+3297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Silicon Valley And Hollywood Identities Invest In San Francisco Unicorns Cricket Franchise",
            "description": "San Francisco Unicorns have announced a slew of investors, including Adobe chief executive Shantanu Narayen, YouTube boss Neal Mohan and actor Kunal Nayyar.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/09/silicon-valley-and-hollywood-identities-invest-in-san-francisco-unicorns-cricket-franchise/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6846d3ea86c9717018b58a1d/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-09T13:05:40Z",
            "content": "Shantanu Narayen has invested in San Francisco Unicorns (Photo by Abhijit Bhatlekar/Mint via Getty ... More Images)\r\nHindustan Times via Getty Images\r\nOn the back of key player signings ahead of the … [+3338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Kal Sajad",
            "title": "'Boxing's like a cult' - meet the new promoter hitting the big stage",
            "description": "Izzy Asif shares his journey from hustling football tickets on Sheffield's terraces to a boxing promoter putting on a world-title stadium fight.",
            "url": "https://www.bbc.com/sport/boxing/articles/c74qqyz8589o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/2e18/live/c0851220-362d-11f0-b2c9-2d36257649ec.jpg",
            "publishedAt": "2025-05-22T07:17:22Z",
            "content": "Asif, 42, and his family emigrated to Britain from the mountainous Kahuta region of Rawalpindi, the same area former world champion Amir Khan, now retired, and unbeaten super-middleweight Hamzah Shee… [+1255 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Mantej Mann",
            "title": "BBC to broadcast live 2025 Women's Tour of Britain",
            "description": "BBC Sport will broadcast live this year's Lloyds Women's Tour of Britain as part of its Women's Summer of Sport coverage.",
            "url": "https://www.bbc.com/sport/cycling/articles/cqj7ggq47r4o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/4113/live/8d9f6f10-3ca2-11f0-9aef-6d0f1feb6f72.jpg",
            "publishedAt": "2025-05-29T15:57:03Z",
            "content": "BBC Sport will broadcast live this year's Lloyds Women's Tour of Britain as part of its Women's Summer of Sport coverage. \r\nThe four-day race across England and Scotland begins on 5 June and will be … [+1284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "Crawley did not feel pressure on England place",
            "description": "Opener Zak Crawley says he was not feeling any extra pressure on his place in the England team before his 124 on the opening day of the one-off Test against Zimbabwe.",
            "url": "https://www.bbc.com/sport/cricket/articles/clygz51r8jdo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/3585/live/d1de6e70-3742-11f0-8947-7d6241f9fce9.jpg",
            "publishedAt": "2025-05-22T19:28:00Z",
            "content": "Opener Zak Crawley said he was not feeling any extra pressure for his place in the England team before making 124 on the opening day of the one-off Test against Zimbabwe.\r\nThe 27-year-old endured a t… [+962 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
            "title": "Deserving South Africa Can Change Cricket Perception With World Test Championship Victory",
            "description": "South Africa have experienced many painful defeats in their cricket history, but have a chance to end a curse in the World Test Championship final against Australia.",
            "url": "https://www.forbes.com/sites/tristanlavalette/2025/06/11/deserving-south-africa-can-change-cricket-perception-with-world-test-championship-victory/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/684909586ad620af56c12731/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-11T06:26:16Z",
            "content": "South Africa have a chance to end their curse in the World Test Championship final (Photo by Matthew ... More Lewis-ICC/ICC via Getty Images)\r\nICC via Getty Images\r\nTake a deep breath, South Africans… [+4601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phonescoop.com"
            },
            "author": "Rich Brome",
            "title": "Cricket Expands Unlimited Plan Options",
            "description": "Cricket has introduced a new service plan called Simply Unlimited that brings a form of \"unlimited data\" to a new low price point of $40/month for one line. Previously, its cheapest \"Unlimited Plan\" was $55/month. Simply Unlimited strips out several perks to …",
            "url": "https://www.phonescoop.com/articles/article.php?a=23534",
            "urlToImage": "https://www.phonescoop.com/img/a/s/c13.jpg",
            "publishedAt": "2025-05-28T16:42:26Z",
            "content": "iPhone 14 Plus Offers a Big Screen For LessSep 7, 2022Apple has revealed the iPhone 14 series, with new features, improved specs, and new size options. In place of a Mini option, the iPhone 14 will c… [+75 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
            "title": "Shubman Gill Must Score Runs In England To Pass Leadership Test",
            "description": "Shubman Gill is Indian cricket's new Test captain for the tour of England. Gill has a modest Test record overseas. He must lead from the front.",
            "url": "https://www.forbes.com/sites/timellis/2025/06/19/shubman-gill-must-score-runs-in-england-to-pass-leadership-test-1/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/68544445d622f642ead3ee70/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
            "publishedAt": "2025-06-19T23:29:47Z",
            "content": "Indian cricket captain Shubman Gill addresses a pre-departure presser at the Board of Control for ... More Cricket in India (BCCI) headquarters in Mumbai on June 5, 2025, ahead of India's tour of Eng… [+6054 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "Beckham knighted while Littler awarded MBE in King's Birthday Honours list",
            "description": "David Beckham has been awarded a knighthood in the King's Birthday Honours.",
            "url": "https://www.skysports.com/football/news/11095/13383159/kings-birthday-honours-list-2025-david-beckham-awarded-knighthood-while-luke-littler-receives-mbe",
            "urlToImage": "https://e0.365dm.com/25/06/1600x900/skysports-honours-list-david-beckham_6941054.jpg?20250613122434",
            "publishedAt": "2025-06-13T21:30:00Z",
            "content": "David Beckham has been awarded a knighthood in the King's Birthday Honours.\r\nThe former England captain has been recognised for both his career as a footballer and his services to charity.\r\nBeckham b… [+4504 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "Tierney returns to Celtic on five-year deal",
            "description": "Celtic have confirmed the return of Kieran Tierney on a five-year deal following his departure from Arsenal.",
            "url": "https://www.skysports.com/football/news/11095/13381671/celtic-transfer-news-kieran-tierney-completes-return-on-five-year-deal-following-arsenal-departure",
            "urlToImage": "https://e0.365dm.com/25/06/1600x900/skysports-kieran-tierney-scotland_6938366.jpg?20250610143727",
            "publishedAt": "2025-06-10T13:30:00Z",
            "content": "Celtic have confirmed the return of Kieran Tierney on a five-year deal following his departure from Arsenal.\r\nManager Brendan Rodgers revealed in April there was a pre-agreement in place after the Sc… [+1173 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Timothy Abraham",
            "title": "Four issues facing Australia before Ashes",
            "description": "Batting worries and ageing bowlers - BBC Sport looks at the issues facing Australia five months out from this winter's Ashes.",
            "url": "https://www.bbc.com/sport/cricket/articles/czxy9xd6vz7o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/220d/live/2dea05b0-49e7-11f0-b87c-1926a8d42077.jpg",
            "publishedAt": "2025-06-15T13:37:12Z",
            "content": "In the build up to the WTC final, who would open the batting alongside Khawaja against South Africa was a source of national debate Down Under.\r\nNathan McSweeney, Travis Head, Sam Konstas and Steve S… [+1261 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "/FILM"
            },
            "author": "staff@slashfilm.com (Rusteen Honardoost)",
            "title": "It's Always Sunny In Philadelphia's Crew Once Made A Chaotic Pilot For A Star Trek Parody",
            "description": "The creators of It's Always Sunny in Philadelphia once developed the pilot for a sci-fi comedy series that was, basically, a really chaotic Star Trek parody.",
            "url": "https://www.slashfilm.com/1867634/its-always-sunny-in-philadelphia-crew-star-trek-parody-pilot/",
            "urlToImage": "https://www.slashfilm.com/img/gallery/its-always-sunny-in-philadelphias-crew-once-made-a-chaotic-pilot-for-a-star-trek-parody/l-intro-1748019418.jpg",
            "publishedAt": "2025-06-03T18:45:00Z",
            "content": "Watching the \"Boldly Going Nowhere\" pilot will almost certainly give \"Always Sunny\" fans a feeling of déjà vu. Indeed, the \"Always Sunny\" creatives were able to carry the show's trademark brand of an… [+1940 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Scientific American"
            },
            "author": "Elizabeth Anne Brown",
            "title": "How Velvet Worm Slime Hardens in Seconds to Trap Prey",
            "description": "The velvet worm’s extraordinary goo could inspire recyclable bioplastics",
            "url": "https://www.scientificamerican.com/article/how-velvet-worm-slime-hardens-in-seconds-to-trap-prey/",
            "urlToImage": "https://static.scientificamerican.com/dam/m/4068eb86fee4b11b/original/sa070825Adva_Velvet_Worm.jpg?m=1749065678.233&w=1200",
            "publishedAt": "2025-06-05T10:45:00Z",
            "content": "The velvet worm, a squishy little predator that looks like the stretch-limo version of a caterpillar, has a whimsical MO: it administers death by Silly String.\r\nIn the leaf litter of tropical and tem… [+4539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Highsnobiety"
            },
            "author": null,
            "title": "Hermès Now Makes Headphones — $15,000 Leather Headphones",
            "description": "Hermès Ateliers Horizons, the division responsible for many of Hermès wildest, most ambitious products, is releasing the brand's first-ever headphones.",
            "url": "https://www.highsnobiety.com/p/hermes-headphones/",
            "urlToImage": "https://www.highsnobiety.com/static-assets/dato/1748257381-hermes-ateliers-horizons-headphones.jpg",
            "publishedAt": "2025-05-26T11:44:14Z",
            "content": "Hermès knows how to do high fashion, but how about high fidelity? The French luxury house is launching its first pair of headphones, a chunky overhead design created by the experimental Hermès Atelie… [+1759 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "BBC Sport",
            "title": "Australia drop Labuschagne for first West Indies Test",
            "description": "Australia drop Marnus Labuschagne for their opening Test against the West Indies with Steve Smith also missing through injury.",
            "url": "https://www.bbc.com/sport/cricket/articles/c994v95j0dko",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/9273/live/6a7dbdb0-4d60-11f0-b812-597f5d9ba50f.jpg",
            "publishedAt": "2025-06-19T23:11:07Z",
            "content": "Australia have dropped Marnus Labuschagne for their opening Test against the West Indies with Steve Smith also missing through injury.\r\nIn their places, teenage opener Sam Konstas and Josh Inglis com… [+1413 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "BBC Sport",
            "title": "Black girls being failed by sport, report says",
            "description": "Sport leaders are urged to make changes to help black girls stay in sport in a new report from the charity Women in Sport.",
            "url": "https://www.bbc.com/sport/articles/c87jjep51vpo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/ba43/live/547bee90-35bb-11f0-a3ee-cfe12d5043b9.jpg",
            "publishedAt": "2025-05-21T09:31:48Z",
            "content": "Charity Women in Sport has called on sport's leaders to do more for young black girls.\r\nIt says they face more barriers to accessing sport than girls from other backgrounds, and many \"fall out of lov… [+1570 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "newsweek.com",
            "title": "Stampede at Sports Stadium Leaves Several Dead: Reports",
            "description": "Voice is AI-generated. Inconsistencies may occur.\nSeveral people were killed and dozens more injured during a stampede outside a cricket stadium in Bengaluru, India, according to local media reports.\nMasses of people had gathered for a victory parade outside …",
            "url": "https://biztoc.com/x/87ab1b170879feb1",
            "urlToImage": "https://biztoc.com/cdn/87ab1b170879feb1_s.webp",
            "publishedAt": "2025-06-04T12:31:25Z",
            "content": "Voice is AI-generated. Inconsistencies may occur.Several people were killed and dozens more injured during a stampede outside a cricket stadium in Bengaluru, India, according to local media reports.M… [+145 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "pbs.org",
            "title": "News Wrap: Trump says Putin vows to respond to Ukraine’s drone attack on Russian airfields",
            "description": "In our news wrap Wednesday, President Trump said Putin told him Russia would respond to Ukraine's drone attack on airfields, an aid group in Gaza temporarily paused food deliveries today at its three distribution sites, a stampede outside of a cricket stadium…",
            "url": "https://biztoc.com/x/10914384a0b7f5df",
            "urlToImage": "https://biztoc.com/cdn/10914384a0b7f5df_s.webp",
            "publishedAt": "2025-06-04T23:20:59Z",
            "content": "In our news wrap Wednesday, President Trump said Putin told him Russia would respond to Ukraine's drone attack on airfields, an aid group in Gaza temporarily paused food deliveries today at its three… [+141 chars]"
        },
        {
            "source": {
                "id": "ansa",
                "name": "ANSA.it"
            },
            "author": null,
            "title": "Ressa per festeggiare una squadra di cricket in India, 'morti e feriti'",
            "description": "centinaia di migliaia di persone si sono ammassate davanti allo stadio dopo la vittoria della formazione locale in Premier League, almeno 11 le vittime (ANSA)",
            "url": "https://www.ansa.it/sito/notizie/mondo/2025/06/04/ressa-per-festeggiare-una-squadra-di-cricket-in-india-morti-e-feriti_07897cd8-6a55-483d-aabd-3d9f598931ee.html",
            "urlToImage": "https://www.ansa.it/webimages/img_1129x635/2025/6/4/7a5f95863baf7339e6d011cf1b7e50f6.jpg",
            "publishedAt": "2025-06-04T14:39:16Z",
            "content": "Una ressa si è scatenata all'esterno dello stadio di Bangalore, nel sud dell'India, dove una folla immensa si era radunata per celebrare la squadra locale di cricket dopo la vittoria nella Premier le… [+1024 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "Papers: Barca ready to make move for Arsenal goalkeeper target",
            "description": "The top stories and transfer rumours from Monday's newspapers...",
            "url": "https://www.skysports.com/football/news/11095/13374840/arsenal-transfer-news-barcelona-ready-to-make-move-for-gunners-target-joan-garcia-paper-talk",
            "urlToImage": "https://e0.365dm.com/25/03/1600x900/skysports-paper-talk-brand-refresh_6852897.jpg?20250311094415",
            "publishedAt": "2025-05-26T08:00:00Z",
            "content": "The top stories and transfer rumours from Monday's newspapers...\r\nDAILY MIRROR\r\nBarcelona are ready to make their move for Arsenal transfer target Joan Garcia.\r\nArsenal are said to be considering a s… [+1528 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Timothy Abraham",
            "title": "South Africa ignore Aussie sledges to go from chokers to champions",
            "description": "South Africa's players show their mettle to ignore sledges from Australia's players as they go from chokers to World Test champions at Lord's.",
            "url": "https://www.bbc.com/sport/cricket/articles/cy4ej2gzwn1o",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/89da/live/522d5360-4932-11f0-9471-e380f647874e.jpg",
            "publishedAt": "2025-06-14T16:40:34Z",
            "content": "When Bavuma walked into the post-match news conference and carefully placed the glittering mace - the prize awarded to the WTC winners - down on the table in front of him, the significance of the mom… [+1836 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Mike Henson",
            "title": "The mind behind cricket's Hundred on his 'Prem' relaunch",
            "description": "Rob Calder was the man behind cricket's controversial, but lucrative Hundred. Now he has made over the Premiership in the hope of bringing new fans and money to the top flight",
            "url": "https://www.bbc.com/sport/rugby-union/articles/cly2zplnn1ko",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/f72e/live/ce91e3b0-4d08-11f0-8c47-237c2e4015f5.jpg",
            "publishedAt": "2025-06-19T13:07:54Z",
            "content": "A record 1.26m television audience for Bath's victory, combined with demand outstripping supply for the 82,000 tickets, suggests the Premiership is nurturing new fans.\r\nThere has been big growth in e… [+1822 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT",
            "title": "11 killed in stampede at cricket celebration in India",
            "description": "Dozens were injured as fans attempted to enter a stadium through a small gate Read Full Article at RT.com",
            "url": "https://www.rt.com/india/618678-11-killed-in-stampede-at/",
            "urlToImage": "https://mf.b37mrtl.ru/files/2025.06/article/68416f7620302734c04d92e4.jpg",
            "publishedAt": "2025-06-05T10:33:19Z",
            "content": "At least 11 people died and over 50 have been injured in a stampede at a cricket stadium where celebrations to mark their team's first Indian Premier League (IPL) title were taking place.\r\nThe incide… [+2139 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Matthew Henry",
            "title": "Kohli & Rohit have shown 'blueprint' for future - Gill",
            "description": "Former captains Virat Kohli and Rohit Sharma have shown a \"blueprint\" for India's future success, says new skipper Shubman Gill.",
            "url": "https://www.bbc.com/sport/cricket/articles/cx27ndzldexo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/3837/live/66f03fb0-3960-11f0-a1b9-9b7594c95a97.jpg",
            "publishedAt": "2025-05-25T12:13:42Z",
            "content": "Former captains Virat Kohli and Rohit Sharma have shown a \"blueprint\" for India's future Test success, says new skipper Shubman Gill.\r\nBatter Gill, 25, was announced as Rohit's replacement on Saturda… [+1952 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Andrew Grush",
            "title": "Do any prepaid US carriers offer truly unlimited data? Well, it depends on how you define it",
            "description": "Do any carriers actually offer truly unlimited data, especially on the prepaid side? It really depends on how you define unlimited.",
            "url": "https://www.androidauthority.com/prepaid-carriers-truly-unlimited-3529792/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/05/Stock-photo-of-major-US-carriers-Verizon-Wireless-ATT-and-T-Mobile-2.jpg",
            "publishedAt": "2025-05-30T10:30:38Z",
            "content": "A quick glance at all the major prepaid and postpaid mobile service providers makes it clear that almost everyone offers unlimited data nowadays. To make matters even more confusing for the average c… [+11404 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Andrew Grush",
            "title": "Here’s why I no longer recommend postpaid phone service in US",
            "description": "In 2025, it's become harder for me to recommend postpaid service to any new customers unless they have very niche circumstances.",
            "url": "https://www.androidauthority.com/prepaid-vs-postpaid-service-3556187/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2024/10/2024-Verizon-logo-on-smartpohone-Stock-photo-1.jpg",
            "publishedAt": "2025-05-23T11:00:45Z",
            "content": "Last summer, I wrote about how I feel that for many, prepaid is a better choice over postpaid, at least once you get past some of the biggest prepaid myths many average users still believe are true i… [+12079 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Hafsa Adil",
            "title": "Lahore Qalandars beat Quetta Gladiators by six wickets for third PSL trophy",
            "description": "Qalandars chase a record target of 202 against the Gladiators as Raza returns from Test duty to hit the winning runs.",
            "url": "https://www.aljazeera.com/sports/2025/5/25/lahore-qalandars-beat-quetta-gladiators-by-six-wickets-for-third-psl-trophy",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/05/AFP__20250525__483R89D__v1__HighRes__CricketPakPslLahoreQuetta-1748200926.jpg?resize=1920%2C1440",
            "publishedAt": "2025-05-25T21:15:03Z",
            "content": "All-rounder Sikandar Raza has written his name in Pakistan cricket folklore after hitting the match-winning six as the Lahore Qalandars beat the Quetta Gladiators by six wickets to win the Pakistan S… [+1958 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Kohli ‘absolutely gutted’ after 11 dead in Bengaluru stadium stampede",
            "description": "Former India captain Virat Kohli was celebrating RCB's IPL title when a stampede turned fatal near Chinnaswamy Stadium.",
            "url": "https://www.aljazeera.com/sports/2025/6/5/kohli-absolutely-gutted-after-11-dead-in-bengaluru-stadium-stampede",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/AP25154613071841-1749110200.jpg?resize=1920%2C1440",
            "publishedAt": "2025-06-05T08:36:56Z",
            "content": "Virat Kohli said he was lost for words after celebrations of a dream IPL title turned to tragedy, when 11 mainly young cricket fans were crushed to death in Bengaluru.\r\nHundreds of thousands had pack… [+3745 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "South Africa near WTC win vs Australia with Bavuma grit and Markram century",
            "description": "South Africa are on the verge of a historic World Test Championship win after gripping third day against Australia.",
            "url": "https://www.aljazeera.com/sports/2025/6/13/south-africa-near-wtc-win-vs-australia-with-bavuma-grit-and-markram-century",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/GettyImages-2219981826-1749840594.jpg?resize=1920%2C1314",
            "publishedAt": "2025-06-13T19:13:53Z",
            "content": "Hobbling captain Temba Bavuma and hundred-hitter Aiden Markram pushed South Africa to the brink of a sensational victory over Australia in a gripping World Test Championship final at Lords Cricket Gr… [+4902 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "20 Minutes"
            },
            "author": "20 Minutes avec AFP",
            "title": "Etats-Unis : Bientôt un opérateur mobile et un smartphone au nom de Trump",
            "description": "Trump entre sur le marché de la téléphonie mobile avec « Trump Mobile » et un smartphone doré, le T1, vendu 499 dollars dès août",
            "url": "https://www.20minutes.fr/monde/etats-unis/4158828-20250616-etats-unis-bientot-operateur-mobile-smartphone-nom-trump",
            "urlToImage": "https://img.20mn.fr/sVqICJAbR_2TCgJoeKmTGCk/1444x920_president-donald-trump-silences-his-mobile-phone-which-rang-two-times-as-he-was-speaking-to-reporters-after-signing-executive-orders-regarding-nuclear-energy-in-the-oval-office-of-the-white-house-friday-may-23-2025-in-washington-ap-photo-evan-vucci-dcje327-25143680934955-2505232142",
            "publishedAt": "2025-06-16T16:58:14Z",
            "content": "Quelques mois après son retour à la Maison-Blanche, Donald Trump continue détendre son empire économique à coups de marques à son nom. Dernière initiative en date : le lancement de « Trump Mobile », … [+1548 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "Women's Super League to expand to 14 teams",
            "description": "The Women's Super League is set to expand to 14 teams from the 2026/27 season.",
            "url": "https://www.skysports.com/football/news/32461/13384609/womens-super-league-to-expand-to-14-teams-from-2026-27-season-with-relegation-play-off-also-in-plans",
            "urlToImage": "https://e0.365dm.com/25/06/1600x900/skysports-graphic-wsl-badge_6939844.jpg?20250612084851",
            "publishedAt": "2025-06-16T15:00:00Z",
            "content": "The Women's Super League is set to expand to 14 teams from the 2026/27 season.\r\nThe current league format sees one team relegated from women's football's top tier, but it will now change to two teams… [+2344 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "England's Bright rules herself out of Euro 2025 selection",
            "description": "England defender Millie Bright has made herself unavailable for selection for the Lionesses' Euro 2025 squad.",
            "url": "https://www.skysports.com/football/news/32461/13379017/millie-bright-england-defender-rules-herself-out-of-selection-for-euro-2025-one-day-before-squad-announcement",
            "urlToImage": "https://e0.365dm.com/25/05/1600x900/skysports-millie-bright-england_6927834.jpg?20250526140739",
            "publishedAt": "2025-06-04T10:50:00Z",
            "content": "England defender Millie Bright has made herself unavailable for selection for the Lionesses' Euro 2025 squad.\r\n\"This is one of the hardest decisions I've ever had to make, but after careful thought a… [+2521 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "STERN.de"
            },
            "author": "STERN.de",
            "title": "Medien: Tote bei Massenpanik bei Cricket-Siegesfeier in Indien",
            "description": "Bei einer Massenpanik während der Siegesfeier einer Cricket-Mannschaft im indischen Bengaluru sind Medienberichten zufolge mehrere Menschen ums Leben gekommen. Mindestens elf Menschen seien bei dem Unglück am Mittwoch zu Tode gekommen, berichtete der indische…",
            "url": "https://www.stern.de/news/medien--tote-bei-massenpanik-bei-cricket-siegesfeier-in-indien-35782602.html",
            "urlToImage": "https://image.stern.de/35782604/t/J1/v1/w1440/r1.7778/-/04--fanmenge-in-bengaluru---10fedddf71a63fed.jpg",
            "publishedAt": "2025-06-04T13:42:47Z",
            "content": "Kopiere den aktuellen Link\r\nZur Merkliste hinzufügen\r\nBei einer Massenpanik während der Siegesfeier einer Cricket-Mannschaft im indischen Bengaluru sind Medienberichten zufolge mehrere Menschen ums L… [+833 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "FA gives go-ahead for WSL to expand to 14 teams",
            "description": "The FA have given their approval to the Women's Super League expanding to 14 teams from the 2026/27 season.",
            "url": "https://www.skysports.com/football/news/11095/13386295/fa-approves-womens-super-league-expansion-to-14-teams-from-2026-27-season",
            "urlToImage": "https://e0.365dm.com/25/05/1600x900/skysports-wsl-womens-super-league_6913898.jpg?20250512094713",
            "publishedAt": "2025-06-20T13:00:00Z",
            "content": "The FA have given their approval to the Women's Super League expanding to 14 teams from the 2026/27 season.\r\nThe current league format sees one team relegated from the women's football's top tier, bu… [+4278 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Courrier International"
            },
            "author": null,
            "title": "Au moins dix morts en Inde à la suite d’une bousculade à l’extérieur d’un stade",
            "description": "Mercredi 4 juin, dans la ville de Bangalore, dans le sud de l’Inde, une énorme bousculade a causé la mort d’au moins dix personnes et a fait de très nombreux blessés. L’accident a eu lieu alors que la foule célébrait la victoire du championnat de cricket par …",
            "url": "https://www.courrierinternational.com/article/tragedie-au-moins-dix-morts-en-inde-a-la-suite-d-une-bousculade-a-l-exterieur-d-un-stade_231662",
            "urlToImage": "https://focus.courrierinternational.com/2025/06/04/0/0/5497/3665/1200/630/60/0/0749c72_sirius-fs-upload-1-qgozgplemze8-1749056251169-000-498v863.jpg",
            "publishedAt": "2025-06-04T17:39:14Z",
            "content": "Une journée festive qui sest transformée en une tragédie. Mercredi 4 juin, relate le journal de New Delhi The Wire, au moins 10 personnes sont mortes et plus de 24 ont été blessées lors dune bouscula… [+1891 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBS News",
            "title": "Stampede kills at least 11 at cricket celebration in India",
            "description": "At least 11 people are dead after a stampede during a cricket celebration in India. CBS News correspondent Shanelle Kaul has more.",
            "url": "https://www.cbsnews.com/video/stampede-kills-at-least-11-at-cricket-celebration-in-india/",
            "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2025/06/04/2ac3f3c4-82fc-4f8c-bba1-8f567c074ef0/thumbnail/1200x630/2808ffd0e6787161d64afdd862450eb5/cbsn-fusion-stampede-kills-at-least-11-at-cricket-celebration-in-india-thumbnail.jpg?v=bf13c71e7181bf2db128edf777c4aecf",
            "publishedAt": "2025-06-04T17:50:00Z",
            "content": "Copyright ©2025 CBS Interactive Inc. All rights reserved."
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "Head praises 'optional' training sessions ahead of WTC clash with South Africa",
            "description": "Travis Head says a more relaxed approach to training is helping Australia thrive on the world cricket stage.",
            "url": "https://www.abc.net.au/news/2025-06-10/world-test-championship-travis-head-praises-optional-training/105397310",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/3d0129c008a247558c1e0e97659029f2?impolicy=wcms_watermark_news&cropH=2302&cropW=4092&xPos=0&yPos=249&width=862&height=485&imformat=generic",
            "publishedAt": "2025-06-09T21:20:28Z",
            "content": "Star batter Travis Head has opened up on how Australia's different approach to training has helped set up an era of success.\r\nAustralia is aiming for back-to-back World Test Championship titles when … [+2484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ilfattoquotidiano.it"
            },
            "author": "F. Q.",
            "title": "Milan-Como di Serie A si giocherà in Australia? Già inviata la richiesta ufficiale",
            "description": "L’Optus Stadium di Perth, in Australia, è pronto a ospitare un evento storico. Capienza: 60mila posti. E no, non parliamo di un match del West Coast Eagles (squadra di AFL, Football americano) o del Perth Scorchers (club di cricket australiano). Nemmeno di un…",
            "url": "https://www.ilfattoquotidiano.it/2025/06/11/milan-como-serie-a-australia-perche-motivo-news-oggi/8022848/",
            "urlToImage": "https://st.ilfattoquotidiano.it/wp-content/uploads/2025/06/11/optus-stadium-1050x630.jpg",
            "publishedAt": "2025-06-11T11:19:28Z",
            "content": "Roma, 11 giu. - (Adnkronos) - Alla vigilia della partecipazione alla Fifa Club World Cup, lInter presenta 'My Name Is My Story', il manifesto identitario dedicato a presentare e raccontare il Club ad… [+3378 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eurogamer.net"
            },
            "author": "Victoria Kennedy",
            "title": "The frightfully British Atomfall was \"immediately profitable\" and sequel plans are already in discussion",
            "description": "Atomfall - the seudo-apocalyptic survival game set in 1950s rural England - was \"immediately profitable\" for developer Rebellion, and now talks of a sequel are already afoot. Read more",
            "url": "https://www.eurogamer.net/the-frightfully-british-atomfall-was-immediately-profitable-and-sequel-plans-are-already-in-discussion",
            "urlToImage": "https://assetsio.gnwcdn.com/Atomfall-screenshot-showing-a-lady-wearing-a-floral-hat-standing-inside-a-ruined-building.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
            "publishedAt": "2025-05-21T11:19:34Z",
            "content": "Atomfall - the seudo-apocalyptic survival game set in 1950s rural England - was \"immediately profitable\" for developer Rebellion, and now talks of a sequel are already afoot.\r\nAtomfall released back … [+2266 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Atlantic"
            },
            "author": "Hana Kiros",
            "title": "America’s Newest Gamblers Are Playing a Dangerous Game",
            "description": "Sports betting could spur a rise in gambling addiction that the U.S. isn’t equipped to address.",
            "url": "https://www.theatlantic.com/health/archive/2025/06/sports-betting-gambling-addiction/683042/",
            "urlToImage": "https://cdn.theatlantic.com/thumbor/oIRaBOEayVEkQ_oKXc9X-9v3lZk=/0x61:2876x1559/1200x625/media/img/mt/2025/06/2025_06_03_sports_gambling_1/original.jpg",
            "publishedAt": "2025-06-05T16:12:00Z",
            "content": "Gambling has swallowed American sports culture whole. Until early 2018, sports betting was illegal under federal law; today, it’s legal in 39 states and Washington, D.C. (and easy enough to access th… [+9291 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-independent.com"
            },
            "author": "Maira Butt",
            "title": "‘Prescient’ painting of Oasis singers Liam and Noel Gallagher at height of ‘tension’ to be sold for £2m",
            "description": "Oil painting was created in 1996, the same year Noel is reported to have hit his older brother Liam with a cricket bat",
            "url": "https://www.the-independent.com/arts-entertainment/art/news/oasis-liam-noel-gallagher-feud-b2769445.html",
            "urlToImage": "https://static.the-independent.com/2025/06/13/9/35/GettyImages-83791419.jpg?trim=4,379,617,553&width=1200&height=800&crop=1200:800",
            "publishedAt": "2025-06-13T12:03:48Z",
            "content": "Your support helps us to tell the story\r\nFrom reproductive rights to climate change to Big Tech, The Independent is on the ground when the story is developing. Whether it's investigating the financia… [+3642 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "Stephan Shemilt",
            "title": "'Woakes return more important than ever to England'",
            "description": "At 36, Chris Woakes might be more important than he has ever been to England, writes Stephan Shemilt.",
            "url": "https://www.bbc.com/sport/cricket/articles/cly288leg7xo",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/7515/live/063ff110-4ac2-11f0-b5f5-e134c1aaf1e0.jpg",
            "publishedAt": "2025-06-17T06:29:37Z",
            "content": "Woakes is returning from an ankle problem he first felt at the end of England's tour of New Zealand in December. He says it might have been down to a switch in the boots he was wearing, which he has … [+2649 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera Investigative Unit",
            "title": "UK crime agency freezes assets of disgraced Sheikh Hasina ally",
            "description": "Saifuzzaman Chowdhury, former land minister, was featured in Al Jazeera's investigation, The Minister’s Millions.",
            "url": "https://www.aljazeera.com/news/2025/6/11/uk-crime-agency-freezes-assets-of-disgraced-sheikh-hasina-ally",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2025/06/Chowdhury-1749654526.jpeg?resize=1920%2C1402",
            "publishedAt": "2025-06-11T16:48:36Z",
            "content": "The UKs National Crime Agency (NCA) has frozen properties in the United Kingdom owned by Saifuzzaman Chowdhury, Bangladeshs former Minister of Land, Al Jazeeras Investigative Unit (I-Unit) can reveal… [+3103 chars]"
        },
        {
            "source": {
                "id": "le-monde",
                "name": "Le Monde"
            },
            "author": "Le Monde avec AFP",
            "title": "En Inde, une bousculade fait au moins onze morts, lors d’un rassemblement célébrant la victoire d’une équipe de cricket",
            "description": "Le mouvement de foule s’est déroulé dans la ville de Bengalore, dans le sud du pays, mercredi, faisant également près de 50 blessés. « Personne ne s’attendait à une si grande foule », a déclaré un ministre de l’Etat du Karnataka.",
            "url": "https://www.lemonde.fr/international/article/2025/06/04/en-inde-une-bousculade-fait-au-moins-onze-morts-lors-d-un-rassemblement-celebrant-la-victoire-d-une-equipe-de-cricket_6610551_3210.html",
            "urlToImage": "https://img.lemde.fr/2025/06/04/0/29/3381/2254/1440/960/60/0/7b4d026_ftp-import-images-1-1qy5ldhkd01k-2025-06-04t154312z-434519874-rc2rvea9eyen-rtrmadp-3-india-stampede-cricket.JPG",
            "publishedAt": "2025-06-04T16:23:28Z",
            "content": "Alors quune foule immense était venue fêter le retour victorieux de léquipe locale de cricket, une bousculade a fait au moins 11 morts dans la ville de Bengalore, dans le sud de lInde, mercredi 4 jui… [+3188 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello I am constructor from news component");
        this.state={
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
        <div className='container my-3'>
            <h2> NewsApp Top Headlines</h2>
            
            <div className="row">
                {this.state.articles.map((element)=>{
                    return(
                        <div className="col-md-3 mx-3" key={element.url} >
                            <NewsItem title={element.title.slice(0,45)+"..."} description={element.description.slice(0,88)+"..."} imageUrl={element.urlToImage} newsUrl=
                            {element.url}/>
                        </div>
                    )
                })} 
            </div>
        </div>
    )
  }
}
