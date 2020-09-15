function createSKU(name, category) {
  let first = name.split(' ').join('').slice(0, 3);
  let second = category.slice(0, 2);
  return first.concat(second).toUpperCase();
}

function isValidItemName(itemName) {
  return itemName.split(' ').join('').length >= 5;
}

function isValidCategory(categoryName) {
  return categoryName.split(' ').length === 1 && categoryName.length >- 5;
}

function isValidQuantity(quantity) {
  return typeof quantity === 'number';
}

function isValid(prop) {
  let validMethods = {'name': isValidItemName, 'category': isValidCategory, 'quantity': isValidQuantity};

  return function (val) {
    let method = validMethods[prop];
    return method(val);
  };
}

function Item (name, category, quantity) {
  let args = [...arguments];
  let props = ["name", "category", "quantity"];

  for (let idx = 0; idx < args.length; idx += 1) {
    let prop = props[idx];
    let isValidProp = isValid(prop);
    
    if (isValidProp(args[idx])) {
      this[props[idx]] = args[idx];
    } else {
      return { notValid: true };
    }
  }

  this.sku = createSKU(this.name, this.category);
}

const ItemManager = {
  items: [],

  create(name, category, quantity) {
    if (arguments.length < 3) return false;

    let newItem = new Item(name, category, quantity);

    if (newItem.notValid) {
        return false;
    } else {
      this.items.push(newItem);
    }
  },

  update(skuCode, props) {
    Object.assign(this.getItem(skuCode), props);
  },

  getItemIdx(skuCode) {
    for (let idx = 0; idx < this.items.length; idx += 1) {
      if (this.items[idx].sku === skuCode) {
        return idx;
      }
    }
  },

  getItem(skuCode) {
    return this.items[this.getItemIdx(skuCode)];
  },

  delete(skuCode) {
    let idx = this.getItemIdx(skuCode);
    this.items.splice(idx, 1);
  },

  getItemsInStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  inStock() {
    let itemList = this.getItemsInStock();
    this.logItems(itemList);
  },

  itemsInCategory(category) {
    let itemList = this.items.filter(item => item.category === category);
    this.logItems(itemList);
  },

  logItems(itemList) {
    itemList.forEach(item => console.log(item));
  },
};

const ReportManager = {
  
  init(itemMgr) {
    this.items = itemMgr;
  },

  createReporter(skuCode) {
    let item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}:${item[key]}`);
        });
      },
    };
  },

  reportInStock() {
    let itemList = this.items.getItemsInStock();
    console.log(itemList.map(item => item.name).join(', '));
  },

};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);       
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
ItemManager.inStock();
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
ItemManager.itemsInCategory('sports');
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
ItemManager.items;
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10