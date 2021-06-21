class readText {
  #archive; 
  constructor(archive){
    this.#archive = archive;
  }
  getArchive(){
    return this.#archive
  }
  setArchive(archive){
    this.#archive = archive
  }

  async uploadFile(upload){
    const uploadFile = upload;
    const file = uploadFile.files[0];
    const showFile = await this.readText(file);
    this.setArchive(showFile);
  }

  readText(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsText(file);

      fileReader.onload = () => {
          resolve(fileReader.result);
      } 

      fileReader.onerror = reject;
  })
}

}
