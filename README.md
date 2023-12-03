# Next.js Chat App UI 

This project implements a chat application UI using Next.js, TailwindCss. The UI is structured with various components to create a seamless and organized chat experience.


## Preview

Check out the live preview of the application [here](https://chatapp-ui-xi.vercel.app).
## Project Structure

### Components

#### Navbar

- Location: `/app/components/Navbar.jsx`
- Responsibilities:
  - Render the application logo.
  - Display the user's profile picture.
  - Include any navigation or menu items specific to the header.

#### Footer

- Location: `/app/components/Footer.jsx`
- Responsibilities:
  - Render copyright information.
  - Include links to terms of service or other relevant content.

#### Sidebar

- Location: `/app/components/Sidebar.jsx`
- Responsibilities:
  - Render rectangular card components for each chat.
  - Maintain a 1:10 ratio for each card.
  - Also renders create a new bot button.

#### ChatContainer

- Location: `/app/components/ChatContainer.jsx`
- Responsibilities:
  - Render the ChatHeader, MessageContainer, and InputContainer components.

##### ChatHeader
- Responsibilities:
  - Display the profile picture and name of the chat participant.
  - Provide a menu with options for back and delete buttons etc.

##### MessageContainer

- Location: `/app/components/MessageContainer.jsx`
- Responsibilities:
  - Manage the display of messages within the chat.
  - Render individual messages, including profile picture of the sender and other relevant information.

## Getting Started

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

