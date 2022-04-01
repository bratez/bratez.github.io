(()=> {

    (async () => {
        const rawResponse = await fetch('https://api.instagram.com/oauth/access_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({client_id: '196851232552443', client_secret: '40cd3f4f3b16f62bb778675924834c09', grant_type: 'authorization_code', redirect_uri: 'https://bratez.github.io/', code: 'AQCEywb7vzmIkqtWGZR9FWM4dfn4_DJkZAmonK4l1EiaEdS6E_X4jxdE7fsH2bFOEkUxeoAaQ7T41bIxPiu2Q-AfKj9tN0T04gEBKmTf6dgXKs0UQi1B4CFA_p73ODVqzl-PaoY0HFPMGXXItt9LFnLxum235DY3yAzRlO5bCpfvPV0BjpXf5NIVX4hN__TnF1ShSAFPUJfxVwvNgrIXFDUXzXGufRu9T3Wwz_9KJDvGgQ'})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();
})();