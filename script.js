const foodData = {
  "Appetizer": { "Salad": 150, "Soup": 120, "Fries": 300 },
  "Main Course": { "Pizza": 350, "Burger": 500, "Pasta": 400 },
  "Dessert": { "Ice Cream": 250, "Cake": 320, "Donut": 280 },
  "Drink": { "Soda": 180, "Juice": 120, "Water": 0 }
};

const categorySelect = document.getElementById("category");
const foodSelect = document.getElementById("foodItem");
const form = document.getElementById("calorieForm");
const summaryList = document.getElementById("summaryList");
const totalCaloriesText = document.getElementById("totalCalories");
const itemCountText = document.getElementById("itemCount");

let totalCalories = 0;
let itemCount = 0;

function updateFoodOptions() {
  const selectedCategory = categorySelect.value;
  foodSelect.innerHTML = "";
  for (let food in foodData[selectedCategory]) {
    const option = document.createElement("option");
    option.value = food;
    option.textContent = `${food} (${foodData[selectedCategory][food]} kcal)`;
    foodSelect.appendChild(option);
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const category = categorySelect.value;
  const food = foodSelect.value;
  const servings = parseInt(document.getElementById("servings").value);

  const calories = foodData[category][food] * servings;
  totalCalories += calories;
  itemCount += servings;

  const listItem = document.createElement("li");
  listItem.className = "list-group-item d-flex justify-content-between align-items-center";
  listItem.textContent = `${servings} x ${food}`;
  const badge = document.createElement("span");
  badge.className = "badge bg-info";
  badge.textContent = `${calories} kcal`;
  listItem.appendChild(badge);
  summaryList.appendChild(listItem);

  totalCaloriesText.textContent = totalCalories;
  itemCountText.textContent = itemCount;
});

categorySelect.addEventListener("change", updateFoodOptions);
updateFoodOptions();
// Reset button functionality
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
  // إعادة القيم للصفر
  totalCalories = 0;
  itemCount = 0;

  // مسح القائمة
  summaryList.innerHTML = "";

  // تحديث النصوص
  totalCaloriesText.textContent = totalCalories;
  itemCountText.textContent = itemCount;

  // رسالة تأكيد للمستخدم
  alert("🧹 Cart has been reset!");
});
