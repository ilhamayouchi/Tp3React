function LecteurAudio() {
  return (
    <div className="carte">
      <p className="eyebrow">Média</p>
      <h3>Lecteur audio</h3>
      <audio controls>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  );
}

export default LecteurAudio;
