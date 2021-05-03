const getBackendStatus = async () => {
  const response = await fetch("/status").then((r) => r.status);
  const el = document.getElementById("backend-status");
  if (!el) return;
  el.innerText = response;
};

window.onload = () => {
  console.log("Loaded!");

  getBackendStatus();
};
