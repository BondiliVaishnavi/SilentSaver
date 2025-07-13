# 🚀 SilentSaver - In-Store Intelligence Platform

**SilentSaver** is an in-store intelligence platform that transforms potential food waste into a **gamified community experience**, making retail more **personal, purposeful, and powerful**.

---

## 🎬 Demo Video

📺 [Watch Our 2-Minute Winning Pitch](https://youtu.be/67wr6aVcsEM?si=JZLbXnK-ORrL6Svh)


---

## 🎯 The Problem

Every year, Walmart silently loses over **$3 billion** due to food waste — products that expire on shelves while **better-priced versions sit unnoticed** just a few aisles away.

According to the USDA, **up to 40% of retail food is wasted**. It’s invisible to shoppers… but the **financial and environmental impact** is massive.

> Meet Narendar — a loyal Walmart customer.  
> Last week, he bought milk at full price… not knowing the exact same carton was in clearance, marked down 40% just around the corner.

This happens all the time:
- 🏬 Walmart loses inventory  
- 🛒 Customers lose trust  
- 🌍 The planet pays the price

---

## ✨ Our Solution

That’s why we built **SilentSaver** — not just another discount tool, but an **in-store intelligence platform** that turns **scanning into saving… and saving into a public celebration**.

- **No app, no login** — just **smart QR codes** placed across the store
- Shoppers scan a code and instantly check any product:
  - Is it on clearance?
  - How soon does it expire?
  - How many are left?
  - How many others viewed it?

> “🏃 Hurry! Run to clearance before it’s gone!”

At checkout, the shopper enters a **one-time code**. The cashier confirms the purchase — and a **celebration** is triggered on a big in-store display:

> 📰 “Narendar just saved food from going to waste. Welcome our newest Waste Warrior!”

---

## 🏆 Key Features

- ⚡ **Frictionless Access** – No app or login. 100% web-based.
- 📺 **Live “Waste Warrior” Display** – Celebrate real customers in real-time on big screens.
- 📦 **Urgency-Driven “Deal Card”** – Shows stock, expiry, and shopper interest.
- 🛡️ **Secure Admin Dashboard** – Track data with custom tools like the Impact Calendar.
- 📊 **Data-Backed Business Case** – 6-month simulation proves ROI.
- ♻️ **Triple-Win Framework** – Built to help the **Customer**, **Walmart**, and the **Planet**.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript  
- **Data Visualization**: Chart.js  
- **Real-Time Simulation**: Browser `localStorage`  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  

---

## ⚙️ Getting Started: Setup & Demo Flow

### 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### 🔧 Installation Steps

1. **Clone the Repository**

```bash
git clone https://github.com/BondiliVaishnavi/SilentSaver.git
cd SilentSaver
````

2. **Set Up the Backend**

```bash
cd backend
npm install
```

3. **Create `.env` File**

Inside the `backend` folder:

```
MONGO_URI=your_mongodb_connection_string
```

4. **Run the Backend**

```bash
node server.js
```

> You should see:
> `Server is running on port XXXX`
> `MongoDB connected successfully!`

---

### 🧪 Running the Demo (3 Tabs)

To simulate the full real-time experience:

#### 1. 🧍‍♂️ Shopper (Customer View)

* Open `scan.html` in your browser
* Click the **"Scan Product"** button
* A **Redemption Code** (e.g., `MILK-123`) will appear

#### 2. 💻 Cashier Terminal

* Open `pos.html` in a second browser tab
* Enter the **Redemption Code** and **customer name**
* Click **"Complete Sale"**

#### 3. 📺 Public Display (TV Screen)

* Open `admin.html` in a third tab
* When the sale is completed, this screen **updates in real-time**:

  > 📰 “Narendar just saved food from going to waste. Welcome our newest Waste Warrior!”

---

### 🧩 Demo Summary Table

| Role         | File         | Description                         |
| ------------ | ------------ | ----------------------------------- |
| Shopper View | `scan.html`  | Customer scans and gets deal info   |
| POS System   | `pos.html`   | Cashier verifies and completes sale |
| Display TV   | `admin.html` | Shows live celebration and update   |

---

## 🙌 Acknowledgments

Made with ❤️ during \[WALMART SPARKATHON 2025]
Inspired by a vision to connect **technology**, **sustainability**, and **real shopper joy**.

---

## 🌍 Let’s Save Smarter

SilentSaver isn’t just smarter shopping —
It’s **retail with purpose**: human, efficient, and sustainable.

---
