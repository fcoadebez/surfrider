import { endPoints } from "./../config";

class WordPress {
  constructor() {}

  async getMainNav() {
    const navigation = await fetch(
      endPoints.basepath + "/wp-json/wp-api-menus/v2/menus/16"
    );
    return navigation.json();
  }
}

export default new WordPress();
