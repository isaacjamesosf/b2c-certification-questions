// export const questions = {
export const oldQuestions = {
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
          "A": "Schedule Starting Source, Data Extract Activity, File Transfer Activity ",
          "B": "File Drop Starting Source, Data Extract Activity, File Transfer Activity ",
          "C": "Schedule Starting Source, SQL Query Activity, File Transfer Activity ",
          "D": "File Drop Starting Source, SQL Query Activity, File Transfer Activity"
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
          "A": "Import file activity ; send email ",
          "B": "File transfer activity ; import file activity ; send email ",
          "C": "Import file activity ; file transfer activity ; send email ",
          "D": "File transfer activity ; send email"
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
          "A": "SQL query activity ; data extract activity ; file transfer activity ",
          "B": "Filter activity ; SQL query activity ; file transfer activity ",
          "C": "Filter activity ; file transfer activity ; data extract activity ",
          "D": "Data extract activity ; SQL query activity ; file transfer activity"
      }
  },
  "57": {
      "questionNumber": "Question #:57",
      "description": "Northern Trail Outfitters (NTO) uses link aliases within the HTML versions of its emails to indicate when clicks occurred, even if the same URL is used multiple times within a send. A marketing employee has been asked to pull the email addresses of all customers who clicked on the link associated with Main Banner Top in NTO's most recent newsletter. Where can the marketer most easily find this information?",
      "answer": "C",
      "options": {
          "A": "Tracking Job Links tab ; URL ID ",
          "B": "\tTracking Overview tab ; Clicks",
          "C": "Tracking Click Activity tab ; Link View ",
          "D": "\tTracking Click Activity tab ; Email Overlay View"
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

// export const alissonQuestions = {
   export const questions = {
      "1":{
         "questionNumber":"Question #:1",
         "description":"Northern Trail Outfitters (NTO) sends hundreds of different email campaigns monthly.What should be set up to help organize NTO's email tracking results?",
         "answer":"A",
         "options":{
            "A":"Create folders in My Tracking and select where to send results when sending an email",
            "B":"Give emails unique names so they are easier to find in the tracking sends tab",
            "C":"Remove old tracking results on a regular basis to declutter the results list"
         }
      },
      "2":{
         "questionNumber":"Question #:2",
         "description":"Northern Trail Outfitters imports a daily feed of active customers into a data extension. A customer is only included in the daily feed if they meet the criteria to remain active. Which import option should be used to ensure the data extension only contains currently active customers?",
         "answer":"B",
         "options":{
            "A":"Append",
            "B":"Overwrite",
            "C":"Add and Update"
         }
      },
      "3":{
         "questionNumber":"Question #:3",
         "description":"A marketing specialist at Northern Trail Outfitters wants to automate sending the weekly newsletter to subscribers. The audience is located in one data extension, but they also want to send to a partner seed list. Which tool method should the specialist use?",
         "answer":"B",
         "options":{
            "A":"Multi-Step Journey",
            "B":"User Initiated Send",
            "C":"Automation Studio Email Activity"
         }
      },
      "4":{
         "questionNumber":"Question #:4",
         "description":"A marketer has built an automation using Automation Studio to send data from a data extension to the SFTPas a .csv file. The automation includes a data extract and completes successfully, but the file is still not showing up on the SFTP. Which activity is missing?",
         "answer":"C",
         "options":{
            "A":"Fire Event",
            "B":"Import File",
            "C":"File Transfer"
         }
      },
      "5":{
         "questionNumber":"Question #:5",
         "description":"Every day, Northern Trail Outfitters (NTO) adds to a data extension with purchasers of a new luxury cooler line. To give these customers a high-end purchasing experience, NTO wants to send a customized 'congratulations' email the day they are posted in the data extension, and follow up with a review request 14 days later. Which automation solutions should be set up to accommodate this request?",
         "answer":"C",
         "options":{
            "A":"Journey Builder and Behavioral Triggers",
            "B":"Automation Studio and Path Optimizer",
            "C":"Automation Studio and Journey Builder"
         }
      },
      "6":{
         "questionNumber":"Question #:6",
         "description":"Northern Trail Outfitters (NTO) wants to send out three emails In Automation Studio. However, NTO wantsto ensure each email is fully sent before the next email begins sending. How should the automation workflow be built to accomplish this?",
         "answer":"A",
         "options":{
            "A":"Add each Send Email activity to different steps in an automation",
            "B":"Include a Verification activity between each step of an automation",
            "C":"Add each Send Email activity to a single step in an automation"
         }
      },
      "7":{
         "questionNumber":"Question #:7",
         "description":"A marketer needs to personalize an email with dynamic content using data from the Open Data View and data from the Purchase Data Extension. What should be used to source the data from these different sources?",
         "answer":"B",
         "options":{
            "A":"Attribute Group",
            "B":"SQL Query Activity",
            "C":"Data Filter"
         }
      },
      "8":{
         "questionNumber":"Question #:8",
         "description":"Northern Trail Outfitters (NTO) currently uses AMPscript to create customized content for its subscribers.Which actions should help build confidence in NTO's dynamic email capabilities?",
         "answer":"C",
         "options":{
            "A":"Use a Guided Send to perform a test send to Internal users using subscriber data",
            "B":"Use CloudPages to duplicate the dynamic code and test it by using manual subscriber inputs",
            "C":"Use Preview and Test, select a targeted subscriber, and send the email to internal team members"
         }
      },
      "9":{
         "questionNumber":"Question #:9",
         "description":"Northern Trail Outfitters (NTO) wants to manager subscriber preferences at the communication theme level.NTO'S subscribers are stored in data extensions. Which Marketing Cloud feature should be used to achieve this?",
         "answer":"A",
         "options":{
            "A":"Publication Lists",
            "B":"List Unsubscribes",
            "C":"Journey Builder Sends"
         }
      },
      "10":{
         "questionNumber":"Question #:10",
         "description":"Northern Trail Outfitters (NTO) has an upcoming campaign with a call to action to shop its new NTO outlet store. The campaign will need to send up to three emails but stop sending to each specific subscriber once they have made a purchase at the NTO outlet, and provide reporting on the success of the campaign. Which Journey Builder component addresses the two requirements of this campaign?",
         "answer":"C",
         "options":{
            "A":"Decision Splits",
            "B":"Goals",
            "C":"Exits"
         }
      },
      "11":{
         "questionNumber":"Question #:11",
         "description":"Northern Trail Outfitters (NTO) has expanded into 15 new countries and needs to send localized content. NTO works with an agency to provide the translations, but they lack email developer resources. What should NTO do to create and send localized content at scale?",
         "answer":"B",
         "options":{
            "A":"Leverage templates with AMPscript",
            "B":"Leverage Enhanced Dynamic Content",
            "C":"Leverage Multilingual Content Blocks"
         }
      },
      "12":{
         "questionNumber":"Question #:12",
         "description":"A marketer has created a primary data extension that contains all active subscribers with fields containing key demographics and subscriber attributes. Each week, there are up to 10 teams that send to segments of their subscriber base. What should they use to ensure they have fresh data for these sends?",
         "answer":"A",
         "options":{
            "A":"A nightly automation with a filter activity",
            "B":"A verification step In the send automation",
            "C":"An approval process for sending"
         }
      },
      "13":{
         "questionNumber":"Question #:13",
         "description":"The data team at Northern Trail Outfitters wants to send a daily report of all subscribers emailed in the last 24 hours to their Enhanced FTP Export folder. The file should contain unique email addresses. At a minimum, which activities should be configured in Automation Studio to meet their requirements?",
         "answer":"A",
         "options":{
            "A":"SQL Query, Data Extract, File Transfer",
            "B":"SQL Query, Filter, Data Extract",
            "C":"Filter, Data Extract, File Transfer"
         }
      },
      "14":{
         "questionNumber":"Question #:14",
         "description":"Northern Trail Outfitters (NTO) wants to improve the accessibility of its email design.Which best practice should NTO employ?",
         "answer":"B",
         "options":{
            "A":"Reduce line spacing to fit more content on the screen and reduce scrolling",
            "B":"Remove role=\"presentation\" from layout tables to support assistive technologies",
            "C":"Increase the font size (over 16pt) to make the content easier to read"
         }
      },
      "15":{
         "questionNumber":"Question #:15",
         "description":"Northern Trail Outfitters is looking at solutions that provide warnings/advice automatically about Email Sends using Artificial Intelligence. Which standard tool best does this?",
         "answer":"C",
         "options":{
            "A":"Einstein Copy Insights",
            "B":"Einstein Email Recommendations",
            "C":"Einstein Messaging Insights"
         }
      },
      "16":{
         "questionNumber":"Question #:16",
         "description":"Northern Trail Outfitters (NTO) is interested in exploring its large volume of send data. NTO wants to dynamically filter, sort, and group the data in one view but is not comfortable writing SQL queries. Which tool should NTO use?",
         "answer":"C",
         "options":{
            "A":"Filter Activity in Automation Studio",
            "B":"Email Performance Over Time Report",
            "C":"Pivot table in Datorama Reports"
         }
      },
      "17":{
         "questionNumber":"Question #:17",
         "description":"Northern Trail Outfitters uses an automation to process and report sales agents' weekly data extensions. All sales agents' data is needed for the automation's created report to be correct. Some agents have not been creating their data extensions in time. Which step prevents the automation from completing the automation instance and delivering an inaccurate report?",
         "answer":"B",
         "options":{
            "A":"Data Extract Activity",
            "B":"Verification Activity",
            "C":"Wait Activity"
         }
      },
      "18":{
         "questionNumber":"Question #:18",
         "description":"Northern Trail Outfitters (NTO) notices a larger than normal drop in engagement and a spike in unsubscribes after its sales team added a newsletter that is sent three times a week, in addition to the normal commercial marketing messages sent throughout the week. Which action should be taken to reduce the number of unsubscribes and increase engagement for NTO's program?",
         "answer":"C",
         "options":{
            "A":"Add complementary SMS campaigns",
            "B":"Create more focused segmented lists for messaging",
            "C":"Focus on action-driven subject lines"
         }
      },
      "19":{
         "questionNumber":"Question #:19",
         "description":"Northern Trail Outfitters wants to send a personalized email to its loyalty program members. The email should include details about loyalty members' profiles, point balance, and purchase behavior. This data exists in Marketing Cloud across several data extensions. What should a marketer use to build this level of personalization into the email?",
         "answer":"C",
         "options":{
            "A":"Enhanced Dynamic Content Blocks",
            "B":"AMPscript Search Functions",
            "C":"Personalization Strings"
         }
      },
      "20":{
         "questionNumber":"Question #:20",
         "description":"A global marketing team has created an email using Content Builder Approvals and shared it with multiple business units in their Enterprise. Even though the email was approved, additional changes are needed. What is the first action that should be taken to make the edits?",
         "answer":"B",
         "options":{
            "A":"Unshare the email",
            "B":"Withdraw email approval",
            "C":"Cancel send using email"
         }
      },
      "21":{
         "questionNumber":"Question #:21",
         "description":"An upcoming campaign at Northern Trail Outfitters (NTO) has an audience list larger than the company's daily sends. NTO's marketing team is concerned about this send affecting deliverability. Which feature should help NTO achieve this send while keeping deliverability metrics in mind?",
         "answer":"B",
         "options":{
            "A":"Einstein Engagement Frequency",
            "B":"Send Throttling",
            "C":"Sender Authentication Package"
         }
      },
      "22":{
         "questionNumber":"Question #:22",
         "description":"Leadership at Northern Trail Outfitters wants to see a dashboard showing the success rate of customers that have been through a Welcome Series Journey in the last 7 days. Where should they find this dashboard?",
         "answer":"B",
         "options":{
            "A":"Journey Builder - Journey History",
            "B":"Datorama Reports - Journey Performance",
            "C":"Reports - Journey Engagement"
         }
      },
      "23":{
         "questionNumber":"Question #:23",
         "description":"A customer uses the Salesforce Contact object as a synchronized data source. They have started to sync custom fields for further segmentation. Which first step should the customer take to ensure the new fields are available to segment on?",
         "answer":"B",
         "options":{
            "A":"Edit the fields in the synchronized data source",
            "B":"Create a new data extension with the new fields",
            "C":"Create a data filter that includes the new fields"
         }
      },
      "24":{
         "questionNumber":"Question #:24",
         "description":"A marketer is asked to create a sendable data extension from various tables including orders, subscribers, and product line items. The resulting data extension will be used as an entry source for a journey. Which tool should help create this table?",
         "answer":"B",
         "options":{
            "A":"Automation Studio",
            "B":"Data Designer",
            "C":"Audience Studio"
         }
      },
      "25":{
         "questionNumber":"Question #:25",
         "description":"Northern Trail Outfitters imports an encrypted file of its subscribers' favorite colors. Which automation activity and configuration setting should be used for import to a data extension?",
         "answer":"A",
         "options":{
            "A":"Manage Files in File Transfer",
            "B":"Configure Field-Level Encryption in import file",
            "C":"Specify character encoding in import file"
         }
      },
      "26":{
         "questionNumber":"Question #:26",
         "description":"Northern Trail Outfitters wants to report on subscribers who did not receive emails that were included in the sending audience. Which tool should provide a list of subscribers who didn't receive the expected emails?",
         "answer":"B",
         "options":{
            "A":"_sent Dataview",
            "B":"'Subscribers Not Sent To* report",
            "C":"Not Sent Tracking Extract"
         }
      },
      "27":{
         "questionNumber":"Question #:27",
         "description":"When building an email audience, a marketer first runs a query to update a data extension referenced in the audience query. Which configuration should be used to ensure the exclusion is updated before the audience query runs?",
         "answer":"B",
         "options":{
            "A":"In the step with the two SQL activities, place a wait step between them",
            "B":"Place the audience SQL Query Activity in a step after the exclusion SQL Query Activity",
            "C":"Place the audience SQL Query Activity below the exclusion SQL Query Activity"
         }
      },
      "28":{
         "questionNumber":"Question #:28",
         "description":"After sending an initial 'welcome' email, Northern Trail Outfitters needs to configure Journey Builder to continue a customer acquisition journey after a purchase is made on its website. Which type of activity should be used?",
         "answer":"C",
         "options":{
            "A":"Engagement Split",
            "B":"Behavioral Trigger",
            "C":"Wait Until Event"
         }
      },
      "29":{
         "questionNumber":"Question #:29",
         "description":"The marketing team at Northern Trail Outfitters is concerned about its email deliverability rates over the last three months. Which remediation tactic should be used to improve deliverability?",
         "answer":"C",
         "options":{
            "A":"Increase the frequency of email sending to boost engagement",
            "B":"Broaden segmentation criteria to reach more diverse audiences",
            "C":"Scale back sending for specific ISPs until the issue subsides"
         }
      },
      "30":{
         "questionNumber":"Question #:30",
         "description":"Northern Trail Outfitters (NTO) is using Datorama Reports for Marketing Cloud to report on email and journey performance. Which preconfigured dashboard should NTO review to get an idea of which journeys are performing the best?",
         "answer":"C",
         "options":{
            "A":"Email and Journey Overview Dashboard",
            "B":"Email Performance Dashboard",
            "C":"Journey Performance by Email Dashboard"
         }
      },
      "31":{
         "questionNumber":"Question #:31",
         "description":"A marketer has built a journey that they want to run multiple times a day after new data is compiled. The data is NOT in an attribute group in Contact Builder.What should the marketer do in order to accomplish this?",
         "answer":"A",
         "options":{
            "A":"Select the Recurring schedule type for the entry source in Journey Builder",
            "B":"Schedule and activate Triggered Sends for the messages in the journey",
            "C":"Select an automation to populate the Entry Source Data Extension"
         }
      },
      "32":{
         "questionNumber":"Question #:32",
         "description":"Northern Trail Outfitters (NTO) stores sales representative information in a data extension. NTO wants to personalize the From Name in emails with the targeted customer's specific representative. Which functionalities accomplish the requested configuration?",
         "answer":"C",
         "options":{
            "A":"Delivery Profile and AMPscript Lookup",
            "B":"Send Classification and Subscriber Attributes",
            "C":"Sender Profile and AMPscript Lookup"
         }
      },
      "33":{
         "questionNumber":"Question #:33",
         "description":"A marketer is testing an email that includes an Interactive Email Form and discovers the form is missing when the email is opened in Gmail. What guidance should be given to the email developer to ensure the interactive form displays correctly?",
         "answer":"B",
         "options":{
            "A":"Ensure the 'Optimize for Gmail' checkbox is selected",
            "B":"Ensure characters in the CSS tags are limited to 16kB",
            "C":"Ensure fallback content has been configured for Gmail"
         }
      },
      "34":{
         "questionNumber":"Question #:34",
         "description":"A marketer has noticed an increase in unsubscribes. They would like to address this concern but, going into a holiday season, want to avoid eliminating planned emails. What should they use to easily focus their marketing efforts on subscribers who are least likely to unsubscribe?",
         "answer":"B",
         "options":{
            "A":"Path Optimizer",
            "B":"Scoring Split",
            "C":"Frequency Split"
         }
      },
      "35":{
         "questionNumber":"Question #:35",
         "description":"Northern Trail Outfitters (NTO) wants to add automation to its email marketing. Which automation should NTO create as a good first step?",
         "answer":"A",
         "options":{
            "A":"An automation that deletes old data extensions, emails, and reports",
            "B":"An automation that contains several recurring emails and decisioning points",
            "C":"An automation that Imports subscriber data regularly and updates key data extensions"
         }
      },
      "36":{
         "questionNumber":"Question #:36",
         "description":"Northern Trail Outfitters (NTO) is building a welcome journey for new customers with dynamic content in each email. NTO would like to have content personalized for each customer and include assets based on real-time analysis of what is performing the best for other customers. Which feature should NTO use?",
         "answer":"B",
         "options":{
            "A":"Einstein Copy Insights",
            "B":"Einstein Content Selection",
            "C":"Enhanced Dynamic Content"
         }
      },
      "37":{
         "questionNumber":"Question #:37",
         "description":"A marketer needs to send emails to the creative team for proofing as part of an email campaign. Which feature should help achieve this as an automatic flow?",
         "answer":"C",
         "options":{
            "A":"Subscriber Preview",
            "B":"Approval Workflow",
            "C":"Content Builder Approvals"
         }
      },
      "38":{
         "questionNumber":"Question #:38",
         "description":"Northern Trail Outfitters (NTO) has subscribers opt-in to its marketing program via email or SMS. What should NTO configure for its welcome series in Journey Builder to honor the opt-in communication method?",
         "answer":"A",
         "options":{
            "A":"Send both email and SMS to ensure subscribers get NTO's messages",
            "B":"Create one Entry Source for each messaging channel",
            "C":"Ensure source channel Is available in subscriber data"
         }
      },
      "39":{
         "questionNumber":"Question #:39",
         "description":"Northern Trail Outfitters (NTO) sends 500,000 emails per month and shares its sending domain and IP with other customers. Which action ensures NTO's sending reputation remains intact?",
         "answer":"A",
         "options":{
            "A":"Implement an SAP with Private Domain and a Dedicated IP",
            "B":"Request three Dedicated IPs to spread out the sending volume",
            "C":"Request a Private Domain to leverage SPF and DKIM authentication"
         }
      },
      "40":{
         "questionNumber":"Question #:40",
         "description":"A marketing team uses email templates as a means to create a consistent style guide. The team has recently updated the primary template to coincide with company-wide rebranding; however, content approvers are reporting they are not seeing the new changes reflected. Which step needs to be completed?",
         "answer":"B",
         "options":{
            "A":"The email must be recreated using the updated template",
            "B":"'Update Email Now' needs to be applied to each email",
            "C":"The template must be approved before updates are reflected"
         }
      },
      "41":{
         "questionNumber":"Question #:41",
         "description":"Northern Trail Outfitters (NTO) has noticed a decrease in open rate across all email campaigns. NTO is concerned its sender reputation may have been negatively impacted by a recent import of subscribers. Which metric should be analyzed as a possible indicator of bad sender reputation?",
         "answer":"C",
         "options":{
            "A":"Send volume",
            "B":"Click rate",
            "C":"Block bounces"
         }
      },
      "42":{
         "questionNumber":"Question #:42",
         "description":"Northern Trail Outfitters needs to send a transactional email to all customers who purchased an item that was recently recalled. The email must be sent to each applicable customer even if they have unsubscribed. Which component should be configured to provide this functionality?",
         "answer":"B",
         "options":{
            "A":"Delivery Profile",
            "B":"Send Classification",
            "C":"Sender Profile"
         }
      },
      "43":{
         "questionNumber":"Question #:43",
         "description":"Northern Trail Outfitters wants to ensure that the Email Address field value is not duplicated in a data extension. What should a marketer do to ensure the Email Address field values are unique?",
         "answer":"A",
         "options":{
            "A":"Mark the field as the Primary Key",
            "B":"Mark the data extension as Sendable",
            "C":"Use Email Address as Subscriber Key"
         }
      },
      "44":{
         "questionNumber":"Question #:44",
         "description":"Northern Trail Outfitters (NTO) is having an issue with bad email addresses coming into its website email signup form, impacting deliverability and sender reputation. What should NTO use to make sure email addresses are valid before adding to its audience?",
         "answer":"B",
         "options":{
            "A":"Leverage a Smart Capture block",
            "B":"A double opt-in at signup",
            "C":"Add CAPTCHA validation to the form"
         }
      },
      "45":{
         "questionNumber":"Question #:45",
         "description":"A marketer typically sends to a filtered data extension that contains their primary audience. They need to target only a portion of this population for an upcoming send.What should they do to further segment their audience?",
         "answer":"C",
         "options":{
            "A":"Copy the filtered data extension and add additional filter criteria",
            "B":"Use the Split option to temporarily add additional filter criteria",
            "C":"Copy the data filter and build a new data extension with additional filter criteria"
         }
      },
      "46":{
         "questionNumber":"Question #:46",
         "description":"A marketing manager wants to see how the cross-channel customer population has changed over the last 6 months. Which report should be run to provide this Information?",
         "answer":"C",
         "options":{
            "A":"Contacts Count",
            "B":"Contacts Analytics",
            "C":"Audience Engagement Over Time"
         }
      },
      "47":{
         "questionNumber":"Question #:47",
         "description":"The customer success team at Northern Trail Outfitters wants to build out a profile for its subscribers to improve segmentation for future sends. Which content block should the team use to capture this information directly from the inbox for some subscribers?",
         "answer":"B",
         "options":{
            "A":"Smart capture block",
            "B":"Interactive Email Form block",
            "C":"Einstein content block"
         }
      },
      "48":{
         "questionNumber":"Question #:48",
         "description":"A marketer wants to use a filter to create a data extension that includes only records from yesterday.Which step should they take to ensure the data extension includes newly added records?",
         "answer":"C",
         "options":{
            "A":"Check the 'AUTOMATICALLY REFRESH UPON SENDING' checkbox",
            "B":"Configure the filter DE to auto-refresh dally in properties",
            "C":"Schedule an automation to refresh the filter activity each day"
         }
      },
      "49":{
         "questionNumber":"Question #:49",
         "description":"The marketing team has been troubleshooting why an email was not sent to 10% of the audience within the data extension. When they review the tracking for the job ID, they see 0 subscribers were held or unsubscribed. Which additional issues should they consider?",
         "answer":"A",
         "options":{
            "A":"DoNotTrack preferences",
            "B":"Bounced contacts from previous sends",
            "C":"Suppressed contacts from contact deletion"
         }
      },
      "50":{
         "questionNumber":"Question #:50",
         "description":"A marketing team wants to schedule automatic delivery of pivot table data to an Amazon Web Services (AWS) S3 bucket every Monday at 6:00 a.m. Which method meets their needs?",
         "answer":"B",
         "options":{
            "A":"Report Scheduling In Datorama Reports",
            "B":"File Transfer Activity in Automation Studio",
            "C":"Report Definition Activity In Automation Studio"
         }
      },
      "51":{
         "questionNumber":"Question #:51",
         "description":"The marketer for Northern Trail Outfitters wants to review the tone of subject lines and the effect on engagement for recent sends. Which tool should supply insights into the tone of subject lines?",
         "answer":"C",
         "options":{
            "A":"Einstein Recommendations",
            "B":"Einstein Messaging Insights",
            "C":"Einstein Copy Insights"
         }
      },
      "52":{
         "questionNumber":"Question #:52",
         "description":"A marketer wants to quickly view the link performance for a specific email, including Total Clicks and Unique Clicks. Which area of the application should provide this data?",
         "answer":"B",
         "options":{
            "A":"Send Performance Tab",
            "B":"Email Overlay View",
            "C":"Tracking Conversions Tab"
         }
      },
      "53":{
         "questionNumber":"Question #:53",
         "description":"Northern Trail Outfitters (NTO) has multiple lines of businesses sharing one business unit. NTO wants to ensure its customers can identify their specific line of business when receiving an email. Which setting should be configured in a send to identify the line of business sending the message?",
         "answer":"B",
         "options":{
            "A":"Sender Authentication Package",
            "B":"Brand Builder",
            "C":"Sender Profile"
         }
      },
      "54":{
         "questionNumber":"Question #:54",
         "description":"Northern Trail Outfitters wants to organize its assets so images can be easily searched by tags in Content Builder. However, most images have multiple tags that could be applied, which makes it more difficult to filter to a manageable number of results. How should the number of tags selected for an asset be minimized while still providing the necessary granularity?",
         "answer":"B",
         "options":{
            "A":"Make the Customer Key more descriptive",
            "B":"Leverage Einstein for content tagging",
            "C":"Use nested tags to create hierarchies"
         }
      },
      "55":{
         "questionNumber":"Question #:55",
         "description":"A marketer with Northern Trail Outfitters needs to review how different variations of an email will render in different email clients. Which tool should the marketer use?",
         "answer":"B",
         "options":{
            "A":"Content Detective",
            "B":"Test Send",
            "C":"Send Preview"
         }
      },
      "56":{
         "questionNumber":"Question #:56",
         "description":"A marketer wants to better organize their assets in Marketing Cloud. What should they do to improve searching and filtering in Content Builder?",
         "answer":"A",
         "options":{
            "A":"Add assets to folders upon creation",
            "B":"Add descriptive tags to each asset upon creation",
            "C":"Add a description to each asset upon creation"
         }
      },
      "57":{
         "questionNumber":"Question #:57",
         "description":"Northern Trail Outfitters (NTO) is troubleshooting why a triggered send isn't being delivered to the customer. When querying the _subscribers data view, NTO notices this subscriber key exists twice, and one of them has a status of 'Held'. What is the source of the duplicate subscriber key?",
         "answer":"A",
         "options":{
            "A":"Triggered Send Managed Lists",
            "B":"Global Unsubscribe List",
            "C":"Auto Suppression List"
         }
      },
      "58":{
         "questionNumber":"Question #:58",
         "description":"Northern Trail Outfitters (NTO) wants to include specific content for its most engaged customers and different content for its least engaged customers. Which Journey Builder activity should NTO use?",
         "answer":"C",
         "options":{
            "A":"Engagement Split",
            "B":"Frequency Split",
            "C":"Scoring Split"
         }
      },
      "59":{
         "questionNumber":"Question #:59",
         "description":"A marketer wants to store all the attributes for a triggered send within a data extension.Which configuration is required when creating the data extension?",
         "answer":"B",
         "options":{
            "A":"Select the 'Use for triggeredsend' checkbox",
            "B":"Include Subscriberkey and Emailaddress field as primary key",
            "C":"Create from template and choose triggeredsend template"
         }
      },
      "60":{
         "questionNumber":"Question #:60",
         "description":"A marketer for Northern Trail Outfitters needs to see test emails for each subscriber in a data extension.What should the marketer do to ensure the data extension appears as a Recipient Test Data Extension in the Test Send menu?",
         "answer":"B",
         "options":{
            "A":"Save the data extension in the Test Folder",
            "B":"Create the data extension as 'Is Testable'",
            "C":"Associate the data extension to the Campaign"
         }
      },
      "61":{
         "questionNumber":"Question #:61",
         "description":"Northern Trail Outfitters (NTO) receives a complaint from a long-time customer who claims that, despite providing an updated email address, they are still receiving emails at an old address. NTO confirms that the customer's new email address is stored in the target data extension. What is preventing the customer from receiving emails at their new address?",
         "answer":"B",
         "options":{
            "A":"The new email address is from an unsupported domain",
            "B":"The email address has not been updated in All Subscribers",
            "C":"The customer has not opted In again with the new address"
         }
      },
      "62":{
         "questionNumber":"Question #:62",
         "description":"An insurance company has launched a new campaign to target Individuals between 64 and 65 that are not yet enrolled and are opted into email. All subscriber data is stored in one data extension. How should the marketer use low-code to create this segment?",
         "answer":"A",
         "options":{
            "A":"Create a data filter on the data extension",
            "B":"Filter the .csv file before import",
            "C":"Write a query to create a filtered data extension"
         }
      },
      "63":{
         "questionNumber":"Question #:63",
         "description":"Northern Trail Outfitters (NTO) wants to test Einstein Recommendations against the company's static product recommendations in a product return confirmation email. Next, NTO needs to evaluate the results and choose the winning option for future confirmations.Which journey type is best suited to run this test?",
         "answer":"B",
         "options":{
            "A":"Single Send",
            "B":"Multi-Step",
            "C":"Transactional Send"
         }
      },
      "64":{
         "questionNumber":"Question #:64",
         "description":"A healthcare company imports its patient portal registrations at the parent level business unit (BU). The marketing team would like to ensure individual office locations have access to this data without giving access to the parent level BU. What should the marketing team do in Automation Studio to ensure data is available at the child BU level?",
         "answer":"C",
         "options":{
            "A":"After the file import, use the transfer file activity to move data into data extensions in child BUS",
            "B":"Create automations that import the data directly into the child BUs to bypass the parent level BU",
            "C":"After the file import, use the filter activity to populate shared data extensions that are available to child BUs"
         }
      },
      "65":{
         "questionNumber":"Question #:65",
         "description":"Northern Trail Outfitters (NTO) wants to leverage Path Optimizer to test new marketing content. The best path will be selected based on the orders placed on NTO's website. What should NTO configure in Path Optimizer?",
         "answer":"A",
         "options":{
            "A":"Email Engagement",
            "B":"Manual Engagement",
            "C":"Web Conversion"
         }
      }
   }

export const hugoQuestions = {
// export const questions = {
    "1":{
       "questionNumber":"Question #:1",
       "description":"A new data extension named \"Orders\" contains order data. One row is recorded for each customer's order. Customers can place multiple orders. The data extensionOrders relates to other data extensions.The data extension Orders contains the following fields:- OrderNumber: a unique alphanumeric order number.- customerlD: a numeric customer identification number.- OrderDate: the system date and time for the order.- Instructions: an optional alphanumeric string that contains customer delivery notes.Which statement accurately reflects the configuration of the Orders Data Extension?",
       "answer":"D",
       "options":{
          "A":"CustomerID will be used as the Primary Key.",
          "B":"All fields in the data extension are nullable.",
          "C":"The OrderNumber field will be a Number data type field.",
          "D":"OrderNumber will be used as the Primary Key."
       }
    },
    "2":{
       "questionNumber":"Question #:2",
       "description":"A marketing manager is reporting on the degree of customer engagement with the company's email.Which metric can be used?",
       "answer":"A",
       "options":{
          "A":"Click Through Rates",
          "B":"Bounce Rate",
          "C":"List Growth Rate",
          "D":"Influenced Revenue"
       }
    },
    "3":{
       "questionNumber":"Question #:3",
       "description":"A file is received daily from a data provider to the account FTP. This file needs to be imported into the Marketing Cloud as soon as it arrives. The arrival time of this file varies by several hours from day to day.Which tool can be used to accomplish this?",
       "answer":"C",
       "options":{
          "A":"Automation Studio Scheduled Automation",
          "B":"Journey Builder Fire Event",
          "C":"Automation Studio Triggered Automation",
          "D":"Journey Builder Import Activity"
       }
    },
    "4":{
       "questionNumber":"Question #:4",
       "description":"What is required on an email message by the United States CAN-SPAM Act?Choose 2 answers",
       "answer":"A, C, ",
       "options":{
          "A":"A way to Unsubscribe",
          "B":"Any Mailing Address",
          "C":"Physical Mailing Address",
          "D":"A link to the sender ‘s website"
       }
    },
    "5":{
       "questionNumber":"Question #:5",
       "description":"Which variable can be tested using the A/B testing tool?Choose 3 answers",
       "answer":"A, B, D, ",
       "options":{
          "A":"From Name",
          "B":"Email content",
          "C":"ISP",
          "D":"Pre-header",
          "E":"IP Address"
       }
    },
    "6":{
       "questionNumber":"Question #:6",
       "description":"A marketing team member wants to start a query manually to populate a data extension that is used for sending.To which tab in the email application should the team member navigate to start this process?",
       "answer":"D",
       "options":{
          "A":"Automation Studio",
          "B":"Subscribers",
          "C":"Admin",
          "D":"Interactions"
       }
    },
    "7":{
       "questionNumber":"Question #:7",
       "description":"If all subscribers reside within a single master data extension, what is the optimal way to manage unsubscribes by communication type?",
       "answer":"D",
       "options":{
          "A":"Create separate lists or data extensions for each communication type, and create afilter to segment subscribers into the applicable lists or data extensions.",
          "B":"Create suppression lists for each communication type, and associate thesuppression list with the email in the user-initiated send definition.",
          "C":"Create a profile attribute or data extension field for each communication type, anduse a boolean value to capture subscriber status",
          "D":"Create publication lists for each communication type, and associate the publicationlist with the email send in the user-initiated send definition."
       }
    },
    "8":{
       "questionNumber":"Question #:8",
       "description":"A marketer creates a new sendable data extension and defines the Customer_ID field as the field in the Send Relationship that relates to Subscribers on Subscriber Key.What will the send status in All Subscribers be associated with?",
       "answer":"D",
       "options":{
          "A":"The Email Address Profile Attribute.",
          "B":"The Subscriber ID in a System Data View Table.",
          "C":"The Emai|_Address field in the Data Extension.",
          "D":"The Customer_lD field in the Data Extension."
       }
    },
    "9":{
       "questionNumber":"Question #:9",
       "description":"A marketer sends an email to a sendable data extension that contains a Customer_lD field with a numeric data type that relates to the Subscriber Key in All Subscribers as a Send Relationship.What is a true statement about the email send behavior for any subscriber who currently does NOT exist in All Subscribers?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"The email send will fail.",
          "B":"The email address and Subscriber Key will be added to All Subscribers.",
          "C":"The Primary Key and demographic data will be added to All Subscribers.",
          "D":"The subscriber will be added to All Subscribers with a status of Active."
       }
    },
    "10":{
       "questionNumber":"Question #:10",
       "description":"How is Primary Key used?",
       "answer":"C",
       "options":{
          "A":"Primary Key is the unique value used to identify a subscriber.",
          "B":"Primary Key is used when defining a Send Relationship.",
          "C":"Primary Key identifies a row or field in a data extension as unique.",
          "D":"Primary Key prevents data from being overwritten in a data extension."
       }
    },
    "11":{
       "questionNumber":"Question #:11",
       "description":"Using measures, what data can a marketer use to segment an audience?",
       "answer":"A",
       "options":{
          "A":"Open Data",
          "B":"First Name Attributes",
          "C":"Geographical Data",
          "D":"Gender Data"
       }
    },
    "12":{
       "questionNumber":"Question #:12",
       "description":"A marketer wants to create an email that will look great on both a desktop computer and a mobile device. However, the marketer is not familiar with writing code for responsive design and does not have the available resources to design the email.Which template can the marketer choose when creating an email?",
       "answer":"B",
       "options":{
          "A":"Responsive Web template",
          "B":"Standard template",
          "C":"Mobile-optimized template",
          "D":"Media template"
       }
    },
    "13":{
       "questionNumber":"Question #:13",
       "description":"Which send process can use Sender Profiles?Choose 3 answers",
       "answer":"B, D, E, ",
       "options":{
          "A":"Simple Automated Sends",
          "B":"User-Initiated Sends",
          "C":"Test Sends",
          "D":"Triggered Sends",
          "E":"Guided Sends"
       }
    },
    "14":{
       "questionNumber":"Question #:14",
       "description":"A marketer wants to grow the company's email subscriber list via social channelsand its mobile app.Which best practice can the marketer use to grow the subscriber list?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"Send unsolicited requests on Twitter to sign up for email.",
          "B":"Provide an opt-in checkbox on the mobile app registration form.",
          "C":"Search Facebook fans' profiles for email addresses.",
          "D":"Promote content on social channels that requests an email address."
       }
    },
    "15":{
       "questionNumber":"Question #:15",
       "description":"Where can a marketer go to learn more information about using APIs?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"The Administration tab",
          "B":"<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"link-style link-style\" href=\"http://code.exacttarget.com\">code.exacttarget.com",
          "C":"Help and Training Portal",
          "D":"<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"link-style link-style\" href=\"http://help.marketingcloud.com\">help.marketingcloud.com"
       }
    },
    "16":{
       "questionNumber":"Question #:16",
       "description":"A marketer is using an import activity on a nightly basis to import subscriber data to a data extension.What is a true statement about the import activity?Choose 3 answers",
       "answer":"A, C, E, ",
       "options":{
          "A":"The file for an import activity must be placed in a folder on an FTP site.",
          "B":"The import activity is under Subscribers in the Email Application.",
          "C":"An import activity can be executed manually.",
          "D":"The file for an import activity can be on a desktop computer.",
          "E":"An import activity can be used in an automation created in Automation Studio."
       }
    },
    "17":{
       "questionNumber":"Question #:17",
       "description":"What can be used to join two data extensions to segment via Drag and Drop Segmentation?",
       "answer":"B",
       "options":{
          "A":"Send Relationship",
          "B":"Data Relationship",
          "C":"Subscriber ID",
          "D":"Subscriber Key"
       }
    },
    "18":{
       "questionNumber":"Question #:18",
       "description":"A marketer is designing email for mobile devices. Which design best practice would the marketer use?Choose 3 answers",
       "answer":"A, C, E, ",
       "options":{
          "A":"Stack the content in a single column.",
          "B":"Use image-based text for hero graphics.",
          "C":"Design a top-down hierarchy with the most important content at the top.",
          "D":"Cut content to make the message fit above the fold",
          "E":"Keep copy simple and direct."
       }
    },
    "19":{
       "questionNumber":"Question #:19",
       "description":"When creating a custom email with the HTML Paste Editor, which feature can be inserted into the HTML code by using the Insert Tools?Choose 2 answers",
       "answer":"B, C, ",
       "options":{
          "A":"Link Tooltip",
          "B":"Physical mailing address",
          "C":"Email Open Tracking",
          "D":"Stored Content Boxes"
       }
    },
    "20":{
       "questionNumber":"Question #:20",
       "description":"What must be configured in a Marketing Cloud account to use the import wizard?",
       "answer":"A",
       "options":{
          "A":"Enhanced FTP",
          "B":"File Transfer",
          "C":"Encrypted FTP",
          "D":"Data Loader"
       }
    },
    "21":{
       "questionNumber":"Question #:21",
       "description":"A marketer wants to run an Account Send Summary report.Which option can be configured when running this report?Choose 3 answers",
       "answer":"A, D, E, ",
       "options":{
          "A":"Report results delivery location.",
          "B":"Error handling parameters.",
          "C":"Error report log location.",
          "D":"Date range parameters.",
          "E":"Report results file format."
       }
    },
    "22":{
       "questionNumber":"Question #:22",
       "description":"A marketing team is creating a new data extension. The data extension schema is very similar to a data extension that already exists.How would the team create the new data extension?",
       "answer":"C",
       "options":{
          "A":"Create from template.",
          "B":"Create a filtered data extension.",
          "C":"Create from existing.",
          "D":"Create new."
       }
    },
    "23":{
       "questionNumber":"Question #:23",
       "description":"Which recipient option is available with Simple Send?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"Data Extension",
          "B":"Group",
          "C":"Audience",
          "D":"List",
          "E":"Data Filter"
       }
    },
    "24":{
       "questionNumber":"Question #:24",
       "description":"An email marketer is writing the next send’s subject line.What can the marketer do to make the subject line more effective?Choose 2 answers",
       "answer":"C, D, ",
       "options":{
          "A":"Include \"RE:\", \"FWD:“, \"etc.\" to get reader's attention.",
          "B":"Keep the subject text between 50 to 100 characters long.",
          "C":"A/B test the effectiveness of different subjects.",
          "D":"Include information relevant to the message in the subject line."
       }
    },
    "25":{
       "questionNumber":"Question #:25",
       "description":"What is an Automation Studio activity? Choose 3 answers",
       "answer":"A, C, E, ",
       "options":{
          "A":"Send Email",
          "B":"Triggered Send",
          "C":"Wait Activity",
          "D":"A/B Test Send Activity",
          "E":"Transfer File Activity"
       }
    },
    "26":{
       "questionNumber":"Question #:26",
       "description":"A customer would like to automate a weekly email campaign using Automation Studio.Which send method would the customer use to configure the email?* A guided send was what Salesfrorce calls today “Send Flow”.",
       "answer":"B",
       "options":{
          "A":"Test Send",
          "B":"User-initiated",
          "C":"Send Preview",
          "D":"Guided Send"
       }
    },
    "27":{
       "questionNumber":"Question #:27",
       "description":"The marketing team would like to refresh a filtered data extension on a recurring basis, by using a data filter named - \"Pref1-Tech.\"How can this process be automated?",
       "answer":"D",
       "options":{
          "A":"Create a Filtered Data Extension Activity that selects the Pref1-Tech Data Filter, andthen add the Filtered Data Extension Activity to an Automation.",
          "B":"Set a refresh schedule on a new filtered data extension, and select the Pref1-Techdata filter.",
          "C":"Add the Pref1-Tech Data Filter to an Automation.",
          "D":"Create a Filter Activity that selects the Pref1-Tech Data Filter, and then add theFilter Activity to an Automation."
       }
    },
    "28":{
       "questionNumber":"Question #:28",
       "description":"What is a function of the Content Detective tool?",
       "answer":"A",
       "options":{
          "A":"It helps identify spam triggers in email content and subject lines.",
          "B":"It helps guarantee placement of emails into the inbox.",
          "C":"It helps track customer traffic generated by content areas within an email.",
          "D":"It helps display content in a content box."
       }
    },
    "29":{
       "questionNumber":"Question #:29",
       "description":"A marketer is building a highly personalized email. The marketer wants to merge some data into a single data extension to greatly simplify the send logic, maintain the personalization, and exclude an undesired population. Which tool addresses this scenario?",
       "answer":"D",
       "options":{
          "A":"Profile management",
          "B":"Data filters",
          "C":"File triggers",
          "D":"Query activities"
       }
    },
    "30":{
       "questionNumber":"Question #:30",
       "description":"A co-worker has provided a text file containing a list of internal contacts to send an email about an upcoming departamental picnic. The Email Developer does not have access to the account’s FTP site. What is the recommended way to import the data?",
       "answer":"B",
       "options":{
          "A":"Manual Data Filter Refresh",
          "B":"Manual Import Wizard",
          "C":"Import Activity Interaction",
          "D":"Data Extract Activity Interaction"
       }
    },
    "31":{
       "questionNumber":"Question #:31",
       "description":"What is a personalization string?",
       "answer":"D",
       "options":{
          "A":"A content area that will display based on a subscriber attribute.",
          "B":"The snippet of text at the top of the email that is visible before an email has beenopened.",
          "C":"An automated way of scraping a website for content to populate inside of an email.",
          "D":"A snippet of text that inserts a subscriber attribute value into an email."
       }
    },
    "32":{
       "questionNumber":"Question #:32",
       "description":"Which method of storing subscriber information allows a marketer to easily createdifferent subscriptions that subscribers can opt into from the default SubscriptionCenter?",
       "answer":"A",
       "options":{
          "A":"Lists",
          "B":"Active Audiences",
          "C":"Lists and Data Extensions",
          "D":"Data Extensions"
       }
    },
    "33":{
       "questionNumber":"Question #:33",
       "description":"What is the purpose of marking an attribute as hidden?",
       "answer":"A",
       "options":{
          "A":"The attribute is not available to subscribers on the Profile Center.",
          "B":"The attribute is not available to other users in the account.",
          "C":"The attribute is not available for CAN-SPAM compliance.",
          "D":"The attribute is not available to store data."
       }
    },
    "34":{
       "questionNumber":"Question #:34",
       "description":"Which segmentation activity can be used to refresh data on a recurring schedule via an Automation?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"Data Extract Activity",
          "B":"Filter Activity",
          "C":"SQL Query Activity",
          "D":"Segment Activity"
       }
    },
    "35":{
       "questionNumber":"Question #:35",
       "description":"Northern Trail Outfitters has a Master Customer list in a shared data extension.The company wants to make the list available to some, but not all, of the business units.Which feature can be used to restrict users from a business unit from accessing the Master Customer list?",
       "answer":"B",
       "options":{
          "A":"Date/Time Range for Access",
          "B":"Shared Data Extensions Permissions",
          "C":"Manage Data Extension Policies",
          "D":"Data Extension Sharing Rules"
       }
    },
    "36":{
       "questionNumber":"Question #:36",
       "description":"An account has Subscriber Key enabled and will be providing a unique key for each subscriber from an external system. A marketer wants to create a data extension for sending email campaigns.What steps would the marketer take when creating the data extension?Choose 2 answers",
       "answer":"A, B, ",
       "options":{
          "A":"Set the column representing the Subscriber Key as a Primary Key.",
          "B":"Check the \"Is Sendable” option.",
          "C":"Relate the Email Address to the Subscriber Key.",
          "D":"Set the Email address column as a Primary Key."
       }
    },
    "37":{
       "questionNumber":"Question #:37",
       "description":"Which is a fundamental component of coding responsive emails?",
       "answer":"A",
       "options":{
          "A":"CSS3 @media Queries",
          "B":"SQL Queries",
          "C":"Anchor Tags",
          "D":"Span Tags"
       }
    },
    "38":{
       "questionNumber":"Question #:38",
       "description":"Which strategy will improve email deliverability?Choose 3 answers",
       "answer":"B, C, E, ",
       "options":{
          "A":"Ensure the spam complaint rate is between 1% and 3%.",
          "B":"Encourage subscribers to add the company's sending domain to their addressbooks.",
          "C":"Purge old or inactive email addresses.",
          "D":"Purchase lists from companies that guarantee users have opted in.",
          "E":"Authenticate email to distinguish it from spammers."
       }
    },
    "39":{
       "questionNumber":"Question #:39",
       "description":"Which statement regarding editing an email template is true?Choose 2 answers",
       "answer":"C, D, ",
       "options":{
          "A":"Changes to a template cannot be made once it is saved in the application",
          "B":"Changes to a template are automatically inherited in emails built from thattemplate.",
          "C":"Updating an email to reflect changes made in its template can be done in the emailproperties.",
          "D":"A template does not automatically affect emails created from that template."
       }
    },
    "40":{
       "questionNumber":"Question #:40",
       "description":"How can AMPscript customize email messages?",
       "answer":"B",
       "options":{
          "A":"Automate the template creation process.",
          "B":"Provide advanced content personalization.",
          "C":"Automate the flow of creating email messages.",
          "D":"Insert responsive content based on the user's viewing device."
       }
    },
    "41":{
       "questionNumber":"Question #:41",
       "description":"What is a true statement about the Master Unsubscribe?Choose 3 answers",
       "answer":"B, D, E, ",
       "options":{
          "A":"Subscribers can contact the Salesforce Marketing Cloud to unsubscribe.",
          "B":"Subscribers can be Master Unsubscribed via an import to All Subscribers.",
          "C":"Subscribers can log in to the Salesforce Marketing Cloud to unsubscribe.",
          "D":"Subscribers can be manually unsubscribed in Subscriber Properties.",
          "E":"Subscribers can Master Unsubscribe themselves via the Subscription Center."
       }
    },
    "42":{
       "questionNumber":"Question #:42",
       "description":"Which data model should be used to create a Group?",
       "answer":"D",
       "options":{
          "A":"Data Filters",
          "B":"Active Audiences",
          "C":"Data Extensions",
          "D":"Lists"
       }
    },
    "43":{
       "questionNumber":"Question #:43",
       "description":"Which feature can be included in a content box?Choose 3 answers",
       "answer":"A, B, D, ",
       "options":{
          "A":"Facebook Like",
          "B":"Social Forward",
          "C":"Content Detective",
          "D":"Forward to a Friend",
          "E":"Microsites"
       }
    },
    "44":{
       "questionNumber":"Question #:44",
       "description":"A bank wants to send a series of emails to customers who open a new savings account.The first email is sent immediately after the account is opened to confirm the action.The second email is sent one day after the account is opened.The third email is sent five days after the account is opened only if the customer has not made a new deposit.The final email is sent ten days after the account has been opened and the customer still has not made a deposit, or eight days after the customer opened the account and made a deposit, but has not opened any emails.The data is stored in two data extensions.The bank has two versions of each email: English and Spanish.The bank wants to automate sending the emails.Which process could the bank use?Choose 2 answers",
       "answer":"C, D, ",
       "options":{
          "A":"Use Drag and Drop Segmentation to create data filters.",
          "B":"Use Drag and Drop Segmentation to create data filters, and then use FilterActivities.",
          "C":"Create a data relationship and a Measure, use Drag and Drop Segmentation tocreate data filters, and use Filter Activities.",
          "D":"Use Query Activities."
       }
    },
    "45":{
       "questionNumber":"Question #:45",
       "description":"A marketing associate at Northern Trail Outfitters must create an email campaign for the company’s new winter offerings.Which method could the associate use to create the email message?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"Email Send Wizard",
          "B":"HTML Paste",
          "C":"User-initiated email message",
          "D":"Email templates"
       }
    },
    "46":{
       "questionNumber":"Question #:46",
       "description":"Which method of storing subscriber information allows a Company to do extensive audience segmentation, including additional 1:1 subscriber data the company wants for a send, and to import the data quickly?",
       "answer":"A",
       "options":{
          "A":"Data Extensions",
          "B":"Active Audiences",
          "C":"Lists and Data Extensions",
          "D":"Lists"
       }
    },
    "47":{
       "questionNumber":"Question #:47",
       "description":"What occurs in an Enterprise 2.0 account when a subscriber clicks the default “One-Click Unsubscribe\" link in an email?Choose 2 answers",
       "answer":"B, D, ",
       "options":{
          "A":"The subscriber is added to the enterprise global unsubscribe list.",
          "B":"The subscriber is unsubscribed from the publication list applied to the send.",
          "C":"The subscriber is deleted completely from the sending account.",
          "D":"The subscriber is removed from the List used for the send."
       }
    },
    "48":{
       "questionNumber":"Question #:48",
       "description":"A marketing associate at Northern Trail Outfitters must design an email campaign for the company's new winter offerings.Which email design best practice would the associate implement in this campaign?",
       "answer":"D",
       "options":{
          "A":"Limit the email text to 250 words.",
          "B":"Segment the audience for the email.",
          "C":"Use an infographic email template.",
          "D":"Personalize the email content."
       }
    },
    "49":{
       "questionNumber":"Question #:49",
       "description":"What information and data about the performance of an individual send can be exported from the tracking details?Choose 2 answers",
       "answer":"A, C, ",
       "options":{
          "A":"Subscribers who click on a specific link.",
          "B":"Number of clicks from mobile devices.",
          "C":"Performance data on the Overview Tab.",
          "D":"Images showing how the email rendered on different devices."
       }
    },
    "50":{
       "questionNumber":"Question #:50",
       "description":"Northern Trail Outfitters sends email order confirmations to customers who have made online purchases. Delivery of these emails must follow the \"Transactional\" CAN-SPAM classification requirements.Which feature would a marketer use to classify a send under this CAN-SPAM classification?",
       "answer":"D",
       "options":{
          "A":"Delivery Profile",
          "B":"Send Definition",
          "C":"Sender Profile",
          "D":"Send Classification"
       }
    },
    "51":{
       "questionNumber":"Question #:51",
       "description":"A marketer at Northern Trail Outfitters wants to add a subscriber to a data extension and follow up with a thank-you email by using Smart Capture.Which action does the marketer need to take in the processing tab when creating the Smart Capture form?Choose 2 answers",
       "answer":"A, D, ",
       "options":{
          "A":"Add to Data Extension.",
          "B":"Add a new subscriber to a list.",
          "C":"Refresh the data filter.",
          "D":"Send the email via Triggered Send."
       }
    },
    "52":{
       "questionNumber":"Question #:52",
       "description":"Northern Trail Outfitters wants to display different content areas based on the subscriber data. What can be used to accomplish this?Choose 2 answers",
       "answer":"C, D, ",
       "options":{
          "A":"Personalization Strings",
          "B":"Profile Mapping",
          "C":"AMPScript",
          "D":"Dynamic Content"
       }
    },
    "53":{
       "questionNumber":"Question #:53",
       "description":"What can a marketer do to enhance a Welcome Series campaign?Choose 2 answers",
       "answer":"B, C, ",
       "options":{
          "A":"Send three emails on the first day after sign-up.",
          "B":"Personalize email content.",
          "C":"Share the email program‘s value proposition.",
          "D":"Require that the subscriber refer a friend."
       }
    },
    "54":{
       "questionNumber":"Question #:54",
       "description":"A marketer needs to share report results with a manager.When using Reports in the Marketing Cloud, which option can be used to deliver the report to the manager?Choose 3 answers",
       "answer":"B, C, E, ",
       "options":{
          "A":"Include a link to the report in an email.",
          "B":"Save the report to an FTP folder.",
          "C":"Save the report as a Snapshot.",
          "D":"Print the report from Reports.",
          "E":"Email the report."
       }
    }
 }