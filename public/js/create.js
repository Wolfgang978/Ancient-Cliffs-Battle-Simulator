const charButton = document.querySelector('.charButton');

const newCharHandler = async (event) => {
    event.preventDefault();
  
    const charName = document.querySelector('#charName').value;
    const charClass = document.querySelector('#charClass').value;
    const charItem = document.querySelector('#charItem').value;
    const description = document.querySelector('#description').value;
    const strength = document.querySelector('#strength').value;
    const dexterity = document.querySelector('#dexterity').value;
    const hitpoints = document.querySelector('#hitpoints').value;
    const armorClass = document.querySelector('#armorClass').value;

    const response = await fetch(`/api/create`, {
        method: 'POST',
        body: JSON.stringify({
          charName,
          charClass,
          charItem,
          description,
          strength,
          dexterity,
          hitpoints,
          armorClass

        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        document.location.replace('characters');
      } else {
        alert('Failed to create Character. Check input values');
      }
    }


      charButton.addEventListener("click", newCharHandler);