## Project: web-design
Design a user interface for a user case of you're own choosing.

Last design made in sketch(This is what I wanted my project to look like.)
![](https://github.com/jajan20/web-design/blob/master/week_02/redesign.png)

## Table of contents
- [User cases](#user-cases)
- [User tests](#user-tests)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Features](#features)
- [Todo](#todo)
- [What went wrong?](#what-went-wrong)
  - [Design Process](#design-process)
  - [ExpressJS and Node](#expressjs-and-node)
  - [Conclusion](#conclusion)
- [Sources](#sources)

## User cases
Randy has been a huge fan of manga, but recently he hasn't been able to find any good new titles. Through a friend, he heard about manga finder a website that helps you find that hidden gem of a manga.

He visits the site because he wants to find a new manga, he's into action and comedy but doesn't like the drama stuff. 


Marijn heard about manga and wanted to know what the fuss is about. Due to his disability, he can only navigate using a keyboard.

#### Reasons
- find a (for the user) new manga to read.
- Casually browse through the available collection.
- Being able to save which chapter the user last read.
- Do specific search queries.
- Being able to sort
- Being able to filter
- Leave a rating on the manga(chapter?) you’ve read.

## User tests
While I couldn't test my own website. (see [what went wrong](#what-went-wrong) for more information). Attending the test of the other students in my group gave me a lot of insights on the ways Marijn interacts with user interfaces.

Some of the great insights I've gathered during the tests:

- Marijn hardly uses his **tab key** for navigation. Our assumption was that due to his disability he could only use his tab key. We were wrong, observing Marijn while he was navigating through the sites I noticed he primarily uses his arrow keys and spacebar. When something needs to be clicked he uses his large trackpad.

- Instead of using the scrollbar, a custom slider makes it easier to swipe through the page.
- Marijn is a developer and uses GitHub a lot. But the skip to the content function which everyone thought would be handy actually makes it harder for him to navigate. Usually the spacebar scrolls down to the content, so the function is already there.
- Marijn has no control over his muscles so clicking something isn't really easy. Making the target bigger works to his advantage.
- He noticed that hover states and select states look the same. This is bad design cause the user doesn't know when something is selected or not.

Marijn is a cool guy, he gave us some great insights and proved that assumptive design can really work against you. (everyone designed their interface to work primarily with the tab key).

## Installation
This project needs node and express to run.
- [Official Website NodeJS](https://nodejs.org/en/)
- [npm express](https://www.npmjs.com/package/express)

Set node to the root folder and run the following command:

``` npm install ```

This will install all dependencies.

## Dependencies
| Package   | Version |
|-----------|---------|
| Express   | 4.16.3  |

## Features
- [ ] Finding new and interesting manga
- [ ] Read the manga

## Todo
- [ ] Bookmark manga
- [ ] Favorites
- [ ] Fancy styling
- [ ] Semantic HTML

## What went wrong?
#### Design Process
This project made me realize that even though I've learned a lot these past couples of weeks I still have a long way to go.

One of the core principles of this assignment was that we shouldn't be too safe with our design. Exaggerate, go wild and make something that is visually stunning and works for your users.

The catch was that we needed to make the prototype with HTML/CSS/javascript. This in itself isn't that hard, but I kept working in loops. First I tried sketching my ideas and creating HTML prototypes with just that. It didn't work out so I tried making something in sketch, nothing hi-fi just to give myself a direction.

![](https://github.com/jajan20/web-design/blob/master/week_02/sketches_webdev.png)
![](https://github.com/jajan20/web-design/blob/master/week_02/preview-01.png)

After I'd spend a lot of time recreating my lo-fi sketch file in HTML I was disappointed in the result and went back to sketch. This time spending to much time on the design. In my opinion, it looked really good, but it was already too late to translate it to a working HTML prototype.

#### ExpressJS and Node
I wanted to use real data, so I started looking for an API that could give me information and pages about manga. I found one, but the endpoints weren't that good. I could only select 1 genre per API call, a call to all manga didn't return all the information so I had to write functions that would do another request for the extra information needed. I tried to not spend a lot of time getting this to work, but I needed real data. In the end, I did spend to much time on it.

#### Conclusion
While I think that I've learned a lot of HTML/CSS/javascript. I'm not skilled enough to quickly create a visually stunning design without first spending time in sketch. Right now my static design looks way better than something I could make with HTML/CSS/javascript.

## Sources
[MangaScraper API](https://market.mashape.com/doodle/manga-scraper#)
