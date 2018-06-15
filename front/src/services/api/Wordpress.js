import { endPoints } from "./../config";

class WordPress {
  constructor() {}

  async getMainNav() {
    const navigation = await fetch(
      endPoints.basepath + "/wp-json/wp-api-menus/v2/menus/16"
    );
    return navigation.json();
  }

  async getHomeContent() {
    const homeContent = await fetch(
      endPoints.basepath + "/wp-json/wp/v2/pages/2"
    );
    return homeContent.json();
  }
}

export default new WordPress();
