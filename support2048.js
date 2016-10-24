/**
 * Created by liuyubobobo on 14-4-11.
 * my site: http://www.liuyubobobo.com
 */
//'use strict';
var documentWidth = window.screen.availWidth;
var gridContainerWidth = 0.92 * documentWidth;
var cellSideLength = 0.172 * documentWidth;
var cellSpace = 0.01*documentWidth;

function getPosTop( i , j ){
    return cellSpace + i*( cellSpace + cellSideLength );
}

function getPosLeft( i , j ){
    return cellSpace + j*( cellSpace + cellSideLength );
}

function getNumberBackgroundColor( number ){
    switch( number ){
        case 2:return "#ffffff";break;
        case 4:return "#fff9e7";break;
        case 8:return "#ffffd9";break;
        case 16:return "#ffffcc";break;
        case 32:return "#ffffbf";break;
        case 64:return "#e6fabe";break;
        case 128:return "#ccffcc";break;
        case 256:return "#ccf7bc";break;
        case 512:return "#d9ffb2";break;
        case 1024:return "#c9e5ac";break;
        case 2048:return "#ace5ac";break;
        case 4096:return "#96e1bc";break;
        case 8192:return "#99cccc";break;
        case 16384:return "#739999";break;
    }
}

function getNumberColor( number ){
    if( number > 0 && number <= 8 ){
        return '#fa3232';
    }else if( number > 8 && number <= 64 ){
        return '#d57371';
    }else if( number > 64 && number <= 512 ){
        return '#fa9c38';
    }else if( number > 512 && number <= 4096 ){
        return '#8d5f9e';
    }else if( number >= 8192 ){
        return '#ffffff';
    }
}

function nospace( board ){

    for( var i = 0 ; i < 5 ; i ++ )
        for( var j = 0 ; j < 5 ; j ++ )
            if( board[i][j] == 0 )
                return false;

    return true;
}

function canMoveLeft( board ){

    for( var i = 0 ; i < 5 ; i ++ )
        for( var j = 1; j < 5 ; j ++ )
            if( board[i][j] != 0 )
                if( board[i][j-1] == 0 || board[i][j-1] == board[i][j] )
                    return true;

    return false;
}

function canMoveRight( board ){

    for( var i = 0 ; i < 5 ; i ++ )
        for( var j = 3; j >= 0 ; j -- )
            if( board[i][j] != 0 )
                if( board[i][j+1] == 0 || board[i][j+1] == board[i][j] )
                    return true;

    return false;
}

function canMoveUp( board ){

    for( var j = 0 ; j < 5; j ++ )
        for( var i = 1 ; i < 5 ; i ++ )
            if( board[i][j] != 0 )
                if( board[i-1][j] == 0 || board[i-1][j] == board[i][j] )
                    return true;

    return false;
}

function canMoveDown( board ){

    for( var j = 0 ; j < 5 ; j ++ )
        for( var i = 3 ; i >= 0 ; i -- )
            if( board[i][j] != 0 )
                if( board[i+1][j] == 0 || board[i+1][j] == board[i][j] )
                    return true;

    return false;
}

function noBlockHorizontal( row , col1 , col2 , board ){
    for( var i = col1 + 1 ; i < col2 ; i ++ )
        if( board[row][i] != 0 )
            return false;
    return true;
}

function noBlockVertical( col , row1 , row2 , board ){
    for( var i = row1 + 1 ; i < row2 ; i ++ )
        if( board[i][col] != 0 )
            return false;
    return true;
}

function nomove( board ){
    if( canMoveLeft( board ) ||
        canMoveRight( board ) ||
        canMoveUp( board ) ||
        canMoveDown( board ) )
        return false;

    return true;
}

