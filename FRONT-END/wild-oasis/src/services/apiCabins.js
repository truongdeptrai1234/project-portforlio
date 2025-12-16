import supabase from "./supabase";

export async function getAllCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Could not load cabins");
  }
  return data;
}
export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    throw new Error("Could not delete cabin");
  }
}
async function upLoadImage(cabinData) {
  const imageName = cabinData?.image[0]?.name
    ? `${Date.now()}__${Math.random().toString(36).slice(2)}__${
        cabinData.image[0].name
      }`.replaceAll("/", "")
    : "";
  if (!imageName) return { error: "image name invalid" };
  const { error } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image[0]);
  if (error) return { error };

  const { data } = supabase.storage
    .from("cabin-images")
    .getPublicUrl(imageName);

  return { imagePath: data.publicUrl, error };
}
export async function createCabin(newCabin) {
  //upload image
  const response = await upLoadImage(newCabin);
  if (response.error) {
    throw new Error("Fail to upload image, Could not create cabin");
  }
  const { data, error: errorCreating } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: response.imagePath }])
    .select()
    .single();
  //create cabin error => delete
  if (errorCreating) {
    throw new Error("Could not create cabin");
  }

  return data;
}
export async function editCabin(editCabinData) {
  let imagePath = editCabinData.image;

  if (typeof editCabinData.image !== "string") {
    const response = await upLoadImage(editCabinData);

    if (response.error)
      throw new Error("Fail to update image, Could not create cabin");

    imagePath = response.imagePath;
  }

  const { data, error } = await supabase
    .from("cabins")
    .update({
      ...editCabinData,
      image: imagePath,
    })
    .eq("id", editCabinData.id);
  if (error) {
    throw new Error("Could not update cabin");
  }

  return data;
}
