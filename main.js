import { auth, database } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  ref,
  get,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const status = document.getElementById("error-msg");

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    const roleSnap = await get(ref(database, `roles/${uid}`));
    if (!roleSnap.exists()) {
      status.textContent = "❌ No role assigned to this user.";
      return;
    }

    const role = roleSnap.val();
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userRole", role);
    localStorage.setItem("isLoggedIn", "true");

    const redirectMap = {
      user: "user-home.html",
      admin: "admin-home.html",
      superadmin: "superadmin-home.html",
    };

    window.location.href = redirectMap[role] || "index.html";
  } catch (error) {
    console.error(error);
    status.textContent = "❌ Invalid email or password.";
  }
});
