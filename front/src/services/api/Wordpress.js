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

  async getAgirContent() {
    const agirContent = await fetch(
      endPoints.basepath + "/wp-json/wp/v2/pages/77"
    );
    return agirContent.json();
  }

  async getInitiativesContent() {
    const agirContent = await fetch(
      endPoints.basepath + "/wp-json/wp/v2/pages/313"
    );
    return agirContent.json();
  }
}

export default new WordPress();
