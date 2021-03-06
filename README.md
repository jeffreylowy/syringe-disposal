# Introduction

SF residents issue requests for syringe disposal by creating a tickets and mapping the location of the syringes found in public areas. The app then sends an alert to volunteers to help with disposal. On-duty volunteer(s) will claim the tickets and update the status once the reported syringes have been disposed.

## Features

- SF residents map the location of syringe(s) found in public areas.
- Sends alerts to volunteers
- Volunteers accept cases and update status, providing the number of syringes collected from the location.
- SF residents request an area recieves special attention before events.
- Track number of completed disposals by volunteer (response time, number of syringes and location).
- Track historical locations of disposed syringes cleaned up.
- Accept and track volunteer applications.
- Track the progress of volunteers interviews, orientation and safety training.
- _*Stretch goal:*_ - Interface with [511.org](https://511.org) so volunteer can plan travel by bus/train to the location.
- _*Stretch goal:*_ - Badge system
- _*Stretch goal:*_ Invite volunteers to appreciation events
- _*Stretch goal:*_ Create a low threshold incentivized work program using the app. SF residents/erchants may donate to the service, providing stipends to volunteers using a third-party payments through [Braintree](https://www.braintreepayments.com) or [Stripe](https://stripe.com/). This would allow homeless and other low-income folks to sign-in for work to earn income.

## Application

### Generating the Application

The app was created using the Angular CLI with the following command:

```bash
ng new Application --style=scss --routing --skip-git
```

`--style=scss` - file extension to be used for style files.

`--routing` - Generates a routing module named `app-routing.module.ts`.

`--skip-git` - Skiped initializing a git repository when the app was created since the app was generated inside of an exisiting repository.

## Deploy to Firebase

```bash
# cd into the Application directory
cd Application

# Run the ng build command with the 'prod' and 'output-path' flags
# the output path should point to the 'dist' directory
ng build --prod --output-path dist

# Deploy to Firebase Hosting
firebase deploy --only hosting -m "optional message describing this deploy"
```

## Firebase: Cloud Firestore Database

The data is stored in a Firestore databases. Below are the fields for each document type in the database.

#### Volunteers

- Name
- Location (Street address, City, Zip)
- Email
- Phone
- Email opt-in
- Text messages opt-in
- Approved status
- Number of pickups
- Image

#### Report Syringe Pickup

- Name
- Location
- Requestor Details
- Requestor Email follow-up?
- Requestor Email
- Number of syringes
- Status (updated by volunteers)
- Requestor Time reported
- Volunteer Time completed

#### Request Regular/Future Inspection

- Name
- Email
- Phone
- Address (Street address, City, State, Zip)
- One time / On-going
