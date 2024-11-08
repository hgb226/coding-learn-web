"use client";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import DoneIcon from "@mui/icons-material/Done";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import LoadingButtonProvider from "~/components/loading_button";
import { userContext } from "~/context/UserContext";
import { useUploadImage } from "~/hooks/useUploadFile";
import useUpdateProfile from "~/hooks/user/useUpdateProfile";

export default function EditProfile() {
  const { isLogin, data } = useContext(userContext);

  const [fullName, setFullName] = useState(data?.fullName);
  const [email, setEmail] = useState(data?.email);
  const [avatar, setAvatar] = useState(data?.avatar);
  const [password, setPassword] = useState("");
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
  const [editingName, setEditingName] = useState(false);
  const [editingAvatar, setEditingAvatar] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setFullName(data?.fullName);
    setEmail(data?.email);
    setAvatar(data?.avatar);
  }, [data]);

  const { mutateAsync, isPending } = useUploadImage();
  const { mutate: mutateProfile, isPending: isPendingUpdate } =
    useUpdateProfile();

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setAvatar(URL.createObjectURL(file));
      setNewAvatar(file);
    }
  };

  const handleSubmit = async () => {
    let newAvatarSrc = "";
    if (newAvatar) {
      newAvatarSrc = await mutateAsync(newAvatar as Blob);
    }

    mutateProfile({
      fullName: fullName as string,
      avatar: !newAvatar ? (avatar as string) : newAvatarSrc,
      password,
    });
  };

  const [hoveringAvatar, setHoveringAvatar] = useState(false);

  const handleAvatarHover = () => {
    setHoveringAvatar(true);
  };

  const handleAvatarLeave = () => {
    setHoveringAvatar(false);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordChangeConfirmation = () => {
    if (password === confirmPassword) {
      setShowConfirmation(false);
      setPassword(confirmPassword);
      setEditingPassword(false);
    } else {
      toast("Password does not match, please re-enter", {
        type: "error",
      });
    }
  };

  return (
    <div className="mx-auto mt-10 w-full max-w-5xl rounded bg-white p-8 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Profile</h2>
      <div className="mb-4 flex flex-col rounded p-4">
        <div className="relative mb-4 flex flex-col rounded p-4">
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={handleAvatarHover}
            onMouseLeave={handleAvatarLeave}
          >
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
            <Avatar
              className="!h-24 !w-24"
              alt="Remy Sharp"
              src={avatar || "/images/avatar.jpeg"}
            />
            {hoveringAvatar && (
              <div className="absolute inset-0 flex items-center justify-center">
                <label htmlFor="avatar" className="cursor-pointer">
                  <AddAPhotoIcon fontSize="large" style={{ opacity: "0.5" }} />
                </label>
              </div>
            )}
          </div>
        </div>

        <label
          htmlFor="fullName"
          className="mb-2 block font-bold text-gray-700"
        >
          UserName
        </label>
        {editingName ? (
          <div className="flex w-full items-center">
            <TextField
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Username"
              fullWidth
            />
            <IconButton onClick={() => setEditingName(false)}>
              <DoneIcon />
            </IconButton>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p>{fullName}</p>
            <Button variant="contained" onClick={() => setEditingName(true)}>
              Edit
            </Button>
          </div>
        )}
      </div>

      <div className="mb-4 flex flex-col rounded p-4">
        <label
          htmlFor="fullName"
          className="mb-2 block font-bold text-gray-700"
        >
          Email
        </label>
        <p>{email}</p>
      </div>
      <div className="mb-4 flex flex-col rounded p-4">
        <label
          htmlFor="password"
          className="mb-2 block font-bold text-gray-700"
        >
          Password
        </label>
        {editingPassword ? (
          <div className="flex w-full items-center">
            <TextField
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="********"
              fullWidth
            />
            <IconButton onClick={() => setEditingPassword(false)}>
              <DoneIcon />
            </IconButton>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <p>{new Array(password.length || 10).fill("*").join("")}</p>
            <Button
              variant="contained"
              onClick={() => setEditingPassword(true)}
            >
              Edit
            </Button>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="rounded bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold">
              Comfirm password change
            </h2>
            <p>Are you sure you want to change your password?</p>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="mt-4 w-full rounded border px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring"
              placeholder="Enter new password"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowConfirmation(false)}
                className="mr-4 rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400 focus:border-blue-500 focus:outline-none focus:ring"
              >
                cancel
              </button>
              <button
                onClick={handlePasswordChangeConfirmation}
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:border-blue-500 focus:outline-none focus:ring"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      <LoadingButtonProvider
        className="ml-auto w-fit"
        isLoading={isPending && isPendingUpdate}
      >
        <Button onClick={handleSubmit} variant="contained">
          Save
        </Button>
      </LoadingButtonProvider>
    </div>
  );
}
