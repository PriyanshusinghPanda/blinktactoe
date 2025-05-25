# ✅ Blink Tac Toe - Dev Checklist

- [ ] Initialize project (React.js or Vanilla JS)
  - [ ] ⚙️ Setup Vite or CRA (if using React)
- [ ] Set up folder structure (components, styles, utils)
- [ ] Create 3x3 grid board layout
- [ ] Make cells clickable and responsive
- [ ] Handle alternating player turns (Player 1 → Player 2)
- [ ] Create emoji categories (e.g. Animals, Food)
- [ ] Let players choose emoji categories before the game starts
- [ ] Assign a random emoji from selected category each turn
- [ ] Show current player's turn clearly in the UI
- [ ] Limit each player to 3 emojis on board
  - [ ] Implement FIFO removal for 4th emoji
  - [ ] Prevent reuse of vanished cell
- [ ] Check for win (3 in a row - horizontal, vertical, diagonal)
  - [ ] Ensure emojis belong to same category/player
- [ ] Display "Player X Wins!" message
- [ ] Highlight the winning combination
- [ ] Add "Play Again" button to reset the game
- [ ] Add Help / How to Play section
- [ ] Make layout responsive (desktop + mobile)
- [ ] Add animations (emoji placement, vanish)
- [ ] Deploy live version (Netlify, Vercel, GitHub Pages)

---
Planned features:

- [ ] Game code sharing (invite system)
- [ ] Real-time multiplayer (WebSocket or Firebase)
- [ ] Cloud save support (sync game state)
- [ ] Emoji theme customization
- [ ] Turn timer / countdown
- [ ] Spectator mode
- [ ] Audio feedback and emoji sound packs
- [ ] Score history or leaderboard
- [ ] Mobile app version using React Native or Expo

---

💡 *Tip: Break large features into mini-components to track them better (e.g., online logic, sync, UI).*  
💬 If you'd like, I can make this into a GitHub issue template or project board format.
