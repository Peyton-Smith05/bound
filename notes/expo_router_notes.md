# Expo router notes

## `bound/app` dir

* all files within this dir are a route and define a distinct page with in my app (except _layout files)
* directories within the app dir define a group of related screens together (maybe all my library screens can go here?)
* All pages have a url meaning everything within the app dir can be use to navigate to that page. so a deep link can be made to those screens

* Universal deep links are a way to link from the web to a specific page in your app. See docs [here](https://docs.expo.dev/linking/overview/)

* `index.tsx` is where the app first looks. 

* You can define route groups in the app dir by surrounding the name in `()`. e.g. `(home)` or `(tabs)`
* Route groups are useful for grouping routes together without affecting the URL. e.g. `src/app/(home)/setting.tsx` will have a `/settings` route
* with in each dir you need a index.tsx file that defines the default route for that dir

## `_layout.tsx` files

* These are special fiels that are not pages themselves but define how groups of routes insdie a directory realte to each other. 
* If a directory of routs is arranges as a tab then the layout route is where that would be defined. Same for a stack.
* These files are rendered first. So it is where you would be any initialization logic.

* **IMPORTANT** The layout file within the root of /app is where to put things like loading fonts, interacting with the spash screen or adding context providers.

## Plus sign

* Files with a `+` are special
* some useful ones are `+not-found.tsx` which catches any requests that dont match a route in the app. `+middleware.ts` which is used to run code fefore a route is rendered, allowing you to perform tasks like authentication or redirection


