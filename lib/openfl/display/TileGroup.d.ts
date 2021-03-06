import Tile from "./Tile";
import Tileset from "./Tileset";


declare namespace openfl.display {
	
	
	export class TileGroup extends Tile {
		
		
		public readonly numTiles:number;
		
		public constructor (x?:number, y?:number, scaleX?:number, scaleY?:number, rotation?:number);
		
		public addTile (tile:Tile):Tile;
		public addTiles (tiles:Array<Tile>):Array<Tile>;
		public addTileAt (tile:Tile, index:number):Tile;
		public contains (tile:Tile):boolean;
		public copyFrom (other:TileGroup):void;
		public getTileAt (index:number):Tile;
		public getTileIndex (tile:Tile):number;
		public removeTile (tile:Tile):Tile;
		public removeTileAt (index:number):Tile;
		public removeTiles (beginIndex?:number, endIndex?:number):void;
		
		
	}
	
	
}


export default openfl.display.TileGroup;