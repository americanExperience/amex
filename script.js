$(document).ready(function(){
  console.log("sadasd");
  var text = "";
  var textBank = [' contributed to productive conversations by clearly expressing well-developed, relevant ideas', ' listened to others ideas with interest, while providing feedback', ' asked probing questions to help clarify ideas', ' responded to different ideas with diplomacy', ' addressed others with respect to their cultural and language background',' worked to resolve conflict through productive discussion', ' shared air time and took care to not interrupt others', ' thoroughly prepared for conversations by researching the topic', ' invited and encouraged others to contribute', ' showed appreciation for positive and constructive feedback', ' had difficulty expressing ideas, but conversations were relevant to the topic', ' listened with partial interest and provided nonverbal feedback', ' asked general questions to clarify understanding', 'addressed others with respect with minor lapses', ' shared air time by allowing others to speak', " can generally describe what constituted as success in the context of the team's task", ' completed individual tasks on time with sufficient quality with prodding and reminding', ' provided intermittent constructive feedback', " devoted time and effort to ensure that the team's benchmarks were met", " can clearly describe what constitutes success in the context of the group's task", ' completed individual tasks on time with sufficient quality', ' provided positive and constructive feedback', ' devoted time and effort required to ensure team benchmarks and due dates were met', ' supported others to complete necessary work',' worked to make sure everyone knew what needed to be done', ' actively encouraged others to attain high levels of achievement', ' can generally describe the short and long term tasks of the team with confusion', " monitors individual progress but is not aware of the team's needs", ' can generally describe what roles and responsibilities of each member of the team', ' can effectively take direction from others but does not play a leadership role', " could clearly describe short and long term tasks of the team's work", " monitored progress of the team's efforts and is aware of team's needs and next steps", " could clearly describe each role and responsibilities of each group member", 'can effectively play leadership roles by managing others and taking direction from others',' worked to ensure all team members understood the long and short term tasks of the group', " provided helpful feedback about team's progress",' selected and leveraged the most applicable protocols for team management'];
  var connectorBank = [' and', ' also',' and also', ' while also', ' while']
  function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}
  $("#genbutton").click(function(){
    $("#output").text($('#name').val())
    var checkarray = (function() {
      let a = [];
      $("input[name='check']:checked").each(function() {
          a.push(this.id);
      });
      return a;
    })()
    for (i = 0; i < checkarray.length; i++) {
      console.log(checkarray[i]);
        if(i < checkarray.length - 1)
        {
          $("#output").text($("#output").text() + textBank[checkarray[i]] + connectorBank[Math.floor(random(0, 5))]);
        }
        else
        {
          $("#output").text($("#output").text() + textBank[checkarray[i]] + '.');
        }
    }
  });
});

