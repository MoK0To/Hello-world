// ��������� ��������� �������� �������

Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");

BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");

BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");

Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");

Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");

Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");

Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");



// ������ ��������� ������ ��� �����

BreackGraph.BreackAll = true;

// ���������� ���������� ������

Ui.GetContext().QuadsCount.Value = true;

// ��� ������������ �����

Build.GetContext().Pipette.Value = true;

Build.GetContext().BalkLenChange.Value = true;

Build.GetContext().SetSkyEnable.Value = true;

Build.GetContext().GenMapEnable.Value = true;

Build.GetContext().ChangeCameraPointsEnable.Value = true;

Build.GetContext().QuadChangeEnable.Value = true;

Build.GetContext().BuildModeEnable.Value = true;

Build.GetContext().CollapseChangeEnable.Value = true;

Build.GetContext().RenameMapEnable.Value = true;

Build.GetContext().ChangeMapAuthorsEnable.Value = true;

Build.GetContext().LoadMapEnable.Value = true;

Build.GetContext().ChangeSpawnsEnable.Value = true;



// ��������� ����

Properties.GetContext().GameModeName.Value = "GameModes/Peace";

// ������� �������

red = GameMode.Parameters.GetBool("RedTeam");

blue = GameMode.Parameters.GetBool("BlueTeam");

if (red || !red && !blue) {

	Teams.Add("Red", "Green", { g: 1 });

	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);

}

if (blue || !red && !blue) {

	Teams.Add("Blue", "Blue", { b: 1 });

	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);

	if(GameMode.Parameters.GetBool("BlueHasNothing")){

		var inventory = Inventory.GetContext();

		Teams.Get("Blue").Inventory.Main.Value = false;

		Teams.Get("Blue").Inventory.Secondary.Value = false;

		Teams.Get("Blue").Inventory.Melee.Value = false;

		Teams.Get("Blue").Inventory.Explosive.Value = false;

		Teams.Get("Blue").Inventory.Build.Value = false;

	}

}



// ��������� ���� � ������� �� �������

Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});

// ����� �� ����� � �������

Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});



// ������ ���������

Ui.getContext().Hint.Value = "АТАКУЙ ПРОТИВНИКА";



// ������������ ���������

var inventory = Inventory.GetContext();

inventory.Main.Value = true;

inventory.Secondary.Value = true;

inventory.Melee.Value = false;

inventory.Explosive.Value = true;

inventory.Build.Value = false;

inventory.BuildInfinity.Value = true;

inventory.MainInfinity.Value = true;

inventory.SecondaryInfinity.Value = true;





// ��������� ��� ������ �����

Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;



// ������������ �����

Spawns.GetContext().RespawnTime.Value = 5;







// делаем игроков неуязвимыми после спавна

var immortalityTimerName="immortality";

Spawns.GetContext().OnSpawn.Add(function(player){

	player.Properties.Immortality.Value=true;

	timer=player.Timers.Get(immortalityTimerName).Restart(5);

});

Timers.OnPlayerTimer.Add(function(timer){

	if(timer.Id!=immortalityTimerName) return;

	timer.Player.Properties.Immortality.Value=false;

});





// админка

Teams.OnRequestJoinTeam.Add(function(player,team){if(player.id == "D78607965A363E33"){ 

player.inventory.Explosive.Value = true; 

player.inventory.ExplosiveInfinity.Value = true; 

player.inventory.Main.Value = true; 

player.inventory.MainInfinity.Value = true; 

player.inventory.Secondary.Value = true 

player.inventory.SecondaryInfinity.Value = true; 

player.inventory.Melee.Value = true; 

player.inventory.Build.Value = true; 

player.inventory.BuildInfinity.Value = true; 

player.Build.BuildModeEnable.Value = true; 

player.Build.Pipette.Value = true; 

player.Build.BuildRangeEnable.Value = true; 

player.Build.FlyEnable.Value = true; 

player.Build.FillQuad.Value = true; 

player.Damage.DamageIn.Value = false; 

} 

});



// пвп зона

var pvp = AreaPlayerTriggerService.Get("pvp") 

pvp.Tags = ["pvp"];   

pvp.Enable = true;   

pvp.OnEnter.Add(function(player) { 

player.inventory.Melee.Value = true; 

player.Ui.Hint.Value = "на лопатку!"; 

Damage.GetContext(player).DamageIn.Value = true; 



} 



); 

pvp.OnExit.Add(function(player) {  

player.inventory.Melee.Value = false; 

player.Ui.Hint.Value = "отдай лопатку!"; 

Damage.GetContext(player).DamageIn.Value = true; 



} 



); 



var portTrigger = AreaPlayerTriggerService.Get("fal") 

portTrigger.Tags = ["fal"];   

portTrigger.Enable = true;   

portTrigger.OnEnter.Add(function(player) {   

if(player.Team !== Teams.Get("Blue")){ 

Teams.Get("Blue").Add(player); 

player.Ui.Hint.Value = "ты в лобби"; 

}else{ 

Teams.Get("Green").Add(player); 

} 

});





// адм зона

var ppTrigger =  AreaPlayerTriggerService.Get("ppTrigger"); 

ppTrigger.Tags = ["pp"];

player.Ui.Hint.Value = "на админку"; 

ppTrigger.Enable = true; 

ppTrigger.OnEnter.Add(function(player){ 

player.inventory.Explosive.Value = true; 

player.inventory.ExplosiveInfinity.Value = true; 

player.inventory.Main.Value = true; 

player.inventory.MainInfinity.Value = true; 

player.inventory.Secondary.Value = true 

player.inventory.SecondaryInfinity.Value = true; 

player.inventory.Melee.Value = true; 

player.inventory.Build.Value = true; 

player.inventory.BuildInfinity.Value = true; 

player.Build.BuildModeEnable.Value = true; 

player.Build.Pipette.Value = true; 

player.Build.BuildRangeEnable.Value = true; 

player.Build.FlyEnable.Value = true; 

player.Build.FillQuad.Value = true; 

} 

);
