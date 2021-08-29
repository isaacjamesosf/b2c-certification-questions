export const questions = {
  2: {
    questionNumber: "Question #:2",
    description: "What happens if the log file size limit is reached in custom logging?",
    options: {
      A: "Logging is suspended for the day.",
      B: "Logging is suspended for two hours.",
      C: "The log file is deleted and recreated from scratch.",
      D: "The log file rolls over and the last used log is overwritten.",
    },
    answer: "A",
    Note: " From the documentation: “Logging is suspended until the next day (00:00) once the 10 MB limit has been reached.”",
  },

  3: {
    questionNumber: "Question #:3",
    description: "A Digital Developer noticed that cartridges in their workspace are NOT executing. The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection’s target version directory. Which action potentially solves this problem?",
    options: {
      A: "Set the active code version to use the latest compatibility mode.",
      B: "Remove invalid characters from the code version’s name.",
      C: "Remove invalid characters from cartridge file and folder names.",
      D: "Set the server connection’s target version directory to the active code version.",
    },
    answer: "D",
  },

  4: {
    questionNumber: "Question #:4",
    description: "A Digital Developer is working in a sandbox on a site named test-site using the domain test.demandware.net. The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information. By default, which URL format is a proper Open Commerce API for Sandbox?",
    options: {
      A: "https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
      B: "https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa...",
      C: "https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa...",
      D: "https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...",
    },
    answer: "C",
  },

  8: {
    questionNumber: "Question #:8",
    description: "A merchant requires that an existing section of the Site become editable from the Business Manager, so that they can modify it independently of the developer. Which of these is an important factor for a developer to consider when choosing the appropriate solution between a content slot and a Page Designer component?",
    options: {
      A: "Only Page Designer Components can be localized for different languages.",
      B: "Only content slot configurations can be tied to campaigns.",
      C: "Only page Designer components can ve tied to campaigns.",
      D: "Only content slot configurations can ve localized for different languages.",
    },
    answer: "A",
  },

  9: {
    questionNumber: "Question #:9",
    description: "Given the code snippet above, what should be added after this code so it can be used for page component display?",
    options: {
      A: "Base.render = render;",
      B: "Module.exports.render = render;",
      C: "Module.exports = render;",
      D: "Module.exports = server.exports();",
    },
    answer: "D",
  },

  10: {
    questionNumber: "Question #:10",
    description: "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded. What action should the Developer take to stop the quota violation?",
    options: {
      A: "Rewrite the code that is causing the overage.",
      B: "Change the Business Manager configuration for the quota settings.",
      C: "Take no action, the overage will be resolved when concurrent visitors are reduced.",
      D: "Ask support to remove the quota limit.",
    },
    answer: "B",
  },

  11: {
    questionNumber: "Question #:11",
    description: "A digital instance has one site, with one master product catalog separate from the site catalog. Some, but NOT all, products in the master catalog are assigned to categories of the site catalog. Using Business Manager, how can a Digital Developer create a catalog export file that contains only the products assigned to the site catalog?",
    options: {
      A: "Use the Catalog Export module to export the site catalog.",
      B: "Use the Catalog Export module to export the master catalog, with a category-assignment search to export specific products.",
      C: "Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.",
      D: "Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.",
    },
    answer: "B",
  },

  12: {
    questionNumber: "Question #:12",
    description: "Universal Containers sells physical gift cards for the holidays. What needs to occur to guarantee the cards will always be available?",
    options: {
      A: "Create an inventory record with an unlimited Allocation value.",
      B: "Create an inventory record with an extremely high Allocation value (i.e., 1 billion certificates).",
      C: "Create a perpetual inventory record.",
      D: "Create an inventory record with Backorder Handling enabled.",
    },
    answer: "C",
  },

  13: {
    questionNumber: "Question #:13",
    description: "A developer needs to update the package.json file so that it points to the hock file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?",
    options: {
      A: "{ “hooks”: “./cartridge/scripts/hooks.json” }",
      B: "{ “hooks”: “./scripts/hooks.json” }",
      C: "{ hooks: “./cartridge/scripts/hooks.json” }",
      D: "{ hooks: ./scripts/hooks.json }",
    },
    answer: "A",
  },

  14: {
    questionNumber: "Question #:14",
    description: "Which three techniques improve client-side performance in production while following documented best practices? (Choose three.)",
    options: {
      A: "Use one style sheet for each ISML decorator template.",
      B: "Place CSS outside of templates.",
      C: "Compress CSS.",
      D: "Use inline Javascript.",
      E: "Combine several images into a single image.",
    },
    answer: "A, C, E",
  },

  15: {
    questionNumber: "Question #:15",
    description: "Once the Cache Information tool of the storefront toolkit is enabled, how can a Digital Developer view caching information for a particular component of the page?",
    options: {
      A: "Hover over the caching icons now present on the storefront.",
      B: "Open the Request Logs to view the caching information.",
      C: "Start a pipeline debugging session and view the caching information provided.",
      D: "Right-click on the component in UX Studio and view the caching properties of the file.",
    },
    answer: "B",
  },

  16: {
    questionNumber: "Question #:16",
    description: "The developer created a new Storefront category in storefront-catalog-m-en, but when viewing the Storefront site, the category is not visible. What are two possible reasons?",
    options: {
      A: "The Storefront catalog is offline",
      B: "The category does not contain available products",
      C: "The category is not sorted",
      D: "The category is offline.",
    },
    answer: "B, D",
  },

  17: {
    questionNumber: "Question #:17",
    description: "A developer wants to create in Business Manager extension with the cartridge named plugin_bm_extension. Which two steps should the developer take for the extension option to show up in Business Manager? Choose 2 answers:",
    options: {
      A: "Add plugin_bm_extension to the cartridge path under business manager cartridge site",
      B: "Add the appropiate roles and permission to the user to view the business manager extension.",
      C: "Add plugin_bm_extension to the cartridge path under Storefront cartridge site path.",
      D: "Activate a new code version for the Business Manager Site.",
    },
    answer: "A, D",
  },

  18: {
    questionNumber: "Question #:18",
    description: "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it is written. What must be done in order to use the debugger with the new controller when it is written?",
    options: {
      A: "Create and use a new script debug configuration.",
      B: "Use the existing pipeline debugger.",
      C: "Modify the debugger configuration and use the existing pipeline debugger.",
      D: "Create and use a new controller debug configuration.",
    },
    answer: "C",
  },

  22: {
    questionNumber: "Question #:22",
    description: "When inspecting the weekly service status report for a critical internally hosted web service used in the application, a developer notices that there are too many instances of unavailability. Which two solutions can reduce the unavailability of the service? Choose 2 answers.",
    options: {
      A: "Update the service to have a faster response time.",
      B: "Modify the code that makes the request to the external service to be wrapped in a try/catch block.",
      C: "Increase the web service time out",
      D: "Change the code that sets the throwOnError attribute of the service to be true.",
    },
    answer: "B, C",
  },

  23: {
    questionNumber: "Question #:23",
    description: "A developer is given a task to implement a new Page Designer layout component that doesn’t accept certain asset components. How should the developer achieve the above task?",
    options: {
      A: "Add component_type_inclusion in the layout json configuration",
      B: "Add component_type_Exclusions in the layout json configuration",
      C: "Add layout_type_inclusion in the target components json configurations.",
      D: "Add layout_type_exclusion in the other asset components json configuration.",
    },
    answer: "B",
  },

  24: {
    questionNumber: "Question #:24",
    description: "A developer has a specification to integrate with a REST API for retrieving traffic conditions. The servisse expects parameters to be form encoded. Which service type should the developer register?",
    options: {
      A: "HTML Form",
      B: "SOAP Form",
      C: "POST Form",
      D: "HTTP Form",
    },
    answer: "D",
  },

  26: {
    questionNumber: "Question #:26",
    description: "A developer is asked to write a log containing the ID and name of the product with a variable named myProduct. Which snippet of code should be used?",
    options: {
      A: "Logger.warn(‘The current product is {0} with name {1}’, myProduct.getID(), myProduct.getName());",
      B: "Logger.warn(‘The current product is {0} with name {1}’), context(myProduct.getID(), myProduct.getName());",
      C: "Logger.warn(‘The current product is ${myProduct.getID()} with name ${myProduct.getName()}’);",
      D: "Logger.warn(‘The current product is %s with name %s’), context(myProduct.getID(), myProduct.getName());",
    },
    answer: "A",
  },

  27: {
    questionNumber: "Question #:27",
    description: "A merchant has a requirement to render personalized content to n a category page via a Content Slot that targets VIP high-spending customers during a specific promotional period. Which two items should the developer create to achieve the specified requirements? Choose 2 answers:",
    options: {
      A: "VIP Customer Group",
      B: "Page Template",
      C: "Slot Configuration",
      D: "Rendering Template",
    },
    answer: "C, D",
  },

  104: {
    questionNumber: "Question #:104",
    description: "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects.  Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
    options: {
      A: "The Auto-Upload setting is enabled for the server connection.",
      B: "The Active Server setting is enabled for the server connection.",
      C: "The credentials for the server connection are correctly entered.",
      D: "The cartridge is for the current version of B2C Commerce.",
      E: "The server is configured to accept incoming connections.",
    },
    answer: "A, D, E",
  },

  28: {
    questionNumber: "Question #:28",
    description: "An instance has custom logging enabled. The log reaches the file size limit. What happens in this situation?",
    options: {
      A: "The log file is deleted and a new log file is created.",
      B: "Logging is suspended for the day",
      C: "The current log file is archived and a new log file is created.",
      D: "The log file Rolls over and the oldest log messages are overwritten",
    },
    answer: "B",
  },
  30: {
    questionNumber: "Question #:30",
    description: "A Digital Developer has identified that the code segment below is causing performance problems. \nWhat should the Developer do to improve the code?",
    options: {
      A: "Use a system attribute instead of the isOnSaleFlag custom attribute.",
      B: "Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.",
      C: "Breaks the process into separate loops.",
      D: "Avoid using an Iterator and use a Collection instead.",
    },
    answer: "B",
  },

  31: {
    questionNumber: "Question #:31",
    description: "A Digital Developer wants pass control to an ISML template from a JavaScript Controller and load product on the pipeline dictionary with the name myProduct. Which code sample will achieve this?",
    options: {
      A: 'ISML.renderTemlpate ( "helloworld.isml", { "myProduct": "product"});',
      B: 'ISML.renderTemlpate ( "helloworld.isml", { "product": myProduct });',
      C: 'ISML.renderTemlpate ( "helloworld.isml", { product: myProduct });',
      D: 'ISML.renderTemlpate ( "helloworld.isml", { myProduct: product });',
    },
    answer: "A",
  },

  32: {
    questionNumber: "Question #:32",
    description: "A merchant has a content slot on a page that currently displays products based on the top Sellers for the current week. They wish to change this functionality and, instead, have the slot render a specific content asset so that the content experience is more personalized to the visitors. Which two actions are necessary to make this change? Choose 2 answers",
    options: {
      A: "Delete the existing content slot and create a new one.",
      B: "Change the rendering template in the slot configuration",
      C: "Change the default setting in the slot configuration",
      D: "Change the content type for the slot configuration",
    },
    answer: "B, D",
  },

  33: {
    questionNumber: "Question #:33",
    description: "Universal Containers wants to change a content slot that is currently configured to display a content asset. Now they want the slot to display the top five selling boxes for the week. Which two changes need to be made for this to occur? (Choose two.)",
    options: {
      A: "Change the slot’s configuration content type to “products.”",
      B: "Change the slot’s configuration content type to “recommendations.”",
      C: "Change the slot’s configuration template to the appropriate rendering template.",
      D: "Delete the existing content asset.",
    },
    answer: "B, C",
  },

  34: {
    questionNumber: "Question #:34",
    description: "Which two methods are efficient and scalable? (Choose two.)",
    options: {
      A: "ProductMgr.queryAllSiteProducts()",
      B: "ProductSearchHit.getRepresentedProducts()",
      C: "ProductSearchModel.getProductSearchHits()",
      D: "Category.getProducts()",
    },
    answer: "C, D",
  },

  35: {
    questionNumber: "Question #:35",
    description: "A merchant has a requirement to sell a combination of four existing products with a unique product ID. This collection will be known as ‘Our Top Combo’, and is base don the merchant’s trading information that shows this combination to be in high demand. What does the developer need to do next to fulfill this requirement?",
    options: {
      A: "Create a unique product called ‘Our Top Combo’ and add the four products into the Product Bundles tab.",
      B: "Create a Content Slot with Content Type = Product and add the four component products into that slot.",
      C: "Create a Product Set called ‘Our Top Combo’ and add the products into the set.",
      D: "Create a recommendation rule associating the four products as a recommendation group.",
    },
    answer: "A",
  },

  37: {
    questionNumber: "Question #:37",
    description: "A client has custom object definition and requirement that occasional data changes in staging also need to exist in production, Which task should the developer perform to meet these requirements when setting up the custom object?",
    options: {
      A: "Create two copies of the custom object in staging and set Sharing = True.",
      B: "Create the custom object definition in staging as Shared",
      C: "Create the custom object definition in production as Replicable",
      D: "Create the custom object definition in staging as Replicable",
    },
    answer: "D",
  },

  38: {
    questionNumber: "Question #:38",
    description: "Given the file structure below, which ISML method call renders the customLandingPage template?",
    options: {
      A: "ISML.renderTamplate(‘cartridge/templates/default/content/custom/customLandingPage’);",
      B: "ISML(‘content/custom/customLandingPage’);",
      C: "ISML.render(‘content/custom/customLandingPage’);",
      D: "ISML.renderTemplate(‘content/custom/customLandingPage’);",
    },
    answer: "D",
  },

  41: {
    questionNumber: "Question #:41",
    description: "A business user wants to add a link to a content page from within the body of another content asset. The target content asset ID is: terms-and-conditions. Which link function generates the correct link?",
    options: {
      A: "$include(‘Page-Include’, ‘cid’, ‘terms-and-conditions’)$",
      B: "$http(‘Content-Page’, ‘cid’, ‘terms-and-conditions’)$",
      C: "$httpUrl(‘Content-Show’, ‘cid’, ‘terms-and-conditions’)$",
      D: "$url(‘Page-Show’, ‘cid’, ‘terms-and-conditions’)$",
    },
    answer: "D",
  },

  42: {
    questionNumber: "Question #:42",
    description: "In order to build the SFRA code to a developer sandbox for the first time, which build steps should the developer perform for the site to appear and function as designed?",
    options: {
      A: "npm run compile:js, npm run compile:html, npm run clean",
      B: "npm run compile:scss, npm run compile:html, npm run clean",
      C: "npm run compile:js, npm run compile: scss, npm run compile:html",
      D: "npm run compile:js, npm run compile:scss, npm run compile:fonts",
    },
    answer: "D",
  },

  43: {
    questionNumber: "Question #:43",
    description: "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties. To which file should the developer add German string values?",
    options: {
      A: "checkout_de.properties in resources folder",
      B: "checkout.properties in the de locale folder",
      C: "checkout.properties in the default locale folder",
      D: "de_checkout.properties in resources folder",
    },
    answer: "D",
  },

  46: {
    questionNumber: "Question #:46",
    description: "Which three operations should be done in a controller? Choose 3 answers",
    options: {
      A: "Generate the response as JSON or HTML",
      B: "Use the Script API to generate data for the view.",
      C: "Use middleware functions when applicable",
      D: "Create a plain JavaScript object representing a system object",
      E: "Use the model needed for the view.",
    },
    answer: "A, C, E",
  },
  47: {
    questionNumber: "Question #:47",
    description: "A job executes a pipeline that makes calls to an external system. Which two actions prevent performance issues in this situation? (Choose two.)",
    options: {
      A: "Use synchronous import or export jobs",
      B: "Configure a timeout for the script pipelet.",
      C: "Disable multi-threading.",
      D: "Use asynchronous import or export jobs.",
    },
    answer: "B, C",
  },

  48: {
    questionNumber: "Question #:48",
    description: "Which two items are appropriate content of custom logs implemented at checkout? Choose 2 answers:",
    options: {
      A: "Customer’s password at post-checkout sign up",
      B: "Order failure information",
      C: "Transaction’s credit card information",
      D: "Payment gateway service response code",
    },
    answer: "B, D",
  },

  50: {
    questionNumber: "Question #:50",
    description: "Which technical reports datapoint measures the performance of a controller’s script execution if network factors and Web Adaptor processing is ignored?",
    options: {
      A: "Processing time",
      B: "Cache hit ratio",
      C: "Call count",
      D: "Response time",
    },
    answer: "A",
  },
  51: {
    questionNumber: "Question #:51",
    description: "Universal Containers wants to add a model field to each product. Products will have locale-specific model values. How should the Digital Developer implement the requirement?",
    options: {
      A: "Utilize resource bundles for translatable values.",
      B: "Set the model field as a localizable attribute.",
      C: "Store translated model values in different fields; one field for each locale.",
      D: "Add model to a new custom object with localizable attributes.",
    },
    answer: "C",
  },

  53: {
    questionNumber: "Question #:53",
    description: "Universal Containers wants to give customers the ability to refine product search results by a product custom attribute, weightCapacity. Which series of steps should a Digital Developer take to show this refinement on the storefront?",
    options: {
      A: "Define a sorting rule for weightCapacity, then rebuild the product search index.",
      B: "Define a search refinement for weightCapacity, then rebuild the product search index.",
      C: "Define search-suggestion buckets for weightCapacity, then rebuild the product search index.",
      D: "Define a search refinement for weightCapacity, then clear the page cache segment for Search-Show.",
    },
    answer: "B",
  },

  54: {
    questionNumber: "Question #:54",
    description: "A Digital Developer has created a new PaymentForm controller that requires communication with the server and must be made using the HTTPS protocol. Which code sample should the Developer use to make sure that HTTPS is used?",
    options: {
      A: "exports.PaymentForm = guard.ensure([‘http’, ‘post’, ‘loggedIn’], handlePaymentForm);",
      B: "exports.PaymentForm = guard.expose([‘post’, ‘loggedIn’], handlePaymentForm);",
      C: "exports.PaymentForm = guard.httpsPost(handlePaymentForm);",
      D: "exports.PaymentForm = guard.ensure([‘https’, ‘post’, ‘loggedIn’], handlePaymentForm);",
    },
    answer: "D",
  },

  56: {
    questionNumber: "Question #:56",
    description: "A Digital Developer needs to store information temporarily and decides to create a custom object. Which code creates a custom object?",
    options: {
      A: "CustomObject.createCustomObject(CustomObjectType,primaryKey);",
      B: "CustomObject.createCustomObject(primaryKey,CustomObjectType); ",
      C: "CustomObjectMgr.createCustomObject(primaryKey);",
      D: "CustomObjectMgr.createCustomObject(CustomObjectType,primaryKey)",
    },
    answer: "D",
  },

  57: {
    questionNumber: "Question #:57",
    description: "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting. Which approach should the Developer use to implement the requirement?",
    options: {
      A: "Implement a ServiceUnavailableException exception handler to execute fallback code.",
      B: "Implement a condition that checks to see if the response was empty and execute fallback code if true.",
      C: "Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.",
      D: "Use the setTimeout method to execute fallback code if the request has NOT completed.",
    },
    answer: "A",
  },
  58: {
    questionNumber: "Question #:58",
    description: "Given a NewsletterSubscription custom object that has a key attribute named email of type String, what is the correct syntax to create the NewsletterSubscription custom object and persist it to the database?",
    options: {
      A: "Var customobject = dw.object.CustomObjectMgr.createNewsletterSubscription(‘email’, newsLetterForm.email.value);",
      B: "Var customobject = dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value, ‘NewsletterSubscription’);",
      C: "Var customobject = dw.object.CustomObjectMgr. createCustomObject (‘NewsletterSubscription’, newsLetterForm.email.value);",
      D: "Var customobject = dw.object.CustomObjectMgr. createCustomObject  (‘NewsletterSubscription’,’email’, newsLetterForm.email.value);",
    },
    answer: "C",
  },

  60: {
    questionNumber: "Question #:60",
    description: "Why should a Digital Developer use ProductSearchModel.getProducts() instead ofCategory.getOnlineProducts() to access products?",
    options: {
      A: "It is more readable code.",
      B: "It has fewer lines of code.",
      C: "It uses the search index.",
      D: "It reduces accesses to the application server.",
    },
    answer: "C",
  },

  61: {
    questionNumber: "Question #:61",
    description: "A Digital Developer extends a system object, Product, and adds a Boolean attribute, “sellable,” to it. Assuming “prod” is the variable name handling the product, what code can the Developer use to access it?",
    options: {
      A: "prod.extended.sellable",
      B: "prod.sellable",
      C: "prod.persistable.sellable",
      D: "prod.custom.sellable ",
    },
    answer: "D",
  },

  63: {
    questionNumber: "Question #:63",
    description: "A client that sells to multiple countries in Europe needs to disable Apple Pay for Denmark. Which Business Manager module is used to achieve this requirement?",
    options: {
      A: "Locale Payments",
      B: "Payment Methods",
      C: "Payment Processors",
      D: "Apple Pay",
    },
    answer: "D; SOMETHING LIKE THAT WHICH THE ASNWER WAS PAYMENT METHODS. THE QUESTION WAS ABOUT ADD MAKES ENABLED AN EXISTING CREDIT CARD THAT WAS CREATED BUT DISABLED, WHERE IN BM TURN THAT CREDIT CARD ENABLED",
  },

  65: {
    questionNumber: "Question #:65",
    description: "A client has two B2C Commerce sites in the same instance: one for the U.S market, the other for the European market. The products they make are sold with different safety certificates based-on the world location. For example, they sell a smartphone with certificate A in the U.S and certificate B in Europe, a hairdryer with certificate C in the U.S and certificate D in Europe, and more. How should a developer allow the merchant to display the appropriate certification logo in the produce to details page, depending on the customer’s location?",
    options: {
      A: "Add a Localizable custom attribute to the Certificate system object type.",
      B: "Ad and Image custom preference to the Sitepreference system object type",
      C: "Add a Site-specific custom attribute to the Product system object type.",
      D: "Add a Localizable custom preference to the SitePreference system object type",
    },
    answer: "C",
  },

  66: {
    questionNumber: "Question #:66",
    description: "A Digital Developer wants to selectively retrieve products and process them from an iPhone. Which action should the Developer take, given that JavaScript controllers CANNOT be used?",
    options: {
      A: "Use import/export in Business Manager.",
      B: "Create a webservice to retrieve products.",
      C: "Use OCAPI and invoke it in native language.",
      D: "Use WebDAV Client to retrieve products.",
    },
    answer: "B",
  },

  68: {
    questionNumber: "Question #:68",
    description: "A developer wants to add a link to the My Account Page. What is the correct code to accomplish this?",
    options: {
      A: "<a href=”${URLUtils.get(‘Account-Show’)}>${Resource.msg(‘myaccount’,’account’,request.locale())}</a>",
      B: "<a href=”${url.get(‘Account-Show’)}>${Resource.message(‘myaccount’)}</a>",
      C: "<a href=”${URLUtils.url(‘Account-Show’)}>${Resource.msg(‘myaccount’,’account’,null)}</a>",
      D: "<a href=”${URLUtils (‘Account-Show’)}>${ResourceMgr.getPropierties(‘myaccount’,’account’,null)}</a>",
    },
    answer: "C",
  },

  70: {
    questionNumber: "Question #:70",
    description: "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories. Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
    options: {
      A: "Create a Synonym Dictionary entry: car accessories, household, technology. Use search mode Exact Match",
      B: "Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology. Use search mode Exact Match.",
      C: "Create a Synonym Dictionary entry: car accessories, household, technology. Use search mode First Word.",
      D: "Create a Common Phrase Dictionary entry: car accessories. Use search mode Exact Match.",
    },
    answer: "D",
  },

  71: {
    questionNumber: "Question #:71",
    description: "Universal Containers is preparing their storefront to use Open Commerce APIs (OCAPI). To which hook should the Digital Developer move taxation logic to ensure consistent order totals within B2C Commerce?",
    options: {
      A: "dw.ocapi.shop.order.validateOrder",
      B: "dw.ocapi.shop.basket.calculate",
      C: "dw.ocapi.shop.basket.afterPostShipment",
      D: "dw.ocapi.shop.order.afterPOST",
    },
    answer: "B",
  },

  72: {
    questionNumber: "Question #:72",
    description: "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. The app_storefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:int_paypal:app_storefront. The Developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template for the new site. Which modification should be made to the new cartridge path?",
    options: {
      A: "Set the cartridge path so that app_newsite is before app_storefront.",
      B: "Set the cartridge path so that app_storefront is before int_cybersource. ",
      C: "Set the cartridge path to include only app_newsite.",
      D: "Set the cartridge path so that app_newsite is after app_storefront.",
    },
    answer: "B; NOT EXACTLY THE SAME. I ANSWERED TO PUT THE APP_NEWSITE RIGHT BEFORE THE EXISTING CARTRIDGE THAT HOLDS THE BUSINESS LOGIC AND DATA MODEL(IN THIS CASE, APP_STOREFRONT)",
  },

  73: {
    questionNumber: "Question #:73",
    description: "Universal Containers needs to have Apple Pay disabled for the country of Spain. Which Business Manager module should the Developer use to meet this requirement?",
    options: {
      A: "Merchant Tools > Ordering > Payment Methods",
      B: "Merchant Tools > Site Preferences > Apple Pay",
      C: "Merchant Tools > Ordering > Payment Processors",
      D: "Merchant Tools > Site Preferences > Payment Types",
    },
    answer: "A",
  },

  74: {
    questionNumber: "Question #:74",
    description: "Universal Containers specifies a new category hierarchy for navigating the digital commerce storefront. A Digital Developer uses Business Manager to manually create a catalog with the specified category hierarchy, then uses the Products & Catalogs > Import & Export module to export the catalog as a file. How can other Developers with sandboxes on the same realm create the same catalog in their own sandboxes?",
    options: {
      A: "Use Business Manager to upload and import a copy of the export file obtained from the original Developer.",
      B: "Use the remote upload capability of the Site Import & Export module of Business Manager.",
      C: "Use the import capability of the Site Import & Export module of Business Manager.",
      D: "Use the Business Manager Data Replication module to replicate the catalog from the original Developer’s sandbox.",
    },
    answer: "C",
  },

  75: {
    questionNumber: "Question #:75",
    description: "A client wants to differentiate their monobrand stores with a special icon when shown in the store locator. The information is saved in a true/false custom attribute for each Store object in Merchant tools. How should the developer follow SFRA best practices to expose this data for rendering?",
    options: {
      A: "Extend the existing Stores_Find controller with a new middleware function that performs the query",
      B: "Pass the Store system object to the template, so that custom propierties are available",
      C: "Ad dan <isscript> to the template, and call StoreMgr.searchStoresByCoordinates();",
      D: "Use the module.superModule functionality and the call method to add a new property to the Store Model.",
    },
    answer: "D",
  },
  76: {
    questionNumber: "Question #:76 ",
    description: "A Digital Developer selects “Show Orderable Products Only” in the Search > Search Preferences Business Manager module. Which business goal does this accomplish?",
    options: {
      A: "Exclude products from search results if Available to Sell (ATS) = 0.",
      B: "Exclude back-ordered products from showing on the website.",
      C: "Block displaying the product detail page if Available to Sell (ATS) = 0.",
      D: "Exclude pre-order products from search results.",
    },
    answer: "A",
  },

  77: {
    questionNumber: "Question #:77",
    description: "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web servisse used in the application and notices that there are too many instances of unavailability. Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
    options: {
      A: "Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
      B: "Change the code that makes the request to set the throwOnError attribute, of the service, to be true.",
      C: "Increase the web service time out.",
      D: "Update the external service to have a faster response time.",
    },
    answer: "A, C",
  },

  79: {
    questionNumber: "Question #:79",
    description: "Universal Containers wants to associate a region code value with an order to indicate the general area of its destination. This region code must be accessible whenever the order history is displayed. What is required to accomplish this?",
    options: {
      A: "Store the region code value in a session variable.",
      B: "Define a custom attribute on the Order system object type to store the region code value.",
      C: "Define a custom object type to store the username with the region code.",
      D: "Store the region code value in the geolocation system attribute of the Order.",
    },
    answer: "B; ",
  },

  80: {
    questionNumber: "Question #:80",
    description: "A Digital Developer must resolve a performance issue with product tiles. The Developer determines that the product tiles are NOT being cached for a long enough period. Which two methods can the Developer use to verify the cache settings for the product tiles? (Choose two.)",
    options: {
      A: "Enable cache information in the storefront toolkit and view the cache information for the product tile.",
      B: "View the cache information provided by the Merchant Tools > Technical Reports Business Manager module.",
      C: "View the product list page cache settings provided in the Administration > Manage Sites Business Manager module.",
      D: "Enable the template debugger to verify the cache times for the producttile.isml template.",
    },
    answer: "A, C",
  },

  81: {
    questionNumber: "Question #:81",
    description: "A Digital Developer must give users the ability to choose an occasion (holiday, birthday, anniversary, etc.) for which gifts are currently being selected. The data needs to be persistent throughout the current shopping experience. Which data store variable is appropriate, assuming there is no need to store the selection in any system or custom objects?",
    options: {
      A: "Request scope variable",
      B: "Page scope variable",
      C: "Session scope variable",
      D: "Content slot variable",
    },
    answer: "C",
  },

  82: {
    questionNumber: "Question #:82",
    description: "A developer working on a simple web service integration is asked to add appropriate logging to allow future troubleshooting. According to logging best practices, which code should the developer write to log when an operation succeeds, but has an unexpected outcome that may produce side effects?",
    options: {
      A: "Logger.info(‘Unexpected service response’)",
      B: "Logger.debug(‘Unexpected service response’)",
      C: "Logger.error(‘Unexpected service response’)",
      D: "Logger.warn(‘Unexpected service response’)",
    },
    answer: "D",
  },

  83: {
    questionNumber: "Question #:83",
    description: "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox. Which three items are required to accomplish this task? (Choose three.)",
    options: {
      A: "Instance Version",
      B: "Instance Hostname",
      C: "Business Manager Username",
      D: "Keystore Password",
      E: "Business Manager Password",
    },
    answer: "B, C, E; SOMETHING LIKE THAT. THE DIFFERENCE WAS THE CONFIGURATION WAS USING VSCODE, AND THE ANSWER WAS: USERNAME/PASSWORD(THERE BOTH WAS IN THE SAME OPTION), CODE VERSION AND HOSTNAME",
  },
  84: {
    questionNumber: "Question #:84",
    description: "Given a job step configured in the steptype.json, a developer needs to add a custom status code “No_FILES_FOUND”. Which code snippet will complete the requirement?",
    options: {
      A: "var status = {success: ‘OK’. Message: ‘NO_FILES_FOUND’}; return status;",
      B: "var status = require(‘dw/system/status’); return new Status(Status.OK, ‘NO_FILES_FOUND’);",
      C: "this.status = ‘NO_FILES_FOUND’ return this;",
      D: "return ‘NO_FILES_FOUND",
    },
    answer: "B",
  },

  85: {
    questionNumber: "Question #:85",
    description: "A developer must configure permissions for an Open Commerce API resource on a sandbox instance that currently does not have any permissions configured. Which two configuration properties are required to enable Access to the resource? Choose 2 answers",
    options: {
      A: "Resource_id",
      B: "Read_attributes",
      C: "Client_id",
      D: "Version_range",
    },
    answer: "A, C",
  },

  86: {
    questionNumber: "Question #:86",
    description: "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items. How can a developer use Business Manager to ensure that the gift vouchers are always available?",
    options: {
      A: "Check the perpetual flag in the product inventory record",
      B: "Check the Available to Sell (ATS) flag dor the producto set",
      C: "Set StockLevel = maxAllocation for the product.",
      D: "Manually set the inventory to a high number.",
    },
    answer: "A",
  },

  87: {
    questionNumber: "Question #:87",
    description: "A developer has custom debug statements in a script, but the messages are not showing up in the Storefront Toolkit Request Log. Which step needs to be completed to get the messages to appear in the Request Log?",
    options: {
      A: "In Global preferences, check the box for Enable custom logging in Request Log.",
      B: "In Site Preferences, check the box for Enable custom Logging in Request Log",
      C: "In Custom Log Settings, check the DEBUG box for Select Log Levels Written to Files.",
      D: "In custom Log Settings, activate the loggin category at DEBUG level.",
    },
    answer: "C",
  },

  91: {
    questionNumber: "Question #:91",
    description: "A Digital Developer added a file named MyBusinessController.js in the cartridge named app_project. The project design calls for this new file to override MyBusinessController.js in client_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controllers cartridges. Which cartridge path meets the project requirements?",
    options: {
      A: "client_project:app_project:storefront_controllers:storefront_core",
      B: "app_project:storefront_controllers:storefront_core",
      C: "app_project:client_project:storefront_controllers:storefront_core",
      D: "storefront_core:storefront_controllers:client_project:app_project",
    },
    answer: "C",
  },

  92: {
    questionNumber: "Question #:92",
    description: "A Digital Developer suspects a logical error in a script. Which action will help locate the error?",
    options: {
      A: "Submit a support ticket to B2C Commerce.",
      B: "Check request logs for evidence of the logical error.",
      C: "Put breakpoints in the code, debug, and examine variable values.",
      D: "Print all values in the script node called before the current script.",
    },
    answer: "C",
  },
  94: {
    questionNumber: "Question #:94",
    description: "Which three object types can a developer import using the Merchant Tools > Content > Import & Export module in Business Manager? (Choose three.)",
    options: {
      A: "Content slots",
      B: "Images and other static assets",
      C: "Products",
      D: "Folders",
      E: "Content assets",
    },
    answer: "C, D, E; ",
  },

  95: {
    questionNumber: "Question #:95",
    description: "A Storefront is designed so that multiple pages share a common header and footer layout.  Which ISML tag should a developer use on the templates for these pages to avoid code repetition in the most effective way?",
    options: {
      A: "<isdecorate> … </isdecorate>",
      B: "<iscontent> … </iscontent>",
      C: "<isreplace> … </isreplace>",
      D: "<isinclude> … </isinclude>",
    },
    answer: "A",
  },

  96: {
    questionNumber: "Question #:96",
    description: "A developer has a sandbox configured with a service and its profile and credential.. Now there is a requirement to allow changes to the service URL manually from the sandbox. Which B2C feature should the developer use to achieve the request?",
    options: {
      A: "Use the service credential URL field",
      B: "Use the service status area, set the override URL checkbox, and then populate the URL field with the required one.",
      C: "Use a Sitepreference dedicated for the service URL",
      D: "Use a Globalpreference dedicated for the service URL",
    },
    answer: "A",
  },

  97: {
    questionNumber: "Question #:97",
    description: "A Digital Developer has been given a specification to integrate with a REST API for retrieving Weather conditions. The service expects parameters to be form encoded. Which service type should the Developer register?",
    options: {
      A: "FTP",
      B: "SOAP",
      C: "HTTP Form",
      D: "WebDAV ",
    },
    answer: "C",
  },

  99: {
    questionNumber: "Question #:99",
    description: "A developer set up a new site with Taxation: Net. However, the business requirements changed and the site now needs to be Taxation:Gross. The Business Manager interface does not give this option. Which sequence of steps is necessary to change the site to gross taxation?",
    options: {
      A: "Make sure that the developer has “Administrator” Access, then change the Taxation setting to Gross",
      B: "Unlock the site preferences and then change the Taxation setting to Gross",
      C: "Change the global setting,”Enable Taxation Methods” to true, then change the Taxation setting to Gross",
      D: "Create a new site with Taxation set to Gross, then delete the old site.",
    },
    answer: "D",
  },

  100: {
    questionNumber: "Question #:100",
    description: "A Digital Developer has a new requirement to disable the 'Discover'credit card type for all checkouts. What does the Developer need to change in Business Manager to fulfill this requirement?",
    options: {
      A: "Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.",
      B: "Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module.",
      C: "Credit cards in the Merchant Tools > Ordering > Payment Methods module.",
      D: "Credit card exclusion rules in the CreditCardType.json configuration file.",
    },
    answer: "C",
  },
  101: {
    questionNumber: "Question #:101",
    description: "A client sells its product in single-brand stores as well as in multi-brand stores. When shown in the store locator list, the client wants the single-brand stores to have a particular background color to highlight them. Which Business Manager action should be completed to allow the developer to apply different styling to the single-brand stores?",
    options: {
      A: "Add a Boolean custom attribute to the Store system object",
      B: "Configure the existing Store custom object type definition",
      C: "Create a new SingleBrandStore custom object configuration.",
      D: "Adjust the relevant Site Preference in the Stores group",
    },
    answer: "A",
  },

  102: {
    questionNumber: "Question #:102",
    description: "A client uses tax tables in Business Manager to calculate tax. They recently started shipping to a new country, Italy, and the taxi s not being calculated correctly on the Storefront. What is the likely problem?",
    options: {
      A: "Tax Region is configured wrong.",
      B: "Tax Country is missing",
      C: "Tax Jurisdiction is missing",
      D: "Tax Locale is configured wrong",
    },
    answer: "C",
  },

  103: {
    questionNumber: "Question #:103",
    description: "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned. Given the above requirement, where should the developer create that partition in Business Manager?",
    options: {
      A: "Administration > Sites > Manage Sites > Site > Cache",
      B: "Operations > Site > Manage Sites > Cache",
      C: "Operations > Cache > Site",
      D: "Site > Site Preferences > Cache",
    },
    answer: "A",
  },

  106: {
    questionNumber: "Question #:106",
    description: "Which line of code creates a content slot that can be included on homepage.isml to display on the home page?",
    options: {
      A: '<isslot id="my_banner "description="for home page"type="global"context="content"context-object="${pdict.ContentSearchResult.content}"/>',
      B: '<isslot id="my_banner "description="for home page"type="global"context="homepage"/>',
      C: '<isslot id="my_banner "description="for home page"context="global">',
      D: '<isslot id="my_banner "description="for home page"context="global"context-object="${pdict.CurrentHomePage}"/>',
    },
    answer: "C",
  },

  107: {
    questionNumber: "Question #:107",
    description: "A developer wants to use an external application to manage their stores information (such as opening hours, and so on), and see their changes in their B2C Commerce Staging instance aas son as they are saved. What is the appropriate technique the developer should perform to allow the merchant to create a new store in this scenario?",
    options: {
      A: "A POST request to the Stores Data OCAPI.B:",
      B: "A PUT request to the Stores Data OCAPI.",
      C: "A PATCH request to the Stores Data OCAPI.",
      D: "An UPDATE request to the Stores Data OCAPI.",
    },
    answer: "B",
  },

  108: {
    questionNumber: "Question #:108",
    description: "Universal Containers created a site export file from staging in the global export directory. How should the Digital Developer update their sandbox using this staging site export file?",
    options: {
      A: "Perform a data replication from staging.",
      B: "Use the Site Development > Site Import & Export Business Manager module.",
      C: "Download the site export file and use UX Studio to transfer the data to the sandbox.",
      D: "Use the Site Development > Import & Export Business Manager module.",
    },
    answer: "B",
  },

  109: {
    questionNumber: "Question #:109",
    description: "Universal Containers recently completed updates to their storefront shopping cart page. A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. Additionally, authenticated users who try to add a coupon are logged out. The following processing code is found in the Cart.js controller file: \nWhat should the Developer verify to identify the issue?",
    options: {
      A: "The CSRF cartridge is included in the site’s cartridge path.",
      B: "The form group has the secure attribute set to true.",
      C: "The CSRF token is present in the form and is being submitted in the request.",
      D: "The CSRF settings in Business Manager are properly configured.",
    },
    answer: "C",
  },

  110: {
    questionNumber: "Question #:110 ",
    description: "A Digital Developer adds the following line of code to a script. The code executes without error; however, the log file on disk does NOT contain the log message. Which two actions should be completed to write the log message to disk? (Choose two.)",
    options: {
      A: "Ensure that the debug log level is enabled to write to file in the Custom Log Settings Business Manager module.",
      B: "Archive old log files to make room in the log directory.",
      C: "Ensure that the “login” category is added to the Custom Log Filters in the Log Settings Business Manager module.",
      D: "Ensure that the debug log level has been added to the custom log level types in the Global Preferences business manager module.",
    },
    answer: "A, C",
  },

  112: {
    questionNumber: "Question #:112",
    description: "A Digital Developer has a site export file on their computer that needs to be imported into their sandbox. How should the developer update their sandbox with the data in this file?",
    options: {
      A: "Connect and import the file using the remote option within the Site Import & Export Business Manager module.",
      B: "Upload and import the file using the local option within the Site Import & Export Business Manager module.",
      C: "Upload the file to the Impex WebDAV directory and import using the Site Import tool within UX Studio.",
      D: "Upload the file to the Static WebDAV directory and import using the Import & Export Business Manager module.",
    },
    answer: "B",
  },

  113: {
    questionNumber: "Question #:113",
    description: "A Digital Developer is asked to optimize controller performance by lazy loading scripts as needed instead of loading all scripts at the start of the code execution. Which statement should the Developer use to lazy load scripts?",
    options: {
      A: "importPackage () method",
      B: "$.ajax () jQuery method",
      C: "local include",
      D: "require () method",
    },
    answer: "D",
  },

  115: {
    questionNumber: "Question #:115",
    description: "developer is tasked with the development of a new Page Designer Page Type, as requested by the merchant. How should they define the rendering logic of the page?",
    options: {
      A: "Implement an XML file with a <render> node",
      B: "Implement a JavaScript file with a render() function",
      C: "Implement a Controller file with a “render” route",
      D: "Implement a metadata JSON file with a “render” property",
    },
    answer: "B",
  },

  116: {
    questionNumber: "Question #:116",
    description: "A developer needs to perform the same additional checks before completing multiple routes in a custom controller, in order to decide whether to render a template or redirect the user to a different page. According to SFRA best practices, what is the correct approach to improve code reusability in this scenario?",
    options: {
      A: "Replace the existing routes by creating a controller in separate new cartridge",
      B: "Use the superModule property in the existing routes to extend their functionality",
      C: "Append a new function to all the existing routes with the server module",
      D: "Define a new middleware function and use it in the existing routes",
    },
    answer: "D",
  },

  117: {
    questionNumber: "Question #:117",
    description: "A developer cannot create a custom object in Business Manager because the attributes do not show. The developer can view the object but not the attributes. Which action should the developer take to resolve the problem?",
    options: {
      A: "Change the data type of the attributes",
      B: "Set the attributes to site-specific replicable",
      C: "Create an Attribute Group with the desired attributes in it",
      D: "Sort the attributes in the custom object type",
    },
    answer: "A",
  },

  118: {
    questionNumber: "Question #:118",
    description: "A developer is asked to write a job that is responsible for updating the customer order based upon a trigger from the Order Management System (OMS). While all the information for the order remains the same, the Order number provided by the OMS needs to replace the existing Order Number. The developer chooses to use the B2C OCAPI hooks to update the order to achieve the above requirement. According to best practices which OCAPI call should the developer use along with which OCAPI hook?",
    options: {
      A: "PATCH /orders/{order_no} with dw.ocapi.shop.order.beforePATCH",
      B: "DELETE /orders/{old_order_no} with dw.ocapi.shop.order.afterDELETE",
      C: "PATCH /orders/{order_no} with dw.ocapi.shop.order.afterPATCH",
      D: "POST /orders/{order_no} with dw.ocapi.shop.order.afterPOST",
    },
    answer: "C",
  },

  120: {
    questionNumber: "Question #:120",
    description: "What are two appropriate uses of the <isif> ISML tag that follow B2C Commerce and SFRA best practices? (Choose two.)",
    options: {
      A: "Display a section of the page to logged users only.",
      B: "Show a different <div> tag depending on a pdict Boolean variable.",
      C: "Redirect users to the registration page if they are not logged in.",
      D: "Implement involved business logic through conditional statements.",
    },
    answer: "B, D",
  },

  121: {
    questionNumber: "Question #:121",
    description: "When looking at Custom Object instances for a site, a merchant notices that the creation date is not showing up on the instances in Business Manager. Where should the developer add this attribute to the Custom Object so it is visible for the merchant to see in Business Manager?",
    options: {
      A: "Add the creation date to the attributes of the Custom Object.",
      B: "Mark the existing creation date attribute as visible.",
      C: "Add the creation date to the attribute group for the Custom Object.",
      D: "Assign the current date/time to a new custom attribute, creationDate, via code.",
    },
    answer: "A",
  },

  123: {
    questionNumber: "Question #:123",
    description: "A developer receives a product image that needs to be uploaded to the catalog. What should the developer use to upload this image?",
    options: {
      A: "Products & Catalogs module of Business Manager",
      B: "Sites/Impex WebDAV Directory",
      C: "Content Image Import module of Business Manager",
      D: "Site Development Import & Export module of Business Manager",
    },
    answer: "C",
  },

  124: {
    questionNumber: "Question #:124",
    description: "A developer is asked to create a controller endpoint that will be used in a client-side AJAX request. Its purpose is to display updated information to the user when the request is completed, without otherwise modifying the appearance of the current page. According to SFRA practices, which method best supports this objective?",
    options: {
      A: "res.json()",
      B: "res.render()",
      C: "res.print()",
      D: "res.log()",
    },
    answer: "B",
  },

  125: {
    questionNumber: "Question #:125",
    description: "A merchant uploads an image using the Content Image Upload module of Business Manager. Which three modules can the merchant or developer use to display the image on the Storefront? (Choose three.)",
    options: {
      A: "Content assets",
      B: "Storefront catalogs",
      C: "ISML templates",
      D: "Content slots",
      E: "Payment types",
    },
    answer: "A, B, D",
  },

  126: {
    questionNumber: "Question #:126",
    description: "Multiple customers report slow performance on the Product Details Page. Which tool can a developer use to view average response times for the ProductDetail controller route?",
    options: {
      A: "URL Request Analyzer",
      B: "Request Logs",
      C: "Pipeline Debugger",
      D: "Pipeline Profiler",
    },
    answer: "D",
  },

  127: {
    questionNumber: "Question #:127",
    description: "A developer is tasked with implementing the necessary code for a new Page Designer component. What are the two purposes of the JSON metadata definition file that the developer creates? (Choose two.)",
    options: {
      A: "Defines the responsive layout of the rendered template.",
      B: "Defines regions within the component type.",
      C: "Defines the attributes that a merchant enters when using the component type.",
      D: "Defines the business and rendering logic of the component required by the merchant.",
    },
    answer: "B, C",
  },

  128: {
    questionNumber: "Question #:128",
    description: "A developer created a basic SFRA form to capture the customer’s first name, last name, and email address and render it on the next page. The developer is able to see all form elements and is able to enter information and submit. However, the developer notices that the submitted information is not getting rendered on the Storefront. Which two mistakes might cause this issue? (Choose two.)",
    options: {
      A: "The actionUrl does not have any form action set.",
      B: "The form object is not passed to the rendering template.",
      C: "The form definition is incorrect.",
      D: "The form does not pass all validations.",
    },
    answer: "B, C",
  },
  129: {
    questionNumber: "Question #:129",
    description: "Which two of these situations are appropriate cases for using the B2C Commerce OCAPIs? (Choose two.)",
    options: {
      A: "Extending System Object Type definitions with new attributes.",
      B: "Displaying a list of B2C Commerce products in a mobile app.",
      C: "Showing the customer's information in their B2C Commerce “My Account” page.",
      D: "Updating Inventory information from a management software.",
    },
    answer: "C, D",
  },

  130: {
    questionNumber: "Question #:130",
    description: "A client has a requirement to render different content on the homepage based on if the customer is logged in or quest user. What should a developer implement to achieve this requirement?",
    options: {
      A: "Write specific custom code in the Content Asset for a customer that is a registered, versus unregistered, user.",
      B: "Add specific custom messages in Page Designer for a customer that is a registered, versus unregistered, user.",
      C: "Set the Content Slot configuration so it is based on the system customer group registered, versus unregistered.",
      D: "Set the Content Asset configuration for a customer that is a registered, versus unregistered, user.",
    },
    answer: "C",
  },

  131: {
    questionNumber: "Question #:131",
    description: "A developer has a B2C site and a merchant requirement to add a new locale to it. What are the steps to enable the locale in the Storefront?",
    options: {
      A: "Update the language under the Organization Profile section.",
      B: "Create, configure, and activate the locale under Global Preferences section.",
      C: "Add an alias for the new locale and then create and configure the locale itself under Global Preferences section.",
      D: "Create and configure the locale under Global Preferences section and activate it in Site Preferences.",
    },
    answer: "B",
  },

  132: {
    questionNumber: "Question #:132",
    description: "A developer is asked to create a new service instance that will call a remote web service. Which method should the developer use to create the service instance?",
    options: {
      A: "dw.svc.webref.getDefaultService()",
      B: "dw.svc.LocalServiceRegistry.getDefaultService()",
      C: "dw.svc.LocalServiceRegistry.createService()",
      D: "dw.svc.LocalServiceInstance.createService()",
    },
    answer: "C",
  },
  133: {
    questionNumber: "Question #:133",
    description: "Recent code changes to an existing cartridge do not appear correctly on a Storefront. The developer confirms that the code is uploaded in the IDE and ensures that the cartridge is associated with the sandbox. Which two additional steps should the developer take to troubleshoot this problem? (Choose two.)",
    options: {
      A: "Check that the search index was recently rebuilt.",
      B: "Check the Business Manager site cartridge path.",
      C: "Check that the correct code version is selected.",
      D: "Check the Storefront site cartridge path.",
    },
    answer: "A, D",
  },

  134: {
    questionNumber: "Question #:134",
    description: "What is accomplished by the code below? <isinclude url=”${URLUtils.url(‘Account-Header’, ‘mobile’, true)}” />",
    options: {
      A: "Performs a local include from the Account-Header endpoint.",
      B: "Performs a remote include from the Account-Header endpoint.",
      C: "Creates a link to the Account-Header endpoint that allows mobile navigation.",
      D: "Performs a call to the Account-Header endpoint to allow mobile navigation.",
    },
    answer: "A",
  },

  135: {
    questionNumber: "Question #:135",
    description: "A developer is implementing new Page Designer content on a merchant’s Storefront and adds the line below to the setupContentSearch function in the searchHelpers.js file. apiContentSearchModel.setFilteredByFolder(false); What does this achieve?",
    options: {
      A: "Enables searching to find Page Designer content assets that are not in folders.",
      B: "Prevents Page Designer pages and components from being searchable.",
      C: "Extends the ContentSearchModel to allow the folder filter.",
      D: "Filters Page Designer search results into separate page and componente folders.",
    },
    answer: "A",
  },

  136: {
    questionNumber: "Question #:136",
    description: "Which windows should a developer have open when developing a storefront application? ",
    options: {
      A: "Integrated Development Environment, Business Manager, and the storefront application",
      B: "Salesforce, Business Manager, and the ecommerce website",
      C: "Google, GitHub, and the storefront application",
      D: "Commerce Cloud overview page, Trailhead, and Business Manager",
    },
    answer: "A",
  },
  137: {
    questionNumber: "Question #:137",
    description: "What are three things you can customize in the Business Manager user interface?",
    options: {
      A: "Language preferences, your avatar, your background theme",
      B: "Permission sets, profiles, and time zones",
      C: "Page cache settings, site taxation, and code versions",
      D: "Menu items, menu actions, and forms",
    },
    answer: "D",
  },

  138: {
    questionNumber: "Question #:138",
    description: "What does MVC stand for in the MVC architecture?",
    options: {
      A: "Model-View-Commerce",
      B: "Model-View-Controller",
      C: "Most Valuable Commerce",
      D: "Moody Velociraptors Cry",
    },
    answer: "B",
  },

  139: {
    questionNumber: "Question #:139",
    description: "What are the three key B2C Commerce software development tools?",
    options: {
      A: "Business Manager, templates, and form definitions",
      B: "Java, JavaScript, and controllers",
      C: "Business Manager, Visual Studio Code, and the Commerce Cloud Storefront Reference Architecture",
      D: "Controllers, OCAPI, and form definitions",
    },
    answer: "C",
  },

  140: {
    questionNumber: "Question #:140",
    description: "What does the B2C Commerce LINK Technology Partner Program provide?",
    options: {
      A: "Links to helpful websites, knowledge articles, and coupon codes",
      B: "A world-class ecosystem of capabilities for merchants to deliver ecommerce solutions",
      C: "Links to partners who develop AppExchange apps",
      D: "Fan club for the starring character in a popular video game",
    },
    answer: "B",
  },

  141: {
    questionNumber: "Question #:141",
    description: "What is mobile-first design?",
    options: {
      A: "Starting with the desktop and sizing down",
      B: "Starting with the smallest screen and working up",
      C: "Writing the code for your website on your smartphone",
      D: "Using a LINK cartridge",
    },
    answer: "B",
  },

  142: {
    questionNumber: "Question #:142",
    description: "What are four system objects that are used in Commerce Cloud Storefront Reference Architecture?",
    options: {
      A: "Basket, Campaign, Category, Content",
      B: "Leads, Opportunities, Accounts, Contacts",
      C: "Chatter, Store, Home, Leads",
      D: "Reports, Dashboards, Store, Campaign",
    },
    answer: "A",
  },

  143: {
    questionNumber: "Question #:143",
    description: "What's a best practice for using objects in B2C Commerce?",
    options: {
      A: "Use custom attributes as often as possible throughout your deployment",
      B: "Make a duplicate custom object for each existing system object",
      C: "Use system objects instead of custom objects whenever possible",
      D: "Use custom objects instead of system objects whenever possible",
    },
    answer: "C",
  },

  144: {
    questionNumber: "Question #:144",
    description: "The best way to deal with any schedule impact is to identify the gaps, document them, and then create a plan for their completion.",
    options: {
      A: "true",
      B: "false",
    },
    answer: "A",
  },

  145: {
    questionNumber: "Question #:145",
    description: "Which of these is part of checkout?",
    options: {
      A: "Billing",
      B: "Shipping",
      C: "gift Registry",
      D: "A and B",
      E: "A and C",
    },
    answer: "D",
  },

  146: {
    questionNumber: "Question #:146",
    description: "Which of these are key functional areas that you must check prior to launch?",
    options: {
      A: "Products, catalogs, search, and competition",
      B: "Search, online marketing, and orderings",
      C: "Ordering, customer recommendations, and site URLs",
      D: "Site preferences, search statistics, and customer group",
    },
    answer: "B",
  },

  147: {
    questionNumber: "Question #:147",
    description: "Which of these ensures that prices appear in the storefront?",
    options: {
      A: "At least one price book is configured in Business Manager.",
      B: "The price book is assigned to a promotion.",
      C: "The price book is activated.",
      D: "A and B",
      E: "A and C",
    },
    answer: "C",
  },

  148: {
    questionNumber: "Question #:148",
    description: "Why is customizing a storefront application is a common, if not expected, practice?",
    options: {
      A: "By design, the standard functionality doesn't often meet a merchant's full requirement set.",
      B: "A B2C Commerce storefront is simple to update.",
      C: "It makes merchants and developers happy to add cool features.",
      D: "Many IT organizations like the challenge.",
    },
    answer: "A",
  },

  149: {
    questionNumber: "Question #:149",
    description: "How can overriding or extending a controller impact performance?",
    options: {
      A: "Extending can result in duplicate iterations of the same external third-party interaction.",
      B: "The application might execute the original middleware before the extension.",
      C: "Overriding can wipe out important processes.",
      D: "A and B",
    },
    answer: "A",
  },

  150: {
    questionNumber: "Question #:150",
    description: "Why are third-party integrations essential?",
    options: {
      A: "B2C Commerce was built that way.",
      B: "Everyone wants to develop tax applications.",
      C: "Third-party providers bring their special expertise to the storefront table.",
      D: "A and B",
      E: "A and C",
    },
    answer: "E",
  },

  151: {
    questionNumber: "Question #:151",
    description: "Which of these gaps might occur when integrating a third party?",
    options: {
      A: "Integration tasks take too long.",
      B: "Certain prerequisites are unavailable.",
      C: "Displaying products takes a lot of resources.",
      D: "A and B",
      E: "B and C",
    },
    answer: "D",
  },

  152: {
    questionNumber: "Question #:152",
    description: "Why is it important to separate business functions from code",
    options: {
      A: "It increases update complications.",
      B: "It reduces update complications.",
      C: "It lets you copy code and data in separate batches.",
      D: "A and C",
    },
    answer: "B",
  },

  153: {
    questionNumber: "Question #:153",
    description: "Which of these are content slot planning considerations?",
    options: {
      A: "How frequently does a content asset change?",
      B: "The max number of promotions per content slot.",
      C: "The max number of content slots per page.",
      D: "When should content slots be replicated?",
      E: "A and C",
    },
    answer: "E",
  },

  154: {
    questionNumber: "Question #:154",
    description: "Why is it important to mirror page and catalog navigation?",
    options: {
      A: "It ensures that merchants can control the categories that appear in the storefront navigation and the order in which they appear.",
      B: "It lets merchants take a good look at both.",
      C: "The page flow matches the storefront catalog structure, simplifying navigation for both the merchant and the shopper.",
      D: "A and B",
      E: "A and C",
    },
    answer: "E",
  },
  155: {
    questionNumber: "Question #:155",
    description: "Why are quotas important?",
    options: {
      A: "They ensure the efficiency and stability of the applications that use them.",
      B: "They are critical for online sales.",
      C: "They significantly reduce update complications.",
      D: "They ensure user-friendly code.",
    },
    answer: "A",
  },

  156: {
    questionNumber: "Question #:156",
    description: "Why is it important to understand mobile best practices?",
    options: {
      A: "You can give more informed advice to the merchant and your team.",
      B: "It's critical for good job references.",
      C: "It makes you sound smart.",
      D: "It improves shopper site adoption.",
    },
    answer: "A",
  },

  157: {
    questionNumber: "Question #:157",
    description: "Which of these are responsive design best practices?",
    options: {
      A: "Include breakpoints in the design.",
      B: "Minimize page weight.",
      C: "Use a separate URL per device.",
      D: "A and B",
      E: "A and C",
    },
    answer: "D",
  },

  158: {
    questionNumber: "Question #:158",
    description: "These are the international strategy approaches: One site, group sites, and one site for each country.",
    options: {
      A: "Yes",
      B: "No",
    },
    answer: "Yes",
  },

  159: {
    questionNumber: "Question #:159",
    description: "Why is it important to have a real understanding of a language when localizing?",
    options: {
      A: "It ensures a truly localized website experience for the shoppers.",
      B: "You'll be able to communicate better when you visit.",
      C: "Using common expressions, appropriate language, and proper spelling protects SEO.",
      D: "A and B",
      E: "A and C",
    },
    answer: "E",
  },

  160: {
    questionNumber: "Question #:160",
    description: "The SFRA modules directory is a cartridge",
    options: {
      A: "true",
      B: "false",
    },
    answer: "B",
  },

  161: {
    questionNumber: "Question #:161",
    description: "The cartridge path controls the behavior of your site.",
    options: {
      A: "true",
      B: "false",
    },
    answer: "A",
  },
  162: {
    questionNumber: "Question #:162",
    description: "Cartridges can only be uploaded using VSCode.",
    options: {
      A: "true",
      B: "false",
    },
    answer: "B",
  },

  163: {
    questionNumber: "Question #:163",
    description: "Which one of these is considered a best practice?",
    options: {
      A: "Copy app_storefront_base with a new name, make all modifications there, add copy to cartridge path",
      B: "Create your custom code in a cartridge, and put that cartridge in front of app_storefront_base in the cartridge path",
      C: "Make changes in app_storefront_base directly",
    },
    answer: "B",
  },

  164: {
    questionNumber: "Question #:164",
    description: "If there are 2 code versions in your sandbox, which one is a true statement?",
    options: {
      A: "Cartridge path and versions are totally unrelated",
      B: "The cartridge path contains all cartridges from the active version",
      C: "Cartridges uploaded to one version automatically get copied to other versions",
      D: "During execution, the cartridge path looks for cartridges in the active version",
    },
    answer: "D",
  },

  165: {
    questionNumber: "Question #:165",
    description: "What file does this code refer to: require('server');",
    options: {
      A: "server.js in the modules folder",
      B: "server.js in app_storefront_base",
      C: "The first server.js found in the cartridge path",
      D: "server.js in the modules/server folder",
    },
    answer: "D",
  },
  166: {
    questionNumber: "Question #:166",
    description: "Which of the following statements is not correct?",
    options: {
      A: "A controller can invoke another controller",
      B: "Controllers are commonJS modules",
      C: "Controllers are the main entry point into the storefront application",
      D: "Controllers gather the data from the model, and pass the data to the ISML template",
    },
    answer: "A",
  },

  167: {
    questionNumber: "Question #:167",
    description: "Which is not a method for extending a specific controller route (i.e. Home-Show)",
    options: {
      A: "Extend",
      B: "Append",
      C: "Preppend",
      D: "Replace",
    },
    answer: "A",
  },

  168: {
    questionNumber: "Question #:168",
    description: "If you extend a controller route, can you prepend as well as append to the same route?",
    options: {
      A: "false",
      B: "true",
    },
    answer: "B",
  },

  169: {
    questionNumber: "Question #:169",
    description: "If you remove next(); on a route, what is the effect?",
    options: {
      A: "It goes to the next iteration on a loop",
      B: "The next middleware function in the chain is not executed",
      C: "It is the same as using a replace on the route",
      D: "It does not break anything, just exits the route",
    },
    answer: "B",
  },

  170: {
    questionNumber: "Question #:170",
    description: "Where can you find the methods of the response (res) attribute used in routes? For example, res.render()",
    options: {
      A: "Under SFRA / Server-side JS / Class: Response documentation",
      B: "It is part of the server middleware functions, not literaly documented",
      C: "Under dw.system.Response documentation",
      D: "Under the commonJS documentation",
    },
    answer: "A",
  },

  172: {
    questionNumber: "Question #:172",
    description: "What is a model?",
    options: {
      A: "The representation of the data in an MVC architecture",
      B: "The person wearing the clothes on the storefront",
      C: "he module for the View",
      D: "It is a template in Business Manager",
    },
    answer: "A",
  },

  173: {
    questionNumber: "Question #:173",
    description: "What are two traits of a model? Pick 2",
    options: {
      A: "It is a function that only the controller calls",
      B: "It is the object that represents the data the controller sends to the view",
      C: "It is a serializable JSON object",
      D: "It is a model in the modules folder",
    },
    answer: "B, C",
  },

  174: {
    questionNumber: "Question #:174",
    description: "What is a decorator?",
    options: {
      A: "It is an object that decorates the ISML page",
      B: "It is a subset of the model that makes it easier to extend the model",
      C: "It is a hardcoded JSON file that decorates the model",
      D: "It is a person that decorates homes",
    },
    answer: "B",
  },
  175: {
    questionNumber: "Question #:175",
    description: "How do you extend a model? Pick 2",
    options: {
      A: "Use module.superModule to identify the model to extend",
      B: "Copy/paste the model code into your cartridge",
      C: "Use base.call() passing the same parameters that the base model needs",
      D: "Use yourmodel.extends(basemodel)",
    },
    answer: "A, C",
  },

  176: {
    questionNumber: "Question #:176",
    description: "Some of the core models are extendable and configurable through decorator pattern.",
    options: {
      A: "true",
      B: "false",
    },
    answer: "A",
  },

  177: {
    questionNumber: "Question #:177",
    description: "What does ISML stand for?",
    options: {
      A: "Nothing",
      B: "Index Store Material Language",
      C: "Internet Store Markup Language",
      D: "Individual Store Markup Language",
    },
    answer: "C",
  },

  178: {
    questionNumber: "Question #:178",
    description: "What is a characteristic of a template?",
    options: {
      A: "They are rendered by controllers",
      B: "They render data by using a mixture of HTML and ISML tags",
      C: "They receive a JSON model from the controller",
      D: "All of the above",
    },
    answer: "D",
  },

  179: {
    questionNumber: "Question #:179",
    description: "Pdict stands for pipeline dictionary.",
    options: {
      A: "false",
      B: "true",
    },
    answer: "B",
  },
  180: {
    questionNumber: "Question #:180",
    description: "What tag would you use to manage conditional logic?",
    options: {
      A: "isloop",
      B: "isbreak",
      C: "iselse",
      D: "isactivedatahead",
    },
    answer: "C",
  },

  181: {
    questionNumber: "Question #:181",
    description: "What tag would you use to manage collect active data?",
    options: {
      A: "isloop",
      B: "isnext",
      C: "isactivedatacontext",
      D: "isif",
    },
    answer: "C",
  },

  182: {
    questionNumber: "Question #:182",
    description: "A decorator template is the same as a model decorator.",
    options: {
      A: "true",
      B: "false",
    },
    answer: "B",
  },

  183: {
    questionNumber: "Question #:183",
    description: "What are the two decorator templates used in SFRA?",
    options: {
      A: "decorator.isml",
      B: "storefront.isml",
      C: "checkout.isml",
      D: "page.isml",
    },
    answer: "C, D",
  },

  184: {
    questionNumber: "Question #:184",
    description: "Remote include allows you to call another controller route and include its rendered HTML on the current page.",
    options: {
      A: "true",
      B: "false",
    },
    answer: true,
  },
  185: {
    questionNumber: "Question #:185",
    description: "Form metadata is an ____ file located in the cartidge/forms folder",
    options: {
      A: "XML",
      B: "JPG",
      C: "PNG",
      D: "HTML",
    },
    answer: "A",
  },

  186: {
    questionNumber: "Question #:186",
    description: "The actionURL must be one of the following:",
    options: {
      A: "Action-Login",
      B: "Account-Handler",
      C: "Newsletter-Handler",
      D: "Login-Handler",
    },
    answer: "C",
  },

  187: {
    questionNumber: "Question #:187",
    description: "Labels use the _____ defined in the form metadata",
    options: {
      A: "pdict.form.field.label",
      B: "pdict.field",
      C: "pdict.label",
      D: "metadata.label.field",
    },
    answer: "A",
  },

  190: {
    questionNumber: "Question #:190",
    description: "What path defined in package.json do you use to find utility scripts?",
    options: {
      A: "End",
      B: "Field",
      C: "Bottom",
      D: "Base",
    },
    answer: "D",
  },

  191: {
    questionNumber: "Question #:191",
    description: "The handler route uses ____ to send a JSON object containing status and a redirectURL to the client side.",
    options: {
      A: "Redirect.json()",
      B: "Respond.json()",
      C: "Response.json()",
      D: "Resply.json()",
    },
    answer: "C",
  },
  193: {
    questionNumber: "Question #:193",
    description: "What does CSRF Protection stand for?",
    options: {
      A: "Cross-site Request Forgery",
      B: "Client-side Request Forgery",
      C: "Cross-site Request Form",
      D: "Client-side Reminder Form",
    },
    answer: "A",
  },

  194: {
    questionNumber: "Question #:194",
    description: "_____ allow you to extend the data model to store custom data.",
    options: {
      A: "Client-Side Objects",
      B: "Custom Objects",
      C: "Metadata",
      D: "Transactions",
    },
    answer: "B",
  },

  195: {
    questionNumber: "Question #:195",
    description: "What are two ways to create a custom object definition in Business Manager?",
    options: {
      A: "Manually define all fields",
      B: "Import a custom object definition metadata file",
      C: "Export all data files",
      D: "Map all custom fields",
      E: "Import folder from Business Manager",
    },
    answer: "A, B",
  },
  196: {
    questionNumber: "Question #:196",
    description: "What do you need to save any persistent system or custom object?",
    options: {
      A: "Transactions",
      B: "Custom objects",
      C: "Middleware",
      D: "All of the above",
    },
    answer: "A",
  },

  197: {
    questionNumber: "Question #:197",
    description: "It’s the best practice to log informational messages and warnings that could happen during the normal execution of your code.",
    options: {
      A: "true",
      B: "false",
    },
    answer: "A",
  },

  198: {
    questionNumber: "Question #:198",
    description: "The Log Center allows you to filter logs by what two filters?",
    options: {
      A: "Severity",
      B: "Product",
      C: "Category",
      D: "Line",
      E: "Custom Object",
    },
    answer: "A, C",
  },

  199: {
    questionNumber: "Question #:199",
    description: "To make sure your transaction is the last thing that gets handled by the Handler route, use the ______ event.",
    options: {
      A: "route.afterComplete",
      B: "route.beforeComplete",
      C: "Complete.Route",
      D: "pdict.beforeRoute",
    },
    answer: "B",
  },

  200: {
    questionNumber: "Question #:200",
    description: "What kind of hook is a newer REST API offered by Salesforce?",
    options: {
      A: "OCAPI Hook",
      B: "Captain Hook",
      C: "Custom Hook",
      D: "Standard Hook",
    },
    answer: "A",
  },
  201: {
    questionNumber: "Question #:201",
    description: "What is another name for a Custom Hook?",
    options: {
      A: "OCAPI Hook",
      B: "Out-of-the-box Hook",
      C: "SFRA Hook",
      D: "Transaction Hook",
    },
    answer: "C",
  },

  202: {
    questionNumber: "Question #:202",
    description: "What do you use to configure functionality to be called at a specific point in your application flow or at a specific event?",
    options: {
      A: "Multiple payment providers",
      B: "Hooks",
      C: "Business Manager",
      D: "Classes",
    },
    answer: "B",
  },

  203: {
    questionNumber: "Question #:203",
    description: "What is an example of extension_point_name?",
    options: {
      A: "Calculate",
      B: "dw.order.calculate",
      C: "Basket.purchase",
      D: "json.hooks",
    },
    answer: "B",
  },
  30: {
    questionNumber: "Question #:30",
    description: `A Digital Developer has identified that the code segment below is causing performance problems.
		What should the Developer do to improve the code?`,
    options: {
      A: `Use a system attribute instead of the isOnSaleFlag custom attribute.`,
      B: `Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.`,
      C: `Breaks the process into separate loops.`,
      D: `Avoid using an Iterator and use a Collection instead.`,
    },
    answer: ["B"],
    hasImage: true,
  },
  114: {
    questionNumber: "Question #:114",
    description: `A developer has a sandbox with code to log a message during execution, and the following code:
	var Logger = require(‘dw/system/Logger’);
	Logger.info(message);
	After the code executes, the developer does not see any log file with the message in the WebDAV folder. Which task does the developer need to perform to correct this issue?`,
    options: {
      A: `Set the logging global preference to true`,
      B: `Set the log retention to a value higher than 0`,
      C: `Request that the developer’s account be given permission to the Log Centerof the current realm`,
      D: `Set the root log level to debug`,
    },
    answer: ["B"],
  },

  119: {
    questionNumber: "Question #:119",
    description: `There are three logging categories: category1, category1.eu, and category1.us. In Business Manager, category1 is enabled for WARN level and no Other categories are configured. All custom log targets are enabled. The code segment below executes
	var logger = Logger.getLogger(“loggerFile”, “category1.eu” ); 
	logger.warn(“This is a log message”);
	What is the result?`,
    options: {
      A: `Logs will be written to the log file with a prefix loggerFile.`,
      B: `Logs will not be written.`,
      C: `Logs will be written to the log file with a prefix customwarn.`,
      D: `Logs will be written to the log file with a prefix custom-loggerFile.`,
    },
    answer: ["A"],
  },

  122: {
    questionNumber: "Question #:122",
    description: `Refer to this example snippet of an ISML template:
	<h2>Welcome back, ${"${pdict.username}"}.</h2>
	The “pdict.username” variable does not print correctly when used in a similar template. Assuming that the variable is correct in the Controller's “viewData”, how should a developer temporarily modify their code to use a debugger and troubleshoot the issue in the template?`,
    options: {
      A: `Add an <isbreak> tag to have the debugger stop at the desired line.`,
      B: `Add an <isscript> tag and JavaScript with a breakpoint set.`,
      C: `Add a local <isinclude> tag to inspect the topLevel function in the call stack.`,
      D: `Add an <isdebug> tag to allow the inspection of global variables.`,
    },
    answer: ["C"],
  },
  171: {
    questionNumber: "Question #:171",
    description: `The Home-Show route uses this middleware chain:

	server.get('Show', consentTracking.consent, cache.applyDefaultCache, function
	(req, res, next) {...});

	and another cartridge extends this route without a middleware chain:

	server.append('Show', function (req, res, next) {...});

	Assuming the code is correct on both functions, does this work?`,
    options: {
      A: `True`,
      B: `False`,
    },
    answer: ["A"],
  },

  192: {
    questionNumber: "Question #:192",
    description: `success:function (data) {
		TAB $form.spinner().stop();
		TAB if(!data.success) {
		TAB TAB formValidation($form, data);
		TAB ) else{
		TAB TAB href=data.redirectURL;
		TAB }
		}
		In the code above the formValidation scripts display what kind of errors?`,
    options: {
      A: `Server-side validation errors`,
      B: `Object errors`,
      C: `All of the above`,
      D: `No errors will display`,
    },
    answer: ["A"],
  },
  111: {
    questionNumber: "Question #:111",
    description: `A developer has the following files in template/resources:
	account.proierties
	weight.unit=kilos
	account_en.propierties
	weight.unit=stones
	account_en_US.propierties
	weight.unit= pounds
	Using the default locale configuration, what is the current outcome of the page that renders the account.isml template snippet below when visiting the Sofrefront with the English for Canada(en_CA) locale= Your parcel weighs 10 ${"${Resource.msg(‘weight.unit’,’account’)"}`,
    options: {
      A: `Your parcel weighs 10 stones.`,
      B: `Your parcel weighs 10 pounds.`,
      C: `Your parcel weighs 10 undefined.`,
      D: `Your parcel weighs 10 kilos`,
    },
    answer: ["A"],
  },
  90: {
    questionNumber: "Question #:90",
    description: `The following code ensures that an address ID CANNOT be used if it is already in use by another address in the customer’s address book. There is a problem with the code. The error message for an invalid address ID is never shown to the user on the form field. 
	
	How should the Digital Developer resolve this issue so that the error message is displayed on the address ID  form field?`,
    options: {
      A: `addressForm.invalidateFormElement("addressid");`,
      B: `addressForm.addresssid.invalidateFormElement = true;`,
      C: `addressForm.invalidateFormElement(addressForm.addressid);`,
      D: `addressForm.addresssid.invalidateFormElement();`,
    },
    answer: ["C"],
    hasImage: true,
  },

  93: {
    questionNumber: "Question #:93",
    description: `A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:
	
	How should the Developer change the request?`,
    options: {
      A: `Change the URI to /dw/shop/v18_3/products/creative-zen-v.`,
      B: `Change the HTTP method to PUT.`,
      C: `Change the HTTP method to GET.`,
      D: `Include an authentication token in the request.`,
    },
    answer: ["C"],
    hasImage: true,
  },

  98: {
    questionNumber: "Question #:98",
    description: `Given the customer basket described below:
	• A customer has an existing basket that consists of multiple items.
	• One of the items is identified as a gift ítem by an attribute at the product line item.
	The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. If the basket contains any gift items, modify the basket and create a separate shipment for the gift item. Four hooks are required to make the modification, beginning with modifyGETRespone and ending with validatebasket.
	• Dw.ocapi.shop.basket.modifyGETResponse
	• -- missing hook –
	• -- missing hook --
	• dw.ocapi.shop.basket.validateBasket
	What are the two missing hooks in the middle?`,
    options: {
      A: `dw.ocapi.shop.basket.shipment.afterDELETE`,
      B: `dw.ocapi.shop.basket.shipment.beforePATCH`,
      C: `dw.ocapi.shop.basket.shipment.beforeDELETE`,
      D: `dw.ocapi.shop.baskep.shopment.beforePOST`,
    },
    answer: ["B, D"],
  },

  105: {
    questionNumber: "Question #:105",
    description: `A Digital Developer needs to check for product inventory in a specific inventory list using the Open Commerce API. An example request URL is:
	
	Which resource_id value enables the appropriate resource?`,
    options: {
      A: `/inventory_lists/*`,
      B: `/inventory_lists/**`,
      C: `/inventory_list_search`,
      D: `/products/*`,
    },
    answer: ["D"],
    hasImage: true,
  },
  52: {
    questionNumber: "Question #:52",
    description: `A Digital Developer is adding support for an additional language other than the default. The locale code for the new language is de. In which folder should the developer place resource bundles?`,
    options: {
      A: `templates/de`,
      B: `templates/default`,
      C: `templates/resources`,
      D: `templates/default/resources`,
    },
    answer: ["C"],
    answernote: `Documentation
	•	templates/de should be used to hold the specific ISMLs for de locale
	•	templates/default should be used to hold the generic ISMLs that should be loaded for all languages as fallback
	•	templates/resources should be used to hold the resource bundles for all locales, only adding the locale sufix in the file, like account_de.properties`,
  },
  55: {
    questionNumber: "Question #:55",
    description: `To ensure SFRA best practices and protect against request forgery, the developer introduced CSRF token generation in the customer address form:
		<form … action = “submit”>
		<input name =${"”${dw.web.CSRFProtection.getTokenName()}”"}
		value = ${"“${dw.web.CSRFProtection.generateToken()}"}”>
		…
		<the rest of the Form fields>
		…
		</form>

		To implement CSRF protection when the form is submitted, the developer needs to introduce the CSRF validation using one or both of these methods as applicable:
		• validateRequest
		• validateAjaxRequest
		Where in the code does the developer need to add this CSRF validation check?`,
    options: {
      A: `In the controller function that displays the form`,
      B: `In the middleware chain of the controller post route`,
      C: `In the controller function that handles the submitted form`,
      D: `In the model function that persists the form data`,
    },
    answer: ["B"],
  },

  59: {
    questionNumber: "Question #:59",
    description: `Given the following ISML example, how should a developer reference the product object in the current iteration of the basket?
		<isloop items =”${"”${pdict.Basket.products}”"} var=”product” status= “loopstatus”>
		…
		</isloop>`,
    options: {
      A: `product`,
      B: `pdict.Basket.products{loopstatus}`,
      C: `loopstatus.product`,
      D: `pdict.product`,
    },
    answer: ["A"],
  },

  62: {
    questionNumber: "Question #:62",
    description: `The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem.

		Which statement correctly adds a log entry?`,
    options: {
      A: `Logger.exception(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
      B: `Logger.getErrorLog().log(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
      C: `Logger.fault(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
      D: `Logger.error(‘Unable to find Apple Pay payment instrument for order.‘+paymentInstruments);`,
    },
    answer: ["A"],
  },

  64: {
    questionNumber: "Question #:64",
    description: `A developer is asked to improve the maintainability of a page by reducing its code repetition. What are two techniques the developer should implement to achieve this? Choose 2 answers.`,
    options: {
      A: `Require and render templates with <isscript> tags`,
      B: `Use local template includes`,
      C: `Implement template decorators paired with replace tags`,
      D: `Embed partial files using ISML expressions`,
    },
    answer: ["B, C"],
    answerNote: `
		•	<isscript> on SFRA is most used to include assets(JS and CSS) into the page. Documentation
		•	<isinclude> documentation
		o	<isinclude template=”path/relative/to/templates/default/folder”
		o	<isinclude url=${"”{${URLUtils.url(“Page-Show”, “cid”, 123}”"}>
		•	<isdecorate> documentation / <isreplace> documentation
		•	ISML Expressions - ${"${....}"} - documentation`,
  },

  67: {
    questionNumber: "Question #:67",
    description: `A developer is working on a new site for the U.S based on an existing Canadian site. One of the requirements is a change to the address form. The current Canadian form has an <options> list with the correct two-letter abbreviation for the provinces.
		The U.S. requirements are to:
		• Have an <options> list with the correct two-letter abbreviation for the states in place of the province field.
		• Set the U.S site locale.
		• Add the options list field definition to the XML file.
		How should the developer set up the files before making the required edits?`,
    options: {
      A: `Create a copy of existing address.xml file in the default folder. Rename that file to address_US.xml`,
      B: `Create a new sub-folder in the forms folder. Name it US. Copy existing address.xml file in the new folder.`,
      C: `Create a copy of existing address.xml file in the default folder. Rename that file to address_en_US.xml`,
      D: `Create a new sub-folder in the forms folder. Name it en_US. Copy existing address.xml file in the new folder.`,
    },
    answer: ["D"],
  },

  69: {
    questionNumber: "Question #:69",
    description: `Consider the following information:
		• A merchant has this three-tier category structure setup in the Storefront catalog: New Arrivals > Women > Clothing
		• The category named Clothing has all the clothing items for Women and is merchandised.
		• A Search Refinement named Newness is correctly configured for the Clothing category.
		When a merchandiser views the Clothing category, the Search Refinement appears and Works as expected. However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search. What is the Reason?`,
    options: {
      A: `There are conflicting Search Refinement definitions for Clothing and one of its parents categories`,
      B: `The Search Refinement definition is not set up for the Women category`,
      C: `The Search Refinement definition is not set up for the New Arrivals Category.`,
      D: `The Search Refinement definitions is not set up for the Root Category`,
    },
    answer: ["A"],
  },

  78: {
    questionNumber: "Question #:78",
    description: `Given the following snippet:
		Server.append(“Show”), function (req, res, next)
		According to SFRA, wich options shows a correct way to complete the code above in order to provide data to the response using a controller?`,
    options: {
      A: `res.viewData = { data: myDataObject }; res.render('/content/myPage'); next();`,
      B: `res.setViewData({ data: myDataObject}); res.render('/content/myPage'); next();`,
      C: `res.render('/content/myPage', {data: myDataObject }); next();`,
      D: `res.render('/content/myPage'); next();`,
    },
    answer: ["B, C"],
  },

  88: {
    questionNumber: "Question #:88",
    description: `A retailer notices that the Account Addresses page is showing the wrong shopper’s address. Which tool should the developer start with to identify the issue?`,
    options: {
      A: `Pipeline profiler`,
      B: `Code Profiler`,
      C: `Storefront Toolkit`,
      D: `Reports and Dashboards Module`,
    },
    answer: ["C"],
  },

  89: {
    questionNumber: "Question #:89",
    description: `Given the following conditions:
		• Site export file with a copy of the Storefront data for a custom site
		• Sandbox with the custom site code, but no Storefront data
		• Requirement for a working copy of SFRA for development reference
		A developer is assigned the following Business manager tasks:
		• A. Import the custom Site using Site Import/Export
		• B. Import the SFRA Demo Sites using Site Import/Export
		• C. Rebuild the custom Site search indexes
		In what sequence should the developer perform the tasks, so that the custom Site displays the products as intended?`,
    options: {
      A: `Task A, then C, then B`,
      B: `Task B, then C, then A`,
      C: `Task A, then B, then C`,
      D: `Task B, then A, then C`,
    },
    answer: ["D"],
  },39: {
    questionNumber: "Question #:39",
    description: `Given a file in a plug-in cartridge with the following code:
	‘use strict’:
	Var base = module.superModule;
	Function applyCustomCache (req,res,next){
	res.CachePeriod = 6; //eslint-disable-line no-param-reassign
	res.cachePeriodUnit = ‘hours’) //eslint-disable-line no-param-reassign
	next();
	}
	Module.exports = base;
	Module.exports.applyCustomCache = applyCustomCache;

	What does this code extend?`,
    options: {
      A: `A controller`,
      B: `A middleware script`,
      C: `A decorator`,
      D: `A model`,
    },
    answer: ["B"],
  },
  40: {
    questionNumber: "Question #:40",
    description: `Below is a form definition snippet from the newsletter.xml file:

	<?xml versión=”1.0”?>
	<form xmlns=http://www.demandware.com/xml/form/2008-04-15>
	<field formid=”email” lavel=”Email” type=”String” mandatory=”True” max-length=”50” />
	</form>
	Which line of code creates a JSON object to contain the form data?`,
    options: {
      A: `Server.form.getForm(‘dwfrm_newsletter’)`,
      B: `Server.form.getForm(‘newsletter’);`,
      C: `Server.forms.getForm(‘newsletter’);`,
      D: `Server.forms.getForm(‘dwfrm_newsletter’)`,
    },
    answer: ["C"],
  },

  44: {
    questionNumber: "Question #:44",
    description: `A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration:
	
	Which modification allows the requests to successfully execute?`,
    options: {
      A: `Change the "resource_id" value to: "/baskets/*/items".`,
      B: `Change the "write_attributes" value to: "(+items)".`,
      C: `Change the "read_attributes" value to: "(items)".`,
      D: `Change the "methods" value to: ["get", "post"].`,
    },
    answer: ["D"],
    hasImage: true,
  },

  45: {
    questionNumber: "Question #:45",
    description: `Business Manager has the configuration:
		• Active log category is “root”
		• Log level of INFO
	The code below executes:
	Var log = Logger.getLogger(“products”,”export”);
	Log.info (“This is important information”);

	Using this information, what is the beginning of the filename in which the log will be written?`,
    options: {
      A: `custom-export`,
      B: `custom-products`,
      C: `products`,
      D: `info-export`,
    },
    answer: ["B"],
  },

  49: {
    questionNumber: "Question #:49",
    description: `Given the requirements:
	• To show the washing instructions for a clothing product on a dedicated section the detail page
	• Washing instructions come from the product information manager(PIM)
	• To have this attribute available to localize in the Storefront.
	Which action meets these requirements?`,
    options: {
      A: `Set the product system object type as localizable`,
      B: `Add a resource file for every locale for which the attribute needs to be translated.`,
      C: `Set the custom attribute as localizable`,
      D: `Add a custom attribute for each locale`,
    },
    answer: ["C"],
  },
  6: {
    questionNumber: "Question #:6",
    description: `Universal Containers calls the following combination of products “The Basics” and sells the combination as a unique product ID:
		One Model 103 container
		Five Model 611 container
		Tree Model 201 container
		The Developer created these three products in the catalog. What is the next step in Business Manager to create “The Basics” as a combination?`,
    options: {
      A: `In the Product Bundles module, create a bundle named “The Basics”.`,
      B: `In the Products module, create a product named “The Basics” and add the products to the Product Bundles tab.`,
      C: `In the Products module, create a product named “The Basics” and add the products to the Product Sets tab.`,
      D: `In the Product Sets module, create a product set named “The Basics”.`,
    },
    answer: ["B"],
  },

  7: {
    questionNumber: "Question #:7",
    description: `A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms. In addition, a form field node is in the form XML and the necessary form input is present in the ISML template.
	The code below is the submit button for the ISML markup`,

    options: {
      A: `Add an <action/> node to the form defition XML with the attribute formid=”addRewardPass”
	Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller`,

      B: `Add an <submit/> node to the form defition XML with the attribute formid=”addRewardPass”
	Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller`,

      C: `Add the attribute addtl-form-action=”addRewardPass” to the ISML form
	Add the key addRewardPass, with a processing function as a value, to the object passed to the Form.handleAction() method in the Cart.js controller`,

      D: `Add an <action/> node to the form defition XML with the attribute formid=”addRewardPass”
	No change to Cart.js controller`,
    },
    answer: ["A"],
    hasImage: true,
  },

  19: {
    questionNumber: "Question #:19",
    description: `A Digital Developer needs to add logging to the following code:

	Which statement logs the HTTP status code to a debug-level custom log file?`,
    options: {
      A: `logger.getLogger(‘profile’).debug("Error retrieving profile email, Status Code: ", http.statusCode);`,
      B: `logger.debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);`,
      C: `Logger.getLogger().debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);`,
      D: `Logger.getLogger(‘profile’).debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);`,
    },
    answer: ["D"],
    answerNote: "SOMETHING LIKE THAT WHERE THE GOAL WAS TO KNOW HOW TO LOG A CUSTOM LOG AT DEBUG LEVE",
    hasImage: true,
  },

  20: {
    questionNumber: "Question #:20",
    description: `Assume the code below is executing:
	Business Manager has the configuration:
	- Active Log category is “root” with log level of “info.”
	Given this information, what is the beginning of the filename in which the log will be written?`,
    options: {
      A: `xyz`,
      B: `custominfo-blade`,
      C: `custom-export`,
      D: `custom-xyz`,
    },
    answer: ["D"],
  },

  21: {
    questionNumber: "Question #:21",
    description: `A developer is importing edits for two different sites into the same sandbox, and is provided with four
	different files. Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules? Choose 2 answers.`,
    options: {
      A: `System type extensions (sites only)`,
      B: `Site Jobs (sites)`,
      C: `Search Settings (Search and Sites)`,
      D: `Promotions ( sites and online marketing)`,
    },
    answer: ["C, D"],
  },

  25: {
    questionNumber: "Question #25:",
    description: `The SFRA Function:

	Server.get('Show', consentTracking.consent, cache.applyDefaultCache,
	function (req,res,next){
	var Site = require('dw/system/Syte");
	var pageMetaHelpter = require('*/cartridge/scripts/helpers/pageMetaHelper');
	pageMetaHelpter.setPageMetaTags(req.pageMetaData, Site.current); res.render('/home/homePage');
	===== Missing code here =====
	}, pageMetadata.computedPageMetadata);

	The controller endpoint code snippet above does not work. Which line of code should the developer use to replace on “Missing Code here” and correct the problem?`,
    options: {
      A: `next();`,
      B: `req.next();`,
      C: `return res;`,
      D: `res.next();`,
    },
    answer: ["A"],
    answerNote: "NOT EXACTLY THIS ONE BUT ONE QUESTION ABOUT HOW TO APPLY CACHE ON SFRA USING ITS BEST PRACTICES: ANSWER: cache.applyDefaultCache",
  },

  29: {
    questionNumber: "Question #:29",
    description: `A developer is writing a server side script that needs to maintain state across calls. The persistente information needed includes these items.
	• The current customer
	• Whether or not the customer is authenticated
	• The privacy attributes (such as tracking consent or cookie policy)
	Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?`,
    options: {
      A: `Use a non-replicable Custom Object to store the information temporarily.`,
      B: `Use the Session class in the B2C Commerce API.`,
      C: `Use an SFRA controller, because it runs server-side, the state is automatically maintained`,
      D: `Use a client-side cookie to store the information for the session duration.`,
    },
    answer: ["B"],
  },

  36: {
    questionNumber: "Question #:36",
    description: `A Newsletter controller contains the following route:

	Server.post('Subscribe', function (req,res,next){
	var newsletterForm = server.forms.getForm('newsletter');
	var CustomObjectMgr = require('dw/object/CustomObjectMgr'); 
	if(newsletterForm.valid){ 
	try{ var CustomObject = CustomObjectMgr.createCustomObejct('NewsletterSubscription', newsletterform.email.value); CustomObject.custom.firstName = newsletterForm.fname.value; CustomObject.custom.lastName = newsletterForm.lname.value;
	} catch(e){
	//Catch error here
	}
	}
	next();
	});

	Assuming the Custom Object metadata exists, why does this route fail to render the newsletter template when the subscription form is correctly submitted?`,
    options: {
      A: `Custom Objects can only be created by Job scripts`,
      B: `The Subscribe route is missing the server.middleware.httpt middleware.`,
      C: `The Custom Object creation is not wrapped in a Transaction.`,
      D: `The CustomObjectMgr variable should be declare outside of the route.`,
    },
    answer: ["C"],
  },
  5: {
    questionNumber: "Question #:5",
    description: `Which three configuration does a developer need to ensure to have a new product visible in the Storefront?
		Choose 3 answers`,
    options: {
      A: `The product has a Price`,
      B: `The Storefront catalog that contains the product is assigned to a site`,
      C: `The product has a master product`,
      D: `The product is online and searchable`,
      E: `The search index is built.`,
    },
    answer: ["B,C,D"],
  },
  1: {
    questionNumber: "Question #:1",
    description: `Given the requirements:

		• To integrate with an external web service using HTTP requests
		• To create a service for this purpose with the Service framework using the LocalServiceRegistry class.
		• To test the service before the external service provider makes the API available

		Which solution allows the developer to satisfy the requirements?`,
    options: {
      A: `Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.`,
      B: `Create a service and implement the mockFill callback and set the service mode to mock.`,
      C: `Create a service and a Sitepreference that induce the service to respond witch a mock response using a conditional.`,
      D: `Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one`,
    },
    answer: ["A"],
    answerNote: `Actually the proper response should be B(Create a service and implement the mockFill callback and set the service mode to mock.) but with one consideration: There is no MockFill function in the API but mockfull`,
  }

};