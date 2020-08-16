document.getElementById('btnNavHeader').onclick = function(){
    let headerNav = document.getElementById('headerNav');
    if (headerNav.style.display == 'block') {
        headerNav.style.display = 'none';
    } else {
        headerNav.style.display = 'block';
    }
}

document.getElementById('btnNavFooter').onclick = function(){
    let footerNav = document.getElementById('footerNav');
    if (footerNav.style.display == 'block') {
        footerNav.style.display = 'none';
    } else {
        footerNav.style.display = 'block';
    }
}