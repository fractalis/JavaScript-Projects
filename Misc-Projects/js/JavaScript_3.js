function handleMonster(monster) {
    var hitPoints = monster.getAttribute("data-hit_points");
    var monster_name = monster.getAttribute("data-monster_name");

    monster.innerHTML = monster_name + " attacks with " + hitPoints + " hit points";
}

function handleItem(item) {
    var itemName = item.getAttribute("data-item_name");

    item.innerHTML = itemName + " lies on the ground.";
}