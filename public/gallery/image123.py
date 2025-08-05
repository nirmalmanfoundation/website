import os

def rename_files_in_folder(folder_path):
    # List all items in the directory
    items = os.listdir(folder_path)
    # Sort the items for a predictable order
    items.sort()
    
    counter = 1
    for item in items:
        current_path = os.path.join(folder_path, item)
        # Process only files (skip folders or other types)
        if os.path.isfile(current_path):
            # Extract the file extension (e.g., '.jpg', '.png')
            file_ext = os.path.splitext(item)[1]
            new_filename = f"image{counter}{file_ext}"
            new_path = os.path.join(folder_path, new_filename)
            
            # Rename the file and print the change
            os.rename(current_path, new_path)
            print(f"Renamed '{item}' to '{new_filename}'")
            counter += 1

if __name__ == "__main__":
    folder = input("Enter the folder path: ").strip()
    if os.path.isdir(folder):
        rename_files_in_folder(folder)
    else:
        print("The path provided is not a valid directory.")