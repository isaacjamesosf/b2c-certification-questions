export const questions = {
  "1": {
      "questionNumber": "Question #:1",
      "description": "An email marketer is writing the next send's subject line. What can the marketer do to make the subject line more effective? (Choose 2) ",
      "answer": "A, B",
      "options": {
          "A": "A/B test the effectiveness of different subjects ",
          "B": "Include information relevant to the message in the subject line ",
          "C": "Include RE:, FWD: etc. to get reader's attention",
          "D": "Keep the subject text between 50 to 100 characters long "
      }
  },
  "2": {
      "questionNumber": "Question #:2",
      "description": "NTO uses HTML emails that have headers and footers coded into the email. What tool can the marketer use to control default headers and footers on email sends? ",
      "answer": "C",
      "options": {
          "A": "AMPScript Lookups ",
          "B": "Dynamic Content ",
          "C": "Delivery Profile ",
          "D": "Sender Profile"
      }
  },
  "3": {
      "questionNumber": "Question #:3",
      "description": "A marketer is about to introduce Content Builder to the entire NTO marketing team. Which three considerations should the marketing team keep in mind as they begin using Content Builder? Choose 3 answers ",
      "answer": "B, C, D",
      "options": {
          "A": "Focus on creating and importing content for one primary channel ",
          "B": "Establish a naming convention optimized for search ",
          "C": "Create a folder structure prior to importing assets ",
          "D": "Review permissions and roles for users accessing Content Builder ",
          "E": "Import duplicate copies of content for different messages or groups"
      }
  },
  "4": {
      "questionNumber": "Question #:4",
      "description": "NTO would like to create a landing page that displays subscriber information passed to it from email links on the page. This page contains a Smart Capture form. NTO would like to require email address, reply date and response for subscribers completing the form. How should NTO setup its data extension?",
      "answer": "D",
      "options": {
          "A": "Create a data extension with email address as the Primary Key and reply date and response fields as nullable ",
          "B": "Create a data extension with email address as non-nullable; reply date and response fields as nullable ",
          "C": "Create a data extension with email address, reply date and response fields as nullable ",
          "D": "Create a data extension with email address, reply date and response fields as non-nullable"
      }
  },
  "5": {
      "questionNumber": "Question #:5",
      "description": "NTO is looking at using Journey Builder rather than Automation Studio to send emails. What are the three benefits of using Journey Builder? Choose 3 answers",
      "answer": "C, D, E",
      "options": {
          "A": "The ability to set criteria to segment contacts based on behavior using SQL ",
          "B": "The ability to extract data from an Audience data extension for analysis ",
          "C": "The ability to set goals and have the system listen to see if users met the goal ",
          "D": "The ability to setup A/B/N tests as part of the workflow to conduct timing and creative tests ",
          "E": "The ability to update or create Salesforce CRM objects or records"
      }
  },
  "6": {
      "questionNumber": "Question #:6",
      "description": "An account has a Subscriber Key enabled, and will be providing a unique key for each subscriber from an external system. A marketer wants to create a data extension for sending email campaigns. What steps would the marketer take when creating the data extension? (Choose 2) ",
      "answer": "A, D",
      "options": {
          "A": "Check the Is Sendable option ",
          "B": "Set the column representing the Subscriber Key as a Primary Key ",
          "C": "Set the Email address column as a Primary Key ",
          "D": "Relate the Email address to the Subscriber Key"
      }
  },
  "7": {
      "questionNumber": "Question #:7",
      "description": "A marketer wants to run an Account Send Summary report. Which option can be configured when running this report? (Choose 3)",
      "answer": "A, B, D",
      "options": {
          "A": "Report results delivery location ",
          "B": "Report results file format ",
          "C": "Error report log location ",
          "D": "Date range parameters ",
          "E": "Error handling parameters "
      }
  },
  "8": {
      "questionNumber": "Question #:8",
      "description": "A national public university distributed a newsletter to alumni, students, faculty, and prospective students. The university's marketing team wants to see the results of the email campaign. Which two items of information and data about the performance of an individual send can be exported from Tracking in Email Studio?",
      "answer": "A, D",
      "options": {
          "A": "Performance data on the Overview Tab ",
          "B": "Images showing how the email rendered on different devices ",
          "C": "Number of clicks from mobile devices ",
          "D": "Subscribers who click on a specific link"
      }
  },
  "9": {
      "questionNumber": "Question #:9",
      "description": "\tWhat information and data about the performance of an individual send can be exported from the tracking details? ",
      "answer": "A, D",
      "options": {
          "A": "Performance data on the Overview Tab",
          "B": "Images showing how the email rendered on different devices ",
          "C": "Number of clicks from mobile devices ",
          "D": "Subscribers who click on a specific link"
      }
  },
  "10": {
      "questionNumber": "Question #:10",
      "description": "A marketer mistakenly sent an email to a group of subscribers with an invalid link contained in an image. What step can the marketer take to correct the image link after the email has been sent? ",
      "answer": "B",
      "options": {
          "A": "Resend the email with the correct link ",
          "B": "Change the link in Job Links under Tracking",
          "C": "Update the link using AMPscript ",
          "D": "Change the URL Expiration in Email Administration "
      }
  },
  "11": {
      "questionNumber": "Question #:11",
      "description": "NTO has a Master Customer shared data extension. The company wants to make the table available to some of the business units, but not all of them. How can access to the Master Customer table be restricted?",
      "answer": "A",
      "options": {
          "A": "Shared Data Extension Permissions ",
          "B": "Data Extension Sharing Rules ",
          "C": "Date/Time Range for Access ",
          "D": "Manage Data Extension Policie "
      }
  },
  "12": {
      "questionNumber": "Question #:12",
      "description": "A new data extension named Orders contains order data. One row is recorded for each customer's order. Customers can place multiple orders. The data extension Orders relates to other data extensions. The data extension Orders contains the following fields: -OrderNumber: a unique alphanumeric order number - customerID: a numeric customer identification number - OrderDate: the system date and time for the order Instructions: an optional alphanumeric string that contains customer delivery notes. Which statement accurately reflects the configuration of the Orders Data Extension? ",
      "answer": "D",
      "options": {
          "A": "The OrderNumber field will be a Number data type field ",
          "B": "All fields in the data extension are nullable ",
          "C": "CustomerID will be used as the Primary Key ",
          "D": "OrderNumber will be used as the Primary Key. "
      }
  },
  "13": {
      "questionNumber": "Question #:13",
      "description": "The marketing team would like to send an email to an audience on a weekly basis. The team receives multiple files each week that need to be imported and joined to build the target audience for the email. Which tool is recommended to execute this process? ",
      "answer": "C",
      "options": {
          "A": "Playbooks ",
          "B": "Filter Activity ",
          "C": "Automation Studio ",
          "D": "Data Extract Activity"
      }
  },
  "14": {
      "questionNumber": "Question #:14",
      "description": "NTO has launched a new custom Preference Center to allow customers to provide details around their personal information such as age, gender and outdoor sporting interests. In which two ways can NTO honor customer preferences when creating emails? Choose 2 answers ",
      "answer": "A, D",
      "options": {
          "A": "Use AMPScript to dynamically pull in content associated with the customer preferences ",
          "B": "Create longer emails to include all preference options so that customers don't miss any content ",
          "C": "Send customers one email per preference choice to ensure customers receive what they want ",
          "D": "Create dynamic rules based on customers' preferences in order to send specific content"
      }
  },
  "15": {
      "questionNumber": "Question #:15",
      "description": "An email marketer needs a point and click to create a segment based on everyone who lives in a five-mile radius of a specific zip code and to see an accurate count of subscribers in real time. What solution meets this specification?",
      "answer": "D",
      "options": {
          "A": "Data Filters ",
          "B": "Contact Builder ",
          "C": "SQL Query Activity ",
          "D": "Audience Builder"
      }
  },
  "16": {
      "questionNumber": "Question #:16",
      "description": "NTO has list of Platinum list of Members containing 50,000 subscribers and a lifetime members list containing 20,000 subscribers; 7,000 subscribers in the Lifetime Member list also exist in the Platinum Member list. An email was deployed to the Platinum members, but the marketing team would now like to send the same email to the Lifetime Member list. Which feature should be used when sending the second email to ensure that the 7,000 subscribers that exist on both list don't receive the same email twice? ",
      "answer": "A",
      "options": {
          "A": "Exclusion List ",
          "B": "Exclusion Script ",
          "C": "Domain Exclusion List ",
          "D": "Suppression List"
      }
  },
  "17": {
      "questionNumber": "Question #:17",
      "description": "Northern Trail Outfitters' marketing team includes the nearest store to customers in the templates of its emails. The data extension only needs to be updated when store information changes, such as when a new store opens or a store close. How can this be achieved?",
      "answer": "D",
      "options": {
          "A": "Create an automation to begin when information changes on a store object using a workflow rule",
          "B": "Create a file drop automation to initiate when the store’s data extension is updated via import",
          "C": "Create a scheduled automation to import the file on a recurring basis with store information ",
          "D": "Create a file drop automation to import the file when placed on the specified directory on the Enhanced FTP"
      }
  },
  "18": {
      "questionNumber": "Question #:18",
      "description": "Northern Trail Outfitters (NTO) created several lists of subscribers, and would now like to send an email to all female subscribers. Which feature allows NTO to easily target this segment? ",
      "answer": "B",
      "options": {
          "A": "Publication List ",
          "B": "Filtered Group ",
          "C": "Smart Capture ",
          "D": "List Detective"
      }
  },
  "19": {
      "questionNumber": "Question #:19",
      "description": "While testing an email with dynamic content in Content Builder, proofs of five content variations need to be reviewed directly in the inbox of a marketer’s quality assurance specialist and the marketing manager. A data extension named “my TestData” contains only the variations needed. Which method should be used to accomplish this task? ",
      "answer": "D",
      "options": {
          "A": "Choose data extension of contacts, and then choose to send “Based on Recipient Test Data Extension” ",
          "B": "Create a Test data extension that contains the five content variations the two tea members need to validate.",
          "C": "Enter the email addresses to receive proofs, and the select the specific records from a list or data extension whose rendering should be sent. ",
          "D": "Enter the email addresses to receive proofs, and then choose to send “Bases on Subscriber Preview ‘myTestData’”"
      }
  },
  "20": {
      "questionNumber": "Question #:20",
      "description": "NTO has a small catalog of items featured in company emails. The NTO marketing team manages what images, copy, suggested items, and call-to-action are used with each item in this catalog within a database. This data is saved into a data extension in the Marketing Cloud and then called into the emails dynamically. Each time a change is made to the content, a new, updated file is dropped on NTO's FTP. A proof email is then sent to business stakeholders for final approval. Using automation studio, how can NTO ensure that the catalog stays up-to-date? ",
      "answer": "B",
      "options": {
          "A": "Create an API-driven process to put the data directly into the data extension when any data is changed",
          "B": "Create a file drop automation to import the file when placed on the specified directory on the Enhanced FTP ",
          "C": "Create a scheduled automation that runs every 15 minutes to import the file multiple times a day ",
          "D": "Create a scheduled automation to import the file, and send proof emails each morning when changes were detected"
      }
  },
  "21": {
      "questionNumber": "Question #:21",
      "description": "A marketeer wants to use personalization settings to create individualized content for an upcoming send. Which three items should the market know when using personalisation strings? Choose 3 answers ",
      "answer": "A, C, E",
      "options": {
          "A": "When using subscriber data, the attribute of field should have a default value ",
          "B": "Personalisation strings are case sensitive ",
          "C": "Personalisation strings are enclosed by double percent symbols ",
          "D": "Personalisation strings are limited to profile attributes ",
          "E": "Personalisation strings can appear in the subject line or body of the email "
      }
  },
  "22": {
      "questionNumber": "Question #:22",
      "description": "A marketeer send an email to a sendable data extension that contains a customer_ID field with a numeric data type that relates to the subscriber key on the other subscribers list as a send relationship. Which two statements are correct about the email send behaviour for any subscriber who currently does not exist on the all subscribers list? Choose 2 answers ",
      "answer": "B, D",
      "options": {
          "A": "The primary key and demographic data will be added to the all subscribers list ",
          "B": "The subscriber will be added to the all subscribers list with a status of active ",
          "C": "If the customer_ID field does not exist on the all subscribers list, the email send will fail ",
          "D": "The email address and subscriber key he will be added to the all subscribers list"
      }
  },
  "23": {
      "questionNumber": "Question #:23",
      "description": "Approximately 50% of Northern Trail Outfitters (NTO) subscribers open emails on their mobile devices, while the remaining 50% of subscribers open the emails on their desktop. The chief marketing officer of NTO would like two emails to render well on both desktop and mobile devices, but does not want to spend a significant amount of time developing for each environment. What is the recommended design approach?",
      "answer": "B",
      "options": {
          "A": "Responsive design ",
          "B": "Mobile aware design ",
          "C": "Static design ",
          "D": "Desktop centric design"
      }
  },
  "24": {
      "questionNumber": "Question #:24",
      "description": "A marketer is updating a data extension by manually importing a file. The marketer wants to ensure only new records are added to the data extension during the import process. In which two ways should the data extension and import be configured? Choose 2 answers ",
      "answer": "D, C",
      "options": {
          "A": "Select the update type “Add and Update” ",
          "B": "Select the update “Overwrite” ",
          "C": "Ensure the data extension has a Primary Key ",
          "D": "Select the update type “Add Only”"
      }
  },
  "25": {
      "questionNumber": "Question #:25",
      "description": "A marketer sends an email to a sendable data extension. The data extension has a subscriber relationship that matches Customer_ID on the data extension to Subscriber Key on the All Subscribers list. What is a true statement regarding the default email send behaviour for a pre-existing subscriber? ",
      "answer": "A",
      "options": {
          "A": "The email will be sent to the subscriber key on the All Subscribers list ",
          "B": "The email will be sent to the field marked as the Primary Key ",
          "C": "The email will be sent to the email address stored on the data extension ",
          "D": "The email will be sent to the email address stored on the All Subscribers list"
      }
  },
  "26": {
      "questionNumber": "Question #:26",
      "description": "Each time Northern Trail Outfitters sends its monthly promotional email, the volume of support calls spike. The executive team wants the marketing team to slowly send emails throughout the day to avoid customers waiting on hold. Which feature should the marketing team use? ",
      "answer": "D",
      "options": {
          "A": "Send Email Activity ",
          "B": "Triggered Send ",
          "C": "Send Flow ",
          "D": "Send Throttling "
      }
  },
  "27": {
      "questionNumber": "Question #:27",
      "description": "A customer has a Send Log they are using to track the email addresses that were sent to, date and time of the send, and the name of the email sent for reporting purposes. Per best practice, the customer stores 30 days of data in their Send Log and then archives the data into another data extension that holds data for one year. Which activity should be used to achieve the backup automatically? ",
      "answer": "A",
      "options": {
          "A": "SQL Query",
          "B": "Import File",
          "C": "Filter ",
          "D": "Data Extract"
      }
  },
  "28": {
      "questionNumber": "Question #:28",
      "description": "Nothern Trail Outfitters wants to send Monthly birthday coupons to their subscribers. What feature would allow for easy segmentation",
      "answer": "C",
      "options": {
          "A": "Measures",
          "B": "AMPscript",
          "C": "Data Filters",
          "D": "Query Activities"
      }
  },
  "29": {
      "questionNumber": "Question #:29",
      "description": "Northern Trail Outfitters (NTO) would like to send shipping email notifications to members. Shipping fulfillment data is included in a file which is moved at frequent intervals to a folder on NTO's Enhanced SFTP Account",
      "answer": "D",
      "options": {
          "A": "Import Activity in Email Studio",
          "B": "Triggered Email in Email Studio",
          "C": "File Drop Starting Source in Automation Studio",
          "D": "File Drop Entry Source in Journey Builder"
      }
  },
  "30": {
      "questionNumber": "Question #:30",
      "description": "A customer wants to automate nightly imports and also have the ability to manually import files via the import wizard. What needs to be configured in the marketing cloud account? ",
      "answer": "B",
      "options": {
          "A": "Data loader ",
          "B": "Enhanced FTP ",
          "C": "Encrypted FTP ",
          "D": "File transfer"
      }
  },
  "31": {
      "questionNumber": "Question #:31",
      "description": "Northern Trail Outfitters’ (NTO) branding guidelines require heavy use of imagery on its website, apps, emails, ads, etc. What are two ways that NTO can optimize its email design to honor branding guidelines and ensure subscribers are getting the best experience possible? (Choose two.)",
      "answer": "A, C",
      "options": {
          "A": "Use custom corporate font to match NTO brand.",
          "B": "Add background colors that match branding",
          "C": "Style alt text for when images do not display automatically",
          "D": "Make the email completely image based"
      }
  },
  "32": {
      "questionNumber": "Question #:32",
      "description": "Northern Trail Outfitters is using a Smart Capture form on a CloudPage to capture contest registrations in a data extension. Corporate has requested a nightly file with all registrants in this data extension be sent daily from Marketing Cloud to an external SFTP. Which automation configuration should be used to achieve this? ",
      "answer": "A",
      "options": {
          "A": "Schedule Starting Source &gt; Data Extract Activity &gt; File Transfer Activity ",
          "B": "File Drop Starting Source &gt; Data Extract Activity &gt; File Transfer Activity ",
          "C": "Schedule Starting Source &gt; SQL Query Activity &gt; File Transfer Activity ",
          "D": "File Drop Starting Source &gt; SQL Query Activity &gt; File Transfer Activity"
      }
  },
  "33": {
      "questionNumber": "Question #:33",
      "description": "NTO is launching a custom, corporate branded apparel website. They are concerned about the new initiative's campaign impacting deliverability on its consumer retail sends. NTO has purchased a second IP address to be used for the corporate site's email sending. What feature would the NTO admin use to specify whihc IP address is used for retail vs. corporate? ",
      "answer": "B",
      "options": {
          "A": "Send Classification ",
          "B": "Delivery Profile ",
          "C": "Send Definition ",
          "D": "Sender Profile"
      }
  },
  "34": {
      "questionNumber": "Question #:34",
      "description": "Northern Trail Outfitters (NTO) would like to evaluate which email content customers click most frequently. The email team wants to track click behavior for all linked hero images using the naming convention Hero_CTA. Which two different methods would ensure click behavior on these images if tracked with this naming convention? Choose 2 answers",
      "answer": "B, C",
      "options": {
          "A": "Include “Hero_CTA” In the filename for each Hero Image",
          "B": "Include an alias attribute in each anchor tag and populate it with “Hero_CTA.” ",
          "C": "Add “Hero_CTA” to the Tracking Alias field for each link",
          "D": "Include “Hero_CTA” in the Link Tooltip field for each link"
      }
  },
  "35": {
      "questionNumber": "Question #:35",
      "description": "A new marketing Manager of Northern Trail Outfitters (NTO) has been asked to evaluate whether to use HTML Emails or Templates for weekly newsletter sends, which are created by a marketing coordinator with limited coding ability. While NTO has HTML developers on staff, their time is not guaranteed on an ongoing basis. Which two characteristics of Templates would benefit NTO when creating its weekly newsletter in Content Builder?(Choose 2 answers)",
      "answer": "A, D",
      "options": {
          "A": "Emails can be formatted for desktop and mobile without extra coding. ",
          "B": "HTML developers are needed to build templates, but not emails",
          "C": "One template can only be used for one email,maintaining brand standards",
          "D": "Templates provide the ability to create email messages using content blocks"
      }
  },
  "36": {
      "questionNumber": "Question #:36",
      "description": "Northern Trail Outfitters (NTO) offers a 90-day trial on weekly snack box subscriptions. NTO would like to send out a series of emails to educate and remind members to purchase the subscription before the trial ends. What tool is an option for this scenario?",
      "answer": "D",
      "options": {
          "A": "Content Builder",
          "B": "Send Flow",
          "C": "Contact Builder",
          "D": "Automation Studio"
      }
  },
  "37": {
      "questionNumber": "Question #:37",
      "description": "Northern Trail Outfitters would like to use a file drop starting source in automation studio to send shipping tracking emails when orders are dispatched. a delimited text file containing all the data for the send will be uploaded to a designated directory on the enhanced SFTP account, and the email should be sent to customers when the file transfer has completed. What is the correct sequence of activities for this file drop starting source? ",
      "answer": "B",
      "options": {
          "A": "Import file activity &gt; send email ",
          "B": "File transfer activity &gt; import file activity &gt; send email ",
          "C": "Import file activity &gt; file transfer activity &gt; send email ",
          "D": "File transfer activity &gt; send email"
      }
  },
  "38": {
      "questionNumber": "Question #:38",
      "description": "What is the timeline for which an unsubscribe request must be honored and processed as outlined by the CAN-SPAM Act? ",
      "answer": "A",
      "options": {
          "A": "10 business days ",
          "B": "30 calendar days ",
          "C": "5 business days ",
          "D": "24 hours"
      }
  },
  "39": {
      "questionNumber": "Question #:39",
      "description": "A marketer wants to send the same email with the same send properties in several automation. Which activity should be created within Automation studio?",
      "answer": "D",
      "options": {
          "A": "\tTriggered send ",
          "B": "Template send ",
          "C": "Automated send ",
          "D": "Send email"
      }
  },
  "40": {
      "questionNumber": "Question #:40",
      "description": "Northern Trail Outfitters wants to create a welcome series that changes based on subscriber behaviour. Subscribers will be sent down a predetermined paths depending on whether they click on the second email or not. Which journey builder activity should be used? ",
      "answer": "A",
      "options": {
          "A": "Engagement split ",
          "B": "Filter activity ",
          "C": "Decision split ",
          "D": "Random split"
      }
  },
  "41": {
      "questionNumber": "Question #:41",
      "description": "Northern Trail Outfitters (NTO) wants to leverage Content Builder templates to streamline the email creation process. For tis monthly email newsletter, NTO includes content specific to the company's loyalty and non-loyalty members. How should NTO build the email? ",
      "answer": "C",
      "options": {
          "A": "Create dynamic content with a SQL Query activity ",
          "B": "Create a template and lock content in the template ",
          "C": "Create a template-based email using dynamic content ",
          "D": "Create multiple versions of the email for loyalty and non-loyalty members"
      }
  },
  "42": {
      "questionNumber": "Question #:42",
      "description": "The marketing manager of NTO is interested in A/B testing emails in order to increase subscriber engagement. Which two practices should the marketing manager employ? Choose 2 answers ",
      "answer": "D, A",
      "options": {
          "A": "Use a large sample size ",
          "B": "\tOffer a special discount for opening the email ",
          "C": "Test multiple variations concurrently ",
          "D": "\tWait at least 24 hours before declaring a winner"
      }
  },
  "43": {
      "questionNumber": "Question #:43",
      "description": "Which two best practices should the customer follow to ensure marketers across the company are taking full advantage of Content Builder? Choose 2 answers ",
      "answer": "C, D",
      "options": {
          "A": "Create folders for each type of uploaded content ",
          "B": "Import all content up front, rather than piece by piece ",
          "C": "Optimize the way content is stored with a naming convention ",
          "D": "Plan for content to be used cross-channel, eliminating duplicates"
      }
  },
  "44": {
      "questionNumber": "Question #:44",
      "description": "NTO needs to use a point-and-click tool to test segmentation rules and verify that correct subscribers are included in the segment. NTO will need to automate the refreshing of the segment once it is tested. Which two should be used to test and configure the segment? Choose 2 answers ",
      "answer": "B, D",
      "options": {
          "A": "\tSQL Query Activity ",
          "B": "Filtered Group ",
          "C": "Filter Activity ",
          "D": "Data Filter "
      }
  },
  "45": {
      "questionNumber": "Question #:45",
      "description": "Which two subscriber audiences can be created by using Measures in a Data Filter? Choose 2 answers ",
      "answer": "B, C",
      "options": {
          "A": "Subscribers who have submitted spam complaints in the last week",
          "B": "Subscribers who have opened an email in the past 30 days. ",
          "C": "Subscribers who have not clicked in the past three months. ",
          "D": "Subscribers within a 30-mile radius of a zip code"
      }
  },
  "46": {
      "questionNumber": "Question #:46",
      "description": "Northern Trail Outfitters wants to display different content areas based on the subscriber data. What can be used to accomplish this? (Choose 2)",
      "answer": "B, C",
      "options": {
          "A": "Profile Mapping ",
          "B": "AMPscript ",
          "C": "Dynamic Content ",
          "D": "Personalization Strings"
      }
  },
  "47": {
      "questionNumber": "Question #:47",
      "description": "A marketer needs to import a text file and does not have access to the account's Enhanced FTP site. What is the recommended way to import the data?",
      "answer": "B",
      "options": {
          "A": "\tImport Activity Interaction ",
          "B": "Import Subscriber Wizard ",
          "C": "Manual Data Filter Refresh ",
          "D": "Data Extract Activity Interaction"
      }
  },
  "48": {
      "questionNumber": "Question #:48",
      "description": "A marketer for Northern Trail Outfitters (NTO) needs to dynamically update the sender name and address based on the sales representative associated with the account. The data is stored in two separate data extensions. Which two tools should the marketer use? Choose 2 answers",
      "answer": "A, B",
      "options": {
          "A": "AMPscript Lookup ",
          "B": "Sender Profiles ",
          "C": "Delivery Profiles ",
          "D": "Personalization Strings"
      }
  },
  "49": {
      "questionNumber": "Question #:49",
      "description": "A digital marketing team noticed and increase in unsubscribes and would like to implement a mechanism as an alternative to unsubscribing from all sends. The team currently uses data extensions for sending emails. What tool should they use? ",
      "answer": "D",
      "options": {
          "A": "Profile attributes ",
          "B": "List unsubscribe ",
          "C": "Suppression lists ",
          "D": "Publication lists"
      }
  },
  "50": {
      "questionNumber": "Question #:50",
      "description": "A marketer is designing email for mobile devices. Which design best practice would the marketer use? (Choose 3)",
      "answer": "A, B, C",
      "options": {
          "A": "Keep copy simple and direct ",
          "B": "Design a top-down hierarchy with the most important content at the top ",
          "C": "Stack the content in a single column ",
          "D": "Cut content to make the message fit above the fold ",
          "E": "Use image-based text for hero graphics"
      }
  },
  "51": {
      "questionNumber": "Question #:51",
      "description": "A marketer needs to share report results with a manager. When using Reports in the Marketing Cloud, which option can be used to deliver the report to the manager? (Choose 3) ",
      "answer": "A, B, D",
      "options": {
          "A": "Save the report as a Snapshot ",
          "B": "\tSave the report to an FTP folder",
          "C": "Print the report from Reports ",
          "D": "Email the report ",
          "E": "Include a link to the report in an email "
      }
  },
  "52": {
      "questionNumber": "Question #:52",
      "description": "Northern Trail Outfitters has created a dynamic content block that displays content based on a subscriber's gear preference. There are three possible combinations in addition to receiving the default content. How should they test that the content is displaying as intended?",
      "answer": "C",
      "options": {
          "A": "Create a test list with all possible content variations and send test emails to that list",
          "B": "Cycle through each subscriber's gear preference on the Preview and Test tab and send individual test emails",
          "C": "Create a test data extension with all possible content variations and send a test email to that data extension",
          "D": "Create an automation with a send activity that deploys test emails to a test data extension"
      }
  },
  "53": {
      "questionNumber": "Question #:53",
      "description": "The NTO email team is creating a reusable content block for its Deal to Run With campaign. NTO will cross-promote this campaign in other emails in a single-column content area. This content will have one image, with text below it. How can the NTO email team create one content area and reuse it across other emails using Content Builder without writing a custom HTML? ",
      "answer": "B",
      "options": {
          "A": "Create an HTML content block and code the content by hand ",
          "B": "Create a Free Form content block that accommodates text and images ",
          "C": "Create an Image content block that accommodates pictures ",
          "D": "\tCreate a Text content block that accommodates text"
      }
  },
  "54": {
      "questionNumber": "Question #:54",
      "description": "As part of a daily shipping notification automation, Northern Trail Outfitters needs to join data from the Shipping data extension and the Purchase data extension. What activity is designed to address this scenario? ",
      "answer": "C",
      "options": {
          "A": "Group Refresh ",
          "B": "File Transfer Activity ",
          "C": "SQL Query Activity ",
          "D": "Filter Activity"
      }
  },
  "55": {
      "questionNumber": "Question #:55",
      "description": "A marketer sent a promotional email to contacts who recently attended a trade show. The data extension used for the send contained 3,100 records. The delivery rate on the send was lower than anticipated. After viewing tracking information, she determined many email addresses were problematic. Which send tracking metric provides the bounce description Address is non-existent at the domain ?",
      "answer": "D",
      "options": {
          "A": "Undeliverable ",
          "B": "Blocked Bounce ",
          "C": "Soft Bounce ",
          "D": "Hard Bounce"
      }
  },
  "56": {
      "questionNumber": "Question #:56",
      "description": "The marketing team at a bank need to receive a file of all subscribers who was sent payment reminder emails and opened them each week. the file needs to be encrypted and placed on the banks external SFTP. How should the scheduled automation be configured to achieve this? ",
      "answer": "A",
      "options": {
          "A": "SQL query activity &gt; data extract activity &gt; file transfer activity ",
          "B": "Filter activity &gt; SQL query activity &gt; file transfer activity ",
          "C": "Filter activity &gt; file transfer activity &gt; data extract activity ",
          "D": "Data extract activity &gt; SQL query activity &gt; file transfer activity"
      }
  },
  "57": {
      "questionNumber": "Question #:57",
      "description": "Northern Trail Outfitters (NTO) uses link aliases within the HTML versions of its emails to indicate when clicks occurred, even if the same URL is used multiple times within a send. A marketing employee has been asked to pull the email addresses of all customers who clicked on the link associated with Main Banner Top in NTO's most recent newsletter. Where can the marketer most easily find this information?",
      "answer": "C",
      "options": {
          "A": "Tracking Job Links tab &gt; URL ID ",
          "B": "\tTracking Overview tab &gt; Clicks",
          "C": "Tracking Click Activity tab &gt; Link View ",
          "D": "\tTracking Click Activity tab &gt; Email Overlay View"
      }
  },
  "58": {
      "questionNumber": "Question #:58",
      "description": "An email marketer has been tasked with increasing open rates on a weekly newsletter that currently uses a consistent, identifiable subject line: “NTO weekly: topics of Interest this week.” Which two best practices should the market to use to make the subject line more effective? Choose 2 answers",
      "answer": "A, D",
      "options": {
          "A": "Include information relevant to the message in the subject line ",
          "B": "Include: “RE:”, “FWD:”, “etc.’ to get the reader’s attention ",
          "C": "Keep the subject text between 50 and 100 characters long ",
          "D": "A/B test the effectiveness of different subjects"
      }
  },
  "59": {
      "questionNumber": "Question #:59",
      "description": "A data administrator is creating a new data extension to store product catalog data. Character length limit is specified for each field. What are two benefits of ensuring field lengths are accurate? (Choose two.)",
      "answer": "A, D",
      "options": {
          "A": "To optimize import process speed",
          "B": "To save the data extension",
          "C": "To ensure data integrity",
          "D": "To determine the correct data type"
      }
  },
  "60": {
      "questionNumber": "Question #:60",
      "description": "NTO plans to launch an email campaign. They have two data extensions. The Mountain Manor Campaign Data Extension will contain the sending audience for this campaign and includes fields for Email Address, Full Name, Loyalty Member ID, and Loyalty Member Status. NTO will be using AMPScript to reference data in a second, nonsendable data extension named Loyalty Members. Which field on the he Mountain Manor Campaign Data Extension should be created as the Primary Key to create a unique relationship with the Loyalty Member Profile Data Extension? ",
      "answer": "C",
      "options": {
          "A": "Email Address ",
          "B": "Loyalty Member Status ",
          "C": "Loyalty Member ID ",
          "D": "Full Name"
      }
  },
  "61": {
      "questionNumber": "Question #:61",
      "description": "A local craft store is implementing the Marketing Cloud and will be using Lists to store their subscriber data. Which two types of data can subscribers easily update via the default Profile Center? Choose 2 answers ",
      "answer": "B, D",
      "options": {
          "A": "Data Extension Fields ",
          "B": "Email Address ",
          "C": "Order History ",
          "D": "List Attributes"
      }
  },
  "62": {
      "questionNumber": "Question #:62",
      "description": "Northern Trail Outfitters (NTO) is implementing marketing cloud and is unsure whether to use lists or data extensions. they're consultant recommended they use data extensions. Which three considerations did the consultant take into account when recommending a data extension model over lists? Choose 3 answers",
      "answer": "B, C, D",
      "options": {
          "A": "NTO has fewer than 15 data points ",
          "B": "NTO needs flexible data storage ",
          "C": "NTO will be using journey Builder ",
          "D": "NTO is storing product and store data ",
          "E": "NTO has fewer than 250,000 subscribers"
      }
  },
  "63": {
      "questionNumber": "Question #:63",
      "description": "NTO just launched a new line of tents and sent a targeted email campaign to introduce the product to the customer. Where in Email Studio can the marketer see the performance summary of the recent email send? ",
      "answer": "C",
      "options": {
          "A": "Job Links tab within Tracking ",
          "B": "Summary tab ",
          "C": "Overview tab within Tracking ",
          "D": "Send Performance tab"
      }
  },
  "64": {
      "questionNumber": "Question #:64",
      "description": "A company has 1 million subscribers. the company has a master data extension that contains information about it subscriberz.com such as email address, physical mailing address phone number, and loyalty information. There are 40 fields in the data extension. the data is used for multiple daily email campaigns. How should the data be updated? ",
      "answer": "B",
      "options": {
          "A": "A scheduled automation to import a file containing all of their subscribers ",
          "B": "A scheduled automation to import a nightly file of updated or changed records ",
          "C": "A scheduled automation to occur every 15-minutes to ensure that the data is current ",
          "D": "A file drop automation to execute an import every time a record is updated or added"
      }
  },
  "65": {
      "questionNumber": "Question #:65",
      "description": "An email marketing team is setting up a campaign to message customers who register for an event. The registration data is being gathered in another system and will be passed to Marketing Cloud daily, and updates made to the customer registration information will be reflected in the same file. How should the import of event registration data be configured? ",
      "answer": "B",
      "options": {
          "A": "Use the Import Wizard to add new records into the data extension ",
          "B": "Use the Import Activity to overwrite the records in the data extension ",
          "C": "Use the Import Activity to add new records into the data extension ",
          "D": "Use the Import Wizard to overwrite the records in the data extension "
      }
  },
  "66": {
      "questionNumber": "Question #:66",
      "description": "A marketing team is using two systems to send emails. The team wants to maintain unsubscribe information between both of the systems. In order to remain complaint, they would like to update Marketing Cloud subscription status weekly based on unsubscribes from the other system. Which solution should they use to maintain subscriber status? ",
      "answer": "D",
      "options": {
          "A": "Create a suppression workflow for the unsubscribed accounts",
          "B": "Import unsubscribes into a data extension, then update status with a query ",
          "C": "Create an automation triggered on unsubscribes from the other system ",
          "D": "Import unsubscribes with the appropriate status into All Subscribers "
      }
  },
  "67": {
      "questionNumber": "Question #:67",
      "description": "Northern Trail Outfitters wants to increase email subscribers this quarter. Which three methods could they use to legally obtain subscribers?",
      "answer": "B, E, D",
      "options": {
          "A": "Purchase subscriber lists from a reputable data company",
          "B": "Ask customers to opt-in at time of purchase online by creating an account",
          "C": "Email all unsubscribed customers asking for them to opt into email again",
          "D": "Create a Facebook lead capturing form to gain opt-ins",
          "E": "Ask customers to text their email address to a short code to opt-in"
      }
  },
  "68": {
      "questionNumber": "Question #:68",
      "description": "Which tactic will improve deliverability for a new sender?",
      "answer": "C",
      "options": {
          "A": "Send email to a minimum of 35,000 subscribers per ISP per day ",
          "B": "Send email to ISPs that have been notified of the new sender",
          "C": "Send email to the most active and engaged customers ",
          "D": "Send email during the holiday season when new senders are less likely to be detected"
      }
  },
  "69": {
      "questionNumber": "Question #:69",
      "description": "Northern Trail Outfitters just sent an HTML email to subscribers that contains a link to the wrong landing page for a particular campaign. Which option minimizes the impact of this error? ",
      "answer": "A",
      "options": {
          "A": "Locate the job under Tracking and update the URL in the Job Links tab",
          "B": "Have Support recall the email if it has not yet been opened by a subscriber.",
          "C": "Send another email to the same subscribers containing the correct link",
          "D": "Update the link in the stored email content and it will be pulled in automatically"
      }
  },
  "70": {
      "questionNumber": "Question #:70",
      "description": "NTO has a Master Subscriber Data Extension that contains profile and preference information. Various segments are created from the Master Subscriber Data Extension and each segment will need to be automatically refreshed daily. Which two activities should NTO consider using? Choose 2 answers ",
      "answer": "C, D",
      "options": {
          "A": "Data Extract Activity ",
          "B": "Segment Activity ",
          "C": "SQL Query Activity ",
          "D": "Filter Activity "
      }
  },
  "71": {
      "questionNumber": "Question #:71",
      "description": "Northern Trail Outfitters (NTO) sends a hiking newsletter to an audience that has opted to receive messages about hiking. They have noticed in the last six months their open and click rates have been trending lower. NTO wants to reverse this trend. How should they improve their engagement rates with unengaged subscribers''",
      "answer": "C",
      "options": {
          "A": "Remove them from the list",
          "B": "Send emails more frequently",
          "C": "Request they resubscribe",
          "D": "Send emails less frequently"
      }
  },
  "72": {
      "questionNumber": "Question #:72",
      "description": "A 15-person management team wants to review test emails built in Email Studio prior to live deployment based on content that is personalized for them but is clearly noted as a test email. What is the safest, most effective way for a marketer to accomplish this task without compromising the email content? ",
      "answer": "A",
      "options": {
          "A": "Create a list composed of the management team, prepend “Test” to the Subject, and use the Send Flow to send the email to the list. ",
          "B": "Create a data extension composed of the management team, create a User-Initiated Send Definition, select the email, prepend “Test” to the Subject, select the data extension, and send the email. ",
          "C": "Create a Test data extension composed of the management team and Test Send to the Test data extension. ",
          "D": "Find each individual with Subscriber Preview and Test Send to each individual Recipient."
      }
  },
  "73": {
      "questionNumber": "Question #:73",
      "description": "A marketer would like to send a Commercial email that is CAN_SPAM compliant. What two criteria should be met to ensure compliance with the CAN_SPAM act? Choose 2 answers",
      "answer": "A, B",
      "options": {
          "A": "Ensure opt-out link is present ",
          "B": "Include the mailing address of the sender ",
          "C": "Include a phone number to call ",
          "D": "State why the subscriber is receiving the email"
      }
  },
  "74": {
      "questionNumber": "Question #:74",
      "description": "Northern Trail Outfitters wants to use something other than email address to identify subscribers. What functionality can be used to accommodate this? ",
      "answer": "A",
      "options": {
          "A": "Subscriber key ",
          "B": "Subscribe attributes ",
          "C": "Primary key ",
          "D": "System preferences"
      }
  },
  "75": {
      "questionNumber": "Question #:75",
      "description": "An email marketing team has been tasked with building a new email that pulls in personalized content based on customers' preferences. The team has decided to create dynamic rules to accomplish this setup. What are the four elements that are required for the creation of a dynamic content rule? ",
      "answer": "A",
      "options": {
          "A": "Attribute, Value, Operator, Content ",
          "B": "Lists, Value, Operator, Images ",
          "C": "Preferences, Value, Operator, Lists ",
          "D": "Customers, Value, Operator, Content"
      }
  },
  "76": {
      "questionNumber": "Question #:76",
      "description": "Northern Trail Outfitters' wants to use a partner to develop dynamic emails. After submittal, the marketing team wants to make sure the emails are reviewed before approval. What feature should they employ?",
      "answer": "D",
      "options": {
          "A": "Standard Workflow Approval",
          "B": "Two-Step Workflow Approval",
          "C": "Content Detective",
          "D": "Preview Tab"
      }
  },
  "77": {
      "questionNumber": "Question #:77",
      "description": "A marketer at Northern Trail Outfitters (NTO) has been tasked with growing its email subscriber audience Which three best practices should the marketer keep in mind while trying to acquire new email subscribers? Choose 3 answers",
      "answer": "B, C, D",
      "options": {
          "A": "Automatically opt-in all new customers ",
          "B": "Tell customers why they want to receive NTO emails ",
          "C": "Set expectations on send frequency and schedule ",
          "D": "Use explicit opt-in for any new web sign-ups ",
          "E": "\tAsk for detailed demographic information"
      }
  },
  "78": {
      "questionNumber": "Question #:78",
      "description": "Northern Trail Outfitters (NTO) wants to ensure a good user experience when subscribers read their emails. What best practice should NTO employ? ",
      "answer": "B",
      "options": {
          "A": "Increase DPI and file size for image display",
          "B": "Keep total weight with images at 800KB or lower. ",
          "C": "Use one file type for all images in the email. ",
          "D": "Rely on image-only emails to engage subscribers"
      }
  },
  "79": {
      "questionNumber": "Question #:79",
      "description": "Northern Trail Outfitters' wants to test five diferente welcome email paths in Journey Builder. After seven days They want to send of new Journey entrants along the path with the greatest click-throught rate. How could these criteria be met?",
      "answer": "A",
      "options": {
          "A": "Use Path Optimizer, select Click Rate as the winner evaluation, na select 7 days as the engagement monitor",
          "B": "Use Engagement Split, select Click on the Message Metrics, and add a Wait By Duration of 7 days",
          "C": "Use Decision Split, select Journey Data for the path criteria, and revisit the Journey 7 days after activating",
          "D": "Use Radom Split, create 5 Paths with equal distribuition, add and Email and Wait By Duration of 7 Days"
      }
  },
  "80": {
      "questionNumber": "Question #:80",
      "description": "A customer is planning to redesign the company website ande mail design. As part of the email updates, the company plans to keep the logo in the header and start using preheader text.",
      "answer": "A, C",
      "options": {
          "A": "Correspoding call-to-action included in primary message;",
          "B": "A mix of old branding with new branding.",
          "C": "Mobile optimized emails",
          "D": "Use of emojis in preheader text"
      }
  },
  "81": {
      "questionNumber": "Question #:81",
      "description": "Northern Trail Outfitters (NTO) needs toc reate a sendable data extension that will contain its customers information. NTO customers are identified by a unique alphanumeric Customer ID, and Email Address is a required field. How should the data extension be configured?",
      "answer": "C",
      "options": {
          "A": "Email Address is Primary Key and relates to Subscriber Key",
          "B": "Customer ID is Primary Key and relates to Subscriber ID",
          "C": "Customer ID is Primary Key and relates to Subscriber Key",
          "D": "Email Address is Primary Kley and relates to Subscriber ID"
      }
  }
}